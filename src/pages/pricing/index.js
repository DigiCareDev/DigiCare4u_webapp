import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'
import PricingUi from '@/components/pricingPage/pricingui'
import Head from 'next/head' // Importing Head component

function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing - DigiCare4u: Affordable Tracking & Fleet Management Solutions</title>
        <meta name="description" content="Check out DigiCare4u's affordable pricing plans for live tracking, fleet management, and real-time alerts. Choose the best plan for your needs." />
        <meta name="keywords" content="DigiCare4u, pricing, fleet management, live tracking, vehicle tracking, subscription plans, task scheduling, real-time alerts" />
        <meta property="og:title" content="Pricing - DigiCare4u" />
        <meta property="og:description" content="Discover the best pricing plans for DigiCare4u’s tracking software. Choose the plan that fits your business and enjoy real-time alerts and fleet management." />
        <meta property="og:image" content="https://www.digicare4u.com/images/pricing-image.jpg" /> 
        <meta property="og:url" content="https://www.digicare4u.com/pricing" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pricing - DigiCare4u" />
        <meta name="twitter:description" content="Explore DigiCare4u's pricing for tracking, fleet management, and real-time alerts. Choose the best plan for your needs." />
        <meta name="twitter:image" content="https://www.digicare4u.com/images/pricing-image.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Pricing - DigiCare4u",
              description:
                "Explore affordable pricing plans for DigiCare4u’s live tracking and fleet management software. Choose the plan that works for you.",
              image: "https://www.digicare4u.com/images/pricing-image.jpg", 
              url: "https://www.digicare4u.com/pricing",
            }),
          }}
        />
      </Head>

      <div className='bg-white'>
        <Navbar />
        <PricingUi />
        <Footer />
      </div>
    </>
  )
}

export default Pricing
