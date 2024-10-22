'use client'

import React, { useState } from 'react';
import Logo from '../../Assets/logo.jpg';
import { FcCustomerSupport } from "react-icons/fc";

function Index() {
    const [active, setActive] = useState('Home');  // Track the active tab

    // Update the active tab when a link is clicked
    const handleTabClick = (tab) => {
        setActive(tab);
    };

    return (
        <>
            <nav className="bg-blue-800 p-3">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        {/* Logo on the left */}
                        <div className="flex flex-1 items-center justify-start sm:items-stretch">
                            <div className="flex flex-shrink-0 items-center">
                                <img
                                    src={Logo}
                                    width={80}
                                    height={80}
                                    alt="BM Social Media Welfare"
                                    className='rounded-md'
                                />
                            </div>
                        </div>
                        
                        {/* Navigation Links */}
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4 mt-2">
                                <a 
                                    href="#home" 
                                    onClick={() => handleTabClick('Home')}
                                    className={`${active === 'Home' ? 'bg-blue-300 text-white' : 'text-gray-300 hover:bg-blue-300 hover:text-white'} rounded-md px-3 py-2 text-lg font-medium`}
                                >
                                    Home
                                </a>
                                <a 
                                    href="#about" 
                                    onClick={() => handleTabClick('About')}
                                    className={`${active === 'About' ? 'bg-blue-300 text-white' : 'text-gray-300 hover:bg-blue-300 hover:text-white'} rounded-md px-3 py-2 text-lg font-medium`}
                                >
                                    About Us
                                </a>
                                <a 
                                    href="#services" 
                                    onClick={() => handleTabClick('Services')}
                                    className={`${active === 'Services' ? 'bg-blue-300 text-white' : 'text-gray-300 hover:bg-blue-300 hover:text-white'} rounded-md px-3 py-2 text-lg font-medium`}
                                >
                                    Services
                                </a>
                                <a 
                                    href="#gallery" 
                                    onClick={() => handleTabClick('Gallery')}
                                    className={`${active === 'Gallery' ? 'bg-blue-300 text-white' : 'text-gray-300 hover:bg-blue-300 hover:text-white'} rounded-md px-3 py-2 text-lg font-medium`}
                                >
                                    Gallery
                                </a>
                                <a 
                                    href="#contact" 
                                    onClick={() => handleTabClick('Contact')}
                                    className={`${active === 'Contact' ? 'bg-blue-300 text-white' : 'text-gray-300 hover:bg-blue-300 hover:text-white'} rounded-md px-3 py-2 text-lg font-medium`}
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>

                        {/* Call Us button on the right */}
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button
                                type="button"
                                className="relative rounded-full bg-blue-400 p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <a href='tel:7318000751' className='p-1 flex items-center'>
                                    <FcCustomerSupport className='h-8 w-8' />
                                    <span className="ml-2 text-xl">Call us</span>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Index;
