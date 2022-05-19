import React from 'react'
import './Contact.css'
import{MdOutlineEmail} from 'react-icons/md'
import{BsLinkedin} from 'react-icons/bs'
import{SiWhatsapp} from 'react-icons/si'
import{ useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3wvs6uh', 'template_ojgvz1r', form.current, 'ALYGP9tI_RH2OebuG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
        
      });
      e.target.reset()
  };


  return (
    <section id='contact'>
         <h5>Get in Touch</h5>
         <h2>Contact Me</h2>

         <div className="container contact_container">
           <div className="contact_options">
             <article className='contact_option'>
             <MdOutlineEmail className='contact_option-icon'/>
                <h4>Email</h4>
                <h5>ravi310893@gmail.com</h5>
                <a href="mailto:ravi310893@gmail.com" target='_blank' rel="noopener">Send an Email</a>
             </article>
             <article className='contact_option'>
             <BsLinkedin className='contact_option-icon'/>
                <h4>Linkedin</h4>
                <h5>Ravi Rana</h5>
                <a href="https://www.linkedin.com/in/ravi-rana-9a2355221" target='_blank' rel="noopener">Send a Message</a>
             </article>
             <article className='contact_option'>
             <SiWhatsapp className='contact_option-icon'/>
                <h4>Call and WhatsApp</h4>
                <h5>9755249295</h5>
                <a href="https://api.whatsapp.com/send?phone=919755249295" target='_blank' rel="noopener">Send a Message</a>
             </article>
           </div>
            {/* end of contact options */}
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your Full Name' required />
                <input type="email" name='email' placeholder='Your Email' required />
                <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
              </form>
         </div>
    </section>
  )
}

export default Contact