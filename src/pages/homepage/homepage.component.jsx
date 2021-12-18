import React from 'react'

import './homepage.styles.css';

import homepagecar from '../../assets/homepage-car.jpg';
import Service from '../../components/serviceslist/services.component';
import Addons from '../../components/addonslist/addons.component';

export default function Homepage() {
    return (
        <div className='homepage__container'>
           <div className='homepage__top'>
               <h1>Dedicated and Thorough Auto Detailing in Queens,NY</h1>
               <h2>With over 75+ five star reviews from our customers on Google, Yelp and Facebook.</h2>
               <h3>Attentive and Communicative Queens Auto Detailer</h3>
           </div>
           <div className='homepage__middle'>
               <div>
                <h2>Aren’t you tired of the lack of quality work presented to you by our local car washes in Queens?</h2>
                <p>
                    You get to the car wash and see a long line for them to service your car.
                    Sometimes you have to wait there for an hour at most until someone comes to you

                    and asks you what service you want, without explaining how the service works or
                    asking if you have any concerns.

                    In the end, you join them drying off your car because you know they have to work on the other
                    ten cars coming behind you, and won’t do that great of a job. Well here at Adonis Auto
                    Detailing Services, we offer the total opposite of that, we know this is time dedicated for your
                    car.
                    If you’re looking for an auto detailer in Queens, who can answer your questions and also
                    provide the much needed service to your vehicle, then this is the place where you can do all of
                    that and much more..
                    You can book an appointment with us at any time, choose the day and time and express your
                    concerns. You can always call and text at (347)861-8315, or if your busy email us,
                    Junior@adonisautodetailing.com. We will answer as soon as we can and get the process going.
                    Once we set up the appointment, the day of your detailing, we will go over with you our
                    process and at the same time you can point out any concerns.
                    We will dedicate and be thorough during the detailing service. Have this is mind, the auto
                    detailing service we provide is not for everyone, because of the prices and time. We live in the
                    one of the biggest cities in the world; Queens has lots of other businesses that provide quick
                    and cheaper services.
                    </p>
                </div>
                <img className='homepage__car__img' src={homepagecar} alt='car'/>
           </div>
           <div className='homepage__services__container'>
               <div className='services__title'>
                   <h1>Our Services</h1>
               </div>
               <div className='homepage__services'>
                   <Service/>
               </div>
           </div>
           <div className='homepage__addons__container'>
               <div className='addons__title'>
                   <h1>Addons</h1>
               </div>
               <div className='homepage__addons'>
                   <Addons/>
               </div>
           </div>
        </div>
    )
}
