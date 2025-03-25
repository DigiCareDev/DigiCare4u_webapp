import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
import BlogCard from "@/components/blogPage/blog";

function Blog() {
  return (
    <>
      <Head>
        <title>Blog - DigiCare4u - Live Tracking & Fleet Management Software</title>
        <meta name="description" content="Explore DigiCare4u’s blog for insights, tips, and updates on live tracking software, fleet management, asset tracking, and more." />
        <meta name="keywords" content="DigiCare4u blog, live tracking software, fleet management, asset tracking, vehicle tracking, real-time monitoring, task scheduling, fleet insights" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="DigiCare4u Blog - Live Tracking & Fleet Management Insights" />
        <meta property="og:description" content="Read the latest blog posts on live tracking, fleet management, and business insights. Stay updated with DigiCare4u's latest features and industry news." />
        <meta property="og:image" content="https://www.digicare4u.com/og-image-blog.jpg" />  {/* Replace with your actual image URL */}
        <meta property="og:url" content="https://www.digicare4u.com/blog" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DigiCare4u Blog - Live Tracking & Fleet Management Insights" />
        <meta name="twitter:description" content="Stay updated with DigiCare4u’s blog, offering insights into live tracking software, fleet management, asset tracking, and more." />
        <meta name="twitter:image" content="https://www.digicare4u.com/og-image-blog.jpg" />  {/* Replace with your actual image URL */}
      </Head>

      <div className='bg-white'>
      <Navbar />
      <BlogCard />
      <Footer />
      </div>
    </>
  );
}

export default Blog;
