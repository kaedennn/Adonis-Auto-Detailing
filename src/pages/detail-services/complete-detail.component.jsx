import React from 'react'
import { Link } from 'react-router-dom';

import completedetailimg from '../../assets/complete-detail/complete-detail-pic.jpg';
import background from '../../assets/complete-detail/background.png';

import './car-services.styles.css';

export default function CompleteDetail() {
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
               <h1 className='car__servicepage__top__text bold'>Revamp your vehicle with a Complete Detail right here in Queens, NYC.</h1>
               <h2 className='car__servicepage__top__text'>The only one spot in Queens where not only you will get our complete attention, but your car will get the best detail.</h2>
           </div>
           <div className='car__servicepage__middle'>
               <div className='car__servicepage__middle__info'>
                    <h2 className="bold">Bringing you a brand new car!</h2>
                    <p className='xdxlol'>
                        Has it been a while since you last given a proper care to your car? Have you been out and about, and not able to give your car some much needed tender loving care. 
                    </p>
                    <p>
                        Or maybe you just bought a new vehicle, no matter if you bought it from a dealership or bought it from someone, but you can tell it needs attention as soon as possible.
                    </p>
                    <p>
                        You should consider getting a complete detail for your vehicle, no matter the current state that your vehicle is in. 
                    </p>
                    <p className='bold'>
                        And what is part of the complete detail?
                    </p>
                    <p>
                        It’s both the <a href='deep-interior-detail'>Deep Interior Detail</a> and <a href='adonis-wash-and-wax'>Adonis Wash and Wax</a> combined together. Should you want, consider getting an engine bay cleaning.
                    </p>
                    <p>
                        Have in mind; the complete detail service is not the same as what many of the other local car wash provides.
                    </p>
                    <p>
                        We strive to pay attention to every single detail in your car, we’re not worried about the next car, and this is all about you and your car.
                    </p>
                    <p>
                        We will provide all the info right when you drop off the car.
                    </p>
               </div>
               <img className='car__servicepage__img' src={completedetailimg} alt='wash-wax-car'/>
           </div>
           <div className="our__process">
               <h1 className='bold'>What are the steps we take to get your vehicle to tip top shape?</h1>
               <h2>Exterior:</h2>
                <div className="steps">
                    <ol>
                        <li>Your trunk’s door jamb is the most dirty and more tedious to clean. Then we work on the rest of the door jambs.</li>
                        <li>Wheels and the wheel wells are thoroughly washed.</li>
                        <li>The entire car is then stripped down with an all-purpose cleaner, this helps loosen up the traffic film on the paint of your car.</li>
                        <li>Rinsed and washed with soap, this helps us get rid of any other dirt, grime, old wax, etc.</li>
                        <li>To fully decontaminate your car from stuck on dirt and also help remove harmful iron particles that can eat your car’s paint, we use a clay bar treatment and iron remover.</li>
                        <li>We completely dry your car and to make sure we don’t miss a spot, we use an air blower to get the hard to reach places.</li>
                        <li>While drying the car, we apply wax or any other sealants to give it a nice protection and shine to your car, this should give protection anywhere from 3 to 6 months depending on the usage of your car.</li>
                        <li>Tires are dressed and windows are wiped completely streak free.</li>
                    </ol>
                </div>
                <h2>Interior:</h2>
                <div className="steps">
                    <ol>
                        <li>We start off by checking the car entirely to see if you have any loose items, as change, paperwork etc. Anything we find we put aside in a bag, and give back to you.</li>
                        <li>All of the floor mats are removed, vacuumed, shampooed, and extracted. Then we let them sit in the sun, to dry faster</li>
                        <li>Normally we do the door jambs, but since this is a complete detail, we added the step in the exterior services. </li>
                        <li>All of the plastic surfaces, from door panels, dashboard, etc. will be steamed cleaned with all-purpose cleaner. </li>
                        <li>To protect the plastic surfaces, we add a dressing to protect it from dust, bodily oils and the sun. We also want the interior to looking like you’re driving it off the lot. </li>
                        <li>A quick wipe down of the headliner and visors. </li>
                        <li>Thorough vacuum of the entire vehicle including the trunk. This includes crevices, between the seats the seams of the seats, etc.</li>
                        <li>Then we shampoo the seats and carpets, the process we do is meticulous. Most if not all of stains will be removed. </li>
                        <li>Windows will be thoroughly cleaned and give you that much needed clarity.</li>
                        <li>A final walk through of the vehicle to see if we missed anything. Our thought process is “if we can see it, then so can the customer”</li>
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
                            <h1>$250-350</h1>
                        </div>
                    </div>
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h4>4 doors (regular sedan)</h4>
                        </div>
                        <div className="service__price">
                            <h1>$350-450</h1>
                        </div>
                    </div>
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h4>Mid-size Sedan</h4>
                        </div>
                        <div className="service__price">
                            <h1>$420-520</h1>
                        </div>
                    </div>
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h4>SUV or Van</h4>
                        </div>
                        <div className="service__price">
                            <h1>$500-600</h1>
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
                        <h3>I’ve tried everything to remove the smell from my car, are you able to remove it?</h3>
                        <h5>Check out our Odor Removal Service.</h5>
                    </div>
                    <div className="question">
                        <h3>One of the seats is damaged, are you able to fix it?</h3>
                        <h5>This will be a repair issue and we suggest for you to look for an upholstery service. They would be the best bet to help you with that. </h5>
                    </div>
                    <div className="question">
                        <h3>What is traffic film?</h3>
                        <h5>It’s a collection of contaminants that over time gets on your car. It depends how often and where you drive your car that these contaminants get on it. It includes bugs, dirt, bird droppings, acid, grease, fluids from other cars, etc. </h5>
                    </div>
                    <div className="question">
                        <h3>How long does this take?</h3>
                        <h5>This usually takes between 5 and 8 hours. It depends on the condition of your vehicle.</h5>
                    </div>
                    <div className="question">
                        <h3>How long does the wax last?</h3>
                        <h5>Anywhere from to 3 to 6 months, and this all depends on how often you use your car, or if it’s outside on a consistent basis. </h5>
                    </div>
               </div>
               <h6 className='bottomtext'>You can visit our dedicated FAQ PAGE to find the answers that you are looking for. And if you can’t find the answer, you can always contact me, <a className='link' href='mailto:junior@adonisautodetailing.com'>junior@adonisautodetailing.com</a> and I will try to answer you as soon as possible.</h6>
           </div>
        </div>
    )
}
