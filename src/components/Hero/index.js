'use client';
import Image from 'next/image';
import { Mail } from "lucide-react";
import Link from 'next/link';
import { ImMobile } from "react-icons/im";

const Hero = () => {
    return (
        <div className="container mx-auto px-4 my-10 bg-white">
            {/* <div >
                <video 
                    className="w-full mt-1" 
                    controls 
                    poster="https://via.placeholder.com/800x400.png?text=Video+Preview"
                    autoPlay
                    loop
                    muted
                >
                    <source src="/video/tracking.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div> */}
            <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 mx-auto w-full">
                <div className="md:w-2/3">
                    <h2 className="text-3xl font-bold text-black mt-5">
                        Track Your <span className="text-blue-500">Caring, Loving,</span> and <span className="text-blue-500">Employees</span> with Ease
                    </h2>
                    <p className="text-gray-600 mt-2 text-lg mt-5">
                        Stay connected and informed with real-time tracking for loved ones and employees, ensuring safety, efficiency, and complete control.
                    </p>
                    <div className="mt-7 flex space-x-3">
                        <Link href="tel:+919876543210" className="mr-3 rounded-md">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-500 transition duration-200">
                                <ImMobile />
                                <span>Call Now</span>
                            </button>
                        </Link>


                        <Link href="mailto:help@digicare4u.com" className="mx-3 rounded-md">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-500 transition duration-200">
                            <Mail size={18} className="text-white" />
                                <span>Contact Us</span>
                            </button>
                        </Link>
                    </div>
                    <div className="mt-7 flex items-center space-x-2">
                        <span className="text-gray-600 font-medium">Available now</span>
                        <Image src="/images/android.png" alt="Android" width={30} height={30} />
                        <Image src="/images/desktop1.png" alt="Android" width={30} height={30} className='ml-10'/>
                    </div>
                </div>
                <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center mt-6">
                <Image src="/liveTracking.png" alt="Android" width={300} height={300} className='ml-10'/>
                </div>
            </div>
        </div>
    );
};

export default Hero;