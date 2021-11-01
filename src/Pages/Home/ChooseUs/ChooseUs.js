import React from 'react';
import './ChooseUs.css'
const ChooseUs = () => {
    return (
        <div className="py-16 choose-us">
            <div className="max-w-6xl mx-auto">
                <div>
                    <h2 className="text-4xl font-bold text-gray-400 pb-4">Why Choose Us</h2>
                    <div className="h-1 w-28 bg-gray-700 mx-auto"></div>
                </div>
                <div className="grid md:px-4 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                    <div className="text-gray-300">
                        <div className="bg-blue-500 icon">
                            <span> <i class="fas fa-plane-departure"></i></span>
                        </div>
                        <h2 className="text-2xl py-2">Deverse Destination</h2>
                        <p>Learn about different cultures, and see other people live a life that is different from mine. I just love to travel because it makes me realize that the world is so beautiful and there is so much to admire and treasure.</p>
                    </div>
                    <div className="text-gray-300">
                        <div className="bg-blue-500 icon">
                            <span> <i class="fas fa-umbrella-beach"></i></span>
                        </div>
                        <h2 className="text-2xl py-2">Value For Money</h2>
                        <p> It not only increases my knowledge, but also helps me overcome problems that I am dealing with. I get to experience life’s problems, pleasures, and I come out of my personal bubble to become a better person by exploring new cultures</p>
                    </div>
                    <div className="text-gray-300">
                        <div className="bg-blue-500 icon">
                            <span> <i class="fas fa-globe-europe"></i></span>
                        </div>
                        <h2 className="text-2xl py-2">Beautiful Places</h2>
                        <p>Travelling helps us to know more about different lifestyles, cultures, cuisines and festivals. Visiting new sights and exploring new places increases our knowledge and widens our global perspective. We get to learn so many things.</p>
                    </div>
                    <div className="text-gray-300">
                        <div className="bg-blue-500 icon">
                            <span> <i class="fas fa-suitcase-rolling"></i></span>
                        </div>
                        <h2 className="text-2xl py-2">Passionate Travel</h2>
                        <p>“Travelling – it leaves you speechless, then turns you into a storyteller.” – Ibn Battuta. My passion is learning about life through travelling and exploring new things. It excites me when I visit new places.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;