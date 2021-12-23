import React from 'react'
import { Link } from 'react-router-dom';

import nose from '../../assets/addons_photos/nose.png';
import engine from '../../assets/addons_photos/engine.png';
import bubbles from '../../assets/addons_photos/bubbles.png';
import carinterior from '../../assets/addons_photos/carinterior.png';
import carheadlight from '../../assets/addons_photos/carheadlight.png';
import cig from '../../assets/addons_photos/cig.png';
// import carscratch from '../../assets/addons_photos/carscratch.png';

import './addons.styles.css';

export default function Addons() {
    const AddonsList = [
        {
            title: 'Engine Bay Cleaning',
            picture: engine,
            description: "Does your car have a really dirty engine and you have no idea how to clean it? We can clean your engine bay and dress it and leave you satisfied.",
            link:'engine-bay'
        },
        {
            title: 'Basic interior detail',
            picture: carinterior,
            description: "the basic interior is more of a maintenance type of service. A light service will be done in the whole interior and an interior dressing, to protect it from UV rays and give it a nice shine.",
            link:'basic-detail'
        },
        {
            title: 'Odor Removal',
            picture: nose,
            description: "Do you have a car with mold/mildew, musty, cigarette smoke and any other types of foul smells that you need to get rid of? Let us help you with this issue.",
            link:'oder-removal'
        },
        {
            title: 'Premier Car Wash',
            picture: bubbles,
            description: "We hand wash every single part of your vehicle and remove all traffic film that has accumulated over time and we use a clay bar to remove stuck on dirt. A protective spray sealant/wax that last between 3 to 6 weeks is applied to protect the paint of your car and also to make it stand out.",
            link:'premier-wash'
        },
        {
            title: 'Headlight Restoration',
            picture: carheadlight,
            description: "Has your headlights started to look foggy or not as bright as it used to be? We can help you restore them without even replacing them.",
            link:'headlight-restoration'
        },
        {
            title: 'Smoke Odor Removal',
            picture: cig,
            description: "Could be that you’re a heavy smoker and your trying to quit and looking to decontaminate your entire car. Or you recently bought a used car and the previous owner was a heavy smoker and you need it fully decontaminated?",
            link:'smoke-removal'
        },
        // {
        //     title: 'Scratch Removal',
        //     picture: carscratch,
        //     description: "Living in NYC can be a hassle, and things such as bikes or cars scratching your car. Or maybe someone keyed your car and you want those scratches removed? We can help!",
        //     link:'/'
        // },
    ]

    const renderAddons = (addon, i) => {
        return (
            <div className='addons__container' key={i}>
                <h2 className='title'>{addon.title}</h2>
                <img className='picture' src={addon.picture} alt='addon-icon'/>
                <p>{addon.description}</p>
                <Link to={addon.link}>
                    <button className='learn'>Learn More</button>
                </Link>
            </div>
        )
    }

    return (AddonsList.map(renderAddons))
}
