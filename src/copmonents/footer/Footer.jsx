import React from 'react'
import './Footer.css'
import{FaFacebookF} from 'react-icons/fa'
import{GrInstagram} from 'react-icons/gr'
import{GrTwitter} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer_logo'>Assassin Developers</a>
        
        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">testimonials</a></li>
            <li><a href="#contact">Contact</a></li>  
        </ul>

        <div className="footer_socials">
            <a href="https://facebook.com" target="_blank"><FaFacebookF/></a>
            <a href="https://instagram.com" target="_blank"><GrInstagram/></a>
            <a href="https://twitter.com" target="_blank"><GrTwitter/></a>
        </div>

        <div className="footer_copyright">
            <small>
               &copy; Assassin Developer.All Rights Reserved
            </small>
        </div>

    </footer>
  )
}

export default Footer