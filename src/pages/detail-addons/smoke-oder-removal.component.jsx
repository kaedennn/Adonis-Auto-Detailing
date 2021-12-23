import React from 'react'
import { Link } from 'react-router-dom';

import smokeoderremoval from '../../assets/smoke-oder-removal/smoke-oder-removal.jpg';
import background from '../../assets/smoke-oder-removal/background.jpg';

import '../detail-services/car-services.styles.css';

export default function SmokeRemoval() {
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
               <h1 className='car__servicepage__top__text bold'>Best Smoke Odor Removal Services in Queens, NY</h1>
               <h2 className='car__servicepage__top__text'>Solely focusing on eliminating the Smoke Odor every inch to the realm of reality</h2>
           </div>
           <div className='car__servicepage__middle'>
               <div className='car__servicepage__middle__info'>
                    <h2 className="bold">Removing that nasty cigarette smell!</h2>
                    <p>Did you recently buy a car with a heavy smoke odor and your looking to get rid of the smell? Or are you looking to quit smoking and one thing that’s holding you back is going in your car and smelling the smoke again, causing you to go back to your old habit? </p>
                    <p>
                        As you may know smoking in the car releases the tar, nicotine and other particles all over the car. If not taken care of right away they start to build up thus making your car starting having that smoke odor all over the place. As the person is in the car either sitting or driving or having the ac running while smoking all of those smoke particles are going all over the car, every corner imaginable.
                    </p>
                    <p>
                        With that being said, we want you to have a few things in mind when considering our services. It all comes down how long the current or previous owner has been smoking in the car and how often it was smoked in and that will factor to see if we’re going to be able to eliminate the odor.
                    </p>
                    <p>
                        So if it’s severe, we will be able to eliminate most of the odor but it may not be 100% and for that you may have to take the other drastic measures such as replacing some of the fabric in your car if you want 100% eliminated. 
                    </p>
                    <p>
                        In order to make sure we do the best job possible we’re going to need keep your car about 2 or 3 days. It will be the Deep Interior Detail but twice than that because we’re going to have to go over heavily soiled areas due to tar and nicotine particles. 
                    </p>
                    <p>
                    We want to make sure the smell is completely gone so we have to make sure we take the necessary steps to get the best outcome as possible. 
                    </p>
                    <p>
                    While waiting for your car to be ready, why don’t you consider doing the Paint Enhancement or the Adonis Wash and Wax services? Also, after the service is done, we highly recommend not turning your ac and getting your cabin filter changed as soon as possible to avoid contaminating your vehicle again.
                    </p>
               </div>
               <img className='car__servicepage__img' src={smokeoderremoval} alt='wash-wax-car'/>
           </div>
           <div className="our__process">
               <h1 className='bold'>Take a look at the steps that are necessary to get this job done. </h1>
                <div className="steps">
                    <ol>
                        <li>Any of loose items underneath the seats, cup holders or door panels that we deem garbage, will be disposed. If we find loose change, small personal belongings, paperwork etc., those types of items we will put in a separate bag and given to you at the end of the service.</li>
                        <li>Remove all floor mats, vacuum them thoroughly, then shampooed and extracted. </li>
                        <li>Clean the door jams and door panels. We like to clean from the outside in, so when we are cleaning the door jams, any excessive dirt would most likely fall in the interior and be easier for us to clean.</li>
                        <li>Exfoliate the headliners, visors and seatbelts and any other hard to reach to reach areas to help loosen up the accumulated particles.</li>
                        <li>Thoroughly cleaning all of the interior plastic surfaces. This includes dashboard, cup holders, steering wheel, etc.</li>
                        <li>Thorough vacuum of the entire vehicle including the trunk.</li>
                        <li>The carpets and seats will be shampooed and extracted. If seats are leather, they will be exfoliated as well. </li>
                        <li>Cleaning windows and glass from the inside only, you’ll be able to have amazing clarity.</li>
                        <li>Using the ozone generator that will help eliminate all if not most of the odor. </li>
                        <li>Dressing the interior and seats (if necessary) to give it a much needed protection.</li>
                        <li>A final walk through of the vehicle to see if we missed anything. Our thought process is “if we can see it, then so can the customer.”</li>
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
                            <span>$250-350</span>
                        </div>
                    </div>
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h4>4 doors (regular sedan)</h4>
                        </div>
                        <div className="service__price">
                            <span>$300-400</span>
                        </div>
                    </div>
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h4>Mid-size Sedan</h4>
                        </div>
                        <div className="service__price">
                            <span>$350-450</span>
                        </div>
                    </div>
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h4>SUV or Van</h4>
                        </div>
                        <div className="service__price">
                            <span>$400-500</span>
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
                        <h3>What products do you use?</h3>
                        <h5>We use products and equipment that tackles on reducing and eliminating the smoke odor.     </h5>
                    </div>
                    <div className="question">
                        <h3>Will my seats be wet or will I smell any chemicals once the service is complete?</h3>
                        <h5>
                        That’s one of the reasons why we ask to keep the car for more than a day. We want to make sure the seats and carpets are completely dried and for your car to be aired out.
                        </h5>
                    </div>
                    <div className="question">
                        <h3>Will you be able to eliminate the odor?</h3>
                        <h5>This all depends on the state of the car and how often it was smoked in or how old it is. We can help eliminate most of the odor</h5>
                    </div>
               </div>
               <h6>You can visit our dedicated FAQ PAGE to find the answers that you are looking for. And if you can’t find the answer, you can always contact me, Junior@adonisautodetailing.com and I will try to answer you as soon as possible.</h6>
           </div>
        </div>
    )
}
