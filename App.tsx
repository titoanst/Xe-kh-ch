import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Steps from './components/Steps';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import StickyContact from './components/StickyContact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Steps />
        <Testimonials />
      </main>
      <Footer />
      <StickyContact />
    </div>
  );
}