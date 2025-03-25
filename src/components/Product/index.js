'use client';
import React from 'react'
import Image from 'next/image';


function index() {
    return (
        <>
            <div className="container mx-auto px-4 py-8 mt-5 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-6">
                    <div>
                        <h2 className="text-2xl font-bold text-black">Selected Area wise <span className="text-blue-600">Attendance</span></h2>
                        <p className="text-gray-600 mt-2 text-lg">
                            This approach will make sure that only the sign-up page is shown and any other route will automatically redirect to it.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Image src="/images/areawise.jpg" alt="Selected Area wise Attendance" width={200} height={150} className="rounded-lg shadow-md" />
                    </div>
                </div>
                <div className="flex flex-col-reverse md:flex-row gap-8 items-center mt-6">
                    <div className="flex justify-center">
                        <Image src="/images/sos.png" alt="Selected Area wise Attendance" width={300} height={200} className="rounded-lg shadow-md" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-black">
                            Multiple Member send notification for <span className="text-blue-600">SOS</span>/<span className="text-blue-600">Background Tracking</span>
                        </h2>
                        <p className="text-gray-600 mt-2 text-lg">
                            This approach will make sure that only the sign-up page is shown and any other route will automatically redirect to it.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-6">
                    <div>
                        <h2 className="text-2xl font-bold text-black">Download Report</h2>
                        <p className="text-gray-600 mt-2 text-lg">
                            This approach will make sure that only the sign-up page is shown and any other route will automatically redirect to it.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Image src="/images/report1.jpg" alt="Selected Area wise Attendance" width={300} height={200} className="rounded-lg shadow-md" />
                    </div>
                </div>
            </div>
            {/* <div className="m-5 bg-white px-5 py-3 rounded-lg flex justify-between items-center shadow-md relative overflow-hidden">
                <div className="absolute inset-0">
                    <Image src="/images/background-pattern.png" alt="Background Pattern" layout="fill" objectFit="cover" className="opacity-30" />
                </div>
                <button className="bg-blue-600 text-white px-2 m-2 py-2 rounded-lg shadow-md hover:bg-blue-500 relative z-10">Callback now</button>
                <h3 className="text-lg font-bold text-black relative z-10"><span className="text-blue-600">Get in touch</span> with us</h3>
            </div> */}

        </>
    )
}

export default index