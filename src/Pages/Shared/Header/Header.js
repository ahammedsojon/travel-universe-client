import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    const [isToggle, setIsToggle] = useState(false);
    const handleMobileMenu = () => {
        setIsToggle(!isToggle);
    }
    return (
        <>
            {/* Navbar goes here  */}
            <nav className="bg-white shadow-lg">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex lg:space-x-7">
                            <div>
                                {/* Website Logo */}
                                <NavLink to="/" className="flex items-center py-4 px-2">
                                    <img src="https://i.ibb.co/w640Z8b/logo.png" alt="Logo" className="max-w-full h-10 w-10 mr-2 rounded-full object-cover" />
                                    <span className="font-semibold text-lg  text-red-900">TravelUniverse</span>
                                </NavLink>
                            </div>
                            {/* Primary Navbar items */}
                            <div className="hidden md:flex items-center space-x-1">
                                <NavLink to="/home" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Home</NavLink>
                                <NavLink to="/about" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</NavLink>

                                <HashLink to="/home#services" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Sevices</HashLink>

                                {
                                    user.email &&
                                    <>
                                        <li className="drop-down py-4 px-2 text-gray-500 font-semibold hover:text-gray-500 transition duration-300 relative cursor-pointer">Dashboard <i class="fas fa-caret-down text-green-500"></i>
                                            <ul className="absolute left-0">
                                                <li>
                                                    <NavLink to="/addService" className="py-2 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 item">Add Service</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/myOrders" className="py-2 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 item">My Orders</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/manageOrders" className="py-2 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 item">Manage Orders</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                    </>
                                }

                                <NavLink to="/contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact Us</NavLink>

                            </div>
                        </div>
                        {/* Secondary Navbar items */}
                        <div className="hidden md:flex items-center space-x-3 ">
                            {
                                user.email ? <>
                                    <span className="text-red-800 mr-2">Hello, {user.displayName}</span>
                                    <img className="w-10 h-10 object-cover rounded-circle" src={user.photoURL} alt="" />
                                    <NavLink to="/login">
                                        <button onClick={logOut} className="py-2 px-4 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Log out</button></NavLink>
                                </> : <NavLink to="/login">
                                    <button onClick={logOut} className="py-2 px-4 font-medium text-white bg-green-500 rounded hover:bg-green-700 transition duration-300">Log in</button></NavLink>
                            }
                        </div>
                        {/* Mobile menu button  */}
                        <div className="md:hidden flex items-center">
                            <button onClick={handleMobileMenu} className="outline-none mobile-menu-button">
                                <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                                    x-show="!showMenu"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* mobile menu */}
                <div className={!isToggle ? "hidden mobile-menu" : "md:hidden mobile-menu pb-4"}>
                    <ul className="">
                        <li><Link to="/home" className="block text-sm px-2 py-4 hover:bg-green-500">Home</Link></li>
                        <li><Link to="/about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</Link></li>
                        <li><HashLink to="/home#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</HashLink></li>
                        {
                            user.email &&
                            <>
                                <li><Link to="/addService" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Add Service</Link></li>
                                <li><Link to="/myOrders" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">My Orders</Link></li>
                                <li><Link to="/manageOrders" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Manage Orders</Link></li>
                            </>
                        }
                        <li><Link to="/contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</Link></li>
                        {
                            user.email ? <li><Link to="/login"><button onClick={logOut} className="py-2 px-4 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300 mt-2">Log Out</button></Link></li> :

                                <li><Link to="/login"><button onClick={logOut} className="py-2 px-4 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300 mt-2">Log in</button></Link></li>
                        }


                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Header;