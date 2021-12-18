import React from 'react'

import { Link } from 'react-router-dom';
import { AiFillYoutube, AiFillFacebook, AiFillInstagram } from 'react-icons/ai'

import './footer.styles.css';

export default function Footer() {
    return (
        <div className='footer__container'>
            <div className='services'>
                <span className='title'>Services</span>
                <span>Complete Detail</span>
                <span>Adonis Car Wash &amp; Wax Detail</span>
                <span>Deep Interior Detailing</span>
                <span>Paint Enhancement</span>
                <span>Ceramic Coating</span>
            </div>
            <div className='addons'>
                <span className='title'>Add-ons</span>
                <span>Basic Interior Detailing</span>
                <span>Engine Bay Cleaning</span>
                <span>Odor Removal</span>
                <span>Premier Car Wash</span>
                <span>Headlight Restoration</span>
                <span>Smoke Odor Removal</span>
            </div>
            <div className='company'>
                <span className='title'>Company</span>
                <Link to='gallery'>Gallery</Link>
                <span>Customer Reviews</span>
                <span>Auto Detailing Faqs</span>
            </div>
            <div className='servicearea'>
                <span className='title'>Service Area</span>
                <span>Queens</span>
                <span>Car Detail Near me</span>
                <span>Flushing</span>
                <span> Mobile Detailing</span>
            </div>
            <div className='contact'>
                <span className='title'>Contact</span>
                <a href="tel:5554280940">347-861-8315</a>
                <a href="mailto:junior@adonisautodetailing.com">junior@adonisautodetailing.com</a>
                <a href='https://goo.gl/maps/SjzWsKLsX3CrKTNd7' rel='noopener noreferrer' target="_blank">
                    130-17 58th Ave, Flushing, NY 11355
                </a>
                <div className='socialmedia'>
                    <a href='https://www.instagram.com/adonis.auto.detailing/' rel='noopener noreferrer' target="_blank">
                        <AiFillInstagram/>
                    </a>
                    <a href='https://www.facebook.com/adonis.auto.detailing' rel='noopener noreferrer' target="_blank">
                        <AiFillFacebook/>
                    </a>
                    <a href='https://www.youtube.com/channel/UCrFzh47Hbd1iM9XGnXXFf5Q' rel='noopener noreferrer' target="_blank">
                        <AiFillYoutube/>
                    </a>
                </div>
            </div>
        </div>
    )
}
