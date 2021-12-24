import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet';

import './locations.styles.css';

export default function Queens() {
    useEffect(() => {
        document.title = "Auto Detailing Detailing - Conveniently located in the Heart of Queens, NY"
     }, []);

    return (
        <div>
            <Helmet>
                <meta name='description' content='Find out why more and more of our neighbors come to us for their detailing services, and how you could also benefit as well.'/>
            </Helmet>
            <div className='location__top'>
                <div className='overlay'/>
                <h1 className='location__top__text bold'>Adonis Auto Detailing Service rightfully located in Queens</h1>
                <h2 className='location__top__text'>Your car will have our undivided attention and the outcome will surpass your expectations.</h2>
            </div>
            <div className="location__middle">
                <div className='location__more__info'>
                    <h1>Queens, NY</h1>
                    <p>Hopefully by you being here we can help you resolve an issue that you’re trying to address with your car. </p>
                    <p>And be it what it may be, with the variety of services from like our <a href='deep-interior-detail'>Deep Interior Detail</a> or <a href='ceramic-coating'>Ceramic Coatings</a>, we strive to give the best car detailing service Queens has to offer.</p>
                    <p>Checkout the <a href='testimonials'>reviews</a> that our customers have given us.</p>
                    <p>We’re mainly a shop located service in Flushing, NYC and we also do mobile services in certain instances, which we are gladly happy to explain to you. For now we concentrate on Queens, NY with the goal to expand to the other boroughs.</p>
                </div>
                <div className="location__more__info2">
                    <h2>Nearby neighborhoods located close to our shop</h2>
                    <ul>
                        <li>Flushing</li>
                        <li>Rego Park</li>
                        <li>Corona</li>
                        <li>Jackson Heights</li>
                        <li>Astoria</li>
                        <li>Forest Hills</li>
                        <li>Bayside</li>
                        <li>Kew Gardens</li>
                        <li>Jamaica</li>
                        <li>Briarwood</li>
                        <li>Fresh Meadows</li>
                        <li>Jamaica Estates</li>
                        <li>College Point</li>
                        <li>Whitestone</li>
                        <li>Utopia</li>
                    </ul>
                </div>
            </div>
            <div className="location__faq">
                <h1 className='bold uppercase underline'>General Questions</h1>
                <div className="location__questions">
                    <div className="question">
                        <h3>What Services do you offer?</h3>
                        <h5><a href='complete-detail'>Complete Detail</a> - This is a combination of both the Deep Interior Detail and Premier Car Wash. This service is ideal for everyday drivers, or for cars that haven’t been cleaned in a long time.  A deep clean inside and outside will give your car fresh look.</h5>
                        <h5><a href='paint-enhancement'>Paint Enhancements</a> - Tired of seeing swirls marks, small scratches or the paint of your car is dulling? Let’s get your car’s vehicle paint, new life again!</h5>
                        <h5><a href='deep-interior-detail'>Deep Interior Detail</a> - Now the deep interior detail is for those that use the car on an everyday basis, or have children and spills happen, or you bought this car from the previous owner who didn’t take care of the vehicle, etc. A protective dressing will be put on all plastic surfaces, giving it an amazing look in the inside and feeling fresh once you step inside your car.</h5>
                    </div>
                    <div className="question">
                        <h3>Where are you Currently Located?</h3>
                        <h5>We are located in 130-7 58th ave Flushing, NY 11355. Please book with us, since we are an appointment only type of service. This is not a shop its private house where I conduct my business and I rent it to work out of.</h5>
                    </div>
                    <div className="question">
                        <h3>Do you just service customers in Queens?</h3>
                        <h5>We welcome all potential customers from the 5 boroughs and Nassau County. If you’re able to come here without any problem and willing to wait maximum 2 hours, then by all means go for it.</h5>
                    </div>
                    <div className="question">
                        <h3>Can you come to me?</h3>
                        <h5>Yes, but we would need access to water and electricity. If we can’t get access because of city limitations, we can come to you and pick up and drop off your car to you if you see that as an option.</h5>
                    </div>
                    <div className="question">
                        <h3>What type of payments do you accept?</h3>
                        <h5>Currently we accept cash or any of the online payments methods, quickpay zelle, venmo or cashapp. Once we agree on a date and time, we do ask for a non-refundable $50 booking fee. This ensures that both parties are on the same page, and we hold your place. If for whatever reason, you can’t make it, or weather doesn’t permit the service, we will reschedule your appointment at the next availability date. </h5>
                    </div>
                    <div className="question">
                        <h3>Can I come today?</h3>
                        <h5>This is by appointment only. The reason is like that because we do a car at a time, and if you come the day off, there could be a chance we are working on somebody else’s car. Feel free to request a booking with us today!</h5>
                    </div>
                    <div className="question">
                        <h3>How long the detail services lasts?</h3>
                        <h5>It all depends on what type of detail service you choose. If you choose a deep detailing from 4 to 8 hours, or the  Adonis car wash & clay bar detail, 2 to 4 hours. If you decide to combine both of the services, it should take around 6 to 10 hours to detail both the interior and exterior. And engine bay cleaning typically takes 45 to 90 minutes; a basic car detail around an hour or two, the premier car wash could take between 60 to 90 minutes. We will let you know, once you set up an appointment with us. </h5>
                    </div>
                </div>
            </div>
            <div className="google__map">
                <iframe className='google-map' title='queens-google-map' width="1080" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Queens,%20New%20York&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
        </div>
    )
}
