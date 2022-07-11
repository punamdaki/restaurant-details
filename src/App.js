import React, { Component } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faUser, faHome, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from "./component/Home";
import RestaurantList from "./component/RestaurantList";
import RestaurantCreate from "./component/RestaurantCreate";
import RestaurantSearch from "./component/RestaurantSearch";

import RestaurantUpdate from "./component/RestaurantUpdate";
import Login from './component/Login';

class App extends Component {
  render() {
    return (

      <Router>
        <div class="App">
          <div class="topnav">

            <ul>
              <a class="#" href="/"><FontAwesomeIcon icon={faHome} />Home</a>
              <a href="/List"><FontAwesomeIcon icon={faList} /> List</a>
              <a href="/Create"><FontAwesomeIcon icon={faPlus} />Create </a>
              <a href="/Search"><FontAwesomeIcon icon={faSearch} />Search </a>
               <a href="/Login"><FontAwesomeIcon icon={faUser} />Login </a>
             
            </ul>
          </div>
        </div>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/list' element={< RestaurantList />}></Route>
          <Route exact path='/create' element={< RestaurantCreate />}></Route>
          <Route exact path='/search' element={< RestaurantSearch />}></Route>
          <Route exact path='/update/:id' element={< RestaurantUpdate />}></Route>
          {/* <Route path="/update/:id" render={props=>(< RestaurantUpdate {...props}/>)}></Route> */}

          <Route path='/login' element ={<Login/>}> </Route>
        </Routes>
      </Router>
    );
  }
  
}

export default App;