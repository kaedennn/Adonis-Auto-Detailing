import React from 'react'
import { Link } from 'react-router-dom';

import washandwaxcar from '../../assets/wash-and-wax/main-car.jpg'
import background from '../../assets/wash-and-wax/background.jpg';

import './car-services.styles.css';

export default function WashAndWax() {
    return (
        <div className='car__servicepage__container'>
            <div className='car__servicepage__top' style={{
                background: `url(${background}) no-repeat center center fixed`,
                backgroundSize: 'cover',
                WebkitBackgroundSize: 'cover',
                MozBackgroundSize: 'cover',
                OBackgroundSize: 'cover',
                backgroundAttachment: 'scroll'
            }}>
               <div className='overlay'/>
               <h1 className='car__servicepage__top__text bold'>Enhancing your vehicle’s paint with Wash and Wax</h1>
               <h2 className='car__servicepage__top__text'>Smoothing and glossing your car out, a panel at a time!</h2>
           </div>
           <div className='car__servicepage__middle'>
               <div className='car__servicepage__middle__info'>
                    <h2 className="bold">Adonis Car Wash and Clay Bar Paint Service</h2>
                    <p>
                        Did you know that when you are driving your vehicle traffic film accumulates over time slowly eating the
                        protection the car paint originally had? Traffic film consists of dirt, dust, car fluids, acid, grease, salt etc. And you
                        well know our streets in Queens, NY are filled with all those contaminants.
                    </p>
                    <p>
                        If you don’t clean and wash it on a consistent basis it will cause the paint to start dulling. Also, not washing
                        consistently or not washing it correctly can cause minor scratches on the car and also swirl marks.
                    </p>
                    <p>
                        Our Wash and Wax is a great choice to help hide those imperfections but If you want to remove them or improve
                        the quality of the paint, then you should definitely look into our <a href='paint-enhancement'>Paint Enhancement</a> service.
                    </p>
                    <p>
                        If you want the protection for your vehicle, then this is a great choice for you! You will be able to notice right away
                        how nice and smooth the paint will feel and it will look amazing!
                    </p>
                    <p>
                        This service does not take very much time to do and you will leave happy with the results.
                        If you need your interior done, look into our <a href='deep-interior-detail'>Deep Interior Detail</a>
                    </p>
               </div>
               <img className='car__servicepage__img' src={washandwaxcar} alt='wash-wax-car'/>
           </div>
           <div className="our__process">
               <h1 className='bold'>This is our step by step process for this service</h1>
                <div className="steps">
                    <ol>
                        <li>The wheels and its surrounding area will be washed and scrubbed thoroughly.</li>
                        <li>The entire car will be rinsed and sprayed with proper cleaning products to remove all the contaminants/traffic film.</li>
                        <li>We apply clay bar treatment on the surface on the vehicle to remove the dirt that we cannot see. Once this is done, you will be able to feel the smoothness of your vehicle.</li>
                        <li>We apply a sealant or wax to protect the paint and to give it a shine.</li>
                        <li>Clean all exterior glass and windows, leaving them streak free.</li>
                        <li>Tires will be dressed to give it a nice shine.</li>
                    </ol>
                </div>
           </div>
           <div className="pricing">
               <h1 className='bold uppercase underline'>Pricing</h1>
               <div className="cards__container">
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h3>2 doors (sports car)</h3>
                        </div>
                        <div className="service__price">
                            <h1>$115</h1>
                        </div>
                    </div>
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h4>4 doors (regular sedan)</h4>
                        </div>
                        <div className="service__price">
                            <h1>$150</h1>
                        </div>
                    </div>
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h4>2 rows (Mid-size Sedan)</h4>
                        </div>
                        <div className="service__price">
                            <h1>$185</h1>
                        </div>
                    </div>
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h4> 3 rows (SUV or Van)</h4>
                        </div>
                        <div className="service__price">
                            <h1>$215</h1>
                        </div>
                    </div>
               </div>
               <Link to='/contact'>
                    <button className='appointment bold uppercase'>Book Appointment</button>
               </Link>
           </div>
           <div className="faq">
               <h1 className='bold underline'><a className='faq__link' href='faq'>FAQ</a></h1>
               <h4>Find the answers for the most frequently asked questions below</h4>
               <div className="questions__container">
                    <div className="question">
                        <h3>How long does this take?</h3>
                        <h5>It can take between two to four hours to wash, decontaminate, clay and wax your car.</h5>
                    </div>
                    <div className="question">
                        <h3>Do you come to me?</h3>
                        <h5>
                            Unfortunately at this time we do not provide mobile services.
                            We are located at 130-17 58 th Ave, Queens, NY 11355. Please schedule an appointment in advance. This is not a
                            shop; it is a private house where we rent space to work out of.
                        </h5>
                    </div>
                    <div className="question">
                        <h3>Does it include an all in one cleaning?</h3>
                        <h5>No, we offer a Deep interior detail if you want to pair it up. Remember the services take time to do and is not rushed.</h5>
                    </div>
                    <div className="question">
                        <h3>How long will the wax last on my car?</h3>
                        <h5>This should last around 3 to 6 months, depending on the daily use of your car. Keep in mind factors such as leaving the car in the sun or rain, different chemicals will get on it and slowly eat the protection off the paint.</h5>
                    </div>
               </div>
               <h6 className='bottomtext'>You can visit our dedicated FAQ PAGE to find the answers that you are looking for. And if you can’t find the answer, you can always contact me, <a className='link' href='mailto:junior@adonisautodetailing.com'>junior@adonisautodetailing.com</a> and I will try to answer you as soon as possible.</h6>
           </div>
        </div>
    )
}
