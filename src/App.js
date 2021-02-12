import './App.css';
import { Component } from 'react';
import Maxis from './Maxis';
import Kurtas from './Kurtas';
import Shirts from './Shirts';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

class App extends Component{
  render(){
    return    <Router><div className="jumbotron"><center><h2 className="text-success"><b><u>Dhanya's Online Shopping Site</u></b></h2></center>
    <Navbar/><br/>
      <Route exact path="/" component={Home}></Route>
      <Route path="/Maxis" render={props=>(
          <Maxis></Maxis>
      )}></Route>
      <Route path="/Kurtas" render={props=>(
          <Kurtas></Kurtas>
      )}></Route> 
      <Route path="/Shirts" render={props=>(
          <Shirts></Shirts>
      )}></Route>           
    </div>
    </Router>
  }
}

export default App;
