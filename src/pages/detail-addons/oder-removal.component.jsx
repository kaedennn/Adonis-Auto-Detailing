import React from 'react'
import { Link } from 'react-router-dom';

import oderremovalimg from '../../assets/oder-removal/oder-removal-photo.jpg';
import background from '../../assets/oder-removal/background.jpg';

import '../detail-services/car-services.styles.css';

export default function OderRemoval() {
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
               <h1 className='car__servicepage__top__text bold'>Mold, Mildew or Foul smells, we offer Queens #1 Odor Removal.</h1>
           </div>
           <div className='car__servicepage__middle'>
               <div className='car__servicepage__middle__info'>
                   <p className="bold">
                   Does your car have a leak, or water seeped in your carpets or seats and causing a bad smell? We can help you out with that.
                   </p>
                    <p>
                        It’s happened to the best of us. Have you ever left your car windows open and a storm caught you off guard and soaked your car? Or maybe your car got flooded during a storm? Sometimes not because of your doing, you have leak in your and its damaging your seats or carpets? Or maybe spilled something and that also got seeped in car’s carpet.
                    </p>
                    <p>
                        As you know, not removing water immediately causes that bad odor in your car. A combination of being enclosed in small area,  the sun baking in the water and not doing anything about it right away causes bacteria to grow and cause the mold and mildew to grow.
                    </p>
                    <p>
                        The time to take action is now; you need to get rid of the sitting/standing water from your car. Get an old towel or a few, and try to soak up as much as possible. Leave your windows open if possible to let air circulate in your car.
                    </p>
                    <p>
                        Yes, we totally understand that you live Queens and you have a busy life and are unable to leave the windows open for obvious reasons. So this is where we can help you out.
                    </p>
                    <p>
                        Have in mind every car’s situation is different and the process and prices varies from car to car. For instance if you have a car with a smoke odor situation, we recommend our smoke odor removal.
                    </p>
               </div>
               <img className='car__servicepage__img' src={oderremovalimg} alt='wash-wax-car'/>
           </div>
           <div className="our__process">
               <h1 className='bold'>Step by step process of oder removal</h1>
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
                <p className='bold'>Please have in mind that most likely we’re going to need your car possibly more than a day</p>
                <p>First of all, once you bring the car to us we’ll asses with you the problem that your car is having. You’re going to need our Deep Interior Detail and the price will be determined by size and condition of car. </p>
                <p>And the reason why you need that service is because there is no point of using the ozone generator if the car is not clean. It defeats the purpose and the smell might linger. </p>
                <p>Let’s say for instance if your car got flooded or has leak somewhere, depending on the severity, were going to have to extract your car. We will have to price accordingly just for extracting, for severe cases anywhere from $50 and up.</p>
                <p>If your car has mold/mildew already and the state of the car is bad your car need to be presoaked with disinfectant, we will have to determine and price accordingly.</p>
                <p>If you spilled something that emits a strong odor, again everything is determined by the severity.</p>
                <p>Once were done cleaning your car, we’ll inspect the affected areas, if the carpets and seats are saturated we’re going to dry them as best as possible. We have an air blower and leave the doors of your car open to let the sun help expedite the drying process. Please have in mind the weather is a big factor, especially in the winter time.</p>
                <p>Once the carpets and seats are fully dried, then we put the ozone generator in the car.  Depending on how strong the odor is, we run the machine for an hour or so. After that the machine turns off and we let it sit for an hour closed and then we open the car and let it air out.</p>
                <p>We do one final inspection, quick vacuum and let you know once your car is ready.</p>
                <p className="bold">Look into our Adonis Wash and Wax Service if you need your exterior done as well. </p>
                <p className="bold">This is the prices for an odor removal. It’s a deep interior Detail (depending on condition of car) plus ozone generator, which is $100. This price does not include extracting if the carpets are in severe condition. It’s usually $50+.</p>
           </div>
           <div className="pricing">
               <h1 className='bold uppercase underline'>Pricing</h1>
               <div className="cards__container">
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h3>2 doors (sports car)</h3>
                        </div>
                        <div className="service__price">
                            <span>$250-300</span>
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
                        <h3>How long does this take?</h3>
                        <h5>It all depends on the condition of the car. Expect us to the keep the car up to more than one day. The day you bring over your car, we’ll notify you.</h5>
                    </div>
                    <div className="question">
                        <h3>Where are you located?</h3>
                        <h5>
                        Our location is 130-17 58th ave Flushing, NY 11355.
                        </h5>
                    </div>
                    <div className="question">
                        <h3>Will the bad odor go away completely?</h3>
                        <h5>We take the necessary steps to ensure that the odor goes away completely. Before contacting you, we thoroughly inspect the car to see if it’s up to our standards. </h5>
                    </div>
               </div>
               <h6>You can visit our dedicated FAQ PAGE to find the answers that you are looking for. And if you can’t find the answer, you can always contact me, Junior@adonisautodetailing.com and I will try to answer you as soon as possible.</h6>
           </div>
        </div>
    )
}
