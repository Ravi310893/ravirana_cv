import React from 'react'
import './Services.css'
import{BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
       <h5>What I offer</h5>
       <h2>Services</h2>

       <div className="container services_container">
         <article className="service">
           <div className="service_head">
             <h3>React.js Developer</h3>
           </div>
           <ul className='service_list'>
             <li>
               <BiCheck className='service_list-icon'/>
               <p>Have Knowledge of React.js and its functionalities.</p>
             </li>
             <li>
               <BiCheck className='service_list-icon'/>
               <p>Made projects Using React.js and Deployed them live.</p>
             </li>
             <li>
               <BiCheck className='service_list-icon'/>
               <p>worked on API's in live project.</p>
             </li>
             <li>
               <BiCheck className='service_list-icon'/>
               <p>Know about React State Functionalities.</p>
             </li>
             <li>
               <BiCheck className='service_list-icon'/>
               <p>This website is Made Using React.js.</p>
             </li>
            
           </ul>
         </article>
         {/* end of react.js */}
         <article className="service">
           <div className="service_head">
             <h3>Quality-Analyst</h3>
           </div>
           <ul className='service_list'>
             <li>
               <BiCheck className='service_list-icon'/>
               <p>Can Work as Quality Analyst Engineer in Organization.</p>
             </li>
             <li>
               <BiCheck className='service_list-icon'/>
               <p>Have Knowledge of core Java can perform QA in backend.</p>
             </li>
             <li>
               <BiCheck className='service_list-icon'/>
               <p>Have knowledge of Javascript also perform QA in Frontend.</p>
             </li>
             <li>
               <BiCheck className='service_list-icon'/>
               <p>By working and Deploying on various projects deveolp capacity to analyze bugy codes.</p>
             </li>
           
           </ul>
         </article>
         {/* end of QA  */}
         <article className="service">
           <div className="service_head">
             <h3>Web Development</h3>
           </div>
           <ul className='service_list'>
             <li>
               <BiCheck className='service_list-icon'/>
               <p>can work as web developer.</p>
             </li>
             <li>
               <BiCheck className='service_list-icon'/>
               <p>Have knowledge of Css,Html also made a Website using these.</p>
             </li>
             <li>
               <BiCheck className='service_list-icon'/>
               <p>Familiar with various Stages of Web Development.</p>
             </li>
             <li>
               <BiCheck className='service_list-icon'/>
               <p>Worked on React and other technologies of FrontEnd.</p>
             </li>
             <li>
               <BiCheck className='service_list-icon'/>
               <p>Familiar with Node.js And other MERN technolgies.</p>
             </li>
             
           </ul>
         </article>
         {/* Frondend Support end */}
       </div>
    </section>
  )
}

export default Services