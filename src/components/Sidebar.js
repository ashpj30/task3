import React from 'react'
import './Sidebar.css';
import slider from './slider.png'
import blue1 from './blue1.png'
import black from './black.png'
import pink2 from './pink2.png'
import yellow from './yellow.png'
import white from './white.png'
import red from './red.png'
export const Sidebar = () => {
  return (
    <div>
      <div className='tb'>
      <table>
  <th style={{textAlign:"left"}} >Hot Deals</th>
  <tr>
    <td>Nike</td>
    <td>2</td>
  
  </tr>
  <tr>
    <td style={{color:"#33A0FF"}}>Airmax</td>
    <td style={{color:"#33A0FF"}}>48</td>
    
  </tr>
  <tr>
    <td>Nike</td>
    <td>14</td>
    
  </tr>
  <tr>
    <td>Adidas</td>
    <td>15</td>
    </tr>
    <tr>
    <td>Vans</td>
    <td>23</td>
    </tr>
    <tr>
    <td>All Stars</td>
    <td>1</td>
    </tr>
    <tr>
    <td>Adidas</td>
    <td>95</td>
    </tr>
</table>
      </div>
      <div className='sb'>
        <h4>PRICES</h4>
        <p>Ranger: &nbsp;&nbsp;&nbsp;$13.99 - $25.99</p>
        <img style={{width:"170px",marginTop:"1px"}} src={slider}></img>
      </div>
      <div className='sb1'>
        <h4>COLOR</h4>
        <img src={blue1} ></img><img src={red}></img><img src={black}></img><img src={yellow}></img><img src={pink2}></img>
        <img src={white}></img>
      </div>
      <div className='sb2'>
       <table>
        <th style={{textAlign:"left"}} >BRAND</th>
       <tr>
    <td>Nike</td>
    <td>99</td>
  </tr>
  <tr>
    <td style={{color:"#33A0FF"}}>Nike</td>
    <td style={{color:"#33A0FF"}}>99</td>
  </tr>
  <tr>
    <td>Adidas</td>
    <td>99</td>
  </tr>
  <tr>
    <td>Siemens</td>
    <td>99</td>
  </tr>
  
        </table>
      </div>
      <div className='sb3'><p>More</p></div>
    </div>
  )
}
