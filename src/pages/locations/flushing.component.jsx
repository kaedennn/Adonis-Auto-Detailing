import React, {useEffect} from 'react'

import './locations.styles.css';
import background from '../../assets/flushing/background.jpg';

export default function Flushing() {
    useEffect(() => {
        document.title = "Auto Detailing Detailing - The Best Auto Detailing in Flushing, Queens"
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
                <h1 className='location__top__text bold'>Highly Rated Auto Detailing Service in Flushing, Queens</h1>
            </div>
            <div className="location__middle">
                <div className='location__more__info'>
                    <h1>Flushing, NY</h1>
                    <p>Our shop is located in Flushing, Queens and we can help you with any of the services you are looking for, be it for the interior or the exterior of your car</p>
                    <p>Most of our services take more than 4 hours, such as our <a href='smoke-removal'>Smoke Odor Removal</a> or <a href='ceramic-coating'>Ceramic Coatings</a> Service</p>
                    <p>The good thing about us being located in Flushing, Queens is that there are a bunch of stuff you can do if you want to wait around.</p>
                </div>
                <div className="location__more__info2">
                    <h2>Nearby attractions close to our shop</h2>
                    <ul>
                        <li><a href='https://www.nycgovparks.org/parks/flushing-meadows-corona-park'>Flushing Meadows Corona Park</a></li>
                        <li><a href='https://queensmuseum.org/'>Queens Museum</a></li>
                        <li><a href='https://www.mlb.com/mets/ballpark'>City Field</a></li>
                        <li><a href='https://queensbotanical.org/'>Queens Botanical Garden</a></li>
                        <li><a href='https://theshopsatskyviewny.com/ '>Skyview Shopping Center</a></li>
                    </ul>
                </div>
            </div>
            <div className="location__faq">
                <h1 className='bold uppercase underline'>General Questions</h1>
                <div className="location__questions">
                    <div className="question">
                        <h3>Looking for a professional auto detailer in Flushing, Queens?</h3>
                        <h5><a href='deep-interior-detail'>Deep Interior Detail</a> - Bring your vehicles interior back to life with a thorough detailing with Shampoo Service, all to the realm of reality.</h5>
                        <h5><a href='complete-detail'>Complete Detail</a> - Interior and Exterior detailing service thorough deep cleaning. Smoothen out your car’s paint and make it pop again.</h5>
                        <h5><a href='paint-enhancement'>Paint Enhancement</a> - Removing swirl marks and reviving its color by removing the dullness and oxidation.</h5>
                        <h5><a href='adonis-wash-and-wax'>Adonis Wash and Wax</a> - Glossing up your car and smoothing out the paint.</h5>
                        <h5><a href='oder-removal'>Odor Removal</a> - Have a musty smell in your car? Or is there mold/mildew building up? We can help you out.</h5>
                    </div>
                </div>
            </div>
            <div className="google__map">
                <iframe className='google-map' title='flushing-map' width="1080" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Flushing%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
        </div>
    )
}
