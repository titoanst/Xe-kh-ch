import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookingForm from './components/BookingForm';
import Features from './components/Features';
import TravelGuide from './components/TravelGuide';
import Specialties from './components/Specialties';
import Pricing from './components/Pricing';
import Steps from './components/Steps';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import StickyContact from './components/StickyContact';
import MapSection from './components/MapSection';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <BookingForm />
        <Features />
        {/* New Travel Ecosystem Section */}
        <TravelGuide />
        <Specialties />
        <Pricing />
        <Steps />
        <Testimonials />
        <MapSection />
      </main>
      <Footer />
      <StickyContact />
    </div>
  );
}