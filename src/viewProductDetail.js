import { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class viewProductDetail extends Component {

  state = {
    quantity: 1
  }

  handleInputChange = event => this.setState({[event.target.name]: event.target.value})

  addToCart = () => {
    let cartItems = [];
		let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
    cartItems.push(cart);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    let stored = JSON.parse(localStorage.getItem('cart'));
		let name = this.props.product.prod_name;
		//cart[id] = (cart[id] ? cart[id]: 0);
		let qty = parseInt(this.state.quantity);
		if (this.props.product.available_quantity < qty) {
      cart["pname"] = name;
			cart["qty"] = this.props.product.available_quantity; 
		} else {
      cart["pname"] = name;
			cart["qty"] = qty
		}
    stored.push(cart);
		localStorage.setItem('cart', JSON.stringify(stored));
    alert("Move to Cart page!");
	}

  render(){
    const { product } = this.props;
    return <div className="container-fluid">
        <table width = "100%" cellPadding = "5" cellSpacing = "5" border="3">
          <tbody>
          <tr>
            <td width="20%" key={product.prod_id}><a href="#"><center><img src={`../images/${product.Image}.jpg`} width="150" height="150"/></center></a></td>
            <td>
              <table cellPadding = "5" align="center">
              <tbody>
                <tr>
                <td><center><b><font color="blue">{product.prod_name}</font> <br/>Rs.{product.price}</b></center></td>
                </tr>
                <tr>
                <td><center><b><font color="blue">{product.available_quantity}</font></b></center></td>
                </tr>
                </tbody>
              </table>
              <table cellPadding = "5" align="center">
              <tbody>
                <tr>
                <td><input type="number" value={this.state.quantity} name="quantity" onChange={this.handleInputChange} className="float-right" style={{ width: "40px", borderRadius: "2px", textAlign: "center", marginRight: "25px"}}/></td>
                </tr>
                <tr>
                <td><center><input type="submit" className="btn btn-success" id={product.prod_id} onClick={this.addToCart} value="Add to Cart"></input></center></td>
                </tr>
                </tbody>
              </table>
            </td>
          </tr>
          </tbody>
        </table><br/>
    </div>
  }
}

export default viewProductDetail;