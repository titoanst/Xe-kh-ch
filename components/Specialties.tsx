import React from 'react';
import { ChefHat, ArrowRight } from 'lucide-react';

const SPECIALTIES = [
  {
    id: "01",
    title: "Bún Nước Lèo Sóc Trăng",
    desc: "Hương vị đậm đà từ mắm bò hóc, nước dừa tươi và ngải bún. Món ăn là sự hòa quyện tinh tế của ba nền văn hóa Kinh - Hoa - Khmer.",
    price: "Đặc sản phải thử"
  },
  {
    id: "02",
    title: "Lẩu Mắm Miền Tây",
    desc: "Biểu tượng ẩm thực vùng sông nước với hương mắm nồng nàn, kết hợp cùng hàng chục loại rau đồng, bông súng, điên điển tươi ngon.",
    price: "Hương vị đồng quê"
  },
  {
    id: "03",
    title: "Cá Lóc Nướng Trui",
    desc: "Cá lóc đồng nướng rơm thơm lừng, thịt ngọt chắc, cuốn với bánh tráng, rau sống và chấm nước mắm me chua ngọt.",
    price: "Dân dã"
  },
  {
    id: "04",
    title: "Bánh Pía & Lạp Xưởng",
    desc: "Thức quà ngọt ngào nổi tiếng Sóc Trăng. Lớp vỏ ngàn lớp ôm lấy nhân sầu riêng trứng muối béo ngậy.",
    price: "Quà biếu"
  }
];

const Specialties: React.FC = () => {
  return (
    <section id="specialties" className="py-24 bg-primary-900 text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-800/30 skew-x-12 transform origin-top-right"></div>
      
      <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Intro */}
            <div className="lg:col-span-4 flex flex-col justify-center">
                <div className="w-12 h-12 bg-gold text-primary-900 rounded-full flex items-center justify-center mb-6">
                    <ChefHat size={24} />
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Ẩm Thực <br/> <span className="text-gold">Đặc Sắc</span>
                </h2>
                <p className="text-primary-200 font-light leading-relaxed mb-8 text-lg">
                    Miền Tây không chỉ đẹp bởi cảnh sắc mà còn níu chân du khách bằng nền ẩm thực phong phú. Sự kết hợp hài hòa giữa nguyên liệu tươi ngon và phong cách chế biến truyền thống.
                </p>
                <a href="#" className="inline-flex items-center gap-3 text-gold font-bold uppercase tracking-widest hover:text-white transition-colors group">
                    Khám phá ẩm thực
                    <div className="w-8 h-[1px] bg-gold group-hover:w-12 transition-all"></div>
                </a>
            </div>

            {/* Right: Menu List */}
            <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                    {SPECIALTIES.map((item) => (
                        <div key={item.id} className="group border-t border-primary-700 pt-8 hover:border-gold transition-colors duration-500">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-gold transition-colors">
                                    {item.title}
                                </h3>
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-gold/80 mb-3 block">
                                — {item.price}
                            </span>
                            <p className="text-primary-200 font-light text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Specialties;