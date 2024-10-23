import React from 'react'
import Image from 'next/image'
import Logo from '../../Assets/logo.jpg'

function Footer() {
    return (
        <div>
            <footer class="bg-white dark:bg-gray-900">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div class="md:flex md:justify-between">
                        <div class="mb-6 md:mb-0">
                            <a href="https://flowbite.com/" class="flex items-center">
                                <Image
                                    src={Logo}
                                    width={100}
                                    height={100}
                                    alt="BM Social Media Welfare"
                                    className='rounded-sm'
                                />
                                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white mt-4 md:mt-0 md:ml-3 hidden md:block">
                                    BM Social Welfare Trust
                                </span>                            </a>
                        </div>
                        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-2">
                                        <a href="#home" class="hover:underline">Home</a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="#about" class="hover:underline">About</a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="#services" class="hover:underline">Services</a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="#gallery" class="hover:underline">Gallery</a>
                                    </li>
                                    <li class="mb-2">
                                        <a href="#contact" class="hover:underline">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="mailto:info@bmswtrust.org" className="hover:underline ">Email : info@bmswtrust.org</a>
                                    </li>
                                    <li>
                                        <a href="tel:+917318000751" className="hover:underline">WhatsApp : +91-7318000751</a>
                                    </li>
                                    <li>
                                        <a href="tel:+917318000751" className="hover:underline">Connect Us : +91-7318000751-55</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Address : Plot 6 & 7, Prem Nagar, Laulai, Chinhat, Lucknow, UP - 226028 India</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="" class="hover:underline">BM Social Welfare Trust</a>. All Rights Reserved.
                        </span>
    
                    </div>
                </div>
            </footer>

        </div>

    )
}

export default Footer
