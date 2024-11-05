import React from 'react'
import Image from 'next/image'
import Logo from '../../Assets/logo.jpg'

function Footer() {
    return (
        <div>
            <footer className="bg-white dark:bg-gray-900">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="" className="flex items-center mx-40">
                                <Image
                                    src={Logo}
                                    width={100}
                                    height={100}
                                    alt="BM Social Media Welfare"
                                    className='rounded-sm'
                                />
                                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white mt-4 md:mt-0 md:ml-3 hidden md:block">
                                    BM Social Welfare Trust
                                </span>                            
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-2">
                                        <a href="#home" className="hover:underline">Home</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#about" className="hover:underline">About</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#services" className="hover:underline">Services</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#gallery" className="hover:underline">Gallery</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#contact" className="hover:underline">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="mailto:info@bmswtrust.org" className="hover:underline ">Email : info@bmswtrust.org</a>
                                    </li>
                                    <li>
                                        <a href="tel:+917318000751" className="hover:underline">WhatsApp : +91-7318000751</a>
                                    </li>
                                    <li>
                                        <a href="tel:+917318000751" className="hover:underline">Connect Us : +91-7318000751-55</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Address : 07,Khasra No.426SA ,Laulai ,Mallhaur ,Lucknow -226028</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="" className="hover:underline">BM Social Welfare Trust</a>. All Rights Reserved.
                        </span>
                    </div>
                </div>
            </footer>

        </div>

    )
}

export default Footer
