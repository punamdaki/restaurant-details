import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name:'',
      password:''
    }
  }
  login()
  {
     console.log(this.state)
     
     fetch("http://localhost:3001/login" + this.state.name).then((data)=>{
      data.json().then((resp)=>{
        console.log("resp",resp)
        
      })
     })
  }
  render() {
    return (
      <div>
     
        <input type="text" name="user"placeholder='Enter Name' onChange={(event) => this.setState({ name: event.target.value })} /> <br /> <br />
        <input type="password" name="user" placeholder='Enter Password' onChange={(event) => this.setState({name:event.target.value})} /> <br/> <br/>
        <button onClick={()=>{this.login()}} >Login</button>
      </div>

    );
  }
}

export default Login;