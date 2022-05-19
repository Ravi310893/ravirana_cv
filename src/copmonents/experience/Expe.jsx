import React from 'react'
import{BsPatchCheckFill} from 'react-icons/bs'
import './Expe.css'
const Expe = () => {
  return (
    <section id='experience'>
       <h5>The Skills I Have</h5>
       <h2>Experience</h2>

       <div className="container experience_container">
         <div className="experience_frontend">
              <h3>Frontend Development</h3>
              <div className="experience_content">
                <article className='experiene_details'>
                  <BsPatchCheckFill className='experience_details-icon' />
                 <div> <h4>HTML</h4></div>
                <small className='text-light'>Experienced</small>
                </article>

                <article className='experiene_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div><h4>CSS</h4></div>
                <small className='text-light'>Experienced</small>
                </article>

                <article className='experiene_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div><h4>JavaScript</h4></div>
                <small className='text-light'>Intermediate</small>
                </article>

                <article className='experiene_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div><h4>React.Js</h4></div>
                <small className='text-light'>Intermediate</small>
                </article>

                <article className='experiene_details'>
                <BsPatchCheckFill className='experience_details-icon'/>
                <div><h4>Bootstrap</h4></div>
                <small className='text-light'>Experienced</small>
                </article> 
           </div>
         </div>
          {/* end of frontend */}
         <div className="experience_backend">
             <h3>Backend Development</h3> 
             <div className="experience_content">
                <article className='experiene_details'>
                    <BsPatchCheckFill className='experience_details-icon'/>
                    <div><h4>Java</h4></div>
                    <small className='text-light'>Intermediate</small>
                </article>

                <article className='experiene_details'>
                    <BsPatchCheckFill className='experience_details-icon'/>
                    <div><h4>Node.js</h4></div>
                    <small className='text-light'>Intermediate</small>
                </article>

              </div>
         </div>
       </div>
    </section>
  )
}

export default Expe