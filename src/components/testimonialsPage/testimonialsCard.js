import React from "react";

function TestimonialsCard() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">What Clients Say</h2>
          <p className="text-gray-600 mt-2">
            We place huge value on strong relationships and have seen the benefit they bring to our business. Customer feedback is what is helping us get it right.
          </p>
        </div>

        {/* Responsive Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 mx-auto">
            <div className="flex justify-center mb-4">
              <img
                src="https://imgcdn.stablediffusionweb.com/2024/11/1/f9199f4e-2f29-4b5c-8b51-5a3633edb18b.jpg"
                alt="Author 1"
                className="w-30 h-30 rounded-full object-cover shadow-lg"
              />
            </div>
            <p className="text-gray-700 italic text-center">
              "DigiCare4u has completely transformed the way we manage our assets. The real-time tracking feature is incredibly accurate, and the instant alerts ensure we never miss a thing. Highly recommended!"
            </p>
            <div className="mt-4 text-center">
              <p className="font-semibold text-gray-800">Michael Anderson</p>
              <p className="text-sm text-gray-500">Operations Manager, Swift Logistics Inc.</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 mx-auto">
            <div className="flex justify-center mb-4">
              <img
                src="https://imgcdn.stablediffusionweb.com/2024/11/1/f9199f4e-2f29-4b5c-8b51-5a3633edb18b.jpg"
                alt="Author 2"
                className="w-30 h-30 rounded-full object-cover shadow-lg"
              />
            </div>
            <p className="text-gray-700 italic text-center">
              "We were looking for a tracking system that was both efficient and affordable, and DigiCare4u exceeded our expectations. The pricing is transparent, and the features are top-notch!"
            </p>
            <div className="mt-4 text-center">
              <p className="font-semibold text-gray-800">Sarah Collins</p>
              <p className="text-sm text-gray-500">CEO, SecureFleet Solutions</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 mx-auto">
            <div className="flex justify-center mb-4">
              <img
                src="https://imgcdn.stablediffusionweb.com/2024/11/1/f9199f4e-2f29-4b5c-8b51-5a3633edb18b.jpg"
                alt="Author 3"
                className="w-30 h-30 rounded-full object-cover shadow-lg"
              />
            </div>
            <p className="text-gray-700 italic text-center">
              "Managing our fleet has never been easier! DigiCare4u provides real-time updates and smart analytics, helping us optimize routes and reduce fuel costs. A game-changer for our business."
            </p>
            <div className="mt-4 text-center">
              <p className="font-semibold text-gray-800">Daniel Martinez</p>
              <p className="text-sm text-gray-500">Fleet Supervisor, Global Transport Co.</p>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 mx-auto">
            <div className="flex justify-center mb-4">
              <img
                src="https://imgcdn.stablediffusionweb.com/2024/11/1/f9199f4e-2f29-4b5c-8b51-5a3633edb18b.jpg"
                alt="Author 3"
                className="w-30 h-30 rounded-full object-cover shadow-lg"
              />
            </div>
            <p className="text-gray-700 italic text-center">
              "The accuracy of DigiCare4u's GPS tracking is phenomenal. We can monitor our drivers in real time, ensuring timely deliveries and improved customer service."
            </p>
            <div className="mt-4 text-center">
              <p className="font-semibold text-gray-800">Rachel Stevens</p>
              <p className="text-sm text-gray-500">Customer Service Manager, QuickShip Deliveries</p>
            </div>
          </div>

          {/* Testimonial 5 */}
          <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 mx-auto">
            <div className="flex justify-center mb-4">
              <img
                src="https://imgcdn.stablediffusionweb.com/2024/11/1/f9199f4e-2f29-4b5c-8b51-5a3633edb18b.jpg"
                alt="Author 3"
                className="w-30 h-30 rounded-full object-cover shadow-lg"
              />
            </div>
            <p className="text-gray-700 italic text-center">
              "DigiCare4u's tracking system integrated effortlessly with our existing processes. Now, we have complete visibility over our shipments and employees, leading to better efficiency and customer satisfaction."
            </p>
            <div className="mt-4 text-center">
              <p className="font-semibold text-gray-800">Jessica Patel</p>
              <p className="text-sm text-gray-500">Logistics Head, Prime Express Cargo</p>
            </div>
          </div>

          {/* Testimonial 6 */}
          <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 mx-auto">
            <div className="flex justify-center mb-4">
              <img
                src="https://imgcdn.stablediffusionweb.com/2024/11/1/f9199f4e-2f29-4b5c-8b51-5a3633edb18b.jpg"
                alt="Author 3"
                className="w-30 h-30 rounded-full object-cover shadow-lg"
              />
            </div>
            <p className="text-gray-700 italic text-center">
              "I use DigiCare4u for tracking my valuable personal assets, and the peace of mind it provides is priceless. The alerts are instant, and the interface is user-friendly!"
            </p>
            <div className="mt-4 text-center">
              <p className="font-semibold text-gray-800">Tom Richards</p>
              <p className="text-sm text-gray-500">Entrepreneur & Private Investor</p>
            </div>
          </div>

          {/* Testimonial 7 */}
          <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 mx-auto">
            <div className="flex justify-center mb-4">
              <img
                src="https://imgcdn.stablediffusionweb.com/2024/11/1/f9199f4e-2f29-4b5c-8b51-5a3633edb18b.jpg"
                alt="Author 3"
                className="w-30 h-30 rounded-full object-cover shadow-lg"
              />
            </div>
            <p className="text-gray-700 italic text-center">
              "What sets DigiCare4u apart is their outstanding customer support. They helped us set up everything seamlessly, and their team is always available for assistance."
            </p>
            <div className="mt-4 text-center">
              <p className="font-semibold text-gray-800">Jonathan Lee</p>
              <p className="text-sm text-gray-500">IT Director, ProTech Enterprises</p>
            </div>
          </div>

          {/* Testimonial 8 */}
          <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 mx-auto">
            <div className="flex justify-center mb-4">
              <img
                src="https://imgcdn.stablediffusionweb.com/2024/11/1/f9199f4e-2f29-4b5c-8b51-5a3633edb18b.jpg"
                alt="Author 3"
                className="w-30 h-30 rounded-full object-cover shadow-lg"
              />
            </div>
            <p className="text-gray-700 italic text-center">
              "If you're in logistics or asset management, DigiCare4u is a must-have tool. It has drastically improved our ability to track, analyze, and optimize operations."
            </p>
            <div className="mt-4 text-center">
              <p className="font-semibold text-gray-800">Emily Warren</p>
              <p className="text-sm text-gray-500">COO, SmartTrack Solutions</p>
            </div>
          </div>

          {/* Testimonial 9 */}
          <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 mx-auto">
            <div className="flex justify-center mb-4">
              <img
                src="https://imgcdn.stablediffusionweb.com/2024/11/1/f9199f4e-2f29-4b5c-8b51-5a3633edb18b.jpg"
                alt="Author 3"
                className="w-30 h-30 rounded-full object-cover shadow-lg"
              />
            </div>
            <p className="text-gray-700 italic text-center">
              "The instant alert system is a lifesaver! Whether it’s unauthorized movement or an unexpected route deviation, DigiCare4u notifies us immediately, preventing potential risks."
            </p>
            <div className="mt-4 text-center">
              <p className="font-semibold text-gray-800">Alex Carter</p>
              <p className="text-sm text-gray-500">Security Manager, SafeGuard Logistics</p>
            </div>
          </div>

          {/* Testimonial 10 */}
          <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 mx-auto">
            <div className="flex justify-center mb-4">
              <img
                src="https://imgcdn.stablediffusionweb.com/2024/11/1/f9199f4e-2f29-4b5c-8b51-5a3633edb18b.jpg"
                alt="Author 3"
                className="w-30 h-30 rounded-full object-cover shadow-lg"
              />
            </div>
            <p className="text-gray-700 italic text-center">
              "DigiCare4u is a scalable solution that grows with our business. We started small, but as we expanded, the platform handled our needs effortlessly. Highly recommended for growing businesses!"
            </p>
            <div className="mt-4 text-center">
              <p className="font-semibold text-gray-800">Sophia Morgan</p>
              <p className="text-sm text-gray-500">Founder, GreenRoute Transport</p>
            </div>
          </div>



        </div>
      </div>
    </>
  );
}

export default TestimonialsCard;
