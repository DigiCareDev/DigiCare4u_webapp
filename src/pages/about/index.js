import Head from 'next/head';  // Import the Head component for SEO
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
import Aboutui from '@/components/aboutPage/aboutui';

function About() {
  return (
    <>
      <Head>
        <title>About DigiCare4u - Live Tracking & Monitoring Software</title>
        <meta name="description" content="Learn about DigiCare4u, our mission, and how our live tracking and monitoring software can help businesses improve asset, fleet, and vehicle management." />
        <meta name="keywords" content="about DigiCare4u, live tracking software, asset management, fleet management, vehicle tracking, real-time monitoring, task scheduling, analysis insights" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="About DigiCare4u - Live Tracking & Monitoring Software" />
        <meta property="og:description" content="Discover DigiCare4u’s mission, values, and how our live tracking software empowers businesses to track assets, vehicles, and fleets in real-time." />
        <meta property="og:image" content="https://www.digicare4u.com/images/keep_control.jpg" />
        <meta property="og:url" content="https://www.digicare4u.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About DigiCare4u - Live Tracking & Monitoring Software" />
        <meta name="twitter:description" content="Learn about DigiCare4u and how our cutting-edge live tracking software helps businesses improve asset and fleet management." />
        <meta name="twitter:image" content="https://www.digicare4u.com/images/keep_control.jpg" />
      </Head>

      <div className='bg-white'>
        <Navbar />
        <Aboutui />
        <Footer />
      </div>
    </>
  );
}

export default About;
