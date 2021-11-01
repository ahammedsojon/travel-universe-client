import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gray-600 pt-16 pb-8" >
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto text-gray-300 text-left lg:pb-8 border-b border-gray-400 px-4 lg:px-0">
                <div>
                    <h2 className="text-2xl uppercase mb-4">contact</h2>
                    <p className="text-md pr-3 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident asperiores eius rem ullam fugiat iusto sapiente, libero quas fuga adipisci.</p>
                    <ul>
                        <li className="cursor-pointer flex items-center">
                            <span><i class="fas fa-map-marker-alt leading-10"></i></span>
                            <span className="ml-4 hover:text-yellow-700">IT Park Jasore, Khulna, Bangladesh</span>
                        </li>
                        <li className="cursor-pointer flex items-center">
                            <span><i class="fas fa-phone-alt leading-10"></i></span>
                            <span className="ml-4 hover:text-yellow-700">+88 01956 437242</span>
                        </li>
                        <li className="cursor-pointer flex items-center">
                            <span><i class="far fa-envelope leading-10"></i></span>
                            <span className="ml-4 hover:text-yellow-700">ahammedsojon000</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl uppercase mb-4">Information</h2>
                    <ul>
                        <li className="cursor-pointer flex items-center py-2 border-b border-gray-400">
                            <span className="text-yellow-500"><i class="fas fa-angle-right"></i></span>
                            <span className="ml-4 hover:text-yellow-700">Press Center</span>
                        </li>
                        <li className="cursor-pointer flex items-center py-2 border-b border-gray-400">
                            <span className="text-yellow-500"><i class="fas fa-angle-right"></i></span>
                            <span className="ml-4 hover:text-yellow-700">Travel News</span>
                        </li> <li className="cursor-pointer flex items-center py-2 border-b border-gray-400">
                            <span className="text-yellow-500"><i class="fas fa-angle-right"></i></span>
                            <span className="ml-4 hover:text-yellow-700">About Us</span>
                        </li> <li className="cursor-pointer flex items-center py-2 border-b border-gray-400">
                            <span className="text-yellow-500"><i class="fas fa-angle-right"></i></span>
                            <span className="ml-4 hover:text-yellow-700">Privacy Policy</span>
                        </li>
                        <li className="cursor-pointer flex items-center py-2 border-b border-gray-400">
                            <span className="text-yellow-500"><i class="fas fa-angle-right"></i></span>
                            <span className="ml-4 hover:text-yellow-700">Contact Us</span>
                        </li>

                    </ul>
                </div>  <div>
                    <h2 className="text-2xl uppercase mb-4">our menu</h2>
                    <ul>
                        <li className="cursor-pointer flex items-center py-2 border-b border-gray-400">
                            <span className="text-yellow-500"><i class="fas fa-angle-right"></i></span>
                            <span className="ml-4 hover:text-yellow-700">About</span>
                        </li>
                        <li className="cursor-pointer flex items-center py-2 border-b border-gray-400">
                            <span className="text-yellow-500"><i class="fas fa-angle-right"></i></span>
                            <span className="ml-4 hover:text-yellow-700">Career</span>
                        </li> <li className="cursor-pointer flex items-center py-2 border-b border-gray-400">
                            <span className="text-yellow-500"><i class="fas fa-angle-right"></i></span>
                            <span className="ml-4 hover:text-yellow-700">Term</span>
                        </li> <li className="cursor-pointer flex items-center py-2 border-b border-gray-400">
                            <span className="text-yellow-500"><i class="fas fa-angle-right"></i></span>
                            <span className="ml-4 hover:text-yellow-700">Services</span>
                        </li>
                        <li className="cursor-pointer flex items-center py-2 border-b border-gray-400">
                            <span className="text-yellow-500"><i class="fas fa-angle-right"></i></span>
                            <span className="ml-4 hover:text-yellow-700">Contact</span>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="lg:flex text-gray-300 max-w-6xl mx-auto px-4 lg:px-0 mt-8">
                <p className="">Copyright &copy; 2021 Travel Universe. All Rights Reserved.</p>
                <div className="flex justify-center mt-3 lg:mt-0 ml-auto">
                    <span class="mr-4 hover:text-yellow-700 cursor-pointer ">Terms of Use</span>
                    <span class="mr-4 hover:text-yellow-700 cursor-pointer ">|</span>
                    <span class="mr-4 hover:text-yellow-700 cursor-pointer ">Privacy Policy</span>
                    <span class="mr-4 hover:text-yellow-700 cursor-pointer ">|</span>
                    <span class="mr-4 hover:text-yellow-700 cursor-pointer "><i class="fab fa-facebook"></i></span>
                    <span class="mr-4 hover:text-yellow-700 cursor-pointer "><i class="fab fa-twitter"></i></span>
                    <span class="mr-4 hover:text-yellow-700 cursor-pointer "><i class="fab fa-linkedin"></i></span>
                    <span class="mr-4 hover:text-yellow-700 cursor-pointer "><i class="fab fa-github"></i></span>
                    <span class="mr-4 hover:text-yellow-700 cursor-pointer "><i class="fab fa-instagram"></i></span>
                </div>
            </div>
        </div>
    );
};

export default Footer;