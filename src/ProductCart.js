import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ProductCart extends Component{

    render(){
		const {product} = this.props;
        //console.log(product.pname);
		return <table width = "100%" cellPadding = "5" cellSpacing = "5" border="3">
        <tbody>
          <tr>
          <td width="20%">{this.props.product.pname}</td>
          <td><b><font color="blue">{this.props.product.qty}</font></b></td>
          <td><button className="btn btn-sm btn-warning float-right" onClick={() => this.props.remove(this.props.product.pname)}>Remove from cart</button></td>
          <td><Link to="/checkout"><button className="btn btn-success float-right">Checkout</button></Link></td>
          </tr>
          </tbody>
      </table>;
    }
}

export default ProductCart;