import React from 'react'
import logo from '../../images/Afooter.png';
import { FaAddressBook,  FaFacebook, FaGithub, FaInstagram, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';



export default function footer() {
  return (
    <div className='footer-grid-container' id='footer'>
        <div className='footer-grid-item'>
            <div className='footer-logo'>
                <img src={logo} alt='logo' />
            </div>
            <p>Apartment Site</p>
            <div className='social-icon-footer'>
            <FaFacebook/>
            <FaInstagram/>
            <FaTwitter/>
            <FaGithub/>
            </div>
            </div>

        <div className='footerLinks'>
            <span>ABOUT US</span>

            <li>
                <h5>committed to delivering a high level of expertise, customer service, and attention to detail to the marketing and sales of luxury real estate, and rental properties. We offer the best apartments on the Island. The site and our specialized service will support you to find the best apartments and properties for your requirement.</h5>
            </li>


            

        </div>

        <div className='footerLinks'>
            <span>Contact Us</span>

            <li>
                <h5> <FaAddressBook/> Apartment,Colombo,SriLanka</h5>
            </li>

            <li>
                <h5> <FaPhone/> +94 77 123 4567</h5>
            </li>

            <li>
                <h5> <FaMailBulk/> apartment@gmail.com</h5>
            </li>

            

        </div>

        <div className='footerLinks'>
            <span>Information</span>

            <li>
                <a href='/#'>About me</a>
            </li>

            <li>
                <a href='/#'>My work</a>
            </li>

            <li>
                <a href='/#'>Blog</a>
            </li>

            <li>
                <a href='/#'>Contact</a>
            </li>

        </div>

       
 
    </div>
  )
}

