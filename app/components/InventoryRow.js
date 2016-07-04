//react
import React from 'react';

//material-ui
import {TableRow, TableRowColumn} from 'material-ui/Table';
import Dialog from 'material-ui/Dialog';

import {blue500} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Checkbox from 'material-ui/Checkbox';

let centered = {"textAlign": "center"}
let checkboxStyle = {"width": "2rem"}

export default class InventoryTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {name, category, quantity, maxPrice, minPrice, ...otherProps, openInspectDialog, closeInspectDialog} = this.props;
    return (
      <TableRow  {...otherProps}>
      		{otherProps.children[0]}
		    <TableRowColumn  >{name}</TableRowColumn>
	        <TableRowColumn  style={centered}>{category}</TableRowColumn>
	        <TableRowColumn  style={centered}>{quantity}</TableRowColumn>
	        <TableRowColumn  style={centered}>{maxPrice}</TableRowColumn>
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
		        <IconButton onMouseUp = {() => openInspectDialog({name,category,quantity,maxPrice, minPrice})}>
			    	<FontIcon className="fa fa-search"  hoverColor={blue500}/>
			    </IconButton>
	        </TableRowColumn>
		</TableRow>
    );
  }
}