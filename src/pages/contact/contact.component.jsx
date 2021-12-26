import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';

import background from '../../assets/contact/background.jpeg';

import './contact.styles.css';

export default function Contact() {
    useEffect(() => {
        document.title = "Adonis Auto Detailing - Contact"
     }, []);

    return (
        <div className='contact__container'>
            <Helmet>
                <meta name='description' content='Just be ready for an awesome experience when it comes to servicing our customers! You can call, text, email us, and we’ll get back to you as soon as possible.'/>
            </Helmet>
            <div className='contact__top' style={{
            background: `url(${background}) no-repeat center center fixed`,
            backgroundSize: 'cover',
            WebkitBackgroundSize: 'cover',
            MozBackgroundSize: 'cover',
            OBackgroundSize: 'cover',
            backgroundAttachment: 'scroll'
        }}>
               <div className='overlay'/>
               <h1 className='contact__top__text bold'>Feel Free To Contact Us</h1>
               <h2 className='contact__top__text'>Any questions, concerns you can always call/text/email us and we will get back to you as soon as possible. Fill out the form to set up an appointment.</h2>
            </div>
            <div className="contact__form__container">
                <h1 className='bold uppercase'>Send us a message</h1>
                <div className="contact__form">
                    <form name='contact' method='POST' action='../success/success.component.jsx' data-netlify='true' netlify-honeypot="bot-field">
                        <input type="hidden" name="form-name" value="contact" />
                        <h6 className='bold top20'>Information:</h6>
                        <label className='bold' for='fname'>Full Name</label>
                        <input id='fname' name='fname' type='text' placeholder='Enter your full name' required />
                        <label className='bold' for='email'>Email</label>
                        <input id='email' name='email' type='email' placeholder='Enter your email' required />
                        
                        <h6 className='bold top20'>Vehicle Info:</h6>
                        <label className='bold' for='make'>Make</label>
                        <input id='make' name='make' type='text' placeholder='ex. Honda'/>
                        <label className='bold' for='model'>Model</label>
                        <input id='model' name='model' type='text' placeholder='ex. Civic'/>
                        <label className='bold' for='year'>Year</label>
                        <input id='year' name='year' type='text' placeholder='ex. 2021'/>
                        
                        <h6 className='bold top20'>Services:</h6>
                        <label className='check-label'>Complete Detail <input className='check-option' type='checkbox' id='opt1' name='complete-detail'/></label>
                        <label className='check-label'>Deep Interior Detail <input className='check-option' type='checkbox' id='opt2' name='deep-interior-detail'/></label>
                        <label className='check-label'>Adonis Car Wash And Wax  <input className='check-option' type='checkbox' id='opt3' name='wash-and-wax'/></label>
                        <label className='check-label'>Paint Enhancement <input className='check-option' type='checkbox' id='opt4' name='paint-enhancement'/></label>
                        <label className='check-label'>Ceramic Coating <input className='check-option' type='checkbox' id='opt5' name='ceramic-coating'/></label>

                        <h6 className='bold top20'>Add-ons:</h6>
                        <label className='check-label'>Basic Interior <input className='check-option' type='checkbox' id='opt6' name='basic-interior'/></label>
                        <label className='check-label'>Premier Car Wash <input className='check-option' type='checkbox' id='opt7' name='premier-car-wash'/></label>
                        <label className='check-label'>Engine Bay Cleaning <input className='check-option' type='checkbox' id='opt8' name='engine-bay'/></label>
                        <label className='check-label'>Headlight Restoration <input className='check-option' type='checkbox' id='opt9' name='headlight-restoration'/></label>
                        <label className='check-label'>Odor Removal <input className='check-option' type='checkbox' id='opt10' name='oder-removal'/></label>
                        <label className='check-label'>Smoke Odor Removal <input className='check-option' type='checkbox' id='opt11' name='smoke-oder-removal'/></label>

                        <label className='check-label' for="message">Message<textarea name="message" id="message" cols="30" rows="10" placeholder="Let us know if you have any questions or concerns"></textarea></label>
                        <button id="form-button" type="submit">Send Message</button>
                    </form>
                </div>
            </div>
            <div className="location">
                <iframe title='contact-map' id="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.7143751001718!2d-73.8363616842765!3d40.74631004345222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c260711ddee7fb%3A0xdc43e30f85b3b80a!2s130-17%2058th%20Ave%2C%20Queens%2C%20NY%2011355!5e0!3m2!1sen!2sus!4v1606520887118!5m2!1sen!2sus" 
                    frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" className='contact__map'>
                </iframe>
            </div>
        </div>
    )
}
