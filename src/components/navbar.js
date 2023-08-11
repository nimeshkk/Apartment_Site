import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'

export default function navbar() {

  const navRef =useRef();

  const showNavbar =()=>{
    navRef.current.classList.add('responsive_nav');
  }

  return (
    
      <div className='navbar'>

        <div className='logo'>
          <FontAwesomeIcon icon={faCrown} />
          </div>

          <nav ref={navRef}>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
            <a href='#'>add</a>

            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FontAwesomeIcon icon={faXmark} />

            </button>

          </nav>

          <button className='nav-btn' onClick={showNavbar}>
          <FontAwesomeIcon icon={faBars} />
          </button>
      </div>
      
    
  )
}

