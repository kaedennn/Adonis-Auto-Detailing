import React from 'react'

import './about.styles.css';

import carpic from "../../assets/about/carpic.jpg";
import junior from '../../assets/about/junior.jpg';

export default function About() {
    return (
        <div>
            <div className='aboutus__top'>
               <div className='overlay'/>
               <h1 className='aboutus__top__text bold'>Adonis Auto Detailing Mission Statement</h1>
               <h2 className='aboutus__top__text'>We are always up for a challenge and no car is too dirty, we will work on it! It is our job to do a thorough job and we are always at your service.</h2>
           </div>
           <div className="about__adonis">
               <img className='carpic__img' src={carpic} alt="car pic" />
               <div className="aboutus__adonis__info">
                   <h1 className='bold'>About Adonis Auto Detailing Service</h1>
                   <p>Adonis is a Greek God known for its strikingly good features and that’s how we aim to leave your vehicle at the end of the detail, looking great! Your car will stand out from the rest of the pack. We provide our services to all, whether from private companies to individuals who use their car on a daily basis. We offer various services for interior and exterior.</p>
                   <p>Out of the competition, why should you go with Adonis? Satisfying and exceeding our customers’ expectations is our number one priority. We don’t do simple here, so any experience you’ve had with other car washes, you’ll forget once you see our results. We solely focus on your car detailing to the max. You can rest assured, no crevices will be missed.</p>
                   <p>Here at Adonis, we communicate thoroughly with our customers when setting up appointments and making the process as easy as possible. Please feel free to <a href='contact'>contact us</a> today via a call, text or email and we will schedule accordingly.</p>
               </div>
           </div>
           <div className="about__adonis">
               <div className="aboutus__adonis__info">
                   <h1 className='bold'>Meet Junior</h1>
                   <p>Hi, welcome to Adonis Auto Detailing Service and yes I’m the owner of Adonis. My name is Junior (yes that’s my real name) and well I’m here to tell you a little bit about myself and the company.</p>
                   <p>Honestly, I came across detailing by accident. I was bored at home doing nothing for a very long period of time during Covid. One of my friends asked me to help her husband since he had a lot of cars he was working on. I was hesitant to say yes at the moment, but within a few weeks, I reached out to them and made myself available.</p>
                   <p>I didn’t want to get paid, I was just happy to be out of the house and learning something new. With each day I learned more about auto detailing. I became very involved and began watching YouTube videos and reading blogs. My friend suggested I should start doing this on my own so that’s what exactly I did! I posted on Instagram, Facebook, WhatsApp and my sisters reposted the information, and that’s how Adonis Auto Detailing Service started.</p>
                   <p>Why the name Adonis? Adonis has my middle initial (A) and my last name Donis, thus putting them together: Adonis, representing me.</p>
               </div>
               <img className='carpic__img' src={junior} alt="car pic" />
           </div>
        </div>
    )
}
