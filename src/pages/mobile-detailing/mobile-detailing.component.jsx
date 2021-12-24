import React, { useEffect } from 'react'

import '../locations/locations.styles.css';
import background from '../../assets/mobile-detailing/background.jpg';

export default function MobileDetailing() {
    useEffect(() => {
        document.title = "Auto Detailing Detailing - Mobile Detailing services all over Queens"
     }, []);

    return (
        <div>
            <div className='location__top' style={{
                background: `url(${background}) no-repeat center center fixed`,
                backgroundSize: 'cover',
                WebkitBackgroundSize: 'cover',
                MozBackgroundSize: 'cover',
                OBackgroundSize: 'cover'
            }}>
                <div className='overlay'/>
                <h1 className='location__top__text bold'>Adonis Auto Detailing is now Mobile in Queens, NY</h1>
                <h2>Making your day a bit easier by going to you with our Mobile services in Queens</h2>
            </div>
            <div className="location__middle">
                <div className='location__more__info'>
                    <h1>Mobile Detailing Information</h1>
                    <p>We want your experience with us to be convenient and get to detail your car as soon as possible.</p>
                    <p>And by convenient we mean that we have a few options that we can offer when it comes being Mobile.</p>
                    <p>Our Mobile Services are for those interested in a <a href='complete-detail'>Complete Detail</a> and none of the ADD-ON’s will be serviced alone. Or for let’s say you need a <a href='deep-interior-detail'>Deep Interior Detail</a>, you can combine with a <a href='headlight-restoration'>Headlight Restoration</a>. </p>
                    <p>If we are coming to you, we do ask for us to have access to electricity and water. We come prepared with a hose and electrical cords, so no need to be worried about that. </p>
                    <p>With that being said, we are fully aware that we live in Queens, we’re part of big city. A lot of us live in buildings and parking is hard to find parking close to the building, much less to electricity and water.</p>
                    <p>We are mainly a shop based, so we want to let you know we can come to you to pick up your car, work it on our shop and return it to you once we are done. All at your convenience, that way you don’t have to deal taking mass transportation, or an Uber or Lyft and being stuck in traffic</p>
                </div>
                <div className="location__more__info2">
                    <h2>Nearby neighborhoods we service:</h2>
                    <ul>
                        <li>Bayside</li>
                        <li>Kew Gardens</li>
                        <li>Jamaica</li>
                        <li>Briarwood</li>
                        <li>Fresh Meadows</li>
                        <li>College Point</li>
                        <li>Whitestone</li>
                        <li>Utopia</li>
                        <li>Flushing</li>
                        <li>Rego Park</li>
                        <li>Corona</li>
                        <li>Jackson Heights</li>
                        <li>Astoria</li>
                        <li>Forest Hills</li>
                    </ul>
                </div>
            </div>
            <div className="location__faq">
                <h1 className='bold uppercase underline'>General Questions</h1>
                <div className="location__questions">
                    <div className="question">
                        <h3>Will my seats be wet when you’re done?</h3>
                        <h5>When your vehicle is returned to you, about 80% to 90% of the seats will be dried. The weather could be a big factor, so if the weather is warmer, then it will dry faster but if colder then it could take a few days. We have an extractor and air blower, so no need to panic.  We will also give you some tips to help it dry faster once you take it back. </h5>
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
            </div>
            <div className="google__map">
                <iframe className='google-map' title='queens-google-map' width="1080" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Queens,%20New%20York&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
        </div>
    )
}
