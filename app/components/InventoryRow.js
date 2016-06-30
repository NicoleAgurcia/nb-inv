//react
import React from 'react';

//material-ui
import {TableRow, TableRowColumn} from 'material-ui/Table';
import Dialog from 'material-ui/Dialog';

import {blue500} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

export default class InventoryTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {name, category, quantity, maxPrice} = this.props;
    return (
      <TableRow>
		    <TableRowColumn>{name}</TableRowColumn>
	        <TableRowColumn>{category}</TableRowColumn>
	        <TableRowColumn>{quantity}</TableRowColumn>
	        <TableRowColumn>{maxPrice}</TableRowColumn>
	        <TableRowColumn>
	   			<IconButton>
	        	   	<FontIcon className="fa fa-pencil"  hoverColor={blue500}/>
	        	</IconButton>
	        </TableRowColumn>
	        <TableRowColumn>
	   			<IconButton>
	        	   	<FontIcon className="fa fa-times"  hoverColor={blue500}/>
	        	</IconButton>
	        </TableRowColumn>
	        <TableRowColumn>
	            		<IconButton >
		    	<FontIcon className="fa fa-search"  hoverColor={blue500}/>
		    </IconButton>
	        </TableRowColumn>
		</TableRow>
    );
  }
}
