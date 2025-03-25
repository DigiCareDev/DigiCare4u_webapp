import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

function PricingUi() {
  const [activeTab, setActiveTab] = useState("Monthly");

  const pricingData = {
    Monthly: {
      title: "Monthly Plan",
      // appPrice: "₹499",
      // webPrice: "₹699",
      features: [
        { name: "Offline Attendance Recording", app: true, web: true },
        { name: "Manual attendance overriding", app: true, web: true },
        { name: "Attendance on Holidays", app: true, web: true },
        { name: "Automatic leave balance tracking", app: true, web: true },
        { name: "Staff Details Report", app: true, web: true },
        { name: "New Employee Joining Report", app: true, web: true },
        { name: "Employee Exit Report", app: true, web: true },
        { name: "Mark attendance from employee app", app: true, web: true },
        { name: "Punch In Punch Out Report", app: true, web: true },
        { name: "Punch Report", app: true, web: true },
        { name: "Staff Details", app: true, web: true },
        { name: "Work Report", app: true, web: true },
        { name: "View Attendance Summary including - present employees, absent employees, on leave employees", app: true, web: true },
        { name: "Download ReportsVisibility of on-field staff: distance travelled, time spent in rest and in motion", app: true, web: true },
        { name: "Dedicated time and distance based metrics cards", app: true, web: true },
        { name: "Daily distance travelled reports", app: true, web: true },
        { name: "See when an outage occurs due to location and/or internet disabling", app: true, web: true },
        { name: "See when an outage occurs when an employee mocks their location", app: true, web: true },
        { name: "Detailed and Summary view of employee activity on the field", app: true, web: true },
        { name: "Access historic paths travelled by employees", app: true, web: true },
        { name: "Track all your employees from a single place", app: true, web: true },
        { name: "Zoom in on the map to see specific employees", app: true, web: true },
        { name: "Configure Task Templates", app: true, web: true },
        { name: "Allow staff to record details of the task completed", app: true, web: true },
        { name: "Download task reports based on task templates", app: true, web: true },
        { name: "Desktop Admin Access", app: false, web: true },

      ],
    },
    Yearly: {
      title: "Yearly Plan",
      // appPrice: "₹999",
      // webPrice: "₹1399",
      features: [
        { name: "Offline Attendance Recording", app: true, web: true },
        { name: "Manual attendance overriding", app: true, web: true },
        { name: "Attendance on Holidays", app: true, web: true },
        { name: "Automatic leave balance tracking", app: true, web: true },
        { name: "Staff Details Report", app: true, web: true },
        { name: "New Employee Joining Report", app: true, web: true },
        { name: "Employee Exit Report", app: true, web: true },
        { name: "Mark attendance from employee app", app: true, web: true },
        { name: "Punch In Punch Out Report", app: true, web: true },
        { name: "Punch Report", app: true, web: true },
        { name: "Staff Details", app: true, web: true },
        { name: "Work Report", app: true, web: true },
        { name: "View Attendance Summary including - present employees, absent employees, on leave employees", app: true, web: true },
        { name: "Download ReportsVisibility of on-field staff: distance travelled, time spent in rest and in motion", app: true, web: true },
        { name: "Dedicated time and distance based metrics cards", app: true, web: true },
        { name: "Daily distance travelled reports", app: true, web: true },
        { name: "See when an outage occurs due to location and/or internet disabling", app: true, web: true },
        { name: "See when an outage occurs when an employee mocks their location", app: true, web: true },
        { name: "Detailed and Summary view of employee activity on the field", app: true, web: true },
        { name: "Access historic paths travelled by employees", app: true, web: true },
        { name: "Track all your employees from a single place", app: true, web: true },
        { name: "Zoom in on the map to see specific employees", app: true, web: true },
        { name: "Configure Task Templates", app: true, web: true },
        { name: "Allow staff to record details of the task completed", app: true, web: true },
        { name: "Download task reports based on task templates", app: true, web: true },
        { name: "Desktop Admin Access", app: false, web: true },
      ],
    },
    // diamond: {
    //   title: "Diamond Plan",
    //   // appPrice: "₹1999",
    //   // webPrice: "₹2499",
    //   features: [
    //     { name: "Offline Attendance Recording", app: true, web: true },
    //     { name: "Manual attendance overriding", app: true, web: true },
    //     { name: "Attendance on Holidays", app: true, web: true },
    //     { name: "Automatic leave balance tracking", app: true, web: true },
    //     { name: "Staff Details Report", app: true, web: true },
    //     { name: "New Employee Joining Report", app: true, web: true },
    //     { name: "Employee Exit Report", app: true, web: true },
    //     { name: "Mark attendance from employee app", app: true, web: true },
    //     { name: "Punch In Punch Out Report", app: true, web: true },
    //     { name: "Punch Report", app: true, web: true },
    //     { name: "Staff Details", app: true, web: true },
    //     { name: "Work Report", app: true, web: true },
    //     { name: "View Attendance Summary including - present employees, absent employees, on leave employees", app: true, web: true },
    //     { name: "Download ReportsVisibility of on-field staff: distance travelled, time spent in rest and in motion", app: true, web: true },
    //     { name: "Dedicated time and distance based metrics cards", app: true, web: true },
    //     { name: "Daily distance travelled reports", app: true, web: true },
    //     { name: "See when an outage occurs due to location and/or internet disabling", app: true, web: true },
    //     { name: "See when an outage occurs when an employee mocks their location", app: true, web: true },
    //     { name: "Detailed and Summary view of employee activity on the field", app: true, web: true },
    //     { name: "Access historic paths travelled by employees", app: true, web: true },
    //     { name: "Track all your employees from a single place", app: true, web: true },
    //     { name: "Zoom in on the map to see specific employees", app: true, web: true },
    //     { name: "Configure Task Templates", app: true, web: true },
    //     { name: "Allow staff to record details of the task completed", app: true, web: true },
    //     { name: "Download task reports based on task templates", app: true, web: true },

    //   ],
    // },
  };

  return (
    <>
      <div className="container mx-auto py-16 px-4 md:px-20 bg-white">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-white-800 text-black">Pricing</h2>
          <p className="text-lg text-white-600 mt-4 text-black">
            Choose from DigiCare4u's offerings across Attendance, Payroll, and Live Tracking features.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center space-x-2 mb-6">
          {/* {["Monthly", "Yearly", "diamond"].map((tab) => ( */}
          {["Monthly", "Yearly"].map((tab) => (
            <button
              key={tab}
              className={`py-1 px-14 rounded-xl font-medium text-sm transition-all duration-300 border shadow-xl text-black ${activeTab === tab
                ? "bg-blue-600 text-white border-blue-700 scale-105"
                : "bg-white text-white-800 border-white-300 hover:bg-white-100"
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Pricing Table */}
        {/* Pricing Table */}
        <div className="border border-white-800 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table-auto min-w-full text-left text-lg border-collapse border border-white-800">
              <thead className="bg-white-100">
                <tr>
                  <th className="p-4 border border-white-800 w-1/3 text-left text-xl font-semibold">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/5550/5550516.png"
                          alt="Icon"
                          className="w-8 h-8"
                        />
                      </div>
                      <h2 className="text-2xl font-semibold text-black">{pricingData[activeTab].title}</h2>
                    </div>
                  </th>
                  <th className="p-4 border border-white-800 w-1/3 text-center text-black">
                    <p>DigiCare4u App</p>
                    <p className="text-4xl text-blue-600 font-semibold text-black">
                      {pricingData[activeTab].appPrice}
                    </p>
                  </th>
                  <th className="p-4 border border-white-800 w-1/3 text-center text-black">
                    <p>DigiCare4u App + Web</p>
                    <p className="text-4xl text-blue-600 font-semibold text-black">
                      {pricingData[activeTab].webPrice}
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingData[activeTab].features.map((feature, index) => (
                  <tr key={index} className="border-t border-white-300">
                    <td className="p-4 border border-white-800 w-1/3 text-black">{feature.name}</td>
                    <td className="p-4 border border-white-800 w-1/3 text-center">
                      {feature.app ? "✅" : "❌"}
                    </td>
                    <td className="p-4 border border-white-800 w-1/3 text-center">
                      {feature.web ? "✅" : "❌"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <ul className="text-sm mt-4 space-y-2">
          <li className="flex items-center text-black">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            All prices are exclusive of GST.
          </li>
          <li className="flex items-center text-black">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            An active App or Web subscription is required to access DigiCare4u.
          </li>
          <li className="flex items-center text-black">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            <span>For enterprise pricing,  <a href="tel:18008894207" className="underline text-blue-500">call us</a> or <a href="tel:18008894207" className="underline text-blue-500">contact us</a> to explore tailored solutions, custom quotes, and exclusive offers for your business needs.</span>.
          </li>
        </ul>


      </div>
    </>
  );
}

export default PricingUi;
