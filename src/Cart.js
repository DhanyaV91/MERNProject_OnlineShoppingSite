import React, {Component} from 'react';
import CartItem from './ProductCart';
import axios from 'axios';

class Cart extends Component{

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

	removeFromCart = () => {
		localStorage.removeItem('cart');
		this.setState({products: []});
	}


    render(){
        const { products, total } =  this.state;
		//console.log(products[0]);
        return (Object.keys(this.state.products).length == 0) ?  <h5>No Items in Cart!</h5> : 
		<div><div className="container-fluid">
			{products.map((product, index) => (<CartItem product={products[index]} remove={this.removeFromCart} key={index}/>))}
		</div>
		</div>
    }
}

export default Cart;