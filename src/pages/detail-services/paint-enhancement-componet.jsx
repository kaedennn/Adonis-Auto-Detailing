import React from 'react'
import { Link } from 'react-router-dom';

import PaintCarImage from '../../assets/paint-enhancement/paint-image.jpg';
import background from '../../assets/paint-enhancement/background.jpeg';

import './car-services.styles.css';

export default function PaintEnhancement() {
    return (
        <div className='car__servicepage__container'>
            <div className='car__servicepage__top' style={{
                background: `url(${background}) no-repeat center center fixed`,
                backgroundSize: 'cover',
                WebkitBackgroundSize: 'cover',
                MozBackgroundSize: 'cover',
                OBackgroundSize: 'cover'
            }}>
               <div className='overlay'/>
               <h1 className='car__servicepage__top__text bold'>Enrich your car’s exterior with a Paint Enhancement in Queens, NY</h1>
               <h2 className='car__servicepage__top__text'>Buffing and Waxing out the minor imperfections from your car the right way!</h2>
           </div>
           <div className='car__servicepage__middle'>
               <div className='car__servicepage__middle__info'>
                    <h2 className="bold">Turning your car from dull to shiny!</h2>
                    <p>
                        Have you noticed your car’s paint have become dull, or filled with swirl marks and small scratches. This is all to bringing the car to the car wash, drying it improperly, using the wrong towels.
                    </p>
                    <p>
                        The longer you go without fixing those issues and keep up repeating the same mistakes, plus all the contaminants accumulating on your car makes it a little harder to remove. Instances like that we would to do a step 1 correction. That can be something we can talk about if you want to consider that option. 
                    </p>
                    <p>
                        If you want some life back in the paint of your car without it hurting much of your pocket then you should consider our Paint Enhancement Service.
                    </p>
                    <p>
                        This is an entry level type of paint correction. This service helps remove/buffing the majority of the swirl marks, light scratches remove oxidation and most importantly bring back to life your cars paint all at the same time.
                    </p>
                    <p>
                        What we will be doing is correcting and waxing those imperfections at the same time. 
                    </p>
                    <p>
                        This process takes a little longer the Adonis Wash and Wax service and we need to make sure to wash, decontaminate the entire vehicle before the enhancement. 
                    </p>
                    <p>
                        Ask about our Deep interior Detail to go along with this service, to have your entire car looking like new again! Or if you need to remove scratches, look into our Scratch Removal.
                    </p>
               </div>
               <img className='car__servicepage__img' src={PaintCarImage} alt='wash-wax-car'/>
           </div>
           <div className="our__process">
               <h1 className='bold'>Here’s our Paint Enhancement Step by Step Process</h1>
                <div className="steps">
                    <ol>
                        <li>The wheels and its surrounding area will be washed and scrubbed thoroughly.</li>
                        <li>The entire car will be rinsed and sprayed with proper cleaning products to remove all the contaminants/traffic film.</li>
                        <li>We apply clay bar treatment on the surface on the vehicle to remove the dirt that we cannot see. Once this is done, you will be able to feel the smoothness of your vehicle.</li>
                        <li>Removing Iron particles to prevent rusting from further damaging your car’s paint.</li>
                        <li>The Paint Enhancement step: this is where we remove swirls marks, small scratches and glossing up your cars paint at the same time. </li>
                        <li>Wipe down the leftover compound used on the car, and making everything is looking nice and shiny!</li>
                        <li>Clean all exterior glass and windows, leaving them streak free. Tires will be dressed to give it a nice shine.</li>
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
                            <span>$225</span>
                        </div>
                    </div>
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h4>4 doors (regular sedan)</h4>
                        </div>
                        <div className="service__price">
                            <span>$250</span>
                        </div>
                    </div>
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h4>Mid-size Sedan</h4>
                        </div>
                        <div className="service__price">
                            <span>$275</span>
                        </div>
                    </div>
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h4>SUV or Van</h4>
                        </div>
                        <div className="service__price">
                            <span>$300</span>
                        </div>
                    </div>
               </div>
               <Link to='/contact'>
                    <button className='appointment bold uppercase'>Book Appointment</button>
               </Link>
           </div>
           <div className="faq">
               <h1 className='bold underline'>FAQ</h1>
               <h4>Find the answers for the most frequently asked questions below</h4>
               <div className="questions__container">
                    <div className="question">
                        <h3>How long does this service last?</h3>
                        <h5>It all depends on the size of the car but anywhere from 4 to 6 hours.</h5>
                    </div>
                    <div className="question">
                        <h3>Will the swirl marks/ oxidation come back?</h3>
                        <h5>
                        It all depends how well you take care of your car, and how often you wash the car on a consistent basis. If you take it to the car wash often, you’ll see the difference right away.
                        </h5>
                    </div>
                    <div className="question">
                        <h3>Do you come to me?</h3>
                        <h5>For the time being we don’t offer mobile services. We have a location in 130-17 58th Ave, Flushing NY 11355</h5>
                    </div>
               </div>
               <h6>You can visit our dedicated FAQ PAGE to find the answers that you are looking for. And if you can’t find the answer, you can always contact me, Junior@adonisautodetailing.com and I will try to answer you as soon as possible.</h6>
           </div>
        </div>
    )
}
