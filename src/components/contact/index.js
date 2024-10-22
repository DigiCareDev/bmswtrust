import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Icons for email, phone, and address

function index() {
    return (
        <>
            <div className="bg-gray-100 py-10" id='contact'>
                {/* Heading */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4 text-blue-800">GET CONNECT</h1>
                    <p className="text-lg text-gray-600 mb-4">"We are here to assist you. Let's stay connected!"</p>
                </div>

                {/* Cards Section */}
                <div className="flex flex-wrap justify-center gap-6">
                    {/* Email Card */}
                    <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow">
                        <FaEnvelope className="text-blue-500 w-6 h-6 mr-4 mb-2" />
                        <div>
                            <h2 className="text-xl font-semibold">Email</h2>
                            {/* Correct mailto link for email */}
                            <a href='mailto:info@progatetechnology.com' className="text-gray-600">info@progatetechnology.com</a>
                        </div>
                    </div>

                    {/* Phone Card */}
                    <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow">
                        <FaPhoneAlt className="text-green-500 w-6 h-6 mr-4 mb-2" />
                        <div>
                            <h2 className="text-xl font-semibold">Call Us</h2>
                            {/* Correct tel link for phone */}
                            <a href='tel:+919305111069' className="text-gray-600">+91-9305111069</a>
                        </div>
                    </div>

                    {/* Address Card */}
                    <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow">
                        <FaMapMarkerAlt className="text-red-500 w-6 h-6 mr-4 mb-2" />
                        <div>
                            <h2 className="text-xl font-semibold">Address</h2>
                            <p className="text-gray-600">Plot 6 & 7, Prem Nagar, Laulai, Lucknow, UP - 226028</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default index;
