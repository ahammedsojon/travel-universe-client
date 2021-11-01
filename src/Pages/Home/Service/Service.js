import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Service.css';

const Service = ({ service }) => {
    const { handleBooking } = useAuth();
    const { _id, img, country, place, duration, description, rating, price } = service;
    return (
        <div className="service cursor-pointer mb-4 text-left shadow-md rounded-md">
            <div className="img">
                <img src={img.includes('https://') ? img : 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'} alt="" />
            </div>
            <div className="p-4">
                <p className="text-xl capitalize">{country}</p>
                <h2 className="text-2xl my-2 capitalize">{place}</h2>
                <div className="flex my-2">
                    <span className="text-yellow-500 mr-4">  <i className="far fa-clock"></i></span>
                    <p>{duration} days</p>
                </div>
                <p>{description.slice(0, 80)}...</p>
                <h2 className="text-xl font-bold my-2">${price}</h2>
                <div className="flex items-center">
                    <div className="text-yellow-500">
                        <Rating
                            initialRating={rating > 5 ? 5 : rating}
                            placeholderRating={rating}
                            emptySymbol={<i className="far fa-star"></i>}
                            placeholderSymbol={<i className="fas fa-star-half-alt"></i>}
                            fullSymbol={<i className="fas fa-star"></i>}
                            readonly
                        />
                    </div>
                    <div className="ml-auto">
                        <Link to={`/booking/${_id}`}>
                            <button onClick={() => handleBooking(_id)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 shadow-lg rounded-lg duration-300">
                                Book Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;