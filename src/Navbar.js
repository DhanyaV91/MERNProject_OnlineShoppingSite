import {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component{

    render(){
        return <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <span className="navbar-brand">Women's Wear</span>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/Maxis">Maxis</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/Kurtas">Kurtas</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/Shirts">Shirts</Link></li>
                </ul>
            </div>
        </nav>
    }
}

export default Navbar;