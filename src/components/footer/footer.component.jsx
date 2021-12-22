import React from 'react'

import { Link } from 'react-router-dom';
import { AiFillYoutube, AiFillFacebook, AiFillInstagram } from 'react-icons/ai'

import './footer.styles.css';

export default function Footer() {
    return (
        <div className='footer__container'>
            <div className='services'>
                <span className='title'>Services</span>
                <Link to='complete-detail'>Complete Detail</Link>
                <Link to='adonis-wash-and-wax'>Adonis Car Wash &amp; Wax Detail</Link>
                <Link to='deep-interior-detail'>Deep Interior Detail</Link>
                <Link to='paint-enhancement'>Paint Enhancement</Link>
                <Link to='ceramic-coating'>Ceramic Coating</Link>
            </div>
            <div className='addons'>
                <span className='title'>Add-ons</span>
                <Link to='basic-detail'>Basic Interior Detailing</Link>
                <Link to='engine-bay'>Engine Bay Cleaning</Link>
                <Link to='oder-removal'>Oder Removal</Link>
                <Link to='premier-wash'>Premier Car Wash</Link>
                <Link to='headlight-restoration'>Headlight Restoration</Link>
                <Link to='smoke-removal'>Smoke Oder Removal</Link>
                <Link to='ceramic-coating'>Ceramic Coating</Link>
            </div>
            <div className='company'>
                <span className='title'>Company</span>
                <Link to='gallery'>Gallery</Link>
                <span>Customer Reviews</span>
                <Link to='faq'>FAQ(s)</Link>
            </div>
            <div className='servicearea'>
                <span className='title'>Service Area</span>
                <Link to='queens'>Queens</Link>
                <Link to='flushing'>Flushing</Link>
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
            <div className="developer">
                <a href='https://www.kaedenmontgomery.com/' rel='noopener noreferrer' target="_blank">
                    Made by Kaeden Montgomery
                </a>
            </div>
        </div>
    )
}
