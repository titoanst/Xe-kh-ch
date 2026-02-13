import React from 'react';
import Hero from './Hero';
import BookingForm from './BookingForm';
import DestinationsGrid from './DestinationsGrid';
import ServiceFeatures from './ServiceFeatures';
import Pricing from './Pricing';
import BlogSection from './BlogSection';
import Testimonials from './Testimonials';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      {/* Booking Form kept high for conversion, bridging Hero and Content */}
      <BookingForm />
      
      {/* 1. Destinations - The "Hook" content */}
      <DestinationsGrid />
      
      {/* 2. Value Proposition - "Why Choose Us" */}
      <ServiceFeatures />
      
      {/* 3. Service Details - "Pricing & Fleet" */}
      <Pricing />
      
      {/* 4. Content Marketing - "Blog" */}
      <BlogSection />
      
      {/* 5. Social Proof */}
      <Testimonials />
    </>
  );
};

export default HomePage;