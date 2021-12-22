import React from 'react'

import img1 from '../../assets/gallery/1.jpg';
import img2 from '../../assets/gallery/2.jpg';
import img3 from '../../assets/gallery/3.jpg';
import img4 from '../../assets/gallery/4.jpg';
import img5 from '../../assets/gallery/5.jpg';
import img6 from '../../assets/gallery/6.jpg';
import img7 from '../../assets/gallery/7.jpg';
import img8 from '../../assets/gallery/8.jpg';
import img9 from '../../assets/gallery/9.jpg';
import img10 from '../../assets/gallery/10.jpg';
import img11 from '../../assets/gallery/11.jpg';
import img12 from '../../assets/gallery/12.jpg';
import img13 from '../../assets/gallery/13.jpg';
import img14 from '../../assets/gallery/14.jpg';
import img15 from '../../assets/gallery/15.jpg';
import img16 from '../../assets/gallery/16.jpg';
import img17 from '../../assets/gallery/17.jpg';
import img18 from '../../assets/gallery/18.jpg';
import img19 from '../../assets/gallery/19.jpg';
import img20 from '../../assets/gallery/20.jpg';
import img21 from '../../assets/gallery/21.jpg';
import img22 from '../../assets/gallery/22.jpg';
import img23 from '../../assets/gallery/23.jpg';
import img24 from '../../assets/gallery/24.jpg';
import img25 from '../../assets/gallery/25.jpg';


import './gallery.styles.css';

export default function ImageGallery() {
    const ImgList = [
        {
            picture: img1
        },
        {
            picture: img2
        },
        {
            picture: img3
        },
        {
            picture: img4
        },
        {
            picture: img5
        },
        {
            picture: img6
        },
        {
            picture: img7
        },
        {
            picture: img8
        },
        {
            picture: img9
        },
        {
            picture: img10
        },
        {
            picture: img11
        },
        {
            picture: img12
        },
        {
            picture: img13
        },
        {
            picture: img14
        },
        {
            picture: img15
        },
        {
            picture: img16
        },
        {
            picture: img17
        },
        {
            picture: img18
        },
        {
            picture: img19
        },
        {
            picture: img20
        },
        {
            picture: img21
        },
        {
            picture: img22
        },
        {
            picture: img23
        },
        {
            picture: img24
        },
        {
            picture: img25
        },
    ]

    const renderImages = (image, i) => {
        return (
            <div className='gallery__component__container' key={i}>
                <img className='gallery__pictures' src={image.picture} alt='gallery'/>
            </div>
        )
    }

    return (ImgList.map(renderImages))
}
