import React from 'react'

import nose from '../../assets/addons_photos/nose.png';
import engine from '../../assets/addons_photos/engine.png';
import bubbles from '../../assets/addons_photos/bubbles.png';
import carinterior from '../../assets/addons_photos/carinterior.png';
import carheadlight from '../../assets/addons_photos/carheadlight.png';
import carscratch from '../../assets/addons_photos/carscratch.png';

import './addons.styles.css';

export default function Addons() {
    const AddonsList = [
        {
            title: 'Engine Bay Cleaning',
            picture: engine,
            description: "Does your car have a really dirty engine and you have no idea how to clean it? We can clean your engine bay and dress it and leave you satisfied."
        },
        {
            title: 'Basic interior detail',
            picture: carinterior,
            description: "the basic interior is more of a maintenance type of service. A light service will be done in the whole interior and an interior dressing, to protect it from UV rays and give it a nice shine."
        },
        {
            title: 'Odor Removal',
            picture: nose,
            description: "Do you have a car with mold/mildew, musty, cigarette smoke and any other types of foul smells that you need to get rid of? Let us help you with this issue."
        },
        {
            title: 'Premier Car Wash',
            picture: bubbles,
            description: "We hand wash every single part of your vehicle and remove all traffic film that has accumulated over time and we use a clay bar to remove stuck on dirt. A protective spray sealant/wax that last between 3 to 6 weeks is applied to protect the paint of your car and also to make it stand out."
        },
        {
            title: 'Headlight Restoration',
            picture: carheadlight,
            description: "Has your headlights started to look foggy or not as bright as it used to be? We can help you restore them without even replacing them. Learn more"
        },
        {
            title: 'Scratch Removal',
            picture: carscratch,
            description: "Living in NYC can be a hassle, and things such as bikes or cars scratching your car. Or maybe someone keyed your car and you want those scratches removed? We can help!"
        },
    ]

    const renderAddons = (addon, i) => {
        return (
            <div className='addons__container' key={i}>
                <h2 className='title'>{addon.title}</h2>
                <img className='picture' src={addon.picture} alt='addon-icon'/>
                <p>{addon.description}</p>
                <button className='learn'>Learn More</button>
            </div>
        )
    }

    return (AddonsList.map(renderAddons))
}
