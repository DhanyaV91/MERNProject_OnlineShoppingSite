import {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component{

    logOut(){
        localStorage.removeItem('token');
      }

    render(){
        const auth = localStorage.getItem('token');
        return <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <div className="collapse navbar-collapse">
               <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/cart">Cart</Link></li>
                    { (auth) ? <li className="nav-item"><Link className="nav-item nav-link" to="/checkout">Checkout</Link></li>: ''}
                    {(auth) ? <a className="nav-item nav-link" href="/" onClick={this.logOut}>Log out</a> : <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>}
                </ul>
            </div>
            <form className="form-inline navbar-nav ml-auto">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    }
}

export default Navbar;