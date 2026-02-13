import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const DESTINATIONS = [
  {
    id: 'soc-trang',
    name: 'Sóc Trăng',
    desc: 'Vẻ đẹp giao thoa văn hóa Khmer, những ngôi chùa cổ kính và ẩm thực đặc trưng như bún nước lèo, bánh pía.',
    link: '/diem-den/soc-trang',
    tags: ['Chùa Khmer', 'Bún Nước Lèo'],
    color: 'bg-primary-800'
  }
];

const DestinationsGrid: React.FC = () => {
  return (
    <section id="destinations" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-gray-100 pb-8">
            <div className="max-w-3xl">
                <span className="text-gold uppercase tracking-widest text-xs font-bold mb-4 block flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-gold"></span>
                    Điểm đến nổi bật
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 leading-tight mb-4">
                    Hành Trình <span className="text-gold italic">Phương Nam</span>
                </h2>
                <p className="text-slate-600 font-light text-lg">
                    Khám phá vùng đất Sóc Trăng với hệ thống chùa Khmer ấn tượng, văn hóa lễ hội đặc sắc và ẩm thực phong phú đậm chất miền Tây.
                </p>
            </div>
        </div>

        {/* Grid Layout - Adjusted for single featured item */}
        <div className="grid grid-cols-1 gap-px bg-gray-100 border border-gray-100 shadow-xl rounded-sm overflow-hidden">
            {DESTINATIONS.map((item, index) => {
                return (
                    <Link 
                        to={item.link} 
                        key={item.id} 
                        className="group relative p-8 md:p-16 flex flex-col justify-between min-h-[400px] md:min-h-[500px] transition-colors duration-500 bg-primary-900"
                    >
                        {/* Background Number */}
                        <span className="absolute top-4 right-8 text-8xl md:text-9xl font-serif font-bold transition-colors pointer-events-none text-primary-800/50">
                            0{index + 1}
                        </span>

                        {/* Content */}
                        <div className="relative z-10 mt-auto">
                            <div className="flex gap-2 mb-6 opacity-100">
                                {item.tags.map(tag => (
                                    <span key={tag} className="text-xs uppercase tracking-wider border border-gold text-gold px-3 py-1 rounded-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                                {item.name}
                            </h3>
                            
                            <p className="font-light leading-relaxed mb-10 max-w-2xl text-primary-100 text-lg md:text-xl">
                                {item.desc}
                            </p>

                            <div className="flex items-center gap-3 font-bold text-sm uppercase tracking-widest text-gold group-hover:text-white transition-colors">
                                <span className="border-b-2 border-gold pb-1 group-hover:border-white transition-colors">
                                    Khám phá ngay
                                </span>
                                <ArrowRight size={18} />
                            </div>
                        </div>

                        {/* Decorative Corner */}
                        <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent transition-all duration-500 border-gold/10 hover:border-gold/30"></div>
                    </Link>
                );
            })}
        </div>
      </div>
    </section>
  );
};

export default DestinationsGrid;