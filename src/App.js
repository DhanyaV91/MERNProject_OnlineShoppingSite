import './App.css';
import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store';
import Login from './Login';
import Cart from './Cart';
import Checkout from './Checkout';

class App extends Component{

  render(){
    return    <Provider store={store}>
    <Router><div className="jumbotron min-vh-100"><center><h2 className="text-success"><b><u>Dhanya's Online Shopping Site</u></b></h2></center>
    <Navbar></Navbar><br/>
      <Route exact path="/" component={Home}></Route>
      <Route path='/cart' component={Cart}></Route> 
     <Route path='/login' component={Login}></Route>
     <Route path='/checkout' component={Checkout}></Route> 
    </div>
    </Router>
    </Provider>
  }
}

export default App;
