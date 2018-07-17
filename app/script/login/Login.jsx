import React from "react"
import { Link } from 'react-router-dom';
import classNames from "classnames"
import styles from '../../scss/Counter.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validEmail: true
        };
    }

    verifyEmail = () => {
        if (this.inputEmail.value !== "") {
            if (
                !/^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    this.inputEmail.value
                )
            ) {
                this.setState({ validEmail: false });
            } else {
                this.setState({ validEmail: true });
            }
        }
    };

    render() {
        return (
            <div className="container">
                <div className="row py-1">
                    <div className="col-1">
                        <span>帳號</span>
                    </div>
                    <div>
                        <input
                            className="form-control ml"
                            onBlur={this.verifyEmail}
                            ref={input => (this.inputEmail = input)}
                        />
                        <div
                            className={classNames(
                                { hide: this.state.validEmail },
                                { show: !this.state.validEmail }
                            )}
                        >
                            Please enter a valid email address.
                        </div>
                    </div>
                    <br />
                </div>
                <div className="row py-1">
                    <div className="col-1">
                        <span>密碼</span>
                    </div>
                    <div>
                        <input type="password" className="form-control" name="password" />
                    </div>
                </div>
                <div className="row py-1">
                    <div>
                        <button
                            type="button"
                            className="btn"
                        >
                            Login
                        </button>
                    </div>
                </div>
                <div className={styles.backButton} data-tid="backButton">
                    <Link to="/">
                        <i className="fa fa-arrow-left fa-3x" />
                    </Link>
                </div>
            </div>
        );
    }
}

export default Login;