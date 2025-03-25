import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TestimonialsCard from '@/components/testimonialsPage/testimonialsCard'
import Head from 'next/head'

function Tutorial() {
  return (
    <>
      <Head>
        {/* Title Tag */}
        <title>Testimonials - DigiCare4u Live Tracking Software Reviews</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Discover real-life experiences and feedback from customers using DigiCare4u’s live tracking and fleet management software."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="DigiCare4u, customer testimonials, fleet management software reviews, live tracking feedback, vehicle tracking reviews, software customer reviews"
        />

        {/* Open Graph Meta Tags for Social Media Sharing */}
        <meta property="og:title" content="Customer Testimonials - DigiCare4u" />
        <meta
          property="og:description"
          content="Read what our customers have to say about DigiCare4u’s live tracking software and fleet management solutions."
        />
        <meta property="og:image" content="https://www.digicare4u.com/images/testimonials-image.jpg" />  {/* Replace with your image */}
        <meta property="og:url" content="https://www.digicare4u.com/testimonials" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Customer Testimonials - DigiCare4u" />
        <meta
          name="twitter:description"
          content="Read customer reviews and testimonials about DigiCare4u’s tracking and fleet management software. See why our users trust us."
        />
        <meta name="twitter:image" content="https://www.digicare4u.com/images/testimonials-image.jpg" />  {/* Replace with your image */}

        {/* Structured Data (JSON-LD) for Testimonials Page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Customer Testimonials - DigiCare4u",
              description:
                "Customer testimonials about DigiCare4u’s live tracking and fleet management software. Learn about how it benefits users in real-time tracking.",
              image: "https://www.digicare4u.com/images/testimonials-image.jpg",  // Replace with your image URL
              url: "https://www.digicare4u.com/testimonials",
            }),
          }}
        />
      </Head>

      <Navbar />
      <TestimonialsCard />
      <Footer />
    </>
  )
}

export default Tutorial
