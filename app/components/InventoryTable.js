import React from 'react';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Paper from 'material-ui/Paper';


const tableStyle = {
	"width" : "30rem"
}

const paperStyle = {
	"padding" : "1rem 0rem"
}

const data = {
	"products" :[
		{
			"name": "Hammer of Thor",
			"category": "Godly",
			"quantity": 1,
			"maxPrice": "500$"
		},
		{
			"name": "Hammer of Thor",
			"category": "Godly",
			"quantity": 1,
			"maxPrice": "500$"
		},
		{
			"name": "Hydra Shield",
			"category": "UNGH",
			"quantity": 1,
			"maxPrice": "300$"
		},
		{
			"name": "Hammer of Thor",
			"category": "Godly",
			"quantity": 1,
			"maxPrice": "500$"
		},
		{
			"name": "Hydra Shield",
			"category": "UNGH",
			"quantity": 1,
			"maxPrice": "300$"
		},
		{
			"name": "Hammer of Thor",
			"category": "Godly",
			"quantity": 1,
			"maxPrice": "500$"
		},
		{
			"name": "Hydra Shield",
			"category": "UNGH",
			"quantity": 1,
			"maxPrice": "300$"
		},
		{
			"name": "Hammer of Thor",
			"category": "Godly",
			"quantity": 1,
			"maxPrice": "500$"
		},
		{
			"name": "Hydra Shield",
			"category": "UNGH",
			"quantity": 1,
			"maxPrice": "300$"
		},
		{
			"name": "Iron Suit",
			"category": "Stark",
			"quantity": 1,
			"maxPrice": "200$"
		}
	]
}

// const Product  =  ({
// 	name = "default",
// 	quantity = 0,
// 	maxPrice = 0,
// 	category = "default"
// }) => (

// );

export default class InventoryTable extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Paper className="paper" zDepth={3} style = {paperStyle}>
			<Table height={30 * data.products.length}>
				<TableHeader>
					<TableRow>
						<TableHeaderColumn>Nombre</TableHeaderColumn>
						<TableHeaderColumn>Categoria</TableHeaderColumn>
						<TableHeaderColumn>Cantidad</TableHeaderColumn>
						<TableHeaderColumn>Precio Maximo</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody showRowHover={true}>
					{data.products.map((product => (
						<TableRow>
					        <TableRowColumn>{product.name}</TableRowColumn>
					        <TableRowColumn>{product.category}</TableRowColumn>
					        <TableRowColumn>{product.quantity}</TableRowColumn>
					        <TableRowColumn>{product.maxPrice}</TableRowColumn>
						</TableRow>
					)))}
				</TableBody>
			</Table>
      </Paper>
    );
  }
}


