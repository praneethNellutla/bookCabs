import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import '../styles/Mainnav.css'

function Mainnav({ show }) {
  return (
    <div className='nav-bar'>
            <i className='navs fa fa-bars' onClick={ show }></i>
            <a href="/"><h2 className='navs' style={{color : "black"}}>Book<span style={{color : "orange"}}>Cabs</span></h2></a>
            <i className='navs fa fa-user-circle'></i>
    </div>
  )
}

export default Mainnav
