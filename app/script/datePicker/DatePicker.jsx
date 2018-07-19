import React from 'react';
import moment from 'moment';
import { InputDate, SelectDate } from './DatePicker.component';


class DatePicker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDate: moment().format('YYYY-MM-DD')
        }
    }

    handleChangeDate = newDate => {
        this.setState({ selectedDate: moment(newDate).format('YYYY-MM-DD') });
    };

    render() {
        return (
            <div>
                <InputDate
                    selectedDate={this.state.selectedDate}
                />
                <SelectDate
                    selectedDate={this.state.selectedDate}
                    handleChangeDate={newDate => this.handleChangeDate(newDate)}
                />
            </div>
        );
    }
}

export default DatePicker;