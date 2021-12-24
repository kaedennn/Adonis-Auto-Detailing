import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet';

import ImageGallery from '../../components/gallery/gallery.component';

import './gallery.styles.css';

export default function Gallery() {
    useEffect(() => {
        document.title = "Auto Detailing Detailing - Choosing the best options for your car through our gallery"
     }, []);

    return (
        <div className='gallery__container'>
            <Helmet>
                <meta name='description' content='Before and After Pictures of the car detailing services we provide in Queens.'/>
            </Helmet>
            <div className='gallery__top'>
               <div className='overlay'/>
               <h1 className='gallery__top__text bold'>Checkout our amazing work!</h1>
            </div>
            <div className="image__gallery__container">
                <ImageGallery/>
            </div>
        </div>
    )
}
