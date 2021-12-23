import React from 'react'

import {AiFillStar} from 'react-icons/ai';

import './testimonials.styles.css';

export default function Addons() {
    const AddonsList = [
        {
            name: 'Bob B',
            review: "Great service! Its already been a few weeks, and my car still smells beautiful. None of that musty scent anymore! Also the seats are clean and fresh, as well as all around the interior. Junior does a great job!",
        },
        {
            name: 'Julia Watters',
            review: "Junior did an amazing job start to finish! He responded to my inquiry quickly with package and pricing options and was very helpful in determining what would work best for my car. He was able to schedule me within the week and answered any questions I had. The drop off and pick up was easy and he kept me updated throughout the detailing process. The result was better than I could have even expected. The interior looks brand new and smells amazing and with the paint enhancement the scratches on the outside of my car are completely gone! 10/10 would recommend and will be returning to Junior for future detailing services.",
        },
        {
            name: 'Hugo S',
            review: "What can I say, these guys really live up to the 5 star rating they have. Junior and his crew were amazing, my car had a total transformation! And they were even done before the work day ended! Well worth every dollar I spent. If you think your car is too dirty to be cleaned, take it to Adonis and they will prove you wrong.",
        },
        {
            name: 'Ian Krengel',
            review: "Used Junior and his team for a deep interior clean of my SUV. They were thorough, and did not stop until they felt the job was spectacularly done (which it was!). They were professional, courteous, and good at what they do. Junior even gave me a walk though of my vehicle after finishing to make sure I was satisfied, and to see if I wanted him and his crew to work on anything else. It is hard to know who to trust when spending real money on you car, but This service was more than worth it, their price was fair, and they did a great job. I felt comfortable the moment I spoke to Junior and could see him and his team cared and took pride in their strong ability in detailing. You can stop looking for places here and trust in Junior’s service and professionalism.",
        },
        {
            name:'Sagar Yadav',
            review:'Junior did an amazing job. Worked on my car for over 12 hours and was very transparent about the whole thing. Junior is the go to now whenever I get my car detailed.'
        },
        {
            name:'Nellie Bosch',
            review:'ABSOLUTELY recommend Adonis Auto Detailing! Junior did an impeccable job on my Hercules (Silver Hyundai Sonata). He is extremely professional and amazingly pleasant to speak to. I brought Hercules to the garage intending to take a bus back home, and instead he drove me home, and later on brought Hercules back to me! He gave me all the details of what he was going to do, and even updated me while he had the car. Do NOT let the prices discourage you, he is worth every cent! He got out spots on my car that even other professionals didn’t get out for me. Will definitely go back to him.'
        },
        {
            name:'Shantel Rodriguez',
            review:"Junior was really really great. I had a first appointment but could not make it and had to reschedule. On the day of the reschedule, I showed up and was planning to take an Uber back home (10 mins away) but Junior offered to drop me back since I had my child with me so I wouldn't waste any money. He cleaned the inside of my car very well. He's a really humble guy and I love that I was supporting a  small business. Great job!!!"
        },
        {
            name:'Derek Kan',
            review:'Junior did a fantastic job cleaning my car after it was flooded during the Ida storm. He got rid of the moldy smell and my car looks like it’s new again! Highly recommended.'
        },
        {
            name:'Andres Aguilar',
            review:'Very professional and does great work. My car looks like the day i bought it. Would recommend anyone. Always keeps you updated with the status of the car.'
        }
    ]

    const renderAddons = (review, i) => {
        return (
            <div className='reviews__container' key={i}>
                <h2 className='name'>{review.name}</h2>
                <div className="rating">
                    <AiFillStar className='star'/>
                    <AiFillStar className='star'/>
                    <AiFillStar className='star'/>
                    <AiFillStar className='star'/>
                    <AiFillStar className='star'/>      
                </div>
                <p>{review.review}</p>
            </div>
        )
    }

    return (AddonsList.map(renderAddons))
}
