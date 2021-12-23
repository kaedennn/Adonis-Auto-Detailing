import React from 'react'
import { Link } from 'react-router-dom';

import headlightrestorationimg from '../../assets/headlight-restoration/headlightrestoration.jpg';
import background from '../../assets/headlight-restoration/background.jpeg';

import '../detail-services/car-services.styles.css';

export default function HeadlightRestoration() {
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
               <h1 className='car__servicepage__top__text bold'>The only and best Headlight Restoration services in Queens</h1>
               <h2 className='car__servicepage__top__text'>Not only will your car look newer but restoring your headlights will improve visibility on the road.</h2>
           </div>
           <div className='car__servicepage__middle'>
               <div className='car__servicepage__middle__info'>
                   <p className="bold">
                       From foggy to clear!
                   </p>
                    <p>Have you noticed that that your headlight are starting to look hazy, foggy and gives you a hard time when driving on the road? Are you considering replacing them but are also looking to other alternatives?</p>
                    <p>You’ve come to the right spot then. We can restore your headlights by removing oxidation from your headlights. The oxidation comes from the clear coat wearing and tearing and that’s why it looks yellowish, so that’s why we have to sand and polish them. </p>
                    <p>Why don’t you consider our <a href='premier-wash'>premier car wash</a> or a <a href='complete-detail'>Complete Detail</a> services to go along with this service?</p>
               </div>
               <img className='car__servicepage__img' src={headlightrestorationimg} alt='wash-wax-car'/>
           </div>
           <div className="our__process">
               <h1 className='bold'>What steps do we take to get them to look better than its current state?</h1>
                <div className="steps">
                    <ol>
                        <li>Clean the headlights with an all-purpose cleaner.</li>
                        <li>Sand with 800 grit to remove the heavy oxidation.</li>
                        <li>Sand with 1000 grit to fix the prior steps scratches.</li>
                        <li>Sand with 1500 grit to refine the prior steps.</li>
                        <li>Sand with 2000 grit to refine the prior steps.</li>
                        <li>Sand with 3000 grit to refine the prior steps.</li>
                        <li>Buff with compound to any leftover sanding marks.</li>
                        <li>Polish with polishing compound to clear up the headlights.</li>
                        <li>Add a 1 year ceramic coating for protection.</li>
                    </ol>
                </div>
                <p className="bold">Price could vary depending on size and condition of the headlight</p>
           </div>
           <div className="pricing">
               <h1 className='bold uppercase underline'>Pricing</h1>
               <div className="cards__container">
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h3>2 doors (sports car)</h3>
                        </div>
                        <div className="service__price">
                            <h1>$120+</h1>
                        </div>
                    </div>
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h4>4 doors (regular sedan)</h4>
                        </div>
                        <div className="service__price">
                            <h1>$120+</h1>
                        </div>
                    </div>
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h4>Mid-size Sedan</h4>
                        </div>
                        <div className="service__price">
                            <h1>$120+</h1>
                        </div>
                    </div>
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h4>SUV or Van</h4>
                        </div>
                        <div className="service__price">
                            <h1>$120+</h1>
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
                        <h5>Depending on the condition, it could take up anywhere from 1 to 2 hours. If we need more time, we will let you know.</h5>
                    </div>
                    <div className="question">
                        <h3>How can I keep my headlights in better condition?</h3>
                        <h5>Try and keep in a garage or in area with a lot of shade and that will definitely help with less oxidation. Applying a wax or sealant on a consistent basis will also help. Since the material of headlights are not the same as the car itself, the clear coat won’t last as long. Especially since we live in Queens, and most parking spaces are located outside in the sun thus leaving it exposed.</h5>
                    </div>
                    <div className="question">
                        <h3>Can you fully restore my headlights? </h3>
                        <h5>This all falls under what’s the current condition. If it’s in a really bad state we could definitely improve it but making it look new would be a hard feat.</h5>
                    </div>
               </div>
               <h6 className='bottomtext'>You can visit our dedicated FAQ PAGE to find the answers that you are looking for. And if you can’t find the answer, you can always contact me, <a className='link' href='mailto:junior@adonisautodetailing.com'>junior@adonisautodetailing.com</a> and I will try to answer you as soon as possible.</h6>
           </div>
        </div>
    )
}
