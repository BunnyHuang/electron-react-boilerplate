import React from 'react';
import moment from 'moment';
import classNames from 'classnames';
import { Menu } from './DropDown.component';


class DropDown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            selected: {
                id: '',
                value: ''
            },
            items: [
                { id: '1', value: 'A' },
                { id: '2', value: 'B' },
                { id: '3', value: 'C' },
                { id: '4', value: 'D' },
                { id: '5', value: 'E' },
                { id: '6', value: 'EE' },
                { id: '7', value: 'E' },
                { id: '8', value: 'E' },
                { id: '9', value: 'E' }
            ],
        }
    }

    componentDidUpdate() {

    }

    handleIsOpen = isOpen => {
        console.log('handleIsOpen - ' + this.state.isOpen);
        this.setState({ isOpen: isOpen });
    }

    handleSelected = selectedId => {
        this.setState({ selected: _.find(this.state.items, { 'id': selectedId }) });
    }

    render() {
        return (
            <div>
                <div
                    className="dropdownp-picker"
                    onClick={() => this.handleIsOpen(!this.state.isOpen)}
                >
                    <span>{this.state.selected.value !== '' ? this.state.selected.value : 'select...'}</span>
                    <i className="fa fa-angle-down" />
                </div>
                {
                    this.state.isOpen &&
                    <Menu
                        isOpen={this.state.isOpen}
                        items={this.state.items}
                        selectedId={this.state.selected.id}
                        handleSelected={selectedId => this.handleSelected(selectedId)}
                        handleIsOpen={isOpen => this.handleIsOpen(isOpen)}
                    />
                }
            </div>
        );
    }
}

export default DropDown;