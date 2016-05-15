import React, { Component, PropTypes } from 'react';
import style from '../assets/master.scss';
export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        {this.props.children}
        {
          (() => {
            if (process.env.NODE_ENV !== 'production') {
              const DevTools = require('./DevTools'); // eslint-disable-line global-require
              return <DevTools />;
            }
          })()
        }
      </div>
    );
  }
}
