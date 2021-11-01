import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useServices();

    return (
        <div id="services" className="services py-16 max-w-6xl m-auto">
            <div className="mb-6">
                <p className="text-xl text-gray-500">Take a Look at Our</p>
                <h2 className="text-2xl text-gray-500 pb-2">Most Popular Tours</h2>
                <div className="h-1 w-28 bg-yellow-500 mx-auto"></div>
            </div>
            {
                services.length === 0 ? <div className="flex justify-center items-center">
                    <div
                        className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"
                    ></div>
                </div> :
                    <div className="grid px-4 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:px-0">
                        {
                            services.map(service => <Service key={service._id}
                                service={service}></Service>)
                        }
                    </div>
            }
        </div>
    );
};

export default Services;