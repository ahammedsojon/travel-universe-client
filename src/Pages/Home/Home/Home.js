import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ChooseUs from '../ChooseUs/ChooseUs'
import ReviewsPost from '../ReviewsPost/ReviewsPost';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ChooseUs></ChooseUs>
            <ReviewsPost></ReviewsPost>
        </div>
    );
};

export default Home;