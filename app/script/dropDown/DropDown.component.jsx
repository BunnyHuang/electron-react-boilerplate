import React from 'react';
import _ from 'lodash';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: ''
        }
        console.log('!11111111111111111111');
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = event => {
        if (this.el && !this.el.contains(event.target)) {
            this.props.handleIsOpen(false);

            document.removeEventListener('mousedown', this.handleClickOutside);
        }
    };

    handleSelected = selectedId => {
        this.props.handleIsOpen(false);
        this.props.handleSelected(selectedId);

        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleSearch = () => {
        this.setState({ filter: this.inputSearch.value });
    }

    render() {

        let show = this.props.items;
        if (this.state.filter !== '') {
            const filter = this.state.filter;

            show = _.filter(this.props.items, function (o) {
                return o.value.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
            });
        }

        return (

            <div
                className="dropdown-menu"
                ref={el => (this.el = el)}
            >
                <input
                    className="dropdown-search"
                    type="text"
                    placeholder="search..."
                    onKeyUp={() => this.handleSearch()}
                    ref={input => (this.inputSearch = input)}
                />
                {
                    _.size(show) > 0 ? (
                        _.map(show, item => {
                            return (
                                <div key={`item${item.id}`}
                                    className="dropdown-item"
                                    onClick={() => this.handleSelected(item.id)}
                                >
                                    {item.value}
                                </div>
                            );
                        })
                    ) : (
                            <div>No options</div>
                        )
                }
            </div>
        );
    }
}

Menu.defaultProps = {
    selectedId: '',
    items: [
        { id: '1', value: 'A' },
        { id: '2', value: 'B' },
        { id: '3', value: 'C' },
        { id: '4', value: 'D' },
        { id: '5', value: 'EE' }
    ]
};


export { Menu };