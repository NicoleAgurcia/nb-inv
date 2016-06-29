//react
import React from 'react';
import { Link } from 'react-router';

//redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//Inventory
import InventoryTable from '../components/InventoryTable'
import * as InventoryActions from '../actions/inventory';

class InventoryPage extends React.Component {
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
            <InventoryTable {...this.props}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.inventory
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(InventoryActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InventoryPage);