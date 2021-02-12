import { Component } from 'react';
import maxi1 from './images/maxi1.jpg';
import maxi2 from './images/maxi2.jpg';
import maxi3 from './images/maxi3.jpg';
import maxi4 from './images/maxi4.jpg';
import maxi5 from './images/maxi5.jpg';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class Maxis extends Component{
  render(){
    return <div className="container">
        <table width = "60%" cellpadding = "2" cellspacing = "2" border="0">
          <tr>
            <td width="30%"><a href="#"><center><img src={maxi1} alt="Smiley face" width="150" height="150" border="1"/></center></a></td>
            <td width="30%"><center>Grey Floral Maxi: Rs.1000</center></td>
            <td width="10%"><center><input type="checkbox"></input></center></td>
          </tr>
          <tr>
            <td width="30%"><a href="#"><center><img src={maxi2} alt="Smiley face" width="150" height="150" border="1"/></center></a></td>
            <td width="30%"><center>Pink Floral Maxi: Rs.600</center></td>
            <td width="10%"><center><input type="checkbox"></input></center></td>
          </tr>
          <tr>
            <td width="30%"><a href="#"><center><img src={maxi3} alt="Smiley face" width="150" height="150" border="1"/></center></a></td>
            <td width="30%"><center>White and Blue Multicolored Maxi: Rs.1500</center></td>
            <td width="10%"><center><input type="checkbox"></input></center></td>
          </tr>
          <tr>
            <td width="30%"><a href="#"><center><img src={maxi4} alt="Smiley face" width="150" height="150" border="1"/></center></a></td>
            <td width="30%"><center>Purple Maxi with Designs: Rs.1020</center></td>
            <td width="10%"><center><input type="checkbox"></input></center></td>
          </tr>
          <tr>
            <td width="30%"><a href="#"><center><img src={maxi5} alt="Smiley face" width="150" height="150" border="1"/></center></a></td>
            <td width="30%"><center>Black Maxi with Designs: Rs.800</center></td>
            <td width="10%"><center><input type="checkbox"></input></center></td>
          </tr>                                        
        </table>
    </div>
  }
}

export default Maxis;