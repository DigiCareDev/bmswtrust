import React from 'react';

function Hero() {
    return (
        <div className='container mx-auto p-4 bg-gray-100 rounded-xl' id='services'>
        <div className="flex flex-col items-center p-8 ">
            <h1 className="text-4xl font-bold mb-8 text-blue-800">Our Services</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* School Card */}
                <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-800">School</h2>
                    <p className="text-gray-600">To establish, maintain and grant aid or assistance to libraries & reading rooms for the convenience of the public.To open, run and manage recognized Colleges of Nursing and Para medicals, Technical Courses with all its undergrad and postgrad courses and associated courses</p>
                </div>

                {/* Colleges Card */}
                <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-800">Colleges</h2>
                    <p className="text-gray-600">To open, run and manage recognized school/ college/ university for the education of boys and girls in arts, science, commerce etc. to establish recognized technical/ Para medical/ law colleges etc. for the benefit of the students in particular and society in general. to establish recognized institutions to impart degree and diploma courses in any field of educational and vocational pursuits.</p>
                </div>

                {/* Hospital Card */}
                <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow border-blue-300">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-800">Hospital</h2>
                    <p className="text-gray-600">
                    To establish, maintain and grant aid or other financial assistance to a Medical college, hospital, nursing homes, charitable dispensaries, sanatoria and other establishment for giving medical education to the students under government schemes, medical services to the poor, sick and infirm persons</p>
                </div>

                {/* Additional Card */}
                <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-800">Proposed Services</h2>
                    <p className="text-gray-600 text-gray-xl">
                    To establish, maintain and grant aid financial assistance to homes, orphanages or establishments for relief of and to give help to the poor and destitute people, orphans and widows and otherwise to provide for them to establish and/or help educational institution and grant scholarship and other help to student and institutions for help of students</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Hero;
