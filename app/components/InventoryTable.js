//react
import React from 'react';

//material-ui
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const tableStyle = { "width" : "30rem" }
const paperStyle = { "padding" : "1rem 0rem" }

const Product  = (product) => (
	<TableRow>
	    <TableRowColumn>{product.name}</TableRowColumn>
        <TableRowColumn>{product.category}</TableRowColumn>
        <TableRowColumn>{product.quantity}</TableRowColumn>
        <TableRowColumn>{product.maxPrice}</TableRowColumn>
	</TableRow>
);

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
					</TableRow>
				</TableHeader>
				<TableBody showRowHover={true}>
					{products.map(Product)}
				</TableBody>
			</Table>
      </Paper>
    );
  }
}
