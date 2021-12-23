import React from 'react'

import './faq.styles.css';

export default function FAQ() {
    return (
        <div className='faq__container'>
            <div className="faq__top">
                <div className="overlay"/>
                <h1 className='faq__top__text bold'>Get your questions answered here about our Auto Detailing Services</h1>
                <h2 className='faq__top__text'>Concerns, questions about our services, find them here!</h2>
            </div>
            <div className="faq">
                <h1 className='bold underline'>FAQ</h1>
                <h4>Find the answers for the most frequently asked questions below</h4>
                <div className="questions__container">
                    <div className="question">
                        <h3>Where are you Currently Located? </h3>
                        <h5>We are located in 130-17 58th ave Flushing, NY 11355. Please book with us, since we are an appointment only type of service. This is not a shop its private house where I conduct my business and I rent it to work out of. </h5>
                    </div>
                    <div className="question">
                        <h3>Do you just service customers in Queens?</h3>
                        <h5>We welcome all potential customers from the 5 boroughs and Nassau County.</h5>
                    </div>
                    <div className="question">
                        <h3>Can you come to me?</h3>
                        <h5>If you have access to water and electricity then yes we can come to you. We can also pick up your car and drop off your car when done. </h5>
                    </div>
                    <div className="question">
                        <h3>What type of payments do you accept?</h3>
                        <h5>Currently we accept cash or any of the online payments methods, quickpay zelle, venmo or the cashapp. Once we agree on a date and time, we do ask for a non-refundable $50 booking fee. This ensures that both parties are on the same page, and we hold your place. If for whatever reason, you can’t make it, or weather doesn’t permit the service, we will reschedule your appointment at the next availability date. </h5>
                    </div>
                    <div className="question">
                        <h3>Can I come today?</h3>
                        <h5>This is by appointment only. The reason is like that because we do a car at a time, and if you come the day off, there could be a chance we are working on somebody else’s car. Feel free to <a href='contact'>request a booking</a> with us today!</h5>
                    </div>
                    <div className="question">
                        <h3>How long the detail services lasts?</h3>
                        <h5>It all depends on what type of detail service you choose. If you choose a deep detailing from 4 to 8 hours, or the  Adonis car wash & clay bar detail, 2 to 4 hours. If you decide to combine both of the services, it should take around 6 to 10 hours to detail both the interior and exterior. We should tell you once we receive the car.</h5>
                    </div>
                </div>
                <a className='black' href='ceramic-coating'><h1 className='bold underline'>Ceramic Coating FAQ</h1></a>
                <div className="questions__container">
                    <div className="question">
                        <h3>How long do I have to wait to be able to wash my car?</h3>
                        <h5>We recommend to not wash your car for two weeks after coating installation. This will allow the coating to fully cure as best as possible.</h5>
                    </div>
                    <div className="question">
                        <h3>Do you need to wash, prep and polish the car prior to installing the coating?</h3>
                        <h5>Yes, because it will defeat the purpose if there are tons of imperfections on your car paint. </h5>
                    </div>
                    <div className="question">
                        <h3>What type of ceramic coatings do you offer?</h3>
                        <h5>For now we offer 1 year and 3 to 5 year ceramic coatings.</h5>
                    </div>
                </div>
                <a className='black' href='paint-enhancement'><h1 className='bold underline'>Paint Enhancement FAQ</h1></a>
                <div className="questions__container">
                    <div className="question">
                        <h3>How long does this service last?</h3>
                        <h5>It all depends on the size of the car but anywhere from 4 to 6 hours.</h5>
                    </div>
                    <div className="question">
                        <h3>Will the swirl marks/ oxidation come back?</h3>
                        <h5>It all depends how well you take care of your car, and how often you wash the car on a consistent basis. If you take it to the car wash often, you’ll see the difference right away.</h5>
                    </div>
                </div>
                <a className='black' href='basic-detail'><h1 className='bold underline'>Basic Interior Detail FAQ</h1></a>
                <div className="questions__container">
                    <div className="question">
                        <h3>This stain is really bothering me, can you take care of that for me? </h3>
                        <h5>So even though the basic cleaning is a light wipe down of the vehicle, at an extra charge we can take care of the issue, without any hassle. Just let us know ahead of time to be able to make the proper arrangements.</h5>
                    </div>
                    <div className="question">
                        <h3>How long does this take?</h3>
                        <h5>It should take between 60 to 90 minutes.</h5>
                    </div>
                    <div className="question">
                        <h3>Do you shampoo my seats and carpet?</h3>
                        <h5>This service is usually for Deep Cleaning Detail. If you need to more information, visit the page. The Basic Interior Detail is usually for cars that are well kept or new and doesn’t need a lot of attention.</h5>
                    </div>
                </div>
                <a className='black' href='deep-interior-detail'><h1 className='bold underline'>Deep Interior Detail FAQ</h1></a>
                <div className="questions__container">
                <div className="question">
                        <h3>Deep Interior Detail</h3>
                        <h5>We work out of a home garage, and currently don’t have seating available. And also remember, a deep interior detail could take from 4 to 8 hours, all depending the size and condition of your vehicle. If you have another vehicle and want to be around feel free. If you decide to leave, please leave us a set of keys since we have to move the car at times.</h5>
                    </div>
                    <div className="question">
                        <h3>Will my seats be wet after your done?</h3>
                        <h5>By the time we give your back your vehicle, about 80% to 90% of the seats will be dried. The weather could be a big factor, so if the weather is warmer, then it will dry faster but if colder then it could take a few days. We have an extractor and air blower, so no need to panic.  And we will give you some tips to help it dry faster once you take it back. </h5>
                    </div>
                    <div className="question">
                        <h3>I’ve tried everything to remove the smell from my car, are you able to remove it?</h3>
                        <h5>Yes, check out our Odor Removal or Smoke odor removal services.</h5>
                    </div>
                    <div className="question">
                        <h3>One of the seats is damaged, are you able to fix it?</h3>
                        <h5>This will be a repair issue, we would suggest for you to look for an upholstery service. They will be the best bet to help you with that. </h5>
                    </div>
                    <div className="question">
                        <h3>Will you be able to remove all the stains?</h3>
                        <h5>Most of the stains we have worked on in the past, we have been able to remove. Have in mind though; some can’t be removed 100%, because they are embedded in the fabric. If we keep scrubbing on that same area for a long time, we could damage that area. We try to avoid that at all cost. We will go over the car with you before we start cleaning it and let you know beforehand.</h5>
                    </div>
                    <div className="question">
                        <h3>What type of chemicals do you use, and will smell like it afterwards?</h3>
                        <h5>We currently use Super Clean to clean the interior and we dilute it 10 to 1, to minimize the potency of the product, and to dress and protect the vehicle we use Meguires Hyper Dressing. None of these products we use has damaged any of the other vehicles we serviced in the past. They are not harsh chemicals and don’t leave any lingering smell.</h5>
                    </div>
                </div>
                <a className='black' href='smoke-removal'><h1 className="bold underline">Smoke Odor Removal FAQ</h1></a>
                <div className="questions__container">
                    <div className="question">
                        <h3>What products do you use?</h3>
                        <h5>We use products and equipment that tackles on reducing and eliminating the smoke odor.</h5>
                    </div>
                    <div className="question">
                        <h3>Will my seats be wet or will I smell any chemicals once the service is complete?</h3>
                        <h5>That’s one of the reasons why we ask to keep the car for more than a day. We want to make sure the seats and carpets are completely dried and for your car to be aired out.</h5>
                    </div>
                    <div className="question">
                        <h3>Will you be able to eliminate the odor?</h3>
                        <h5>This all depends on the state of the car and how often it was smoked in or how old it is. We can help eliminate most of the odor.</h5>
                    </div>
                </div>
                <a className='black' href='premier-wash'><h1 className='bold underline'>Premier Car Wash FAQ</h1></a>
                <div className="questions__container">
                    <div className="question">
                        <h3>What is traffic film?</h3>
                        <h5>It’s a collection of contaminants that through over time gets on your car. It all depends how often, where, when you drive your car that these contaminants get on it. It includes bugs, dirt, bird droppings, acid, grease, fluids from other cars, etc. </h5>
                    </div>
                    <div className="question">
                        <h3>How long does this take?</h3>
                        <h5>This takes about 60 minutes and 90 minutes, all depending on the condition of your vehicle.</h5>
                    </div>
                    <div className="question">
                        <h3>How long does the wax last?</h3>
                        <h5>The spray wax that we use is for a shine and protection and last a few weeks at most. If you’re looking for something longer, we recommend to look at our other service Adonis Car Wash and Wax Detail.</h5>
                    </div>
                    <div className="question">
                        <h3>Does this service also include removal of scratches?</h3>
                        <h5>Removing scratches implies a whole other set of skills and time. Ask us about our scratch removal services.</h5>
                    </div>
                </div>
                <a className='black' href='headlight-restoration'><h1 className='bold underline'>Headlight Restoration FAQ</h1></a>
                <div className="questions__container">
                    <div className="question">
                        <h3>How long does this usually take?</h3>
                        <h5>Depending on the condition, it could take up anywhere from 1 to 2 hours. If we need more time, we will let you know.</h5>
                    </div>
                    <div className="question">
                        <h3>How can I keep my headlights in better condition?</h3>
                        <h5>Try and keep in a garage or in area with a lot of shade and that will definitely help with less oxidation. Applying a wax or sealant on a consistent basis will also help. Since the material of headlights are not the same as the car itself, the clear coat won’t last as long. Especially since we live in Queens, and most parking spaces are located outside in the sun thus leaving it exposed.</h5>
                    </div>
                    <div className="question">
                        <h3>Can you fully restore my headlights? </h3>
                        <h5>This all falls under what’s the current condition. If it’s in a really bad state we could definitely improve it but making it look new would be a hard feat.</h5>
                    </div>
                </div>
                <a className='black' href='adonis-wash-and-wax'><h1 className='bold underline'>Adonis Car Wash And Wax FAQ</h1></a>
                <div className="questions__container">
                    <div className="question">
                        <h3>How long does this take?</h3>
                        <h5>It should take between two or four hours to wash, decontaminate, clay and wax your car, all depending the size and condition.</h5>
                    </div>
                    <div className="question">
                        <h3>Does it include an all in one cleaning?</h3>
                        <h5>No, we have a price set for all the services we provide. Remember the services takes time to do, it’s not something fast we do. So if you’re paying a high price then that’s we providing service for you. </h5>
                    </div>
                    <div className="question">
                        <h3>How long will the wax last on my car?</h3>
                        <h5>This should last around 3 to 6 months, depending on the use of your car on a daily basis. Remember a lot of factors, will tell you what could happen. If you leave the car in the sun, rain, different chemicals get on it, it’ll slowly eat the protection off you paint. </h5>
                    </div>
                    <div className="question">
                        <h3>Does this service also include removal of scratches?</h3>
                        <h5>Removing scratches implies a whole other set of skills and time. Ask us about our scratch removal services.</h5>
                    </div>
                    <div className="question">
                        <h3>What is Clay Bar Detailing?</h3>
                        <h5>It’s an engineered clay compound that helps remove the very tiny particles that we can’t see with our eyes. If you wash your car anywhere, and after it’s all said and done, touch your paint. You will feel bumpiness or roughness, that’s all particle buildup. The clay bar removes all of that, and makes your vehicle smooth and we are able to apply the wax after that to give it protection and shine. </h5>
                    </div>
                </div>
                <a className='black' href='engine-bay'><h1 className='bold underline'>Engine Bay Cleaning FAQ</h1></a>
                <div className="questions__container">
                    <div className="question">
                        <h3>How long does this usually last?</h3>
                        <h5>It should take 45 minutes to 90 minutes all depending on the condition of the engine.</h5>
                    </div>
                    <div className="question">
                        <h3>How often should I get my engine bay cleaned?</h3>
                        <h5>The more you use your car, the more dirty your engine will get because of the use your giving it. Our best suggestions are to google your vehicle type and see what recommendations they give or contact the makers of the vehicles.</h5>
                    </div>
                    <div className="question">
                        <h3>Will water damage my engine?</h3>
                        <h5>If we pour water non-stop for a long period of time, then yes it could damage the engine. That’s not the case here, we used sufficient water to dust off the dust, apply cleaner on the entire engine bay, scrub it and then rinse it with water again. We are careful with the amount we use, where we use it and how long. </h5>
                    </div>
                    <div className="question">
                        <h3>What do you do exactly while working on the engine?</h3>
                        <h5>Inspect engine making sure there are no leaks, vacuum or air blow any leaves, rinse the engine, apply super clean, agitate with brushes, rinse off cleaning product, dry with air blower and microfiber towel, and then apply dressing to give it shine and protection.</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
