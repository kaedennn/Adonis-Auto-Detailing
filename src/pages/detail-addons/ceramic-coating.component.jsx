import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import ceramiccoatingimg from '../../assets/ceramic-coating/ceramiccoatingimg.jpg';
import background from '../../assets/ceramic-coating/background.jpeg';

import '../detail-services/car-services.styles.css';

export default function CeramicCoating() {
    useEffect(() => {
        document.title = "Adonis Auto Detailing - Get the shiniest paint in Queens, NY"
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
               <h1 className='car__servicepage__top__text bold'>Get the best Protection for your Car’s paint with a Ceramic Coating right in Queens, NY</h1>
               <h2 className='car__servicepage__top__text'>Now offering the latest in Paint Protection specifically for your car</h2>
           </div>
           <div className='car__servicepage__middle'>
               <div className='car__servicepage__middle__info'>
                   <p className="bold">Are you ready to protect your vehicle and make it shine!</p>
                    <p>For some reason something brought you to this page and you may have heard of ceramic coating but you’re not quite sure of what it is. Think of it as thick durable disposables gloves that can last quite a while if it’s in the right condition. </p>
                    <p>It’s an extremely hard layer of Silicon Dioxide (glasslike) and hyper durable that can be cured on the exterior of your vehicle’s paint, glass and other surfaces even including the interior.</p>
                    <p>Ceramic coatings give a glossy rich appearance but the best part about it, depending on what you choose it can last anywhere from 1 to 7+ years. </p>
               </div>
               <img className='car__servicepage__img' src={ceramiccoatingimg} alt='wash-wax-car'/>
           </div>
           <div className="our__process">
               <h1 className='bold'>So how does it work?</h1>
                <div className="steps2">
                    <p>In order to get the best possible outcome, we need to fully decontaminate the exterior of the car. We use the same methods as in the <a href='adonis-wash-and-wax'>Adonis Wash and Wax</a> and we would recommend polishing to get the best possible results. </p>
                    <p>After that we apply the ceramic coating and let it cure for optimum results. By curing, we want to let it sit in an enclosed place where no contaminants are affecting the process.</p>
                    <p>It’s designed to protect it from anything that touches the paint such as traffic film, salt, pollen, rain, bugs, bird droppings, surface and light scratches etc. We all know the kind of crazy weather we have in Queens, so this is a big plus for your car’s paint.</p>
                    <p>Another benefit is that it’s hydrophobic on all of the surfaces, and it makes it easier to clean and wash.</p>
                    <p>The good thing about getting this service is that if you take good care of your car on a consistent basis, then your car’s paint will last longer and still have the that glossy look for years to come.</p>
                </div>
                <h1 className="bold">What are some misconceptions about Ceramic Coatings?</h1>
                <div className="steps2">
                    <p>Although the coatings are last longing, awesome glossiness, and durable, it has its limitations. </p>
                    <p>This does not mean that your car is scratch proof. For instance when washing your car properly, while wiping the car with a mitt or drying it with a towel we basically creating fine scratches or swirl marks.</p>
                    <p>The ceramic coating is the sacrificial layer against that among other stuff. Yet, if you were to key your car or someone was to hit with a bike or something similar the coating will provide not provide that protection.</p>
                    <p>The same goes with the rock chips, the ceramic coating will not protect it from such. We would recommend for you to look into Paint Protection Film (PPF).</p>
                    <p>It is highly recommended to properly maintain your vehicle by washing it consistently so it can last what its intended for and boosts it durability. We can talk about Maintenance Services to keep your car looking fresh on a consistent basis.</p>

                </div>
           </div>
           <div className="pricing">
               <h1 className='bold uppercase underline'>Pricing</h1>
               <h5 className="bold">This all depends on what type of ceramic coating durability you want and it’s not included with paint correction pricing.</h5>
               <div className="cards__container">
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h3>2 doors (sports car)</h3>
                        </div>
                        <div className="service__price">
                            <h1>$300-$400</h1>
                        </div>
                    </div>
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h4>4 doors (regular sedan)</h4>
                        </div>
                        <div className="service__price">
                            <h1>$350-$450</h1>
                        </div>
                    </div>
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h4>2 rows (Mid-size Sedan)</h4>
                        </div>
                        <div className="service__price">
                            <h1>$400-$500</h1>
                        </div>
                    </div>
                    <div className="pricing__card">
                        <div className="pricing__card__title">
                            <h4>3 rows (SUV or Van)</h4>
                        </div>
                        <div className="service__price">
                            <h1>$450-$550</h1>
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
                        <h3>How long do I have to wait to be able to wash my car?</h3>
                        <h5>We recommend to not wash your car for two weeks after coating installation. This will allow the coating to fully cure as best as possible.</h5>
                    </div>
                    <div className="question">
                        <h3>Do you need to wash, prep and polish the car prior to installing the coating?</h3>
                        <h5>Yes, because it will defeat the purpose if there are tons of imperfections on your car paint. </h5>
                    </div>
                    <div className="question">
                        <h3>What type of ceramic coatings do you offer?</h3>
                        <h5>For now we offer 1 year and 3 to 5 year ceramic coatings.</h5>
                    </div>
               </div>
               <h6 className='bottomtext'>You can visit our dedicated FAQ PAGE to find the answers that you are looking for. And if you can’t find the answer, you can always contact me, <a className='link' href='mailto:junior@adonisautodetailing.com'>junior@adonisautodetailing.com</a> and I will try to answer you as soon as possible.</h6>
           </div>
        </div>
    )
}
