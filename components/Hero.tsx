import React from 'react';
import { Phone, CalendarCheck } from 'lucide-react';
import { HOTLINE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?q=80&w=2070&auto=format&fit=crop" 
          alt="Gia đình đi du lịch bằng xe ô tô" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
            THUÊ XE 4 & 7 CHỖ GIÁ TỐT<br/>
            <span className="text-primary-400">ĐƯA ĐÓN TẬN NƠI</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 font-medium">
            An Toàn – Thoải Mái – Tài Xế Thân Thiện
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#booking"
              className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white text-lg font-bold py-4 px-10 rounded-full shadow-xl transform hover:-translate-y-1 transition-all"
            >
              <CalendarCheck size={24} />
              ĐẶT XE NGAY
            </a>
            <a 
              href={`tel:${HOTLINE.replace(/\./g, '')}`}
              className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-primary-700 text-lg font-bold py-4 px-10 rounded-full shadow-xl transform hover:-translate-y-1 transition-all"
            >
              <Phone size={24} />
              GỌI TƯ VẤN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;