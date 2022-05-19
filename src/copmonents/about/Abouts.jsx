import React from 'react'
import './Abouts.css'
import Me from '../../assets/dp7.jpg'
import{FaAward} from 'react-icons/fa'
import{FiUsers} from 'react-icons/fi'
import{RiFolder5Fill} from 'react-icons/ri'

const Abouts = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
           <div className="about_me-img">
             <img src={Me} alt="About image" />
           </div>
        </div>

        <div className="about_content">
             <div className="about_cards">
               <article className='about_card'>
                 <FaAward className='about_icon'/>
                 <h5>Experience</h5>
                  <small> 1+ years working</small>
               </article>
               <article className='about_card'>
                 <FiUsers className='about_icon'/>
                   <h5>Clients</h5>
                    <small>NationWide</small>
               </article>
               <article className='about_card'>
                   <RiFolder5Fill className='about_icon'/>
                    <h5>Projects</h5>
                     <small>10+ Projects</small>
               </article>
             </div>
             <p>Hello, I am Ravi Rana,Learning Fullstack Developer,have Knowledge Of Javascript,
                Java and various Techs Mentioned In this website-Resume. Looking For a Opportunity to 
                Further Enhance skills for Development of Organization as well as mine. If You Are Intrested
                Click The  Button below.
             </p>

                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Abouts











/* import React from 'react'
import './Abouts.css'
import Me from '../../assets/dp2.png'
import{FaAward} from 'react-icons/fa'
import{FiUsers} from 'react-icons/fi'
import{RiFolder5Fill} from 'react-icons/ri'

const Abouts = () => {
  return (
  <section id='about'>
    <h5></h5>
    <h2></h2>
    <div className="container about_container">
      <div className="about me">
        <div className="about_me-img">
          <img src={Me} alt='about image'/>
        </div>
      </div>
      <div className="about_content">
         <div className="about_cards">
           <article className='about_card'>
            <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small> 3+ years working</small>
           </article>
           <article className='about_card'>
            <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small> Clients world wide</small>
           </article>
           <article className='about_card'>
            <RiFolder5Fill className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ Projects</small>
           </article>
         </div>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos recusandae
            maiores placeat vitae delectus tempore labore debitis rem adipisci maxime, obcaecati,
             in sunt quibusdam iste illo, suscipit soluta pariatur modi.</p>

             <a href="#contact" className='btn btn primary'>Let's Talk</a>
      </div>
    </div>
  </section>
  )
}

export default Abouts */