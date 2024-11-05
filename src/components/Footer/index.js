import React from 'react'
import Image from 'next/image'
import Logo from '../../Assets/logo.jpg'

function Footer() {
    return (
        <div>
            <footer classname="bg-white dark:bg-gray-900">
                <div classname="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div classname="md:flex md:justify-between">
                        <div classname="mb-6 md:mb-0">
                            <a href="https://flowbite.com/" classname="flex items-center mx-40">
                                <Image
                                    src={Logo}
                                    width={100}
                                    height={100}
                                    alt="BM Social Media Welfare"
                                    classname='rounded-sm'
                                />
                                <span classname="self-center text-xl font-semibold whitespace-nowrap dark:text-white mt-4 md:mt-0 md:ml-3 hidden md:block">
                                    BM Social Welfare Trust
                                </span>                            
                            </a>
                        </div>
                        <div classname="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 classname="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                                <ul classname="text-gray-500 dark:text-gray-400 font-medium">
                                    <li classname="mb-2">
                                        <a href="#home" classname="hover:underline">Home</a>
                                    </li>
                                    <li classname="mb-2">
                                        <a href="#about" classname="hover:underline">About</a>
                                    </li>
                                    <li classname="mb-2">
                                        <a href="#services" classname="hover:underline">Services</a>
                                    </li>
                                    <li classname="mb-2">
                                        <a href="#gallery" classname="hover:underline">Gallery</a>
                                    </li>
                                    <li classname="mb-2">
                                        <a href="#contact" classname="hover:underline">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 classname="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact</h2>
                                <ul classname="text-gray-500 dark:text-gray-400 font-medium">
                                    <li classname="mb-4">
                                        <a href="mailto:info@bmswtrust.org" classname="hover:underline ">Email : info@bmswtrust.org</a>
                                    </li>
                                    <li>
                                        <a href="tel:+917318000751" classname="hover:underline">WhatsApp : +91-7318000751</a>
                                    </li>
                                    <li>
                                        <a href="tel:+917318000751" classname="hover:underline">Connect Us : +91-7318000751-55</a>
                                    </li>
                                    <li>
                                        <a href="#" classname="hover:underline">Address : Plot 6 & 7, Prem Nagar, Laulai, Chinhat, Lucknow, UP - 226028 India</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr classname="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div classname="sm:flex sm:items-center sm:justify-between">
                        <span classname="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="" classname="hover:underline">BM Social Welfare Trust</a>. All Rights Reserved.
                        </span>
                    </div>
                </div>
            </footer>

        </div>

    )
}

export default Footer
