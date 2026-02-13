import React from 'react';
import { MapPin, ArrowRight, Clock, Calendar, Star, Compass, Ship, User, Camera } from 'lucide-react';

const HIGHLIGHTS = [
  {
    id: 'h1',
    name: 'Chùa Dơi (Mahatup)',
    desc: 'Ngôi chùa Khmer nổi tiếng với kiến trúc độc đáo và đàn dơi ngựa tự nhiên treo mình trên cây.',
    image: 'https://images.unsplash.com/photo-1599551608678-7d8122d25d10?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'h2',
    name: 'Chùa Som Rong',
    desc: 'Nổi tiếng với tượng Phật Thích Ca nhập niết bàn khổng lồ và bảo tháp tuyệt đẹp.',
    image: 'https://images.unsplash.com/photo-1621926671048-f62f8373b98c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'h3',
    name: 'Chợ Nổi Ngã Năm',
    desc: 'Giao điểm của 5 dòng sông, nét văn hóa mua bán trên ghe xuồng đặc trưng miền Tây.',
    image: 'https://images.unsplash.com/photo-1605721868470-4e3b2e597c84?q=80&w=800&auto=format&fit=crop',
  }
];

const FOODS = [
  { name: 'Bún Nước Lèo', img: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&w=400&auto=format&fit=crop' },
  { name: 'Bánh Pía', img: 'https://images.unsplash.com/photo-1694701258072-a1694d40026e?q=80&w=400&auto=format&fit=crop' },
  { name: 'Bánh Cống', img: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=400&auto=format&fit=crop' }, // Placeholder for Banh Cong
  { name: 'Lạp Xưởng', img: 'https://images.unsplash.com/photo-1550507992-eb63eea0f556?q=80&w=400&auto=format&fit=crop' },
];

const TIMELINE = [
  { day: 'Ngày 01', title: 'Khám Phá Văn Hóa Khmer', activities: ['Đón khách tại Sài Gòn', 'Viếng Chùa Dơi (Mahatup)', 'Check-in Chùa Som Rong & Tượng Phật nằm', 'Thưởng thức Bún Nước Lèo Cây Nhãn'] },
  { day: 'Ngày 02', title: 'Sông Nước Miền Tây', activities: ['Trải nghiệm Chợ Nổi Ngã Năm sáng sớm', 'Tham quan lò bánh Pía truyền thống', 'Mua đặc sản làm quà', 'Khởi hành về lại Sài Gòn'] }
];

const TravelGuide: React.FC = () => {
  return (
    <section id="guide" className="bg-white">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1544957992-20516f571346?q=80&w=2070&auto=format&fit=crop" 
          alt="Sóc Trăng Cover" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-900/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-gold uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-4 animate-fadeInUp">
            Điểm đến nổi bật
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fadeInUp delay-100">
            Du Lịch Sóc Trăng
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mb-8 animate-fadeInUp delay-200">
            Vẻ đẹp giao thoa văn hóa Kinh – Hoa – Khmer. Khám phá chùa cổ linh thiêng, ẩm thực đặc sắc và nét đẹp sông nước nguyên bản.
          </p>
          <div className="flex gap-4 animate-fadeInUp delay-300">
            <button className="bg-gold hover:bg-gold-hover text-primary-900 px-8 py-3 rounded-full font-bold transition-all hover:-translate-y-1">
              Đặt xe đi Sóc Trăng
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-primary-900 px-8 py-3 rounded-full font-bold transition-all hover:-translate-y-1">
              Xem lịch trình
            </button>
          </div>
        </div>
      </div>

      {/* 2. INTRO OVERVIEW */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute top-4 left-4 w-full h-full border-2 border-gold rounded-2xl z-0 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <img 
                src="https://images.unsplash.com/photo-1599551608678-7d8122d25d10?q=80&w=800&auto=format&fit=crop" 
                alt="Chùa Sóc Trăng" 
                className="relative z-10 w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <span className="text-gold uppercase tracking-widest text-sm font-bold mb-2 block">Tổng quan</span>
              <h2 className="font-serif text-4xl font-bold text-primary-900 mb-6">Xứ Sở Chùa Vàng Phương Nam</h2>
              <p className="text-dark-sub leading-relaxed mb-6 font-light text-lg">
                Sóc Trăng là điểm đến nổi bật của miền Tây Nam Bộ, nơi hội tụ tinh hoa văn hóa của ba dân tộc Kinh – Hoa – Khmer. Nơi đây không chỉ nổi tiếng với hệ thống chùa chiền kiến trúc lộng lẫy mà còn quyến rũ du khách bởi những lễ hội rực rỡ sắc màu và nền ẩm thực phong phú, đậm đà bản sắc.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                    <Compass className="text-gold shrink-0" />
                    <div>
                        <h4 className="font-bold text-primary-900">Vị trí</h4>
                        <p className="text-sm text-dark-sub">Cách TP.HCM 220km</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <Calendar className="text-gold shrink-0" />
                    <div>
                        <h4 className="font-bold text-primary-900">Thời điểm đẹp</h4>
                        <p className="text-sm text-dark-sub">Tháng 10 - Tháng 4 (Lễ hội)</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. HIGHLIGHTS (DESTINATIONS) */}
      <div className="py-20 bg-cream">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary-900 mb-4">Địa Điểm Nổi Bật</h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HIGHLIGHTS.map((item) => (
              <div key={item.id} className="group bg-white rounded-[16px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-primary-900 mb-3 group-hover:text-gold transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-dark-sub font-light mb-6 line-clamp-3">
                    {item.desc}
                  </p>
                  <button className="flex items-center gap-2 text-primary-800 text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                    Xem chi tiết <ArrowRight size={16} className="text-gold" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. CUISINE */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
             <h2 className="font-serif text-4xl font-bold text-primary-900">Ẩm Thực Đặc Sắc</h2>
             <p className="text-dark-sub mt-4">Hương vị đậm đà khó quên của vùng đất Sóc Trăng</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {FOODS.map((food, idx) => (
                <div key={idx} className="group relative rounded-xl overflow-hidden aspect-square cursor-pointer">
                    <img src={food.img} alt={food.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/20 to-transparent flex items-end p-6">
                        <h3 className="text-white font-serif font-bold text-xl">{food.name}</h3>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. ITINERARY */}
      <div className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 max-w-[1000px]">
            <div className="text-center mb-16">
                <span className="text-gold uppercase tracking-widest text-sm font-bold mb-2 block">Gợi ý lịch trình</span>
                <h2 className="font-serif text-4xl font-bold text-primary-900">Hành Trình 2 Ngày 1 Đêm</h2>
            </div>

            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold/30 -translate-x-1/2 hidden md:block"></div>
                
                <div className="space-y-12">
                    {TIMELINE.map((item, index) => (
                        <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Day Badge */}
                            <div className="w-full md:w-1/2 flex justify-start md:justify-end md:pr-12">
                                 {index % 2 !== 0 && <div className="hidden md:block w-full"></div>} 
                                 <div className={`relative ${index % 2 !== 0 ? 'md:ml-auto md:pl-12' : ''}`}>
                                     <span className="inline-block px-4 py-1 bg-gold text-white font-bold rounded-full mb-2 shadow-lg">
                                        {item.day}
                                     </span>
                                     <h3 className="font-serif text-2xl font-bold text-primary-900">{item.title}</h3>
                                 </div>
                            </div>

                            {/* Center Dot */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gold rounded-full border-4 border-white shadow-md -translate-x-1/2 hidden md:block"></div>

                            {/* Content */}
                            <div className={`w-full md:w-1/2 bg-white p-6 rounded-2xl shadow-sm border border-primary-100 ${index % 2 !== 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                                <ul className="space-y-3">
                                    {item.activities.map((act, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-700">
                                            <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 shrink-0"></div>
                                            <span className="font-light">{act}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>

      {/* 6. EXPERIENCES */}
      <div className="py-20 bg-white border-t border-gray-100">
         <div className="container mx-auto px-4 max-w-[1200px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                    { icon: <Star size={32} />, label: 'Tâm Linh', desc: 'Hệ thống chùa Khmer' },
                    { icon: <User size={32} />, label: 'Văn Hóa', desc: 'Lễ hội Oóc Om Bóc' },
                    { icon: <Ship size={32} />, label: 'Sông Nước', desc: 'Chợ nổi & Cù lao' },
                    { icon: <Camera size={32} />, label: 'Check-in', desc: 'Kiến trúc độc bản' },
                ].map((exp, i) => (
                    <div key={i} className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-cream transition-colors">
                        <div className="text-gold mb-4 p-4 bg-primary-50 rounded-full">{exp.icon}</div>
                        <h4 className="font-serif font-bold text-lg text-primary-900">{exp.label}</h4>
                        <p className="text-sm text-dark-sub font-light">{exp.desc}</p>
                    </div>
                ))}
            </div>
         </div>
      </div>

      {/* 7. CTA */}
      <div className="py-20 bg-primary-900 text-center px-4">
         <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">Sẵn Sàng Khám Phá Sóc Trăng?</h2>
            <p className="text-primary-200 text-lg mb-10 font-light">
                Đặt xe ngay hôm nay để có chuyến đi an toàn, thoải mái và trọn vẹn niềm vui cùng gia đình.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#booking" className="bg-gold hover:bg-gold-hover text-primary-900 font-bold py-4 px-10 rounded-full shadow-xl transition-transform hover:-translate-y-1">
                    Đặt Xe Ngay
                </a>
                <a href="#contact-map" className="border border-white text-white hover:bg-white hover:text-primary-900 font-bold py-4 px-10 rounded-full transition-transform hover:-translate-y-1">
                    Liên Hệ Tư Vấn
                </a>
            </div>
         </div>
      </div>

    </section>
  );
};

export default TravelGuide;