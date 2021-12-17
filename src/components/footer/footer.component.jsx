import React from 'react'

import { Link } from 'react-router-dom';

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
                <span>347-861-8315</span>
                <span>junior@adonisautodetailing.com</span>
                <span>130-17 58th Ave, Flushing, NY 11355</span>
                <span>ig fb</span>
            </div>
        </div>
    )
}
