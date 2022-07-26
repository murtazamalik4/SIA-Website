import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

function navbar() {
  return (
    <div class="navbar_main">
        <div>
            <img src="/images/logo.png" className='logo' alt=""/>
        </div>
        <div className='middle_navbar'>
         <div className='middle_navbar_component'>   
        <div>
            <Link to="/" className='link'>Home</Link>
         </div>
         <div>
            <Link className='link' to="/history">About Us</Link>
            </div>
          <div>
            <Link  className='link' to="/gallery">Gallery</Link>
          </div>
          <div>
            <Link className='link' to="/events">Events</Link>
          </div>
         <div>
            <Link  className='link' to="/contact-us">Contact Us</Link>
          </div>
        </div>
        </div> 
        <div className='btn'>
            <button>
                Member Login
            </button>
        </div>
    </div>
  )
}

export default navbar