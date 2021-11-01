import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner text-gray-700">
            <div>
                <h2 className="text-xl font-bold">Find Your Specal Tour Today</h2>
                <h2 className="text-2xl font-bold my-4">With Travel Universe</h2>
                <Link to="/services">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 shadow-lg rounded-lg duration-300">
                        View Tours
                    </button>
                </Link>
            </div>
        </div >
    );
};

export default Banner;