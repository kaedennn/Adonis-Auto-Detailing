import React, { useEffect} from 'react'

import TestimonialsCom from '../../components/testimonials/testimonials.component';

import './testimonials.styles.css';

export default function Testimonials() {
    useEffect(() => {
        document.title = "Auto Detailing Detailing - Check out what your fellow Queens’s residents got to say about our auto detailing services."
     }, []);

    return (
        <div className='testimonial__container'>
            <div className='testimonial__top'>
               <div className='overlay'/>
               <h1 className='testimonial__top__text bold'>Check out what are customers have to say about Adonis Auto Detailing</h1>
           </div>
           <div className="testimonials__grid">
               <TestimonialsCom/>
            </div>
        </div>
    )
}
