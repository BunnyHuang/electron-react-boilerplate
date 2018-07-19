import React from 'react';
import moment from 'moment';
import classNames from 'classnames';
import _ from 'lodash';

class InputDate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input type="text" readOnly value={this.props.selectedDate} />
            </div>
        );
    }
}

class SelectDate extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChangeMonth = number => {
        let newDate = moment(this.props.selectedDate).add(number, 'month');

        this.props.handleChangeDate(newDate);
    };

    handleChangeDay = newDay => {
        if (newDay > 0 && newDay <= moment(this.props.selectedDate, "YYYY-MM").daysInMonth()){
            let newDate = new Date(moment(this.props.selectedDate).year(), moment(this.props.selectedDate).month(), newDay);

            this.props.handleChangeDate(newDate);
        }
    };

    render() {

        const year = moment(this.props.selectedDate).year();
        const month = moment(this.props.selectedDate).month() + 1;
        const day = moment(this.props.selectedDate).date();
        const daysInMonth = moment(this.props.selectedDate, "YYYY-MM").daysInMonth();
        const firstDayInWeek = parseInt(moment(this.props.selectedDate).startOf('month').format('e'));
        const weekCount = (daysInMonth + firstDayInWeek - 1) / 7;

        console.log(daysInMonth);
        return (
            <div>
                <div>
                    <i className="fa fa-arrow-left" onClick={() => this.handleChangeMonth(-1)}></i>
                    <span>
                        {year} 年 {month} 月
                    </span>
                    <i className="fa fa-arrow-right" onClick={() => this.handleChangeMonth(1)}></i>
                </div>
                <div>
                    <div className="week">
                        <div className="unselected">日</div>
                        <div className="unselected">一</div>
                        <div className="unselected">二</div>
                        <div className="unselected">三</div>
                        <div className="unselected">四</div>
                        <div className="unselected">五</div>
                        <div className="unselected">六</div>
                    </div>
                    {
                        _.map(_.range(0, weekCount), (w) => {
                            
                            return (
                                <div className="week">
                                    {
                                        _.map(_.range(1 - firstDayInWeek + w * 7, 1 - firstDayInWeek + 7 + w * 7), (d) => {
                                            
                                            return (
                                                <div key={`item${d}`}
                                                    className={classNames({ "selected": day === d }, { "unselected": day !== d })}
                                                    onClick={() => this.handleChangeDay(d)}
                                                >
                                                    {d > 0 && d <= daysInMonth ? d : ""}
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            );
                        })
                    }
                </div>
            </div >
        );
    }
}

InputDate.defaultProps = {
    selectedDate: moment().format('YYYY-MM-DD')
}

SelectDate.defaultProps = {
    selectedDate: moment().format('YYYY-MM-DD')
}

export { InputDate, SelectDate };