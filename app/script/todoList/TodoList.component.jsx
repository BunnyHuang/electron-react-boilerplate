import React from 'react';
import classNames from "classnames"
import moment from "moment";

class TodoItem extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleDelete = itemId => {
        this.props.handleDelete(itemId);
    };

    handleCompleted = itemId => {
        this.props.handleCompleted(itemId);
    };

    render() {
        return (
            <div className="row ml-0">
                <div className="col-1">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={this.props.item.isCompleted}
                        onChange={() => this.handleCompleted(this.props.item.id)}
                    />
                </div>
                <div className="col-4">{this.props.item.text}</div>
                <div className="col-5">{this.props.item.createDate}</div>
                <div className="col-1">
                    <button
                        className="btn btn-sm btn-light"
                        type="button"
                        onClick={() => this.handleDelete(this.props.item.id)}
                    >
                        delete
          </button>
                </div>
            </div>
        );
    }
}

class TodoFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleFilterType = type => {
        this.props.handleFilterType(type);
    };

    render() {
        return (
            <div className="align-center">
                <div className="btn-group">
                    <button
                        className={classNames("btn btn-sm btn-secondary", {
                            inactive: this.props.filterType === this.props.filterTypeEnum.all
                        })}
                        type="button"
                        onClick={this.handleFilterType.bind(
                            this,
                            this.props.filterTypeEnum.all
                        )}
                    >
                        全部
                    </button>
                    <button
                        className={classNames("btn btn-sm btn-secondary", {
                            inactive:
                                this.props.filterType === this.props.filterTypeEnum.complete
                        })}
                        type="button"
                        onClick={this.handleFilterType.bind(
                            this,
                            this.props.filterTypeEnum.complete
                        )}
                    >
                        已完成
                    </button>
                    <button
                        className={classNames("btn btn-sm btn-secondary", {
                            inactive:
                                this.props.filterType === this.props.filterTypeEnum.incomplete
                        })}
                        type="button"
                        onClick={this.handleFilterType.bind(
                            this,
                            this.props.filterTypeEnum.incomplete
                        )}
                    >
                        未完成
                    </button>
                </div>
            </div>
        );
    }
}

TodoItem.defaultProps = {
    item: {
        id: 1,
        text: "test",
        createDate: moment().format("YYYY-MM-DD  HH:mm:ss"),
        isCompleted: false
    }
};

TodoFilter.defaultProps = {
    filterType: "show_all",
    filterTypeEnum: {
        all: "all",
        complete: "complete",
        incomplete: "incomplete"
    }
};


export { TodoItem, TodoFilter };