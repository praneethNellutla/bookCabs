import React, { useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import '../styles/Navbar.css'
import Mainnav from './Mainnav';



function Navbar() {
    const [sidebar, setsidebar] = useState(false)
    function showsidebar(){
        setsidebar(!sidebar);
    }
  return (
    <>
        <Mainnav show = {showsidebar}/>
        <nav className={sidebar ? "sidenav-active" : "sidenav"}>
            <ul>
                <li className='links'>
                    <a href="/">
                        <i className="fa fa-home"></i>
                        <span className='nav-item'> Home</span>
                    </a>
                </li>
                <li className='links'>
                    <a href="/employeeManagement">
                        <i className="fa fa-user"></i> 
                        <span className='nav-item'> Employee Management</span> 
                    </a>
                </li>
                <li className='links'>
                    <a href="/driverManagement">
                        <i className="fa fa-cab"></i> 
                        <span className='nav-item'> Driver Management</span>
                    </a>
                </li>
                <li className='links'>
                    <a href="/tripManagement" >
                        <i className="fa fa-plane"></i>
                        <span className='nav-item'> Trip Management</span>
                    </a>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
