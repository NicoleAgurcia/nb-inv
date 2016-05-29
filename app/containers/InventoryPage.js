import React from 'react';
import { Link } from 'react-router';

import InventoryTable from '../components/InventoryTable'

export default class InventoryPage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="inv-page">
        <div className="top" />
        <Link className="pa" to="/">
              <i className="fa fa-arrow-left fa-3x" />
        </Link>
        <div className="inv-wrapper">
            <InventoryTable/>
        </div>
      </div>
    );
  }
}
