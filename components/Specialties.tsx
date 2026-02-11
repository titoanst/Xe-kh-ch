import React from 'react';
import { Utensils, Flag } from 'lucide-react';

const FOOD_ITEMS = [
  {
    title: "Bún Nước Lèo",
    desc: "Linh hồn của ẩm thực Sóc Trăng. Sự kết hợp hoàn hảo giữa mắm bò hóc đậm đà, ngải bún thơm nồng, cùng tôm tươi, cá lóc và heo quay giòn rụm. Một tô bún gói trọn tinh hoa văn hóa Kinh - Hoa - Khmer.",
    img: "https://picsum.photos/seed/bunnuocleo/400/300"
  },
  {
    title: "Bánh Pía Vũng Thơm",
    desc: "Lớp vỏ mỏng tang bao bọc lấy nhân đậu xanh, sầu riêng tan chảy và trứng muối béo ngậy. Đây không chỉ là món bánh, mà còn là món quà gói ghém tình cảm của người dân Sóc Trăng gửi đến du khách phương xa.",
    img: "https://picsum.photos/seed/banhpia/400/300"
  },
  {
    title: "Bún Gỏi Dà",
    desc: "Một biến tấu thú vị của món gỏi cuốn nhưng được thưởng thức dưới dạng bún nước, mang vị chua thanh nhẹ nhàng từ trái me, rất bắt vị.",
    img: "https://picsum.photos/seed/bungoida/400/300"
  }
];

const Specialties: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-800 font-bold text-sm mb-4 border border-orange-200">
            Khám phá Sóc Trăng
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Đặc Sản Xứ "Gạo Trắng Nước Trong"
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Về Sóc Trăng không chỉ để thăm người thân, mà còn để đánh thức vị giác với nền ẩm thực giao thoa 3 dân tộc độc đáo.
          </p>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {FOOD_ITEMS.map((item, idx) => (
            <div key={idx} className="group rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full text-orange-600">
                  <Utensils size={20} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Festival Feature */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0">
            <img 
              src="https://picsum.photos/seed/duaghengo/1200/600" 
              alt="Đua ghe ngo" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 p-8 md:p-16 max-w-2xl">
            <div className="flex items-center gap-2 text-orange-400 font-bold mb-4">
              <Flag size={20} />
              <span>Lễ hội & Văn hóa</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Lễ hội Oóc Om Bóc – Đua Ghe Ngo
            </h3>
            <p className="text-slate-200 text-lg mb-8 leading-relaxed">
              Sự kiện hoành tráng nhất trong năm vào tháng 10 âm lịch. Tiếng trống hội liên hồi, những chiếc ghe Ngo rực rỡ sắc màu lướt trên sóng nước trong sự hò reo của hàng vạn người. Đó là biểu tượng của sức mạnh đoàn kết và lòng biết ơn thiên nhiên.
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-lg">
              Đặt xe đi xem hội ngay
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Specialties;