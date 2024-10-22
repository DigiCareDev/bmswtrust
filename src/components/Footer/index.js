import React from 'react'
import Image from 'next/image'
import Logo from '../../Assets/logo.jpg'

function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    {/* Logo Section */}
                    <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <Image
                                src={Logo}
                                width={100}
                                height={100}
                                alt="BM Social Media Welfare"
                                className='rounded-sm'
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white mt-4 md:mt-0 md:ml-3">BM Social Welfare Trust</span>
                        </a>
                    </div>

                    {/* Resources and Contact Us Sections */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 ">
                        {/* Resources */}
                        <div>
                            <h2 className="mb-2 mt-4 text-3xl font-semibold text-blue-900 uppercase dark:text-white">Resources</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-1 text-xl text-blue-800">
                                    <a href="#home" className="hover:underline">Home</a>
                                </li>
                                <li className="mb-1 text-xl text-blue-800">
                                    <a href="#about" className="hover:underline">About</a>
                                </li>
                                <li className="mb-1 text-xl text-blue-800">
                                    <a href="#services" className="hover:underline">Services</a>
                                </li>
                                <li className="mb-1 text-xl text-blue-800">
                                    <a href="#gallery" className="hover:underline">Gallery</a>
                                </li>
                                <li className="mb-1 text-xl text-blue-800">
                                    <a href="#contact" className="hover:underline">Contact</a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Us */}
                        <div>
                            <h2 className="mb-2 mt-4 text-3xl font-semibold text-blue-900 uppercase dark:text-white">Contact Us</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-2 text-lg">
                                    <a href="mailto:info@bmswtrust.org" className="hover:underline ">Email : info@bmswtrust.org</a>
                                </li>
                                <li className="mb-2 text-lg">
                                    <a href="tel:+917318000751" className="hover:underline">WhatsApp : +91-7318000751</a>
                                </li>
                                <li className="mb-2 text-lg">
                                    <a href="tel:+917318000751" className="hover:underline">Connect Us : +91-7318000751-55</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Address : Plot 6 & 7, Prem Nagar, Laulai, Chinhat, Lucknow, UP - 226028 India</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                {/* Footer Bottom */}
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-lg text-blue-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">BM Social Welfare Trust</a>. All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
