import React from 'react'

import ImageGallery from '../../components/gallery/gallery.component';

import './gallery.styles.css';

export default function Gallery() {
    return (
        <div className='gallery__container'>
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
