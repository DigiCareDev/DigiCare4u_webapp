"use client"

import React from "react"
import { MapPin, Bell, Users, ShieldCheck, CalendarCheck, BarChart, Clock, Smartphone, Globe } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"
import './style.css'
import Head from "next/head";


export default function Features() {

  const features = [
    {
      icon: <MapPin size={32} className="text-blue-500" />,
      title: "Live Location",
      description: "Track your loved ones with accurate Live location updates.",
    },
    {
      icon: <Bell size={32} className="text-red-500" />,
      title: "Instant Alerts",
      description: "Receive alerts when someone enters or leaves a specified area.",
    },
    {
      icon: <Users size={32} className="text-green-500" />,
      title: "Family Sharing",
      description: "Easily add and manage multiple people within your tracking network.",
    },
    {
      icon: <ShieldCheck size={32} className="text-purple-500" />,
      title: "Privacy & Security",
      description: "Your data is encrypted and secure, ensuring complete privacy.",
    },
    {
      icon: <CalendarCheck size={32} className="text-orange-500" />,
      title: "Task Schedule",
      description: "Plan and manage daily tasks efficiently for better productivity.",
    },
    {
      icon: <BarChart size={32} className="text-indigo-500" />,
      title: "Insights/Analyze",
      description: "Gain meaningful insights and track activity trends over time.",
    },
    {
      icon: <Clock size={32} className="text-teal-500" />,
      title: "Timeline",
      description: "View historical location data and track movement over time.",
    },
    {
      icon: <Globe size={32} className="text-pink-500" />,
      title: "Web Access",
      description: "Access your dashboard from any device with our web application.",
    },
    {
      icon: <Smartphone size={32} className="text-pink-500" />,
      title: "Mobile App",
      description: "Stay connected on the go with our easy-to-use mobile application.",
    },
  ];

  return (
    <>
      <Head>
        {/* Title Tag */}
        <title>Features - DigiCare4u: Live Tracking, Fleet Management & More</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Explore the features of DigiCare4u's live tracking software. Track vehicles, manage fleets, get real-time alerts, and more with our mobile and web app."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="DigiCare4u, live tracking software, fleet management, vehicle tracking, task scheduling, insights, privacy, mobile app, web app, alerts"
        />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="Features - DigiCare4u" />
        <meta
          property="og:description"
          content="Explore DigiCare4u's features for live tracking, fleet management, real-time alerts, task scheduling, and more. Learn how our platform can help manage your assets."
        />
        <meta property="og:image" content="https://www.digicare4u.com/images/logo.jpg" />  {/* Replace with your features image */}
        <meta property="og:url" content="https://www.digicare4u.com/features" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Features - DigiCare4u" />
        <meta
          name="twitter:description"
          content="Learn more about DigiCare4u's powerful features for live tracking, fleet management, and real-time alerts."
        />
        <meta name="twitter:image" content="https://www.digicare4u.com/images/logo.jpg" />  {/* Replace with your features image */}

        {/* Structured Data (JSON-LD) for the features page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Features - DigiCare4u",
              description: "Explore the features of DigiCare4u's live tracking software for vehicle tracking, fleet management, and real-time alerts.",
              image: "https://www.digicare4u.com/images/logo.jpg", // Replace with your image URL
              url: "https://www.digicare4u.com/features",
            }),
          }}
        />
      </Head>
      <Navbar />
      <div> 


        <div className="page">
          <section className="timeline">

            <img src="/images/logo.jpg" alt="DigiCare4u logo" height="100" width="100" />

            {/* <h2 className="title">DigiCare4u</h2> */}

            <h5>Features</h5>

            <div className="tree">

              <div className="timeline-right">
                <div className="timeline-content">
                  {/* <h3><MapPin size={32} className="text-blue-500" /></h3> */}
                  <div className="marker-r"></div>
                  <span>Live Location</span>
                  <p>Track your loved ones with accurate live location updates. Our advanced tracking system ensures that you always stay informed about the whereabouts of your family members, friends, or employees. </p>
                </div>
              </div>

              <div className="timeline-left">
                <div className="timeline-content">
                  {/* <h3><Bell size={32} className="text-red-500" /></h3> */}
                  <div className="marker-l"></div>
                  <span>Instant Alerts</span>
                  <p>Receive real-time alerts when someone enters or leaves a specified area. Our instant alert system ensures that you are always notified of important movements, allowing you to act quickly and efficiently. </p>
                </div>
              </div>

              <div className="timeline-right">
                <div className="timeline-content">
                  {/* <h3><Users size={32} className="text-green-500" /></h3> */}
                  <div className="marker-r"></div>
                  <span>Family Sharing</span>
                  <p>Easily add and manage multiple people within your tracking network. Our family sharing feature allows you to create a secure network where every member stays connected and informed.</p>
                </div>
              </div>

              <div className="timeline-left-0">
                <div className="timeline-content">
                </div>
              </div>

              <div className="timeline-right-0">
                <div className="timeline-content">
                </div>
              </div>

              <div className="timeline-left">
                <div className="timeline-content">
                  {/* <h3><ShieldCheck size={32} className="text-purple-500" /></h3> */}
                  <div className="marker-l"></div>
                  <span>Privacy & Security</span>
                  <p>Your data is encrypted and secure, ensuring complete privacy. We understand the importance of keeping your personal information safe, which is why our platform uses advanced security protocols to protect your data. </p>
                </div>
              </div>

            </div>

            <div className="tree">

              <div className="timeline-right">
                <div className="timeline-content">
                  {/* <h3><CalendarCheck size={32} className="text-orange-500" /></h3> */}
                  <div className="marker-r"></div>
                  <span>Task Schedule</span>
                  <p>Plan and manage daily tasks efficiently for better productivity. Our integrated task scheduling feature allows users to create to-do lists, set reminders, and automate routines.</p>
                </div>
              </div>

              <div className="timeline-left">
                <div className="timeline-content">
                  {/* <h3><BarChart size={32} className="text-indigo-500" /></h3> */}
                  <div className="marker-l"></div>
                  <span>Insights/Analyze</span>
                  <p>Gain meaningful insights and track activity trends over time. Our analytics feature provides valuable data on movement patterns, frequently visited locations, and overall activity trends. </p>
                </div>
              </div>

              <div className="timeline-right">
                <div className="timeline-content">
                  {/* <h3><Clock size={32} className="text-teal-500" /></h3> */}
                  <div className="marker-r"></div>
                  <span>Timeline</span>
                  <p>View historical location data and track movement over time. The timeline feature provides a clear history of past locations, allowing users to review previous routes, stops, and movement trends.</p>
                </div>
              </div>

              <div className="timeline-left">
                <div className="timeline-content">
                  {/* <h3><Globe size={32} className="text-pink-500" /></h3> */}
                  <div className="marker-l"></div>
                  <span>Web Access</span>
                  <p>Access your dashboard from any device with our web application. Our cloud-based tracking system ensures that you can monitor locations, manage settings, and analyze data from your computer, tablet, or phone</p>
                </div>
              </div>

              <div className="timeline-right">
                <div className="timeline-content">
                  {/* <h3><Smartphone size={32} className="text-pink-500" /></h3> */}
                  <div className="marker-r"></div>
                  <span>Mobile App</span>
                  <p>Stay connected on the go with our easy-to-use mobile application. Our app is designed for both Android and iOS devices, providing seamless tracking, instant notifications, and easy navigation. </p>
                </div>
              </div>

            </div>

          </section>

        </div>

      </div>
      <Footer />
    </>
  )
}