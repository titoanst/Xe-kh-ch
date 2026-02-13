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
  },
  {
    id: 'can-tho',
    name: 'Cần Thơ',
    desc: 'Trung tâm miền Tây với chợ nổi Cái Răng, bến Ninh Kiều và hệ thống homestay miệt vườn sông nước.',
    link: '#',
    tags: ['Chợ Nổi', 'Bến Ninh Kiều'],
    color: 'bg-primary-700'
  },
  {
    id: 'an-giang',
    name: 'An Giang',
    desc: 'Vùng đất tâm linh huyền bí nổi tiếng với núi Cấm, rừng tràm Trà Sư xanh ngát và miếu Bà Chúa Xứ linh thiêng.',
    link: '#',
    tags: ['Núi Cấm', 'Rừng Tràm'],
    color: 'bg-primary-600'
  },
  {
    id: 'bac-lieu',
    name: 'Bạc Liêu',
    desc: 'Quê hương Công tử Bạc Liêu, những giai thoại hào sảng và cánh đồng điện gió khổng lồ trên biển.',
    link: '#',
    tags: ['Nhà Công Tử', 'Điện Gió'],
    color: 'bg-primary-500'
  }
];

const DestinationsGrid: React.FC = () => {
  return (
    <section id="destinations" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-gray-100 pb-8">
            <div className="max-w-2xl">
                <span className="text-gold uppercase tracking-widest text-xs font-bold mb-4 block flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-gold"></span>
                    Điểm đến nổi bật
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 leading-tight mb-4">
                    Hành Trình <span className="text-gold italic">Phương Nam</span>
                </h2>
                <p className="text-slate-600 font-light text-lg">
                    Từ Sóc Trăng với hệ thống chùa Khmer ấn tượng, Cần Thơ với chợ nổi Cái Răng, đến An Giang linh thiêng. Mỗi tỉnh thành là một màu sắc riêng biệt.
                </p>
            </div>
            <Link to="#" className="hidden md:flex items-center gap-3 text-primary-900 font-bold uppercase tracking-widest hover:text-gold transition-colors group shrink-0">
                Xem tất cả 
                <div className="w-10 h-10 border border-primary-900 rounded-full flex items-center justify-center group-hover:border-gold group-hover:bg-gold group-hover:text-white transition-all">
                    <ArrowRight size={16} />
                </div>
            </Link>
        </div>

        {/* Grid Layout - Typographic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
            {DESTINATIONS.map((item, index) => (
                <Link 
                    to={item.link} 
                    key={item.id} 
                    className={`group relative p-12 flex flex-col justify-between min-h-[400px] bg-white transition-colors duration-500 hover:bg-primary-900`}
                >
                    {/* Background Number */}
                    <span className="absolute top-4 right-8 text-8xl font-serif font-bold text-gray-50 group-hover:text-primary-800/50 transition-colors pointer-events-none">
                        0{index + 1}
                    </span>

                    {/* Content */}
                    <div className="relative z-10 mt-auto">
                        <div className="flex gap-2 mb-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                            {item.tags.map(tag => (
                                <span key={tag} className="text-[10px] uppercase tracking-wider border border-gold text-gold px-2 py-1 rounded-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h3 className="font-serif text-4xl font-bold text-primary-900 mb-4 group-hover:text-white transition-colors">
                            {item.name}
                        </h3>
                        
                        <p className="text-slate-600 font-light leading-relaxed mb-8 max-w-md group-hover:text-primary-100 transition-colors">
                            {item.desc}
                        </p>

                        <div className="flex items-center gap-2 text-primary-900 font-bold text-xs uppercase tracking-widest group-hover:text-gold transition-colors">
                            <span className="border-b border-primary-900 group-hover:border-gold pb-1">Khám phá ngay</span>
                            <ArrowRight size={14} />
                        </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent group-hover:border-gold/20 transition-all duration-500 scale-95 group-hover:scale-100"></div>
                </Link>
            ))}
        </div>

        <div className="mt-8 text-center md:hidden">
            <Link to="#" className="inline-block border-b border-primary-900 pb-1 text-primary-900 font-bold uppercase tracking-widest text-sm">
                Xem tất cả điểm đến
            </Link>
        </div>
      </div>
    </section>
  );
};

export default DestinationsGrid;