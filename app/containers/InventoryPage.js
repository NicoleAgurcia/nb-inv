import React from 'react';

export default class InventoryPage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="inventory-page">
      		THIS IS INVENTORY PAGE
      </div>
    );
  }
}
