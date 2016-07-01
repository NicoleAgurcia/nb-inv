//react
import React from 'react';

//material-ui
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';

import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import {blue500} from 'material-ui/styles/colors';

import  InventoryRow from './InventoryRow';

const mapRow = (product, props) => (<InventoryRow {...Object.assign({},product, props)}/>)

const tableStyle = { "width" : "50rem" }
const paperStyle = { "padding" : "1rem 0rem" }
let centered = {"textAlign": "center"}
let bottomMargin = {marginBottom: "2.5rem"}
let inspectDialogStyle = {
  width: '40rem',
  maxWidth: 'none',
  textAlign: "left",
  marginBottom: "5rem"
};
let bold = {
	fontWeight: "bold"
}

export default class InventoryTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {fresh, fetchProducts, products, openInspectDialog, closeInspectDialog, inspect, focused} = this.props;
    if(!fresh)
    	fetchProducts();

    console.log(focused, 'focused');

    return (
      <Paper className="paper" zDepth={3} style = {paperStyle}>
			<Table height={'50rem'} showRowHover={true} displayRowCheckbox={true} className="inventory-table">
				<TableHeader>
					<TableRow>
						<TableHeaderColumn>Nombre</TableHeaderColumn>
						<TableHeaderColumn style={centered}>Categoria</TableHeaderColumn>
						<TableHeaderColumn style={centered}>Cantidad</TableHeaderColumn>
						<TableHeaderColumn style={centered}>Precio Maximo</TableHeaderColumn>
					    <TableHeaderColumn>Modificar</TableHeaderColumn>
					    <TableHeaderColumn>Remover</TableHeaderColumn>
					    <TableHeaderColumn>Inspeccionar</TableHeaderColumn>
					</TableRow>

				</TableHeader>
				<TableBody showRowHover={true}>
					{products.map( product => mapRow(product, {openInspectDialog, closeInspectDialog}))}
				</TableBody>
			</Table>

		    <Dialog
		      className="dialog inspect"
		      contentStyle = {Object.assign({}, centered, inspectDialogStyle)}
	          modal={false}
	          open={inspect}
	          onRequestClose={closeInspectDialog}
            >
	            <div>
	            	<h1 style={Object.assign({}, bold, centered, bottomMargin)}>{focused.name}</h1>
	                <ul>
		               	<li style={Object.assign({}, bottomMargin, bold)}>
		               	   <b>Categoria</b> : <span>{focused.category}</span>
		               	</li>
						<li style={Object.assign({}, bottomMargin, bold)}>
		               	   <b>Cantidad</b> : <span>{focused.quantity}</span>
		               	</li>
		               	<li style={Object.assign({}, bottomMargin, bold)}>
		               	   <strong>Precio Minimo</strong> : <span>{focused.minPrice}</span>
		               	</li>
		               	<li style={Object.assign({}, bold)}>
		               	   <b>Precio Maximo</b> : <span>{focused.maxPrice}</span>
		               	</li>
	                </ul>
	            </div>
            </Dialog>
      </Paper>
    );
  }
}
