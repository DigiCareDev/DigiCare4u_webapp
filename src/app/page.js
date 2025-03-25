import Head from 'next/head';  // Import the Head component for SEO
import Header from '@/components/Header';
import Product from '@/components/Product';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>DigiCare4u - Live Tracking & Monitoring Software</title>
        <meta name="description" content="DigiCare4u offers real-time live tracking software for businesses to monitor assets, vehicles, and fleets. Track with precision and efficiency." />
        <meta name="keywords" content="live tracking, task schedule, analysis insights, app/web access, instant alerts, timeline, DigiCare4u, asset tracking, vehicle tracking, real-time monitoring, fleet management, GPS tracking, security software" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="DigiCare4u - Live Tracking & Monitoring Software" />
        <meta property="og:description" content="Track your assets, vehicles, and people in real-time with DigiCare4u's live tracking software. Secure and efficient fleet management." />
        <meta property="og:image" content="https://www.digicare4u.com/og-image.jpg" />  {/* Replace with your actual image URL */}
        <meta property="og:url" content="https://www.digicare4u.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DigiCare4u - Live Tracking & Monitoring Software" />
        <meta name="twitter:description" content="DigiCare4u offers real-time tracking and monitoring solutions for businesses. Track assets and fleets with precision." />
        <meta name="twitter:image" content="https://www.digicare4u.com/og-image.jpg" />  {/* Replace with your actual image URL */}
      </Head>
      
      <div className="bg-white">
        <Navbar />
        <Hero />
        <Header />
        <Product />
        <Footer />
      </div>
    </>
  );
}
