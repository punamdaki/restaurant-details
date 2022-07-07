import React ,{Component} from 'react';
class RestaurantUpdate extends Component{
	// constructor(props) {
	// 	super(props);
	// 	console.log("This.Props",this.props)
		
	//   }

	constructor()
	{
		super();
		this.state={
			name:null,
			email:null,
			address:null,
			rating:null,
		}
	}
	componentDidMount()
	{
		fetch('http://localhost:3000/restaurant-app/'+this.props.match.params.id).then((response)=>{
			response.json().then((result)=>{
				console.log(result)
				this.setState({
					name:result.name
				})
			})
		})
	}
	render() {
		console.log("UPDATE" ,window.location.pathname)
		console.log(this.state);
		return (
			<div>
			    <h1> Restaurant Update </h1> 
				<div>
					<input onChange={(event) => { this.setState({ name: event.target.value }) }}
						placeholder="Restaurant Name" /><br /><br />

					<input onChange={(event) => { this.setState({ address: event.target.value }) }}
						placeholder="Restaurant Address" /><br /><br />

					<input onChange={(event) => { this.setState({ rating: event.target.value }) }}
						placeholder="Restaurant Rating" /><br /><br />

					<input onChange={(event) => { this.setState({ email: event.target.value }) }}
						placeholder="Restaurant Email" /><br /><br />

					<button onClick={() => { this.update() }}>Update Restaurant</button>
				</div>
				</div>
		);
	}
}

export default RestaurantUpdate;