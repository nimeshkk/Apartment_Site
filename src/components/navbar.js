import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'


export default function nav() {
  return (
    <div className='navbar flex'>

       <div className='logo'>
       <FontAwesomeIcon icon={faCrown} />
        </div>           
       <div className='navbarmenu'>
        <ul className='menu flex'>
          <li className='listItem'>Home</li>
          <li className='listItem'>About</li>
          <li className='listItem'>Contact</li>
          <li className='listItem'>Blog</li>
          <li className='listItem'>Portfolio</li>
        </ul>
       </div>
       

      
    </div>
  )
}
