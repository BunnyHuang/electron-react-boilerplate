// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../scss/Home.scss';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link><br/>
          <Link to="/Login">to Login</Link><br/>
          <Link to="/todoList">to TodoList</Link>
        </div>
      </div>
    );
  }
}
