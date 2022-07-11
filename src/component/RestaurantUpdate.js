import React, { Component } from 'react';
class RestaurantUpdate extends Component {

	constructor(props) {
		super(props);
		this.items = localStorage.getItem('editId');
		this.state = {
			name: null,
			email: null,
			address: null,
			rating: null,
		}
	}
	componentDidMount() {
		fetch('http://localhost:3000/restaurant-app/' + this.items).then((response) => {
			response.json().then((result) => {
				this.setState({
					id: this.items,
					name: result.name,
					email: result.email,
					address: result.address,
					rating: result.rating,

				})
			})
		})
	}
	update() {
		fetch('http://localhost:3000/restaurant-app/' + this.state.id, {
			method: "PUT",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(this.state)

		}).then(
			(result) => {
				result.json().then((resp) => {
					alert("Restaurant has been Updated");
					window.location.href = '/list'
				})

			})
	}
	render() {
		return (
			<div>
				<h1> Restaurant Update </h1>
				<div>
					<input onChange={(event) => { this.setState({ name: event.target.value }) }}
						placeholder=" RestaurantName" value={this.state.name} /><br /><br />

					<input onChange={(event) => { this.setState({ address: event.target.value }) }}
						placeholder="Address" value={this.state.address} /><br /><br />

					<input onChange={(event) => { this.setState({ rating: event.target.value }) }}
						placeholder="Rating" value={this.state.rating} /><br /><br />

					<input onChange={(event) => { this.setState({ email: event.target.value }) }}
						placeholder="Email" value={this.state.email} /><br /><br />

					<button onClick={() => { this.update() }}>Update Restaurant</button>
				</div>
			</div>
		);
	}
}

export default RestaurantUpdate;