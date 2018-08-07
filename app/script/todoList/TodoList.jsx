import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { TodoItem, TodoFilter } from './TodoList.component';
import styles from '../../scss/Counter.scss';

import _ from 'lodash';

class TodoList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            filterType: this.filterTypeEnum.all,
            itemsIndex: 1,
            items: []
        };
    }

    filterTypeEnum = {
        all: 'all',
        complete: 'complete',
        incomplete: 'incomplete'
    };

    handleAdd = event => {
        if (this.inputItem.value !== '') {
            let item = {
                id: this.state.itemsIndex,
                text: this.inputItem.value,
                createDate: moment().format('YYYY-MM-DD HH:mm:ss'),
                isCompleted: false
            };

            let items = Object.assign([], this.state.items);
            items.push(item);

            this.setState({ items: items });
            this.setState({ itemsIndex: this.state.itemsIndex + 1 });
            this.inputItem.value = '';
        }
    };

    handleDelete = itemId => {
        this.setState({
            items: this.state.items.filter(items => items.id !== itemId)
        });
    };

    handleCompleted = itemId => {
        let items = Object.assign([], this.state.items);
        let index = items.findIndex(items => items.id === itemId);
        items[index].isCompleted = !items[index].isCompleted;

        this.setState({ items: items });
    };

    handleFilterType = type => {
        this.setState({ filterType: type });
    };

    GetFilterItems = () => {
        let filterItems = Object.assign([], this.state.items);

        if (this.state.filterType === this.filterTypeEnum.complete) {
            filterItems = this.state.items.filter(
                items => items.isCompleted === true
            );
        } else if (this.state.filterType === this.filterTypeEnum.incomplete) {
            filterItems = this.state.items.filter(
                items => items.isCompleted === false
            );
        }
        return filterItems;
    };

    render() {
        const filterItems = this.GetFilterItems();

        return (
            <div className="container todos">
                <h3>我的待辦清單</h3>
                <input
                    type="text"
                    className="form-control"
                    placeholder="加入一個新工作"
                    onBlur={this.handleAdd}
                    ref={input => (this.inputItem = input)}
                />
                <div className="todo-list">
                    <ul className="list-group">
                        {filterItems.map(item => (
                            <li className="list-group-item" key={`item${item.id}`}>
                                <TodoItem key={`item${item.id}`}
                                    item={item}
                                    handleDelete={id => this.handleDelete(id)}
                                    handleCompleted={id => this.handleCompleted(id)}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <TodoFilter
                    filterType={this.state.filterType}
                    filterTypeEnum={this.filterTypeEnum}
                    handleFilterType={this.handleFilterType}
                />
                <div className={styles.backButton} data-tid="backButton">
                    <Link to="/">
                        <i className="fa fa-arrow-left fa-3x" />
                    </Link>
                </div>
            </div>
        );
    }
}

TodoList.defaultProps = {
    title: 'React Todo'
};

export default TodoList;