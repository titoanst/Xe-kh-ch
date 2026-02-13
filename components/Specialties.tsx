import React from 'react';
import { Utensils, Flag, CalendarCheck, MapPin, Store, Anchor, Waves, Sun, Music, Ship, ArrowRight, Star } from 'lucide-react';

const FOOD_ITEMS = [
  {
    id: "01",
    title: "Bún Nước Lèo",
    subtitle: "Tinh hoa 3 dân tộc",
    desc: "Nước lèo trong vắt, thơm lừng mắm bò hóc, ngọt thanh nước dừa. Ăn là nhớ mãi.",
    recommendations: [
      { place: "Cây Nhãn", note: "Võ Đình Sâm - Gốc lâu đời" },
      { place: "Quán Phương", note: "Điện Biên Phủ - Đậm đà" },
      { place: "Quán Thảo", note: "Phú Lợi - Đông khách" }
    ],
    theme: "from-orange-500 to-red-500",
    bg: "bg-orange-50",
    border: "border-orange-200",
    text: "text-orange-900",
    subText: "text-orange-700"
  },
  {
    id: "02",
    title: "Bánh Pía",
    subtitle: "Vũng Thơm",
    desc: "Vỏ ngàn lớp mỏng tang, nhân sầu riêng trứng muối béo ngậy tan chảy đầu lưỡi.",
    recommendations: [
      { place: "Tân Huê Viên", note: "QL1A - Lớn nhất" },
      { place: "Công Lập Thành", note: "Làng nghề thủ công" },
      { place: "Lương Trân", note: "Pía thịt lạp trứ danh" }
    ],
    theme: "from-yellow-400 to-orange-500",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    text: "text-yellow-900",
    subText: "text-yellow-700"
  },
  {
    id: "03",
    title: "Bún Gỏi Dà",
    subtitle: "Chua thanh",
    desc: "Vị me chua dịu, tôm đất ngọt thịt, thịt ba chỉ béo. Một biến tấu lạ miệng của gỏi cuốn.",
    recommendations: [
      { place: "Cô Hằng", note: "Chợ Bãi Xàu (Mỹ Xuyên)" },
      { place: "Ngọc Nữ", note: "Phan Bội Châu" },
      { place: "Quán Số 1", note: "Nguyễn Huệ" }
    ],
    theme: "from-rose-500 to-pink-600",
    bg: "bg-rose-50",
    border: "border-rose-200",
    text: "text-rose-900",
    subText: "text-rose-700"
  },
  {
    id: "04",
    title: "Bánh Cống",
    subtitle: "Đại Tâm",
    desc: "Giòn rụm, nhân đậu xanh thịt tôm đầy đặn. Cuốn rau sống chấm mắm chua ngọt cực cuốn.",
    recommendations: [
      { place: "Quán Phượng", note: "Đại Tâm - Nổi tiếng nhất" },
      { place: "Sáu Hưng", note: "Trung tâm Mỹ Xuyên" },
      { place: "Cô Chi", note: "Trần Quang Diệu" }
    ],
    theme: "from-emerald-500 to-green-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    text: "text-emerald-900",
    subText: "text-emerald-700"
  }
];

const EVENTS = [
    {
        id: 1,
        title: "Oóc Om Bóc",
        sub: "Đua Ghe Ngo",
        time: "15/10 Âm Lịch",
        desc: "Lễ hội lớn nhất năm. Đua ghe Ngo kịch tính & thả đèn nước lung linh.",
        icon: <Flag className="w-12 h-12 md:w-16 md:h-16 text-white opacity-20" />,
        gradient: "bg-gradient-to-br from-orange-600 to-red-700",
        cols: "md:col-span-2 md:row-span-2",
        text: "text-white"
    },
    {
        id: 2,
        title: "Nghinh Ông",
        sub: "Nam Hải",
        time: "Tháng 3 Âm Lịch",
        desc: "Ngư dân Trần Đề rước kiệu cầu mưa thuận gió hòa.",
        icon: <Anchor className="w-10 h-10 text-blue-300 opacity-50" />,
        gradient: "bg-slate-800",
        cols: "md:col-span-1",
        text: "text-blue-50"
    },
    {
        id: 3,
        title: "Chol Chnam Thmay",
        sub: "Tết Khmer",
        time: "Tháng 4 DL",
        desc: "Tết cổ truyền, lễ đắp núi cát và tắm Phật cầu an.",
        icon: <Sun className="w-10 h-10 text-yellow-300 opacity-50" />,
        gradient: "bg-slate-800",
        cols: "md:col-span-1",
        text: "text-yellow-50"
    },
    {
        id: 4,
        title: "Chợ Nổi",
        sub: "Ngã Năm",
        time: "Quanh năm",
        desc: "Giao thương tấp nập tại điểm giao của 5 dòng sông.",
        icon: <Ship className="w-10 h-10 text-teal-300 opacity-50" />,
        gradient: "bg-slate-800",
        cols: "md:col-span-2",
        text: "text-teal-50"
    }
];

const Specialties: React.FC = () => {
  return (
    <section id="specialties" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Typography */}
        <div className="mb-20 text-center relative">
          <span className="text-[10rem] md:text-[15rem] font-black text-slate-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 tracking-tighter">
            LOCAL
          </span>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-none mb-4">
              ĐẬM CHẤT <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-500">
                MIỀN TÂY
              </span>
            </h2>
            <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
              Không chỉ là chuyến xe, chúng tôi đưa bạn đến với hành trình của <span className="text-slate-900 font-bold decoration-orange-500 underline decoration-2 underline-offset-4">Vị giác</span> và <span className="text-slate-900 font-bold decoration-blue-500 underline decoration-2 underline-offset-4">Văn hóa</span>.
            </p>
          </div>
        </div>

        {/* Food Typography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-24">
          {FOOD_ITEMS.map((item) => (
            <div key={item.id} className={`relative p-8 rounded-[2rem] border-2 transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] group flex flex-col h-full ${item.bg} ${item.border}`}>
              {/* Abstract Number */}
              <div className={`absolute -right-2 top-0 text-9xl font-black opacity-10 select-none leading-none ${item.text}`}>
                {item.id}
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className={`inline-flex items-center gap-2 mb-4 font-bold uppercase tracking-widest text-xs ${item.subText}`}>
                    <Utensils size={14} />
                    {item.subtitle}
                </div>
                
                {/* Title with Gradient */}
                <h3 className={`text-4xl font-black leading-none mb-4 tracking-tight bg-gradient-to-br ${item.theme} text-transparent bg-clip-text`}>
                  {item.title}
                </h3>
                
                <p className={`${item.text} font-medium mb-8 leading-relaxed`}>
                  {item.desc}
                </p>

                {/* Recommendations Box */}
                <div className="mt-auto pt-6 border-t border-black/5">
                    <div className="flex items-center gap-2 mb-4 text-slate-900 font-black uppercase text-xs tracking-widest">
                        <MapPin size={14} className="text-red-500" />
                        Địa chỉ vàng
                    </div>
                    <ul className="space-y-3">
                        {item.recommendations.map((rec, i) => (
                            <li key={i} className="flex justify-between items-start text-sm group/item">
                                <span className={`font-bold ${item.subText} border-b border-dashed border-current pb-0.5`}>{rec.place}</span>
                                <span className="text-slate-500 text-xs text-right max-w-[50%]">{rec.note}</span>
                            </li>
                        ))}
                    </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Events Typography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            <div className="md:col-span-4 mb-6 flex items-center gap-4">
                <div className="h-px bg-slate-200 flex-1"></div>
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-widest flex items-center gap-3">
                    <CalendarCheck className="text-orange-500" />
                    Mùa Lễ Hội
                </h3>
                <div className="h-px bg-slate-200 flex-1"></div>
            </div>

            {EVENTS.map((event) => (
                <div key={event.id} className={`${event.cols} ${event.gradient} rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group transition-transform hover:scale-[1.01] flex flex-col justify-between`}>
                    
                    {/* Background Icon Watermark */}
                    <div className="absolute -right-4 -bottom-4 opacity-10 scale-150 rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-[1.7]">
                        {event.icon}
                    </div>

                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                            <span className="inline-block px-4 py-1.5 bg-black/20 rounded-full text-xs font-bold uppercase tracking-wider text-white/90 backdrop-blur-md border border-white/10">
                                {event.time}
                            </span>
                            {event.id === 1 && <Star className="text-yellow-400 fill-yellow-400 animate-pulse" />}
                        </div>
                        
                        <h4 className={`text-3xl md:text-5xl font-black mb-2 tracking-tighter ${event.text} drop-shadow-sm`}>
                            {event.title}
                        </h4>
                        <p className={`text-lg md:text-xl font-bold opacity-80 mb-6 uppercase tracking-widest ${event.text}`}>
                            {event.sub}
                        </p>
                    </div>

                    <div className="relative z-10 flex items-end justify-between gap-4 border-t border-white/10 pt-6 mt-4">
                        <p className={`${event.text} text-sm md:text-base opacity-90 font-medium max-w-[80%]`}>
                            {event.desc}
                        </p>
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all cursor-pointer">
                            <ArrowRight size={20} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="mt-16 text-center">
             <a href="#booking" className="inline-flex items-center gap-3 bg-slate-900 text-white text-lg font-bold py-4 px-10 rounded-full shadow-2xl hover:bg-slate-800 hover:-translate-y-1 transition-all group">
                Đặt xe đi chơi ngay
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
             </a>
        </div>

      </div>
    </section>
  );
};

export default Specialties;