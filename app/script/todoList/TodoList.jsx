import React from 'react';
import {TodoItem} from './TodoList.component';
import _ from 'lodash';

class TodoList extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            items: [{content: 'abc', id: 0}, {content: 'efg', id: 1}],
            checked: [0]
        };
    }

    handleSomething () {

        let element =this[`item${index}`];
        element.value

    }

    render () {
        return (
            <section>
                <h1>{this.props.title}</h1>
                <input />
                <div>
                    {_.map(this.state.items, (item, index) => 
                        <TodoItem content={item.content} 
                                  ref={(item) => this[`item${index}`] = item} 
                                  isChecked={_.has(this.state.checked, item.id)} />)
                    }
                </div>
            </section>
        );
    }
}

TodoList.defaultProps = {
    title: 'React Todo'
};

export default TodoList;