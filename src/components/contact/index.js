import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Icons for email, phone, and address

function index() {
    return (
        <>
            <div className="container bg-gray-100 py-10 mx-auto" id="contact">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold mb-4 text-blue-800">GET CONNECT</h1>
                    <p className="text-lg text-gray-600 mb-4">"We are here to assist you. Let's stay connected!"</p>
                </div>

                {/* Cards Section */}
                <div className="max-w-screen-lg mx-auto flex flex-wrap justify-center gap-6 mx-3">
                    {/* Email Card */}
                    <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow w-full sm:w-60 md:w-72">
                        <FaEnvelope className="text-blue-500 w-6 h-6 mr-4 mb-2" />
                        <div>
                            <h2 className="text-xl font-semibold">Email</h2>
                            <a href="mailto:info@bmswtrust.org" className="text-gray-600">
                            info@bmswtrust.org
                            </a>
                        </div>
                    </div>

                    {/* Phone Card */}
                    <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow w-full sm:w-60 md:w-72">
                        <FaPhoneAlt className="text-green-500 w-6 h-6 mr-4 mb-2" />
                        <div>
                            <h2 className="text-xl font-semibold">Call Us</h2>
                            <a href="tel:+919305111069" className="text-gray-600">
                                +91-9305111069
                            </a>
                        </div>
                    </div>

                    {/* Address Card */}
                    <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow w-full sm:w-60 md:w-72">
                        <FaMapMarkerAlt className="text-red-500 w-6 h-6 mr-4 mb-2" />
                        <div>
                            <h2 className="text-xl font-semibold">Address</h2>
                            <p className="text-gray-600">07,Khasra No.426SA ,Laulai ,Mallhaur ,Lucknow -226028</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default index;
