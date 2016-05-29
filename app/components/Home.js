import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
          <br/>
          <Link to="/login">to Login</Link>
          <br/>
          <Link to="/inventory">to Inventory</Link>
        </div>
      </div>
    );
  }
}
