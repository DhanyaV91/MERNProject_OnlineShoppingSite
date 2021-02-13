import { Component } from 'react';
import kurta1 from './images/kurta1.jpg';
import kurta2 from './images/kurta2.jpg';
import kurta3 from './images/kurta3.jpg';
import kurta4 from './images/kurta4.jpg';
import kurta5 from './images/kurta5.jpg';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class Kurtas extends Component{

  state = {
    productList:[]
  }

componentDidMount(){
  axios.get('http://localhost:5003/shops/Maxi')
  .then(res=>{this.setState({productList:res.data})})
}

  render(){
    console.log(kurta1);
    return <div className="container">
        <table width = "60%" cellPadding = "2" cellSpacing = "2" border="0">
          <tbody>
          {this.state.productList.map(kurta=>(
          <tr key={kurta.prod_id}>
            <td width="30%"><a href="#"><center><img src={kurta1} width="150" height="150" border="1"/></center></a></td>
            <td width="30%"><center>{kurta.prod_name}: Rs.{kurta.price}</center></td>
            <td width="10%"><center><input type="checkbox"></input></center></td>
          </tr>
          ))}
          </tbody>                                      
        </table>
    </div>
  }
}

export default Kurtas;