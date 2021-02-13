import { Component } from 'react';
import maxi1 from './images/maxi1.jpg';
import maxi2 from './images/maxi2.jpg';
import maxi3 from './images/maxi3.jpg';
import maxi4 from './images/maxi4.jpg';
import maxi5 from './images/maxi5.jpg';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class Maxis extends Component{

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
          {this.state.productList.map(maxi=>(
          <tr key={maxi.prod_id}>
            <td width="30%"><a href="#"><center><img src={maxi1} width="150" height="150" border="1"/></center></a></td>
            <td width="30%"><center>{maxi.prod_name}: Rs.{maxi.price}</center></td>
            <td width="10%"><center><input type="checkbox"></input></center></td>
          </tr>
          ))}
          </tbody>                                        
        </table>
    </div>
  }
}

export default Maxis;