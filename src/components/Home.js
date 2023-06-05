import React from 'react'
import { useState } from 'react'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import './Home.css'
import shoe from './shoe.png'
import rectangle1 from './rectangle1.png'
import alogo from './alogo.png'
import dlogo from './dlogo.png'
import { data } from '../data'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'

export const Home = () => {
 
  
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 9; //images as per our requriment
  const totalNews = data.length;
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const filterUsers = data.slice(indexOfFirstNews, indexOfLastNews);

  return (
    <div>
        <div>
            <header><Navbar/></header>
        </div>
        <div>
<Sidebar/>
        </div>
        <div className='div1'>
          <img style={{width:"270px",height:"200px"}} src={shoe}></img>
          <h1>Adidas Men Running
Sneakers</h1>
<p>Performance and design. Taken right to the edge.</p>
<span>SHOP NOW</span>
<img className='rec' src={rectangle1}></img>
        </div>
        <div className='div2'>
          <ul>
            <li>13 Items</li>
            <li>Sort By</li>
            <li><select><option>Name</option></select></li>
            <li>Show</li>
            <li><select><option>12</option></select></li>
            <li><img style={{marginLeft:"390px"}} src={dlogo}></img>&nbsp;&nbsp;<img  src={alogo}></img></li>
            <li></li>
          </ul>

       
        
<div className='box'>
  {filterUsers.map((item, index) => (
    <div key={index} className={`box${index + 1}`}>
      <Link  to='/home'><img  src={item.img} alt={`Image ${index + 1}`} /></Link>
      <p><b>{item.brand}</b></p>
   <p style={{color:"#40BFFF"}}>{item.price} &nbsp;&nbsp;&nbsp; {item.off}</p>
    </div>
  ))}
</div>




         </div> 
         

   {/* <div class="pagination">

  <Link to='/'>1</Link>
  <Link  to='/second'>2</Link>
  <Link class="active" to='/third'>3</Link>
  <Link to='/forth'>4</Link>
  <Link to='/fifth'>5</Link>
  
  
</div> */}
 {totalNews > newsPerPage && (
						<Pagination
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							totalUsers={totalNews}
							userPerPage={newsPerPage}
              />  )} 

    </div>
  )
 
}
