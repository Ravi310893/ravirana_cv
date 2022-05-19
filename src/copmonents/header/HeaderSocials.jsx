import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import{FaGithub} from 'react-icons/fa'
import{AiFillInstagram} from 'react-icons/ai'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
       <a href="https://www.linkedin.com/" target="_blank"><BsLinkedin/></a>
       <a href="https://github.com" target="_blank"><FaGithub/></a>
       <a href="https://www.instagram.com/" target="_blank"><AiFillInstagram/></a>
      
    </div>
  )
}

export default HeaderSocials