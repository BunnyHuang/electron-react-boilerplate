import React from 'react';
import moment from 'moment';
import classNames from 'classnames';
import { InputDate, SelectDate } from './DatePicker.component';


class DatePicker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            calendarActive: false,
            firstMonth: moment().format('YYYY-MM-DD'),
            startDate: '',
            endDate: ''
        }
    }

    handleChangeFirstMonth = newFirstMonth => {
        this.setState({ firstMonth: moment(newFirstMonth).format('YYYY-MM') });
    };

    handleCalendarActive = active => {
        this.setState({ calendarActive: active });
    }

    handleChange = newDate => {
        if (this.state.startDate === '' || (this.state.startDate !== '' && this.state.endDate !== '')) {
            this.setState({ startDate: moment(newDate).format('YYYY-MM-DD') });
            this.setState({ endDate: '' });
        }
        else {
            if (newDate <= this.state.startDate) {
                this.setState({ startDate: moment(newDate).format('YYYY-MM-DD') });
            }
            else {
                this.setState({ calendarActive: false });
                this.setState({ endDate: moment(newDate).format('YYYY-MM-DD') });
            }
        }
    };

    render() {
        return (
            <div onFocus={() => this.handleCalendarActive(true)} >
                <InputDate
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                />
                {this.state.calendarActive &&
                    <SelectDate
                        firstMonth={this.state.firstMonth}
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        handleCalendarActive={active => this.handleCalendarActive(active)}
                        handleChangeFirstMonth={newDate => this.handleChangeFirstMonth(newDate)}
                        handleChange={newDate => this.handleChange(newDate)}
                    />
                }
            </div>
        );
    }
}

export default DatePicker;