import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';

import interiordetail from '../../assets/interior-detail/interior-detail-car.jpg';
import background from '../../assets/interior-detail/background.jpg'

import './car-services.styles.css';

export default function DeepInteriorDetail() {
    useEffect(() => {
        document.title = "Adonis Auto Detailing - Top quality intensive Interior Detailing Services in Queens, NYC"
     }, []);

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
               <h1 className='car__servicepage__top__text bold'>Top quality intensive interior detailing in Queens</h1>
               <h2 className='car__servicepage__top__text'>Every single corner from your car, top to bottom will be thoroughly cleaned and look new again!</h2>
           </div>
           <div className='car__servicepage__middle'>
               <div className='car__servicepage__middle__info'>
                    <h2 className="bold">Transforming your interior from “I” don’t think it can be done, to “Wow! It looks brand new!”</h2>
                    <p>
                        We offer intensive cleaning interior services for you so you don’t have to waste a lot of physical energy
                        and get to enjoy it with your friends and family. When it comes to the interior, which includes the
                        dashboard, the center console, door panels, cup holders, headliners, seats, etc.… all will be thoroughly
                        cleaned.
                    </p>
                    <p>
                        While you’re at it, why don’t you upgrade it to a <a href='complete-detail'>Complete Detailing</a>? Or if you want your car’s paint nice
                        and suave, try the <a href='paint-enhancement'>Paint Enhancement</a>.
                    </p>
                    <p>
                        Both seats and carpet will be shampooed and you can rest assure if you have any light stains on either
                        one it will be removed. Even if you have a heavy stain, which you didn’t get to clean right away for
                        whatever reason, we will try and remove it to the best of our ability! Unfortunately not all heavy stains
                        can be removed because we would run the risk of damaging the seat or carpet further more. However,
                        we will communicate that with you and do the best we can.
                    </p>
                    <p>
                        We’ve worked on a lot of vehicles that have had their interiors neglected over the years and we have
                        always had great success with them. Rests assure your vehicle will be well taken care of.
                    </p>
               </div>
               <img className='car__servicepage__img' src={interiordetail} alt='wash-wax-car'/>
           </div>
           <div className="our__process">
               <h1 className='bold'>Here is a walk you through our cleaning process</h1>
                <div className="steps">
                    <ol>
                        <li>Any of loose items underneath the seats, cup holders or door panels that we deem garbage, will be disposed. If we find loose change, small personal belongings, paperwork etc., those types of items we will put in a separate bag and given to you at the end of the service.</li>
                        <li>Remove all floor mats, vacuum them thoroughly, then shampooed and extracted. The reason we do this first, is while we cleaning the rest of the car they will be out in the sun drying as much as possible.</li>
                        <li>Clean the door jams and door panels. We like to clean from the outside in, so when we are cleaning the door jams, any excessive dirt would most likely fall in the interior and be easier for us to clean.</li>
                        <li>Thoroughly cleaning all of the interior plastic surfaces and dressing them with protection. This includes dashboard, cup holders, steering wheel, etc.</li>
                        <li>Thorough vacuum of the entire vehicle including the trunk.</li>
                        <li>The carpets and seats will be shampooed and extracted.</li>
                        <li>Cleaning windows and glass from the inside only, you’ll be able to have amazing clarity.</li>
                        <li>A final walk through of the vehicle to see if we missed anything. Our thought process is “if we can see it, then so can the customer.”</li>
                    </ol>
                </div>
                <p className='bold'>Please allow 4 to 6 hours for this service to be completed, all depending on the condition of your car.</p>
                <p>We highly recommend you consider doing our maintenance program. This will allow for your vehicle to remain in great shape, month after month</p>
           </div>
           <div className="pricing">
               <h1 className='bold uppercase underline'>Pricing</h1>
               <div className="cards__container">
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h3>2 doors (sports car)</h3>
                        </div>
                        <div className="service__price">
                            <h1>$150+</h1>
                        </div>
                    </div>
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h4>4 doors (regular sedan)</h4>
                        </div>
                        <div className="service__price">
                            <h1>$200+</h1>
                        </div>
                    </div>
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h4>2 rows (Mid-size Sedan)</h4>
                        </div>
                        <div className="service__price">
                            <h1>$250+</h1>
                        </div>
                    </div>
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h4>3 rows (SUV or Van)</h4>
                        </div>
                        <div className="service__price">
                            <h1>$300+</h1>
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
                        <h3>Do I have to be there?</h3>
                        <h5>We work out of a home garage and currently do not have seating available. Keep in mind a deep interior detail could take from 4 to 8 hours depending on the size and condition of your vehicle. If you have another vehicle and want to stick around, feel free. If you decide to leave, please leave us with a set of keys since we have to move the car at times.</h5>
                    </div>
                    <div className="question">
                        <h3>Will my seats be wet when you’re done?</h3>
                        <h5>
                        When your vehicle is returned to you, about 80% to 90% of the seats will be dried. The weather could be a big factor, so if the weather is warmer, then it will dry faster but if colder then it could take a few days. We have an extractor and air blower, so no need to panic.  We will also give you some tips to help it dry faster once you take it back. 
                        </h5>
                    </div>
                    <div className="question">
                        <h3>I have a bad odor, what can be done?</h3>
                        <h5>We provide an odor removal service that tackles any kinds of odors.</h5>
                    </div>
                    <div className="question">
                        <h3>One of the seats is damaged, are you able to fix it?</h3>
                        <h5>This will be a repair issue and we suggest for you to look for an upholstery service. They would be the best bet to help you with that. </h5>
                    </div>
               </div>
               <h6 className='bottomtext'>You can visit our dedicated FAQ PAGE to find the answers that you are looking for. And if you can’t find the answer, you can always contact me, <a className='link' href='mailto:junior@adonisautodetailing.com'>junior@adonisautodetailing.com</a> and I will try to answer you as soon as possible.</h6>
           </div>
        </div>
    )
}
