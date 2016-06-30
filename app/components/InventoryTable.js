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

const tableStyle = { "width" : "50rem" }
const paperStyle = { "padding" : "1rem 0rem" }

const mapRow = (product) => (<InventoryRow {...product}/>)

export default class InventoryTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {fresh, fetchProducts, products} = this.props;

    if(!fresh)
    	fetchProducts();

    return (
      <Paper className="paper" zDepth={3} style = {paperStyle}>
			<Table height={'50rem'}>
				<TableHeader>
					<TableRow>
						<TableHeaderColumn>Nombre</TableHeaderColumn>
						<TableHeaderColumn>Categoria</TableHeaderColumn>
						<TableHeaderColumn>Cantidad</TableHeaderColumn>
						<TableHeaderColumn>Precio Maximo</TableHeaderColumn>
					    <TableHeaderColumn>Modificar</TableHeaderColumn>
					    <TableHeaderColumn>Remover</TableHeaderColumn>
					    <TableHeaderColumn>Inspeccionar</TableHeaderColumn>
					    <TableHeaderColumn>Dialog</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody showRowHover={true}>
					{products.map(mapRow)}
				</TableBody>
			</Table>
      </Paper>
    );
  }
}
