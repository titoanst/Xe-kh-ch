import React, { useState } from 'react';
import { ChevronRight, ArrowDown, Play, X } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen w-full bg-primary-900 flex flex-col items-center justify-center overflow-hidden border-b border-gold/10">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
         <div 
            className="text-[30vw] font-serif font-bold text-transparent whitespace-nowrap leading-none"
            style={{ WebkitTextStroke: '1px #C8A24D' }}
         >
           WEST
         </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-800/50 via-primary-900 to-primary-900"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center pt-20">
        
        {/* Intro Tagline */}
        <div className="mb-6 animate-fadeInUp">
            <span className="inline-block py-1 px-3 border border-gold/30 rounded-full text-gold text-xs md:text-sm font-bold uppercase tracking-[0.2em] bg-primary-900/50 backdrop-blur-sm">
                Luxury Travel Experience
            </span>
        </div>

        {/* Big Typography Headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-8 max-w-5xl mx-auto animate-fadeInUp delay-100">
          Khám Phá Trọn Vẹn <br />
          <span className="text-gold italic relative inline-block">
            Miền Tây Sông Nước
            {/* Underline deco */}
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gold transform scale-x-0 animate-expandLine origin-left"></span>
          </span>
        </h1>
        
        {/* Descriptive Copy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left md:text-center animate-fadeInUp delay-200">
            <p className="text-lg text-primary-100 font-light leading-relaxed">
                Hành trình trải nghiệm văn hóa bản địa, ẩm thực đặc sắc và vẻ đẹp thiên nhiên nguyên bản của Đồng bằng sông Cửu Long.
            </p>
            <p className="text-lg text-primary-200 font-light leading-relaxed border-l-2 border-gold/30 pl-4 md:border-l-0 md:pl-0">
                Khám phá những ngôi chùa Khmer độc đáo, chợ nổi nhộn nhịp, miệt vườn trĩu quả và nhịp sống hiền hòa đặc trưng miền Tây Nam Bộ.
            </p>
        </div>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 mt-12 animate-fadeInUp delay-300 items-center justify-center">
          <a 
            href="#destinations"
            className="group relative px-8 py-4 bg-gold text-primary-900 font-bold uppercase tracking-widest text-sm rounded-sm overflow-hidden transition-transform hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center gap-2">
                Khám phá điểm đến <ChevronRight size={18} />
            </span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
          </a>
          
          <button 
            onClick={() => setIsVideoOpen(true)}
            className="group px-8 py-4 bg-transparent border border-primary-200 text-primary-100 font-bold uppercase tracking-widest text-sm rounded-sm hover:border-gold hover:text-gold transition-colors flex items-center gap-3"
          >
            <Play size={18} fill="currentColor" /> Xem video
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/50 animate-bounce">
        <ArrowDown size={24} />
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 animate-fadeIn backdrop-blur-sm">
           <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 z-10 text-white/50 hover:text-white transition-colors p-2"
           >
              <X size={40} strokeWidth={1} />
           </button>
           
           <div className="w-full max-w-6xl aspect-video rounded-lg overflow-hidden shadow-2xl border border-white/10 relative bg-black">
               <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ZzT8C3a6q2E?autoplay=1&rel=0&showinfo=0" 
                  title="Mekong Delta Cinematic Travel Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
               ></iframe>
           </div>
           
           {/* Close on background click */}
           <div className="absolute inset-0 -z-10 cursor-pointer" onClick={() => setIsVideoOpen(false)}></div>
        </div>
      )}
    </section>
  );
};

export default Hero;