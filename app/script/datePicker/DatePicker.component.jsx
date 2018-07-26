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
                <input type="text" value={this.props.startDate} placeholder="StartDate" />
                <input type="text" value={this.props.endDate} placeholder="EndDate" />
            </div>
        );
    }
}

class SelectDate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tempEndDate: ''
        }
    }

    handleMouseOver = tempEndDate => {
        if (this.props.startDate === "" && this.props.endDate === "") {
            this.setState({ tempEndDate: tempEndDate });
        }

        if (this.props.startDate !== "" && this.props.endDate === "") {
            this.setState({ tempEndDate: tempEndDate });
        }
    }

    handleMouseLeave = () => {
        this.setState({ tempEndDate: '' });
    }

    handleCalendarActive = active => {
        this.props.handleCalendarActive(active);
    }

    handleChangeFirstMonth = number => {
        let newFirstMonth = moment(this.props.firstMonth).add(number, 'month');

        this.props.handleChangeFirstMonth(newFirstMonth);
    };

    handleChange = (newDate) => {
        this.props.handleChange(moment(newDate).format('YYYY-MM-DD'));
    };

    handleIsInSelectedRange = date => {

        const startDate = this.props.startDate;
        const endDate = this.props.endDate !== '' ? this.props.endDate : this.state.tempEndDate;

        if (startDate !== "" && endDate !== "") {
            return date >= this.props.startDate && date <= endDate;
        }
        else if (startDate !== "") {
            return date === this.props.startDate;
        }
        else {
            return false;
        }
    };

    handleIsInToday = date => {
        if (date === moment().format('YYYY-MM-DD'))
            return true;
        else
            return false;
    };

    componentDidMount(){
        document.addEventListener('mousedown', this.handleClickOutside);
    }
    
    handleClickOutside = event => {
        if (this.el && !this.el.contains(event.target)) {
            this.handleCalendarActive(false);

            document.removeEventListener('mousedown', this.handleClickOutside);
        }
    };
    
    render() {

        return (
            <div className="calendar" ref={el => (this.el = el)}>
                {
                    _.map(_.range(0, 2), (m) => {
                        const viewDate = moment(this.props.firstMonth).add(m, 'month');
                        const daysInMonth = moment(viewDate).daysInMonth();
                        const firstDayInWeek = parseInt(moment(viewDate).startOf('month').format('e'));
                        const weekCount = (daysInMonth + firstDayInWeek) / 7;

                        let isFirstMonth = true;
                        if (m !== 0) isFirstMonth = false;

                        return (
                            <div className="month" key={`month${m}`}>
                                <i
                                    className={classNames("fa fa-arrow-left", { "hide": !isFirstMonth })}
                                    onClick={() => this.handleChangeFirstMonth(-1)}
                                />
                                <span className="head">{moment(viewDate).year()} 年 {moment(viewDate).month() + 1} 月</span>
                                <i
                                    className={classNames("fa fa-arrow-right", { "hide": isFirstMonth })}
                                    onClick={() => this.handleChangeFirstMonth(1)}
                                />

                                <div className="week-head">
                                    <div className="day">日</div>
                                    <div className="day">一</div>
                                    <div className="day">二</div>
                                    <div className="day">三</div>
                                    <div className="day">四</div>
                                    <div className="day">五</div>
                                    <div className="day">六</div>
                                </div>
                                {
                                    _.map(_.range(0, weekCount), (w) => {

                                        return (
                                            <div className="week" key={`week${w}`}>
                                                {
                                                    _.map(_.range(1 - firstDayInWeek + w * 7, 1 - firstDayInWeek + 7 + w * 7), (d) => {
                                                        const date = moment(new Date(moment(viewDate).year(), moment(viewDate).month(), d)).format('YYYY-MM-DD');

                                                        if (d > 0 && d <= daysInMonth) {
                                                            return (
                                                                <div key={`day${d}`}
                                                                    className={classNames('day',
                                                                        { "today": this.handleIsInToday(date) },
                                                                        { "selected": this.handleIsInSelectedRange(date) })}
                                                                    onClick={() => this.handleChange(date)}
                                                                    onMouseOver={() => this.handleMouseOver(date)}
                                                                    onMouseLeave={() => this.handleMouseLeave()}
                                                                >
                                                                    {moment(date).date()}
                                                                </div>
                                                            );
                                                        }
                                                        else {
                                                            return (
                                                                <div key={`day${d}`} className="other-month"></div>
                                                            );
                                                        }
                                                    })
                                                }
                                            </div>
                                        );
                                    })
                                }
                            </div >
                        )
                    })
                }
            </div>
        );
    }
}

InputDate.defaultProps = {
    startDate: '',
    endDate: ''
}

SelectDate.defaultProps = {
    calendarActive: false,
    firstMonth: moment().format('YYYY-MM'),
    startDate: '',
    endDate: ''
}

export { InputDate, SelectDate };