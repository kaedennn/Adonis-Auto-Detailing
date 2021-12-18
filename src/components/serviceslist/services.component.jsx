import React from 'react'

import carwash from '../../assets/service_photos/carwash.png';
import bubbles from '../../assets/service_photos/bubbles.png';
import cardetail from '../../assets/service_photos/cardetail.png';
import deepinterior from '../../assets/service_photos/deepinterior.png';
import paintenhance from '../../assets/service_photos/paintenhance.png';
import ceramic from '../../assets/service_photos/ceramic.png'

import './services.styles.css';

export default function Service() {
    const ServiceList = [
        {
            title: 'Adonis Wash and Wax',
            picture: bubbles,
            description: "The only major difference between this service and the premier car wash is that we use a 3 to 6 month wax or sealant for your cars paint. We go a step further by using a iron remover to fully decontaminate your car."
        },
        {
            title: 'Deep interior detail',
            picture: carwash,
            description: "Now the deep interior detail is for those that use the car on an everyday basis, or have children and spills happen, or you bought this car from the previous owner who didn’t take care of the vehicle, etc. A protective dressing will be put on all plastic surfaces, giving it an amazing look in the inside and feeling fresh once you step inside your car."
        },
        {
            title: 'Complete Detail',
            picture: cardetail,
            description: "This is a combination of both the Deep Interior Detail and Adonis Wash and Wax. This service is ideal for everyday drivers, or for cars that haven’t been cleaned in a long time. A deep clean inside and outside will give your car fresh look."
        },
        {
            title: 'Deep interior detail',
            picture: deepinterior,
            description: "Now the deep interior detail is for those that use the car on an everyday basis, or have children and spills happen, or you bought this car from the previous owner who didn’t take care of the vehicle, etc. A protective dressing will be put on all plastic surfaces, giving it an amazing look in the inside and feeling fresh once you step inside your car."
        },
        {
            title: 'Paint Enhancement',
            picture: paintenhance,
            description: "Tired of seeing swirls marks, small scratches or the paint of your car is dulling? Let’s get your car’s vehicle paint, new life again!"
        },
        {
            title: 'Ceramic Coating',
            picture: ceramic,
            description: "Get your car’s paint protected from all traffic film and have a glass like protection."
        },
    ]

    const renderServices = (service, i) => {
        return (
            <div className='services__container' key={i}>
                <h2 className='title'>{service.title}</h2>
                <img className='picture' src={service.picture} alt='service-icon'/>
                <p>{service.description}</p>
                <button>Learn More</button>
            </div>
        )
    }

    return (ServiceList.map(renderServices))
}
