import React from 'react'
import { Link } from 'react-router-dom';

import premierCar from '../../assets/premier-wash/premier-image.jpg';
import background from '../../assets/premier-wash/background.jpg';

import '../detail-services/car-services.styles.css';

export default function PremierWash() {
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
               <h1 className='car__servicepage__top__text bold'>The one and only Premier Car Wash Detail in Queens</h1>
               <h2 className='car__servicepage__top__text'>Maintaining your car’s paint at its finest!</h2>
           </div>
           <div className='car__servicepage__middle'>
               <div className='car__servicepage__middle__info'>
                   <h2 className="bold">Maintaining the exterior of your car at its finest</h2>
                    <p>
                        When it comes to washing your car, it should be one of the easiest things that almost anybody can do, don’t you
                        think? You can pay your family members kid $10, and they’ll grab a bucket, soap and hose, and gladly wash your
                        car for you.
                    </p>
                    <p>
                        You can also take it to the car wash for a little more than $10, you can get your car washed and dried in less than
                        10 minutes, given that there is no long line in the first place. On top of that, you notice that while the workers are
                        drying your car, they are using the same towels for your car and who knows how many cars they used that towel
                        before and after yours. Is that what you’re really looking for?
                    </p>
                    <p>
                        What we offer here is the Premier Car Wash; we’re looking to provide you with high quality service and results!
                        We also offer Deep Interior Detail to go along with this service or if you want, you can upgrade your wash to the
                        Adonis Car Wash
                    </p>
                    <p>
                        We will hand wash and remove all the traffic film that has been accumulating on your vehicle. When a car is
                        washed thoroughly aside from removing the traffic film, any previous protective coating is also being removed.
                        After that, we will use a clay bar to remove So a spray wax/sealant will then be applied to give it protection from
                        the sun and other contaminants, as well as giving it the Adonis shine you&#39;re looking for! Tires will then be cleaned
                        and dried with an air blower and dressed to complement the rest of the car.
                    </p>
                    <p>
                        This is considered a very deep cleaning of the car and we want the end result to look radiant!
                    </p>
               </div>
               <img className='car__servicepage__img' src={premierCar} alt='wash-wax-car'/>
           </div>
           <div className="our__process">
               <h1 className='bold'>This is our step by step process we take to wash your car</h1>
                <div className="steps">
                    <ol>
                        <li>Wheels: Wheel wells and your gas cap will be thoroughly cleaned.</li>
                        <li>Rinse car with water to remove superficial dirt/dust and also to loosen up any stains from bird droppings, etc.</li>
                        <li>Apply all-purpose cleaners and car soaps to remove all traffic film. This is a two-step process to ensure we clean your car thoroughly.</li>
                        <li>Use a clay bar to remove all of stuck on dirt and help make your car’s paint feel smoother.</li>
                        <li>We will then add spray wax to the entire car and dry it with a microfiber towel to make sure we get to take care of all spots.</li>
                        <li>As we are drying, we also air blow the crevices and spots we cannot reach.</li>
                        <li>During our last step, we will dress the tires to make it look shiny and also clean the exterior of the windows, leaving them streak free.</li>
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
                            <span>$40</span>
                        </div>
                    </div>
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h4>4 doors (regular sedan)</h4>
                        </div>
                        <div className="service__price">
                            <span>$55</span>
                        </div>
                    </div>
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h4>Mid-size Sedan</h4>
                        </div>
                        <div className="service__price">
                            <span>$70</span>
                        </div>
                    </div>
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h4>SUV or Van</h4>
                        </div>
                        <div className="service__price">
                            <span>$85</span>
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
                        <h3>What is traffic film?</h3>
                        <h5>It’s a collection of contaminants that over time gets on your car. It depends how often and where you drive your car that these contaminants get on it. It includes bugs, dirt, bird droppings, acid, grease, fluids from other cars, etc.</h5>
                    </div>
                    <div className="question">
                        <h3>How long does this take?</h3>
                        <h5>
                            This usually takes between 90 and 120 minutes. It depends on the condition of your vehicle.
                        </h5>
                    </div>
                    <div className="question">
                        <h3>How long does the wax last?</h3>
                        <h5>The spray wax that we use is for shine and protection and last a few weeks at most. If you’re looking for something longer, we recommend looking at our other service: Adonis Car Wash and Wax Detail.</h5>
                    </div>
                    <div className="question">
                        <h3>Do you remove scratches?</h3>
                        <h5>Yes, look at our scratch removal services for more info.</h5>
                    </div>
               </div>
               <h6>You can visit our dedicated FAQ PAGE to find the answers that you are looking for. And if you can’t find the answer, you can always contact me, Junior@adonisautodetailing.com and I will try to answer you as soon as possible.</h6>
           </div>
        </div>
    )
}
