import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './homepage.styles.css';

import homepagecar from '../../assets/homepage-car.jpg';
import Service from '../../components/serviceslist/services.component';
import Addons from '../../components/addonslist/addons.component';

import {AiFillStar} from 'react-icons/ai';

export default function Homepage() {
    useEffect(() => {
        document.title = "Auto Detailing Detailing - Dedicated and Thorough Auto Detailing in Queens, NY"
     }, []);

    return (
        <div className='homepage__container'>
            <Helmet>
                <meta name='description' content='Getting your entire car to the state it deserves to be in. We’re Queens’s #1 best auto detailing service.' />
            </Helmet>
           <div className='homepage__top'>
               <div className='overlay'/>
               <h1 className='homepage__top__text bold'>Dedicated and Thorough Auto Detailing in Queens, NY</h1>
               <h2 className='homepage__top__text'>With over 75+ five star reviews from our customers.</h2>
           </div>
           <div className='homepage__middle'>
               <div>
                <h2 className='bold'>Attentive and Communicative Queens Auto Detailer</h2>
                <p>
                Aren’t you tired of the lack of quality work presented to you by our local car washes in Queens?
                </p>
                <p>
                    You get to the car wash and see a long line for them to service your car.
                    Sometimes you have to wait there for an hour at most until someone comes to you and asks you what service you want, without explaining how the service works or asking if you have any concerns.
                </p>
                <p>
                    In the end, you join them drying off your car because you know they have to work on the other
                    ten cars coming behind you, and won’t do that great of a job. Well here at Adonis Auto
                    Detailing Services, we offer the total opposite of that, we know this is time dedicated for your car.
                </p>
                <p>
                    If you’re looking for an auto detailer in Queens, who can answer your questions and also
                    provide the much needed service to your vehicle, then this is the place where you can do all of
                    that and much more..
                </p>
                <p>
                    You can book an appointment with us at any time, choose the day and time and express your
                    concerns. You can always call and text at <a className='white' href='tel:3478618315'>(347)861-8315</a>, or if your busy email us,
                    <a className='white' href='mailto:junior@adonisautodetailing.com'> Junior@adonisautodetailing.com</a>. We will answer as soon as we can and get the process going.
                    Once we set up the appointment, the day of your detailing, we will go over with you our
                    process and at the same time you can point out any concerns.
                </p>
                <p>
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
           <div className="reviews">
                <div className='services__title'>
                    <h1>Testimonials</h1>
                </div>
                <div className="reviews__grid__homepage">
                    <div className='reviews__container'>
                        <h2 className='name'>Kelly Dickson</h2>
                        <div className="rating">
                            <AiFillStar className='star'/>
                            <AiFillStar className='star'/>
                            <AiFillStar className='star'/>
                            <AiFillStar className='star'/>
                            <AiFillStar className='star'/>      
                        </div>
                        <p>
                            I brought my 2014 Prius to Adonis
                            after hurricane Ida flooded our basement
                            parking garage and ruined the car interior. They
                            were able to get my car in right away and they
                            did an excellent job. They exceeded my all my
                            expectations. They even got out old stains that
                            other detailers couldn't handle! Junior was also
                            super communicative and friendly. Great work and
                            a great experience!
                        </p>
                        <Link className='reviews__button' to='testimonials'>Read More</Link>
                    </div>
                    <div className='reviews__container'>
                        <h2 className='name'>Andy K</h2>
                        <div className="rating">
                            <AiFillStar className='star'/>
                            <AiFillStar className='star'/>
                            <AiFillStar className='star'/>
                            <AiFillStar className='star'/>
                            <AiFillStar className='star'/>      
                        </div>
                        <p>Because of hurricane Ida my car
                            floor, mats, and other parts of the interior were
                            soaked. I called and spoke with Junior who was
                            very nice and gave me an in-depth breakdown of
                            the process, timeframe, along with the cost, Just
                            to know what I could expect. He did also mention
                            depending on the condition and how bad the
                            damage was he couldn't 100% guarantee it would
                            be gone but if there was any issues with the smell
                            after 1 week of completion we could bring it back
                            and he'll work on it again free of charge.
                            A
                            I set up an appointment with him and brought my
                            car to his place the day of. He took a look at my
                            car and gave me an exact price and timeframe of
                            when it could be completed. It was exactly what
                            he had said on our initial phone call. It took about
                            3 days.
                            During that time he kept me updated(call and text)
                            and in the loop throughout the whole process
                            which made me feel at ease.
                            He was true to his word and the job was
                            completed within the 3 days he anticipated. The
                            day I picked my car up, I took a look around the
                            car and the smell of mildew was completely gone,
                            the floors and armrest had been dried, and they
                            even cleaned my car.
                            Junior and his team went above and beyond
                            and kept me updated along the way. He is such
                            a great guy too. Give him a call to inquire. You
                            definitely won't be disappointed.
                        </p>
                        <Link className='reviews__button' to='testimonials'>Read More</Link>
                    </div>
                    <div className='reviews__container'>
                        <h2 className='name'>Solar H</h2>
                        <div className="rating">
                            <AiFillStar className='star'/>
                            <AiFillStar className='star'/>
                            <AiFillStar className='star'/>
                            <AiFillStar className='star'/>
                            <AiFillStar className='star'/>      
                        </div>
                        <p>
                            Couldn't be more pleased with the service provided by
                            Adonis Auto Detailing! We urgently needed an engine bay
                            cleaning due to a recently discovered infestation. It's our
                            first time with Adonis and after calling, Junior was able to
                            squeeze us in on the same day. We really appreciate how
                            accommodating he was with the timing. I was at work
                            trying to coordinate an appointment for my father, and
                            Junior's communication made everything much easier.
                            The engine bay cleaning was thorough and detailed-
                            from the picture you can tell that he did a wonderful job.
                            We were also dealing with odor coming from the engine
                            bay, which the cleaning really helped with. He called me
                            to translate for my father, and explained how to clean
                            the filter area to keep the car interior smelling fresh. He
                            gave great tips, went above and beyond and provided
                            excellent service, We will definitely return in the future
                            (ideally infestation-free) when we need work done. Great
                            place, nice guy- highly recommend getting your car
                            serviced with Adonis!
                        </p>
                        <Link className='reviews__button' to='testimonials'>Read More</Link>
                    </div>
                </div>
           </div>
           <div className='homepage__addons__container'>
               <div className='addons__title'>
                   <h1>Add-ons</h1>
               </div>
               <div className='homepage__addons'>
                   <Addons/>
               </div>
           </div>
           <div className='homepage__moreinfo'>
           <div className='overlay'/>
               <div className="more__info__text">
                    <h1 className='overlay__text bold'>A bit more information about the Auto Detailing Services</h1>
                    <h5 className='overlay__text'>
                    We currently welcome all of New York City and Nassau County to try out our services. Yet since
                        New York City is a big city, we are currently based in Queens. We look forward to being able to
                        expand to more locations or become Mobile and service our neighboring boroughs and for
                        them to get to know the Adonis Auto Detailing brand!
                    </h5>
                    <h5 className='overlay__text'>
                        We know how hard is too find a place where your car can be thoroughly cleaned, even in this
                        big city where you can find almost anything! We look forward in servicing your vehicle and we
                        will do our best to make you happy!
                    </h5>
                    <h5 className='overlay__text' >
                        We try to pay attention to every single detail of your car and put ourselves in your shoes to see
                        if you’re satisfied with the work. Yet, as humans, we could be prone to missing something, so if
                        you see something that you’re not happy with, we will fix as soon as possible.
                    </h5>
                    <h5 className='overlay__text'>
                        Remember, we are here to enhance your vehicle from its previous state, to the realm of reality.
                        If it’s something, that we can’t fix, we will tell you beforehand or during the detail.
                    </h5>
                </div>
           </div>
        </div>
    )
}
