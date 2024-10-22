import React from 'react';
import Image from 'next/image';
import Bm1 from "../../Assets/bm1.png";
import Bm2 from "../../Assets/bm2.jpg";
import Bm3 from "../../Assets/bm3.jpg";
import Bm4 from "../../Assets/bm4.jpg";
import Bm5 from "../../Assets/bm5.jpg";

function Gallary() {
    return (
        <div className="container mx-auto p-4" id='gallery'>
            <h1 className='text-blue-600 text-4xl font-bold my-8 text-center'>Gallery</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
                    <Image className="h-auto max-w-full rounded-lg h-80" src={Bm4} alt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={Bm5}lt="" />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg  h-80" src={Bm2} alt="" />
                </div>
                {/* <div>
                    <Image className="h-auto max-w-full rounded-lg" src={Bm3} alt="" />
                </div> */}
            </div>
        </div>
    );
}

export default Gallary;
