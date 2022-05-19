import React from 'react'
import './Testimonials.css'
import img1 from  '../../assets/exp.jpg'
import img2 from  '../../assets/c++.jpg'
import img3 from  '../../assets/oaktree.jpg'

// import Swiper core and required modules
import {  Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Review From past Work</h5>
        <h2>Testimonials</h2>

        <Swiper className="container testimonials_container"
         // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      
        >
            <SwiperSlide className='testimonial'>
                <div className="client_avatar">
                <img src={img1} alt="Avatar1" />
                </div>
                <h5 className='client_name'>Shivom SecuraNation</h5>
                    <small className='client_review'>
                        This is the Experience Document provided by shivomSecurnation.
                        I was associate developer here and worked on css and html, and
                        other functionalities of web development.
                    </small>
            </SwiperSlide>
            <SwiperSlide className='testimonial'>
                <div className="client_avatar">
                <img src={img2} alt="Avatar2" />
                </div>
                <h5 className='client_name'>C-Certification</h5>
                    <small className='client_review'>
                       Have knowledge of Basics Of C language,
                       certifiction provided by Programming Hub.
                    </small>
            </SwiperSlide>
            <SwiperSlide className='testimonial'>
                <div className="client_avatar">
                <img src={img3} alt="Avatar3" />
                </div>
                <h5 className='client_name'>Oak Tree Software</h5>
                    <small className='client_review'>
                       This is my Salesforce cloud Intern-Ship certificate.
                       provided By company "Oak Tree cloud".
                    </small>
            </SwiperSlide>
           
        </Swiper>

    </section>
  )
}

export default Testimonials