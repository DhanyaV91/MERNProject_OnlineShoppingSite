import { Component } from 'react';
import shirt1 from './images/shirt1.jpg';
import shirt2 from './images/shirt2.jpg';
import shirt3 from './images/shirt3.jpg';
import shirt4 from './images/shirt4.jpg';
import shirt5 from './images/shirt5.jpg';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class Shirts extends Component{

  state = {
    productList:[]
  }

componentDidMount(){
  axios.get('http://localhost:5003/shops/Maxi')
  .then(res=>{this.setState({productList:res.data})})
}  
  render(){
    return <div className="container">
        <table width = "60%" cellPadding = "2" cellSpacing = "2" border="0">
          <tbody>
            {this.state.productList.map(shirt=>(
            <tr key={shirt.prod_id}>
              <td width="30%"><a href="#"><center><img src={shirt1} width="150" height="150" border="1"/></center></a></td>
              <td width="30%"><center>{shirt.prod_name}: Rs.{shirt.price}</center></td>
              <td width="10%"><center><input type="checkbox"></input></center></td>
            </tr>
            ))}
          </tbody>                                        
        </table>
    </div>
  }
}

export default Shirts;