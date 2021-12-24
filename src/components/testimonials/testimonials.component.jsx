import React from 'react'

import {AiFillStar} from 'react-icons/ai';

import './testimonials.styles.css';

export default function Addons() {
    const AddonsList = [
        {
            name: 'Bob B',
            review: "Great service! Its already been a few weeks, and my car still smells beautiful. None of that musty scent anymore! Also the seats are clean and fresh, as well as all around the interior. Junior does a great job!",
            website: 'Google'
        },
        {
            name: 'Julia Watters',
            review: "Junior did an amazing job start to finish! He responded to my inquiry quickly with package and pricing options and was very helpful in determining what would work best for my car. He was able to schedule me within the week and answered any questions I had. The drop off and pick up was easy and he kept me updated throughout the detailing process. The result was better than I could have even expected. The interior looks brand new and smells amazing and with the paint enhancement the scratches on the outside of my car are completely gone! 10/10 would recommend and will be returning to Junior for future detailing services.",
            website: 'Google'
        },
        {
            name: 'Hugo S',
            review: "What can I say, these guys really live up to the 5 star rating they have. Junior and his crew were amazing, my car had a total transformation! And they were even done before the work day ended! Well worth every dollar I spent. If you think your car is too dirty to be cleaned, take it to Adonis and they will prove you wrong.",
            website: 'Google'
        },
        {
            name: 'Ian Krengel',
            review: "Used Junior and his team for a deep interior clean of my SUV. They were thorough, and did not stop until they felt the job was spectacularly done (which it was!). They were professional, courteous, and good at what they do. Junior even gave me a walk though of my vehicle after finishing to make sure I was satisfied, and to see if I wanted him and his crew to work on anything else. It is hard to know who to trust when spending real money on you car, but This service was more than worth it, their price was fair, and they did a great job. I felt comfortable the moment I spoke to Junior and could see him and his team cared and took pride in their strong ability in detailing. You can stop looking for places here and trust in Junior’s service and professionalism.",
            website: 'Google'
        },
        {
            name:'Sagar Yadav',
            review:'Junior did an amazing job. Worked on my car for over 12 hours and was very transparent about the whole thing. Junior is the go to now whenever I get my car detailed.',
            website: 'Google'
        },
        {
            name:'Shantel Rodriguez',
            review:"Junior was really really great. I had a first appointment but could not make it and had to reschedule. On the day of the reschedule, I showed up and was planning to take an Uber back home (10 mins away) but Junior offered to drop me back since I had my child with me so I wouldn't waste any money. He cleaned the inside of my car very well. He's a really humble guy and I love that I was supporting a  small business. Great job!!!",
            website: 'Google'
        },
        {
            name:'Derek Kan',
            review:'Junior did a fantastic job cleaning my car after it was flooded during the Ida storm. He got rid of the moldy smell and my car looks like it’s new again! Highly recommended.',
            website: 'Google'
        },
        {
            name:'Mei L',
            review:"My dad's car was a mess and I wanted to get it cleaned. I found Adonis on Yelp and I'm so glad. Junior was the guy who cleaned up my dad's car and made it look near new!!!!!!! He runs out of his garage but so detailed and did such an amazing job. He communicated with me what was possible and what was not..... really appreciate his professionalism and attention to detail! I will definitely go to him for my detailing needs! HIGHLY RECOMMEND",
            website:'Yelp'
        },
        {
            name:'Brady F',
            review:"Adonis is my go to when I need my car looking fresh. Time and time again he does a great job and is also such a nice and pleasant person. I'm always amazed at how fantastic it looks after he's worked his magic.",
            website:'Yelp'
        },
        {
            name:'Jiaxing L',
            review:"I had a engine bay wash service with Adonis for the first time and the work was super well done. He was so nice and kind. I was happy about the work!",
            website:'Yelp'
        },
        {
            name:'D M',
            review:"Junior was fantastic. We brought the car to him after a fire extinguisher went off inside. Dust everywhere! He charged us a fair price, responded to text messages at all hours, and returned a car to us that looked (and smelled :) great! Would highly recommend his services.",
            website:'Yelp'
        },
        {
            name:'Nube Mizhquiri',
            review:"I highly recommend Adonis Auto Detailing Service. The cleaning they did for my car was impeccable!! The work they do is is just amazing and everyone is so wonderful!",
            website:'Facebook'
        },
        {
            name:'Nellie Nellsz',
            review:"ABSOLUTELY recommend Adonis Auto Detailing! Junior did an impeccable job on my Hercules (Silver Hyundai Sonata). He is extremely professional and amazingly pleasant to speak to. I brought Hercules to the garage intending to take a bus back home, and instead he drove me home, and later on brought Hercules back to me! He gave me all the details of what he was going to do, and even updated me while he had the car. Do NOT let the prices discourage you, he is worth every cent! He got out spots on my car that even other professionals didn’t get out for me. Will definitely go back to him.",
            website:'Facebook'
        },
        {
            name:'Gillian Peters',
            review:"If you look for a great detailing service I recommend Adonis Auto Detailing! Absolutely wonderful job.",
            website:'Facebook'
        },
        {
            name:'Nav Patel',
            review:"Amazing friendly service, very detailed and thorough, great prices too!",
            website:'Facebook'
        },
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
                <p className='bold'>~ {review.website}</p>
            </div>
        )
    }

    return (AddonsList.map(renderAddons))
}
