import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
class RestaurantList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			items: []
		};
	}
	
	componentDidMount() {
		this.getData()
	}
	getData()
	{
		fetch("http://localhost:3000/restaurant-app")
			.then(res => res.json())
			.then(
				(result) => {
					console.log('result', result)
					this.setState({
						isLoaded: true,
						items: result
					});
				})
	}

	editEmployee(id){
		localStorage.setItem('editId', id);
    }
	delete(id)
	{
		fetch("http://localhost:3000/restaurant-app" +id,
		{
		method: "DELETE",

		}).then((result) => {
				result.json().then((resp) => {
					alert("Restaurant has been Deleted")
					this.getData()
				})

			})
	}

	render() {
		const { items } = this.state;

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
									<td>{val.name} </td>
									<td>{val.address}</td>
									<td>{val.rating}</td>
									<td>{val.email}</td>
									<td><a onClick={ () => this.editEmployee(val.id)} href={"/update/" + val.id} ><FontAwesomeIcon icon={faEdit} color="red" /></a></td>
									{/* <button onClick={ () => this.editEmployee(val.id)} className="btn btn-info">Update </button> */}
									<td><a onClick={()=>this.delete(val.id)} href={"/delete/" + val.id}><FontAwesomeIcon icon={faTrash} color="black" /></a></td>
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
