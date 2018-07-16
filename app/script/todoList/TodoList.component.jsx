import React from 'react';

class TodoItem extends React.PureComponent {
    constructor(props) {
        super(props)
        this.value =  this.input;
    }


    handleClick = () => {
        this.value =  this.input.value;
    }

    render () {
        return (<div>
            <input type="checkbox" value={this.props.id} checked={this.props.isChecked} ref={(item)=> this.input = item} />
            <span>{this.props.content}</span>
            <span> <button type="button">Delete</button></span>
        </div>);
    }

}

TodoItem.defaultProps = {
    content: '',
    isChecked: '',
    id: 0
}

export {TodoItem};