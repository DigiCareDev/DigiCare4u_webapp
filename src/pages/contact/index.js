import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contactnumber from '@/components/contactPage/contact';
import Head from 'next/head';
import React from 'react';

function contact() {
  return (
    <>
      <Head>
        <title>Contact Us - DigiCare4u</title>
        <meta name="description" content="Get in touch with DigiCare4u for support, inquiries, or feedback. Our team is here to assist with any questions you may have." />
        <meta name="keywords" content="contact us, DigiCare4u, support, inquiries, customer service, help, live tracking software, fleet management" />
        <meta property="og:title" content="Contact Us - DigiCare4u" />
        <meta property="og:description" content="Contact DigiCare4u for any inquiries, support, or feedback. Our team is ready to help you with live tracking and fleet management solutions." />
        <meta property="og:image" content="https://www.digicare4u.com//images/minnerbanner05.jpg" />  {/* Replace with your contact image URL */}
        <meta property="og:url" content="https://www.digicare4u.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - DigiCare4u" />
        <meta name="twitter:description" content="Need support or have a question? Reach out to DigiCare4u today. We're here to help you with live tracking software and fleet management." />
        <meta name="twitter:image" content="https://www.digicare4u.com//images/minnerbanner05.jpg" />  {/* Replace with your contact image URL */}
      </Head>

    <div className='bg-white'>
    <Navbar />
      <Contactnumber />
      <Footer />
    </div>
    </>
  );
}

export default contact;
