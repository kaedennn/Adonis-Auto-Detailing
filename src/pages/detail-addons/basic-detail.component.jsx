import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import basicdetailimg from '../../assets/basic-detail/basicdetailimg.jpg';
import background from '../../assets/basic-detail/background.jpg';

import '../detail-services/car-services.styles.css';

export default function BasicDetail() {
    useEffect(() => {
        document.title = "Adonis Auto Detailing - A quick basic interior detailing in Queens, NY"
     }, []);

    return (
        <div className='car__servicepage__container'>
            <Helmet>
                <meta name='description' content='Quick, simple and to the point, getting your car to the state it deserves to be in. We’re Queens’s #1 best auto detailing service.'/>
            </Helmet>
            <div className='car__servicepage__top' style={{
                background: `url(${background}) no-repeat center center fixed`,
                backgroundSize: 'cover',
                WebkitBackgroundSize: 'cover',
                MozBackgroundSize: 'cover',
                OBackgroundSize: 'cover',
                backgroundAttachment: 'scroll'
            }}>
               <div className='overlay'/>
               <h1 className='car__servicepage__top__text bold'>Get your vehicle detailed quickly but the right way, right in the heart of Queens.</h1>
           </div>
           <div className='car__servicepage__middle'>
               <div className='car__servicepage__middle__info'>
                   <p className="bold">
                   Do you feel as if you have neglected the interior of your vehicle the past few weeks? We can help!
                   </p>
                    <p>
                        Did you recently purchase a new car and wish to maintain it or is your car fairly cleaned but
                        needs quick wipe down? Have you driven all around Queens, to find a decent car cleaning
                        service but to no avail?
                    </p>
                    <p>
                        The Basic Interior Detail is the choice for you! Not only will your car look nice and clean but this
                        service is affordable and does not take too much time.
                    </p>
                    <p>
                        Ask us about the <a href='headlight-restoration'>Headlight Restoration</a> or the <a href='adonis-wash-and-wax'>Adonis Car Wash and Wax</a> services. Those
                        services may go hand in hand with what you’re looking for your vehicle.
                    </p>
               </div>
               <img className='car__servicepage__img' src={basicdetailimg} alt='wash-wax-car'/>
           </div>
           <div className="our__process">
               <h1 className='bold'>What does Basic Interior Detailing consist of?</h1>
                <div className="steps">
                    <ol>
                        <li>Thorough vacuum of the inside of your vehicle: carpets, mats, trunk, seats, etc.</li>
                        <li>A wipe down of all surfaces and then a protective dressing will be applied.</li>
                        <li>All Windows and Glass surfaces will be streak-free.</li>
                    </ol>
                </div>
                <p>
                    Prices may vary due to the size of the vehicle and the condition as well. The bigger the vehicle,
                    the more coverage area we need to work on. Also, please let us know if your vehicle has pet
                    hair, stains etc, and if you want them taken care. Sometimes the Basic Interior Detail is not the
                    right service and we can recommend our Deep Interior Detail Service
                </p>
           </div>
           <div className="pricing">
               <h1 className='bold uppercase underline'>Pricing</h1>
               <div className="cards__container">
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h3>2 doors (sports car)</h3>
                        </div>
                        <div className="service__price">
                            <h1>$100</h1>
                        </div>
                    </div>
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h4>4 doors (regular sedan)</h4>
                        </div>
                        <div className="service__price">
                            <h1>$125</h1>
                        </div>
                    </div>
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h4>2 rows (Mid-size Sedan)</h4>
                        </div>
                        <div className="service__price">
                            <h1>$150</h1>
                        </div>
                    </div>
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h4>3 rows (SUV or Van)</h4>
                        </div>
                        <div className="service__price">
                            <h1>$175</h1>
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
                        <h5>It could take anywhere between 2 to 4 hours if the interior is being done. If other services are being done as well, it would take longer respectively.</h5>
                    </div>
                    <div className="question">
                        <h3>Do you just service customers in Queens?</h3>
                        <h5>We welcome all customers from the 5 boroughs and Nassau County.</h5>
                    </div>
                    <div className="question">
                        <h3>Can you come to me?</h3>
                        <h5>Unfortunately, we do not offer mobile services at this given time. When mobile services become available, we will update our information.</h5>
                    </div>
                    <div className="question">
                        <h3>This stain is really bothering me, can you take care of that for me?</h3>
                        <h5>The basic cleaning is a light wipe down of the vehicle but at an extra charge we can take care of this issue. Please let us know when scheduling to make the proper arrangements.</h5>
                    </div>
               </div>
               <h6 className='bottomtext'>You can visit our dedicated FAQ PAGE to find the answers that you are looking for. And if you can’t find the answer, you can always contact me, <a className='link' href='mailto:junior@adonisautodetailing.com'>junior@adonisautodetailing.com</a> and I will try to answer you as soon as possible.</h6>
           </div>
        </div>
    )
}
