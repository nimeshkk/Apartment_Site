import React from 'react'
import logo from '../../images/Afooter.png';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';



export default function footer() {
  return (
    <div className='footer-grid-container'>
        <div className='footer-grid-item'>
            <div className='footer-logo'>
                <img src={logo} alt='logo' />
            </div>
            <p>hfjfjfjffjvjhv</p>
            <div className='social-icon-footer'>
            <FaFacebook/>
            <FaInstagram/>
            <FaTwitter/>
            <FaGithub/>
            </div>
            </div>

        <div className='footerLinks'>
            <span>information</span>

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

        <div className='footerLinks'>
            <span>information2</span>

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

        <div className='footerLinks'>
            <span>information3</span>

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

