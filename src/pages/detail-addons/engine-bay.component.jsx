import React from 'react'
import { Link } from 'react-router-dom';

import enginebayphoto from '../../assets/engine-bay/enginebayphoto.jpg';
import background from '../../assets/engine-bay/background.jpg';

import '../detail-services/car-services.styles.css';

export default function EngineBay() {
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
               <h1 className='car__servicepage__top__text bold'>Cleaning your engine bay back to life here in Queens, NY</h1>
               <h2 className='car__servicepage__top__text'>Making your engine look like you’re driving it off the lot for the first time</h2>
           </div>
           <div className='car__servicepage__middle'>
               <div className='car__servicepage__middle__info'>
                   <p className="bold">
                       Are you ready to drive like its brand new?
                   </p>
                    <p>
                        Ever open up the hood of your car, and you’re like “Whoa, it’s very dusty!” Yet you don’t know how to clean it and
                        are afraid of getting it damaged? Leave it to us, the professionals to get it cleaned for you. In order to get this
                        detailed done, it must accompanied by other services such as <a href='deep-interior-detail'>Deep Interior Detail</a> or <a href='premier-wash'>Premier Car Wash</a>.
                    </p>
                    <p>
                        We will inspect the engine bay first to make sure there isn’t any damage that we can do to the car. If you know
                        that there are any leaks, we suggest you to take it to a repair shop first so that the repairs can be made and we
                        avoid harm to the car or any person in general.
                    </p>
               </div>
               <img className='car__servicepage__img' src={enginebayphoto} alt='wash-wax-car'/>
           </div>
           <div className="our__process">
               <h1 className='bold'>Here are the steps we take to clean the engine bay and hopefully it’s the right option for you.</h1>
                <div className="steps">
                    <ol>
                        <li>Full inspection of the engine. We make sure there isn"t anything that can damage the car or hurt anyone during or after the process.</li>
                        <li>Vacuum any dust that or leaves on the engine.</li>
                        <li>Pre-rinse with water most of the dust will be removed and this will help clean the engine with ease.</li>
                        <li>Apply all-purpose cleaner or degreaser (depending on the condition of the car.) We don’t over saturate the engine with water or the all-purpose cleaners, rest assured. It’ll sit for a while, and then we will agitate with different brushes. There are some for the surfaces we can reach and there are other brushes for hard to reach areas.</li>
                        <li>We make sure we agitate the engine bay thoroughly from the least dirty parts to the real grimy areas.</li>
                        <li>We rinse the engine and since we agitated before, most if not all of the dirt should come off with ease.</li>
                        <li>Then we dry the car with microfiber towels and air blower to dry off any water left.</li>
                        <li>The engine is then turned on to make sure everything is ok. If there are any issues, we will notify you as soon as possible (there shouldn’t be).</li>
                        <li>After the engine is fully dried, we will apply dressing and it will give it a beautiful shine. This should take us between 45 minutes to 90 minutes.</li>
                    </ol>
                </div>
           </div>
           <div className="pricing">
               <h1 className='bold uppercase underline'>Pricing</h1>
               <div className="cards__container">
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h3>All size cars</h3>
                        </div>
                        <div className="service__price">
                            <h1>$85</h1>
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
                        <h3>How long does this take?</h3>
                        <h5>It takes anywhere from 45 to 90 minutes depending on the condition of the engine.</h5>
                    </div>
                    <div className="question">
                        <h3>How often should I get my engine bay cleaned?</h3>
                        <h5>The more you use your car, the dirtier your engine will get due to the use you are giving it. Our best suggestion is to google your vehicle type and see what recommendations they give or contact the makers of the vehicles.</h5>
                    </div>
               </div>
               <h6 className='bottomtext'>You can visit our dedicated FAQ PAGE to find the answers that you are looking for. And if you can’t find the answer, you can always contact me, <a className='link' href='mailto:junior@adonisautodetailing.com'>junior@adonisautodetailing.com</a> and I will try to answer you as soon as possible.</h6>
           </div>
        </div>
    )
}
