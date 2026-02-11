import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { HERO_HEADLINE, HERO_SUBHEADLINE, HOTLINE, ZALO_ID } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Image / Gradient */}
      <div className="absolute inset-0 z-0">
        {/* Using a placeholder image that closely matches the 'Mekong Bridge' prompt description */}
        <img 
          src="https://picsum.photos/seed/mekongbridge/1920/1080" 
          alt="Xe ô tô đi trên cầu Cần Thơ" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent lg:via-white/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-800 font-semibold text-sm mb-6 border border-primary-200">
            👋 Dịch vụ xe Sóc Trăng - Sài Gòn tốt nhất
          </span>
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
            {HERO_HEADLINE}
          </h1>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed font-medium">
            {HERO_SUBHEADLINE}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`tel:${HOTLINE.replace(/\./g, '')}`}
              className="flex items-center justify-center gap-3 bg-brand-orange hover:bg-orange-600 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-xl transform hover:-translate-y-1 transition-all"
            >
              <Phone size={24} />
              Đặt Xe Ngay
            </a>
            <a 
              href={`https://zalo.me/${ZALO_ID}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-xl transform hover:-translate-y-1 transition-all"
            >
              <MessageCircle size={24} />
              Chat Zalo
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4 text-sm font-medium text-slate-600">
            <div className="flex -space-x-2">
               {[1,2,3,4].map(i => (
                 <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://picsum.photos/seed/${i}/50/50`} alt="User" />
               ))}
            </div>
            <p>Hơn 1.000+ khách hàng đã tin tưởng tháng này</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;