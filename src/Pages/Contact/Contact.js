import React from 'react';

const Contact = () => {
    const handleFormSubmit = e => {
        e.preventDefault();
    }
    return (
        <div className="py-16 max-w-6xl mx-auto">
            <div className="mb-6">
                <h2 className="text-4xl font-bold text-gray-400 pb-4">Get in touch with us</h2>
                <div className="h-1 w-28 bg-gray-700 mx-auto"></div>
            </div>
            <div className="lg:w-4/5 w-full mb-8">
                <h2 className="text-2xl px-4 font-bold text-left text-gray-700 mb-2">Contact Information</h2>
                <div className="">
                    <div className="flex items-center p-4 border-b border-gray-200">
                        <div className="w-1/3 flex items-center ">
                            <div className="bg-gray-400 text-white w-10 h-10 rounded-full"> <i class="fas fa-map-marker-alt leading-10"></i></div>
                            <span className="text-xl ml-2">Address</span>
                        </div>
                        <div className="w-2/3 text-left">
                            Jashore IT Park, Khulna, Bangladesh.
                        </div>
                    </div>
                    <div className="flex items-center p-4 border-b border-gray-200">
                        <div className="w-1/3 flex items-center ">
                            <div className="bg-gray-400 text-white w-10 h-10 rounded-full"> <i class="fas fa-phone-alt leading-10"></i></div>
                            <span className="text-xl ml-2">Tell No</span>
                        </div>
                        <div className="w-2/3 text-left">
                            +012345678 (tour) | +0123456789 (ticketing)
                        </div>
                    </div>

                    <div className="flex items-center p-4 border-b border-gray-200">
                        <div className="w-1/3 flex items-center ">
                            <div className="bg-gray-400 text-white w-10 h-10 rounded-full"> <i class="fas fa-fax leading-10"></i></div>
                            <span className="text-xl ml-2">Fax No</span>
                        </div>
                        <div className="w-2/3 text-left">
                            +012345678 (tour) | +0123456789 (ticketing)
                        </div>
                    </div>
                    <div className="flex items-center p-4 border-b border-gray-200">
                        <div className="w-1/3 flex items-center ">
                            <div className="bg-gray-400 text-white w-10 h-10 rounded-full"> <i class="far fa-envelope leading-10"></i></div>
                            <span className="text-xl ml-2">Email</span>
                        </div>
                        <div className="w-2/3 text-left">
                            ahammedsojon000@gmail.com
                        </div>
                    </div>
                    <div className="flex items-center p-4 border-b border-gray-200">
                        <div className="flex items-center w-1/3">
                            <div className="bg-gray-400 text-white w-10 h-10 rounded-full"> <i class="far fa-clock leading-10"></i></div>
                            <span className="text-xl ml-2">WORKING HOURS</span>
                        </div>
                        <div className="w-2/3 text-left">
                            <p> Mon – Fri 9:00 am – 5:30 pm, Sat 9:00 am – 1:00 pm <br />
                                We are closed on 1st & 3rd Sat of every month, Sundays & public holidays</p>
                        </div>
                    </div>
                    <div className="flex items-center p-4 border-b border-gray-200">
                        <div className="flex items-center w-1/3">
                            <div className="bg-gray-400 text-white w-10 h-10 rounded-full"> <i class="fas fa-map-marker-alt leading-10"></i></div>
                            <span className="text-xl ml-2">GPS COORDINATE</span>
                        </div>
                        <div className="w-2/3 text-left">
                            Latitude : 3.1117181000, Longitude : 101.7301577000
                        </div>
                    </div>

                </div>
            </div>

            <div className="px-4 lg:px-0">
                <h2 className="text-2xl font-bold text-left text-gray-700 mb-2">Have A Question?</h2>
                <form className="lg:w-4/5 text-left" onSubmit={handleFormSubmit}>
                    <div className="lg:flex lg:space-x-7">
                        <input className="lg:w-1/2 w-full p-4 bg-gray-200 mb-4" type="text" placeholder="Name" />
                        <input className="lg:w-1/2 w-full p-4 bg-gray-200 mb-4" type="email" placeholder="Email" />
                    </div>
                    <input className="w-full p-4 bg-gray-200 mb-4" type="text" placeholder="Subect" />
                    <textarea className="w-full p-4 bg-gray-200" name="" id="" cols="30" rows="5" placeholder="Message"></textarea>
                    <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-6 my-2 shadow-lg rounded-lg duration-300">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;