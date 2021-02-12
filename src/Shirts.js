import { Component } from 'react';
import shirt1 from './images/shirt1.jpg';
import shirt2 from './images/shirt2.jpg';
import shirt3 from './images/shirt3.jpg';
import shirt4 from './images/shirt4.jpg';
import shirt5 from './images/shirt5.jpg';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class Shirts extends Component{
  render(){
    return <div className="container">
        <table width = "60%" cellpadding = "2" cellspacing = "2" border="0">
          <tr>
              <td width="30%"><a href="#"><center><img src={shirt1} alt="Smiley face" width="150" height="150" border="1"/></center></a></td>
              <td width="30%"><center>Grey Floral shirts: Rs.1000</center></td>
              <td width="10%"><center><input type="checkbox"></input></center></td>
          </tr>
          <tr>
              <td width="30%"><a href="#"><center><img src={shirt2} alt="Smiley face" width="150" height="150" border="1"/></center></a></td>
              <td width="30%"><center>Pink Floral shirts: Rs.600</center></td>
              <td width="10%"><center><input type="checkbox"></input></center></td>
          </tr>
          <tr>
              <td width="30%"><a href="#"><center><img src={shirt3} alt="Smiley face" width="150" height="150" border="1"/></center></a></td>
              <td width="30%"><center>White and Blue Multicolored shirts: Rs.1500</center></td>
              <td width="10%"><center><input type="checkbox"></input></center></td>
          </tr>
          <tr>
              <td width="30%"><a href="#"><center><img src={shirt4} alt="Smiley face" width="150" height="150" border="1"/></center></a></td>
              <td width="30%"><center>Purple shirts with Designs: Rs.1020</center></td>
              <td width="10%"><center><input type="checkbox"></input></center></td>
          </tr>
          <tr>
              <td width="30%"><a href="#"><center><img src={shirt5} alt="Smiley face" width="150" height="150" border="1"/></center></a></td>
              <td width="30%"><center>Black shirts with Designs: Rs.800</center></td>
              <td width="10%"><center><input type="checkbox"></input></center></td>
          </tr>                                        
        </table>
    </div>
  }
}

export default Shirts;