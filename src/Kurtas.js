import { Component } from 'react';
import kurta1 from './images/kurta1.jpg';
import kurta2 from './images/kurta2.jpg';
import kurta3 from './images/kurta3.jpg';
import kurta4 from './images/kurta4.jpg';
import kurta5 from './images/kurta5.jpg';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class Kurtas extends Component{
  render(){
    return <div className="container">
        <table width = "60%" cellpadding = "2" cellspacing = "2" border="0">
          <tr>
              <td width="30%"><a href="#"><center><img src={kurta1} alt="Smiley face" width="150" height="150" border="1"/></center></a></td>
              <td width="30%"><center>Grey Floral kurta: Rs.1000</center></td>
              <td width="10%"><center><input type="checkbox" /></center></td>
          </tr>
          <tr>
            <td width="30%"><a href="#"><center><img src={kurta2} alt="Smiley face" width="150" height="150" border="1"/></center></a></td>
            <td width="30%"><center>Pink Floral kurta: Rs.600</center></td>
            <td width="10%"><center><input type="checkbox"></input></center></td>
          </tr>
          <tr>
            <td width="30%"><a href="#"><center><img src={kurta3} alt="Smiley face" width="150" height="150" border="1"/></center></a></td>
            <td width="30%"><center>White and Blue Multicolored kurta: Rs.1500</center></td>
            <td width="10%"><center><input type="checkbox"></input></center></td>
          </tr>
          <tr>
            <td width="30%"><a href="#"><center><img src={kurta4} alt="Smiley face" width="150" height="150" border="1"/></center></a></td>
            <td width="30%"><center>Purple kurta with Designs: Rs.1020</center></td>
            <td width="10%"><center><input type="checkbox"></input></center></td>
          </tr>
          <tr>
            <td width="30%"><a href="#"><center><img src={kurta5} alt="Smiley face" width="150" height="150" border="1"/></center></a></td>
            <td width="30%"><center>Black kurta with Designs: Rs.800</center></td>
            <td width="10%"><center><input type="checkbox"></input></center></td>
          </tr>                                        
        </table>
    </div>
  }
}

export default Kurtas;