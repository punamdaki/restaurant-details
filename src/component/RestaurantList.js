import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
//import { Table } from 'react-bootstrap';
//import { items } from 'react';
class RestaurantList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			items: []
		};
	}
	error
	componentDidMount() {
		fetch("http://localhost:3000/restaurant-app")
			.then(res => res.json())
			.then(
				(result) => {
					console.log('result', result)
					this.setState({
						isLoaded: true,
						items: result
					});
				},
			)
	}

	render() {
		const { items } = this.state;
		//if (!DataisLoaded) return <div>
			//<h1> Pleses wait some time.... </h1> </div>;

		return (
			<div>
				<h1>Restaurant data </h1>  {
					//items.map((item) => ( 
					<table>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Address</th>
							<th>Rating</th>
							<th>Email</th>
							<th>Operation</th>

						</tr>
						{items.map((val, key) => {
							return (
								<tr key={key}>
									<td>{val.id}</td>
									<td>{val.name}</td>
									<td>{val.address}</td>
									<td>{val.rating}</td>
									<td>{val.email}</td>
						            <td><a href={"/update/"+val.id} ><FontAwesomeIcon icon={faEdit}color="red"/></a></td>	
									<td><a href={"/Delete/"+val.id}><FontAwesomeIcon icon={faTrash}color="black"/></a></td>		
								</tr>
							)
						})}
					</table>

				}
			</div>
		);
	}
}
export default RestaurantList;
