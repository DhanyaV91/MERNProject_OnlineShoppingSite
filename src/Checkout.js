import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Checkout extends Component{
    state = {
        products: [],
        total: 0
    }

    componentWillMount() {
        let cart = localStorage.getItem('cart');
        if (!cart) return; 
        axios.post('http://localhost:5003/shops', {cart})
        .then(res => {this.setState({products:res.data})});
    }

    render(){
        const { products, total } =  this.state;
		//console.log(products);
        return <div><div className="container-fluid">
		    <table width = "100%" cellPadding = "5" cellSpacing = "5" border="3">
                 <tbody>
                 {products.map((product, index) => (
                    <tr>
                    <td width="20%" key={products[index]}>{products[index].pname}</td>
                    <td><b><font color="blue">{products[index].qty}</font></b></td>
                    <td><button className="btn btn-success float-right" onClick={() => alert('Proceed to Pay')}>Pay</button></td>
                    <td><Link to="/"><button className="btn btn-danger float-right" style={{ marginRight: "10px" }}>Cancel</button></Link></td>
                    </tr>
                 ))}
                </tbody>
            </table>
		    </div>
		</div>
    }
}

export default Checkout;