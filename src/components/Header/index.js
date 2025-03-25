'use client';
import Image from 'next/image';
import { MapPin, Bell, Users, ShieldCheck, CalendarCheck, BarChart, Clock, Smartphone, Globe } from "lucide-react";
import Link from 'next/link';

const Hero = () => {
    return (
        <div className="w-full px-5 my-10  bg-gray-300 p-5">
            <div className="text-center my-6">
                <h2 className="text-2xl font-bold text-black">Our Features</h2>
                <p className="px-5 pt-2 mx-10 text-black">
                    DigiCare4u Geo comes with a robust set of features divided across the <strong>Admin Web Panel</strong>, <strong>Admin Mobile App</strong> and <strong>Staff Mobile App</strong> to cater to different operational needs.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col items-center text-center border border-transparent rounded-lg p-4 transition duration-300 hover:bg-white hover:border-1 hover:border-blue-600">
                    <MapPin size={52} className="text-blue-500" />
                    <p className="mt-4 font-semibold text-black">Live Tracking</p>
                    <p className="text-sm text-black">Live tracking ensures workforce visibility, optimizes routes, prevents delays, and improves task efficiency with instant location updates.</p>
                </div>
                <div className="flex flex-col items-center text-center border border-transparent rounded-lg p-4 transition duration-300 hover:bg-white hover:border-1 hover:border-blue-600">
                    <CalendarCheck size={52} className="text-orange-500" />
                    <p className="mt-4 font-semibold text-black">Task Schedule</p>
                    <p className="text-sm text-black">Organize, assign, and track tasks effortlessly, ensuring timely completion while optimizing workforce productivity and accountability.</p>
                </div>
                <div className="flex flex-col items-center text-center border border-transparent rounded-lg p-4 transition duration-300 hover:bg-white hover:border-1 hover:border-blue-600">
                    <BarChart size={52} className="text-indigo-500" />
                    <p className="mt-4 font-semibold text-black">Analysis/Insights</p>
                    <p className="text-sm text-black">Gain actionable insights from detailed reports, track staff efficiency, identify workflow bottlenecks, and optimize performance through data-driven decisions.</p>
                </div>
                <div className="flex flex-col items-center text-center border border-transparent rounded-lg p-4 transition duration-300 hover:bg-white hover:border-1 hover:border-blue-600">
                    <div className='flex items-center justify-between'>
                        <Smartphone size={52} className="text-pink-500" />
                    </div>
                    <p className="mt-4 font-semibold text-black">App/Web Access</p>
                    <p className="text-sm text-black">Seamlessly manage operations from any device, ensuring real-time updates, remote monitoring, and task control via mobile apps and web platforms.</p>
                </div>
            </div>
            <div className="flex justify-center mt-5">
               <Link href="/features">
               <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
                    View More
                </button>
               </Link>
            </div>
        </div>
    );
};

export default Hero;
