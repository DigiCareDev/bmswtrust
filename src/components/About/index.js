import React from 'react';
import Image from 'next/image';
import Logo from '../../Assets/logo.jpg'; // Ensure the image path is correct

function About() {
    return (
        <>
            <div className='container mx-auto p-4' id='about'>
                <h1 className="text-6xl font-bold mb-4 text-center text-blue-300">About Us</h1>
                <div className="flex flex-col md:flex-row items-center justify-between p-8">
                    {/* Left Side - Header, Subheader, and Content */}
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-4xl font-semibold text-blue-800 mb-4 text-blue-800">Who We Are ?</h1>
                        <p className="text-gray-800 text-2xl">
                        The Settlor aims to establish various institutions dedicated to the promotion of education, medical care, and health services in the State of Uttar Pradesh and other locations across India. These institutions will include medical colleges, hospitals, nursing homes, charitable dispensaries, schools, colleges, technical colleges, nursing and paramedical colleges, as well as centers offering degree and diploma courses. The initiative seeks to provide educational and vocational opportunities for boys and girls while delivering medical health services to the general public. To support these objectives, the Settlor will arrange funds and other necessary assets from time to time, catering to both short-term and long-term requirements as needed.                         </p>
                            <div className=''>
                                <div className='bg-white text-xl shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow m-1'>
                                    <strong className='text-blue-800 text-2xl'>Our Mission:</strong> To uplift marginalized communities by offering support and resources in areas that matter most, such as education, health, and economic opportunities. We strive to create sustainable programs that help individuals and families overcome hardships and build a better future.
                                </div>
                                <div className='bg-white text-xl shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow m-1 mt-4'>
                                    <strong className='text-blue-800 text-2xl'>Our Vision:</strong> We envision a society where everyone has equal access to opportunities, regardless of their background. By promoting social welfare and development, we aim to reduce poverty, improve living standards, and foster a sense of community where every individual can thrive.
                                </div>
                            </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="md:w-1/2 m-5">
                        <Image
                            src={Logo}
                            alt="Company"
                            layout="responsive" // Responsive layout for the image
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
