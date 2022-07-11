import React, { Component } from 'react';

class RestaurantSearch extends Component {
	constructor()
	{
     super()
	 this.state={
		searchDta:null,
		noData:false,
	 }
	}
	serach(key)
	{
		fetch("http://localhost:3000/restaurant-app?q="+key).then((data)=>{
		data.json().then((resp)=>{
			if(resp.length>0)
			{
				this.setState({searchData:resp,noData:false})
			}
			else
			{
				this.setState({noData:true ,searchData:null})
			}
		})
	})
	}
	render() {
		return (
			<div>
				<h1>Restaurant Search</h1>
				<input type="text"  onChange={(event)=>this.serach(event.target.value)}/>
				<div>
					{
						this.state.searchData?
						<div>
							{
							this.state.searchData.map((val)=>
							<div class="search-row">{val.name}</div>
							)	
							}
						</div>
						:""
					}
					{
						this.state.noData?<h3>No Data Found</h3>:null
					}
				</div>
			</div>
		);
	}
}

export default RestaurantSearch;


