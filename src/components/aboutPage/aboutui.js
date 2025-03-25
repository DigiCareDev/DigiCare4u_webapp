import React from 'react'

function AboutUI() {
  return (
    <>

        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
          {/* Left Side Content */}
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
            <h1 className="text-2xl font-semibold text-blue-500 mb-2">
              Take Full Control of Your Personal Assets with Ease
            </h1>
            <p className="text-md text-gray-600 leading-relaxed">
              Managing and overseeing your personal assets has never been simpler. With our advanced tracking technology, you gain complete control and real-time access to all your valuable possessions, right at your fingertips. Whether it’s monitoring your assets, keeping track of important belongings, or ensuring security, our system empowers you with unparalleled ease and efficiency.</p>

            <p className="text-md text-gray-600 leading-relaxed pt-4">Our intuitive platform provides instant updates, allowing you to make informed decisions without any hassle. No matter where you are, you can check the status of your assets, track movement, and stay updated with critical insights, ensuring you never lose sight of what matters most.</p>

            <p className="text-md text-gray-600 leading-relaxed pt-4">Security and convenience go hand in hand, and our system is designed to offer both. With a seamless interface and smart notifications, you can stay in control without constant manual checks. Enjoy the confidence of knowing that your assets are protected and managed efficiently at all times.</p>

            <p className="text-md text-gray-600 leading-relaxed pt-4">Whether you are at home, at work, or on the go, you remain connected and in charge. Say goodbye to uncertainty and embrace a smarter, more efficient way to manage your personal assets with complete peace of mind.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/keep_control.jpg"
              alt="App Image"
              className="w-full rounded-lg shadow-lg border-2 border-blue-500"
            />
          </div>
        </div>

        
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between  flex-col-reverse">

          {/* Left Side Content */}

          <div className="w-full md:w-1/2">
              <img
                src="/images/affordable_pricing_new.jpg"
                alt="App Image"
                className="w-full rounded-lg shadow-lg border-2 border-blue-500"
              />
          </div>


          {/* Right Side Image */}
          <div className="w-full md:w-1/2 pr-0 md:pl-8 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-500 mb-2">
              Affordable Pricing – Smart Solutions Within Your Budget
            </h2>
            <p className="text-md text-gray-600 leading-relaxed">
            We believe that top-notch tracking and management solutions should be accessible to everyone without breaking the bank. Our <strong className='text-blue-500'>affordable pricing plans</strong> are designed to offer you maximum value while ensuring complete control over your personal assets. Whether you’re an individual looking for a reliable tracking system or a business seeking efficient asset management, we provide cost-effective solutions tailored to your needs.</p>

            <p className="text-md text-gray-600 leading-relaxed pt-4">With transparent pricing and no hidden charges, you can choose a plan that best fits your requirements. Our flexible subscription options ensure that you only pay for what you need, making it easy to scale as your demands grow. Whether you opt for a <strong className='text-blue-500'>basic plan</strong> for essential tracking or a <strong className='text-blue-500'>premium package</strong> with advanced features, you get the best-in-class technology at a price that suits your budget.</p>

            <p className="text-md text-gray-600 leading-relaxed pt-4">We understand the importance of affordability without compromising quality. That’s why our pricing structure is designed to provide <strong className='text-blue-500'>seamless access to powerful features</strong>, including real-time tracking, instant alerts, and advanced analytics—all at a competitive cost.</p>

            <p className="text-md text-gray-600 leading-relaxed pt-4">Experience the perfect balance of quality, reliability, and affordability. Choose a plan that works for you and enjoy <strong className='text-blue-500'>peace of mind with secure, budget-friendly tracking solutions today!</strong>
            </p>
          </div>
        </div>


        {/* <div className="flex flex-col items-center justify-center min-h-screen">
          <h2 className="text-3xl font-bold text-blue-500 mb-6">Affordable Pricing</h2>
          <div className="relative bg-gradient-to-r p-4 rounded-lg shadow-lg w-full max-w-md">
            
            <div
              className="h-80 w-auto rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/affordable_pricing_new.jpg')", // Replace with your map image URL
              }}
            ></div>

          
            <div className="absolute top-1 right-1 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
              ₹99/user/month
            </div>
          </div>
        </div> */}
        

        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
          {/* Left Side Content */}
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-500 mb-2">
              DigiCare4u Live Tracking – Smarter, Faster, and More Efficient Monitoring
            </h2>
            <p className="text-md text-gray-600 leading-relaxed">DigiCare4u is a cutting-edge live tracking solution designed to revolutionize the way businesses monitor and manage their assets, shipments, and workforce. Whether you're overseeing logistics, ensuring employee productivity, or safeguarding valuable resources, DigiCare4u offers real-time tracking with precision and reliability.</p>

            <p className="text-md text-gray-600 leading-relaxed pt-4">With its intuitive user interface and seamless integration, DigiCare4u adapts to various business models, making it an ideal solution for industries like logistics, transportation, field services, and supply chain management. The software provides instant location updates, status alerts, and detailed movement reports, ensuring that businesses stay informed at all times.</p>

            <p className="text-md text-gray-600 leading-relaxed pt-4">One of the key strengths of DigiCare4u is its powerful analytics and reporting capabilities. By analyzing movement patterns and historical data, businesses can optimize routes, reduce operational costs, and improve efficiency. Additionally, its customizable notifications allow users to receive alerts for specific events, such as delays, unauthorized access, or unexpected deviations from planned routes.</p>

            <p className="text-md text-gray-600 leading-relaxed pt-4">Designed for modern enterprises, DigiCare4u is scalable, secure, and easy to use. Whether you're managing a small team or a global fleet, our solution provides unmatched control and visibility, helping businesses make informed decisions quickly. Stay ahead of the competition with DigiCare4u – the ultimate live tracking solution for smarter operations.</p>
          </div>

          {/* Right Side Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/Live_Location.jpg" // Replace with the actual image URL
              alt="DigiCare4u Live Tracking"
              className="w-full rounded-lg shadow-lg border-2 border-blue-500"
            />
          </div>
        </div>
    </>
  )
}

export default AboutUI;
