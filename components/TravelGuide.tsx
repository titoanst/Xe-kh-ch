import React, { useState } from 'react';
import { 
  Map, Compass, ArrowRight, ShoppingBag, 
  Star, Check, X, Sparkles, Send,
  Palmtree, Coffee, Camera, MessageCircle, Anchor, CloudSun, Crown,
  Sunrise, Sunset, Moon, Landmark, Trees, Bird, Waves, Smile, Building2, Utensils
} from 'lucide-react';

// --- DATA MOCK: SÓC TRĂNG SPECIFIC ---
const DESTINATIONS = [
  // I. TÂM LINH – KIẾN TRÚC
  {
    id: 's1',
    name: 'Chùa Dơi (Mahatup)',
    province: 'TP. Sóc Trăng',
    type: 'spiritual',
    theme: 'bg-amber-50 border-amber-200 text-amber-900',
    icon: <CloudSun size={40} className="text-amber-500" />,
    rating: 4.9,
    reviews: 2400,
    highlight: "Hàng ngàn dơi treo mình",
    tags: ['Biểu tượng', 'Kỳ bí']
  },
  {
    id: 's2',
    name: 'Chùa Som Rong',
    province: 'TP. Sóc Trăng',
    type: 'spiritual',
    theme: 'bg-amber-50 border-amber-200 text-amber-900',
    icon: <Crown size={40} className="text-amber-500" />,
    rating: 4.8,
    reviews: 3100,
    highlight: "Tượng Phật nằm khổng lồ",
    tags: ['Check-in', 'Hùng vĩ']
  },
  {
    id: 's3',
    name: 'Chùa Chén Kiểu',
    province: 'Mỹ Xuyên',
    type: 'spiritual',
    theme: 'bg-amber-50 border-amber-200 text-amber-900',
    icon: <Sparkles size={40} className="text-amber-500" />,
    rating: 4.7,
    reviews: 1800,
    highlight: "Ốp chén dĩa cổ độc đáo",
    tags: ['Kiến trúc', 'Độc lạ']
  },
  {
    id: 's4',
    name: 'Chùa Đất Sét',
    province: 'TP. Sóc Trăng',
    type: 'spiritual',
    theme: 'bg-amber-50 border-amber-200 text-amber-900',
    icon: <Landmark size={40} className="text-amber-500" />,
    rating: 4.6,
    reviews: 1200,
    highlight: "Kỷ lục nến cháy 100 năm",
    tags: ['Đất sét', 'Lịch sử']
  },

  // II. BẢO TÀNG – VĂN HOÁ
  {
    id: 'c1',
    name: 'Bảo tàng Khmer',
    province: 'TP. Sóc Trăng',
    type: 'culture',
    theme: 'bg-purple-50 border-purple-200 text-purple-900',
    icon: <Landmark size={40} className="text-purple-500" />,
    rating: 4.5,
    reviews: 550,
    highlight: "Văn hóa Khmer đặc sắc",
    tags: ['Lịch sử', 'Trang phục']
  },

  // III. SÔNG NƯỚC – THIÊN NHIÊN
  {
    id: 'n1',
    name: 'Chợ Nổi Ngã Năm',
    province: 'Ngã Năm',
    type: 'nature',
    theme: 'bg-cyan-50 border-cyan-200 text-cyan-900',
    icon: <Anchor size={40} className="text-cyan-500" />,
    rating: 4.8,
    reviews: 950,
    highlight: "Giao thương 5 ngả sông",
    tags: ['Sông nước', 'Sáng sớm']
  },
  {
    id: 'n2',
    name: 'Vườn Cò Tân Long',
    province: 'Ngã Năm',
    type: 'nature',
    theme: 'bg-emerald-50 border-emerald-200 text-emerald-900',
    icon: <Bird size={40} className="text-emerald-500" />,
    rating: 4.6,
    reviews: 700,
    highlight: "Ngắm cò về tổ chiều tà",
    tags: ['Sinh thái', 'Thiên nhiên']
  },
  {
    id: 'n4',
    name: 'Cù Lao Dung',
    province: 'Cù Lao Dung',
    type: 'nature',
    theme: 'bg-teal-50 border-teal-200 text-teal-900',
    icon: <Waves size={40} className="text-teal-500" />,
    rating: 4.7,
    reviews: 350,
    highlight: "Rừng ngập mặn & Biển",
    tags: ['Khám phá', 'Hoang sơ']
  },

  // IV. VUI CHƠI – NGHỈ DƯỠNG
  {
    id: 'r1',
    name: 'KDL Bình An',
    province: 'TP. Sóc Trăng',
    type: 'recreation',
    theme: 'bg-rose-50 border-rose-200 text-rose-900',
    icon: <Smile size={40} className="text-rose-500" />,
    rating: 4.4,
    reviews: 850,
    highlight: "Picnic & Giải trí",
    tags: ['Gia đình', 'Cuối tuần']
  },
  {
    id: 'r2',
    name: 'Hồ Bể',
    province: 'Vĩnh Châu',
    type: 'recreation',
    theme: 'bg-blue-50 border-blue-200 text-blue-900',
    icon: <Palmtree size={40} className="text-blue-500" />,
    rating: 4.2,
    reviews: 300,
    highlight: "Biển hoang sơ & Hải sản",
    tags: ['Biển', 'Hải sản rẻ']
  },

  // V. ẨM THỰC
  {
    id: 'f1',
    name: 'Bún Nước Lèo Cây Nhãn',
    province: 'TP. Sóc Trăng',
    type: 'food',
    theme: 'bg-orange-50 border-orange-200 text-orange-900',
    icon: <Utensils size={40} className="text-orange-500" />,
    rating: 4.9,
    reviews: 2000,
    highlight: "Đậm vị mắm bò hóc",
    tags: ['Đặc sản', 'Bắt buộc thử']
  },
  {
    id: 'f2',
    name: 'Tân Huê Viên (Bánh Pía)',
    province: 'Châu Thành',
    type: 'food',
    theme: 'bg-yellow-50 border-yellow-200 text-yellow-900',
    icon: <ShoppingBag size={40} className="text-yellow-500" />,
    rating: 4.9,
    reviews: 5000,
    highlight: "Điểm dừng chân số 1",
    tags: ['Quà biếu', 'Sầu riêng']
  },
  {
    id: 'f3',
    name: 'Bún Gỏi Dà',
    province: 'Mỹ Xuyên',
    type: 'food',
    theme: 'bg-rose-50 border-rose-200 text-rose-900',
    icon: <Utensils size={40} className="text-rose-500" />,
    rating: 4.6,
    reviews: 500,
    highlight: "Vị chua ngọt dễ ăn",
    tags: ['Ăn sáng', 'Dân dã']
  },
  {
    id: 'f4',
    name: 'Bánh Cống Đại Tâm',
    province: 'Mỹ Xuyên',
    type: 'food',
    theme: 'bg-emerald-50 border-emerald-200 text-emerald-900',
    icon: <Utensils size={40} className="text-emerald-500" />,
    rating: 4.7,
    reviews: 850,
    highlight: "Giòn rụm tôm đậu xanh",
    tags: ['Ăn vặt', 'Đặc sản']
  },
  {
    id: 'f5',
    name: 'Bò Nướng Ngói',
    province: 'Mỹ Xuyên',
    type: 'food',
    theme: 'bg-red-50 border-red-200 text-red-900',
    icon: <Utensils size={40} className="text-red-500" />,
    rating: 4.5,
    reviews: 600,
    highlight: "Nướng ngói thơm mềm",
    tags: ['Tụ họp', 'Cuối tuần']
  },
  {
    id: 'f6',
    name: 'Hải Sản Trần Đề',
    province: 'Trần Đề',
    type: 'food',
    theme: 'bg-blue-50 border-blue-200 text-blue-900',
    icon: <Anchor size={40} className="text-blue-500" />,
    rating: 4.5,
    reviews: 400,
    highlight: "Hải sản tươi sống rẻ",
    tags: ['Biển', 'Nhậu']
  }
];

const SHOP_ITEMS = [
  { 
    id: 1, 
    name: 'Bánh Pía Tân Huê Viên', 
    sub: 'Vũng Thơm',
    price: '95.000đ', 
    desc: 'Đặc sản số 1, nhân kim sa/sầu riêng.',
    color: 'text-orange-600 bg-orange-50'
  },
  { 
    id: 2, 
    name: 'Lạp Xưởng Tươi', 
    sub: 'Sóc Trăng',
    price: '220k/kg', 
    desc: 'Nạc nhiều mỡ ít, thơm mùi rượu Mai Quế Lộ.',
    color: 'text-red-600 bg-red-50'
  },
  { 
    id: 3, 
    name: 'Bánh Phồng Tôm', 
    sub: 'Liễu Trân',
    price: '180k/hộp', 
    desc: '70% tôm đất tự nhiên, giòn tan.',
    color: 'text-rose-600 bg-rose-50'
  },
  { 
    id: 4, 
    name: 'Mè Láo', 
    sub: 'Công Lập',
    price: '45.000đ', 
    desc: 'Giòn xốp, ngọt thanh, thơm mè.',
    color: 'text-amber-600 bg-amber-50'
  },
];

const FILTERS = [
  { id: 'all', label: 'Tất cả', icon: <Map size={16} /> },
  { id: 'spiritual', label: 'Tâm linh - Kiến trúc', icon: <Sparkles size={16} /> },
  { id: 'food', label: 'Ẩm thực đặc sản', icon: <Utensils size={16} /> },
  { id: 'culture', label: 'Bảo tàng - Văn hoá', icon: <Landmark size={16} /> },
  { id: 'nature', label: 'Sông nước - Thiên nhiên', icon: <Palmtree size={16} /> },
  { id: 'recreation', label: 'Vui chơi - Nghỉ dưỡng', icon: <Smile size={16} /> },
];

const TravelGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'map' | 'planner' | 'compare' | 'shop'>('map');
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Planner State
  const [planDays, setPlanDays] = useState('1');
  const [planBudget, setPlanBudget] = useState('medium');
  const [generatedPlan, setGeneratedPlan] = useState<any>(null);

  // Chat Bot State
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'bot', text: 'Chào bạn! Mình là thổ địa Sóc Trăng đây. Bạn cần hỏi đường đi hay quán ăn ngon?' }
  ]);
  const [userMsg, setUserMsg] = useState('');

  // --- LOGIC ---
  const filteredDestinations = activeFilter === 'all' 
    ? DESTINATIONS 
    : DESTINATIONS.filter(d => d.type === activeFilter);

  const generateItinerary = () => {
    // Detailed Itinerary Logic based on Days
    const days = parseInt(planDays);
    let schedule = [];
    let totalCost = 0;

    // Base costs
    const carRental = 2200000; // Average for trip
    const foodCost = planBudget === 'low' ? 200000 : planBudget === 'medium' ? 500000 : 1000000;
    const hotelCost = days > 1 ? (planBudget === 'low' ? 300000 : planBudget === 'medium' ? 600000 : 1500000) : 0;

    totalCost = carRental + (foodCost * days * 4) + (hotelCost * (days - 1)); // for 4 people approx

    if (days === 1) {
        schedule = [
            { time: '05:00', icon: <Sunrise size={18}/>, activity: 'Đón khách tại Sài Gòn đi Sóc Trăng' },
            { time: '09:00', icon: <Coffee size={18}/>, activity: 'Ăn sáng: Bún Nước Lèo Cây Nhãn' },
            { time: '10:00', icon: <Sparkles size={18}/>, activity: 'Viếng Chùa Dơi & Chùa Đất Sét' },
            { time: '12:00', icon: <ShoppingBag size={18}/>, activity: 'Ăn trưa Bánh Xèo & Mua bánh Pía' },
            { time: '14:00', icon: <Crown size={18}/>, activity: 'Check-in Chùa Chén Kiểu (Kiến trúc chén dĩa)' },
            { time: '16:00', icon: <Sunset size={18}/>, activity: 'Khởi hành về lại Sài Gòn' },
        ];
    } else {
        schedule = [
            { time: 'Ngày 1: 08:00', icon: <Sunrise size={18}/>, activity: 'Đến TP. Sóc Trăng - Viếng Chùa Som Rong (Tượng Phật nằm)' },
            { time: 'Ngày 1: 11:30', icon: <Coffee size={18}/>, activity: 'Ăn trưa: Bún Gỏi Dà / Bò Nướng Ngói' },
            { time: 'Ngày 1: 15:00', icon: <Palmtree size={18}/>, activity: 'Di chuyển xuống Vĩnh Châu - Tham quan biển Hồ Bể' },
            { time: 'Ngày 1: 19:00', icon: <Moon size={18}/>, activity: 'Dạo phố đi bộ Hồ Nước Ngọt - Nghỉ đêm tại TP' },
            { time: 'Ngày 2: 05:00', icon: <Anchor size={18}/>, activity: 'Đi Chợ Nổi Ngã Năm (Sáng sớm mới vui)' },
            { time: 'Ngày 2: 10:00', icon: <Sparkles size={18}/>, activity: 'Tham quan Vườn Cò Tân Long' },
            { time: 'Ngày 2: 13:00', icon: <Check size={18}/>, activity: 'Mua đặc sản làm quà & Về lại Sài Gòn' },
        ];
    }

    setGeneratedPlan({
      days: days,
      cost: totalCost,
      schedule: schedule
    });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userMsg.trim()) return;
    
    setChatMessages([...chatMessages, { role: 'user', text: userMsg }]);
    
    // Simulate AI delay
    setTimeout(() => {
        let reply = "Dạ, để em nhắn tài xế gọi tư vấn kỹ hơn cho mình nha!";
        if (userMsg.toLowerCase().includes('chùa')) reply = "Sóc Trăng nổi tiếng nhất là Chùa Dơi, Chùa Chén Kiểu và Chùa Som Rong (tượng phật nằm khổng lồ) ạ.";
        if (userMsg.toLowerCase().includes('ăn')) reply = "Về đây nhất định phải thử Bún Nước Lèo quán Cây Nhãn hoặc Bánh Pía Tân Huê Viên nha khách ơi.";
        
        setChatMessages(prev => [...prev, { role: 'bot', text: reply }]);
    }, 1000);
    setUserMsg('');
  };

  return (
    <section id="guide" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-600 font-bold text-sm mb-4 border border-slate-200 uppercase tracking-wider">
            Cẩm nang du lịch địa phương
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            KHÁM PHÁ <span className="text-accent">SÓC TRĂNG</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            Xứ sở của những ngôi chùa Khmer lộng lẫy và lễ hội Oóc Om Bóc rực rỡ sắc màu.
          </p>
        </div>

        {/* --- NAVIGATION TABS --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { id: 'map', label: 'ĐIỂM ĐẾN', icon: <Map size={18} /> },
            { id: 'planner', label: 'LẬP KẾ HOẠCH', icon: <Compass size={18} /> },
            { id: 'compare', label: 'SO SÁNH', icon: <ArrowRight size={18} /> },
            { id: 'shop', label: 'QUÀ BIẾU', icon: <ShoppingBag size={18} /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-4 rounded-xl font-bold transition-all border-2 ${
                activeTab === tab.id
                  ? 'bg-slate-900 border-slate-900 text-white shadow-lg'
                  : 'bg-white border-transparent text-slate-500 hover:border-slate-200'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 min-h-[500px] border border-slate-100">
          
          {/* --- TAB 1: SÓC TRĂNG DESTINATIONS --- */}
          {activeTab === 'map' && (
            <div className="animate-fadeIn">
              <div className="flex overflow-x-auto gap-2 mb-8 pb-2 scrollbar-hide justify-start md:justify-center">
                {FILTERS.map(f => (
                  <button
                    key={f.id}
                    onClick={() => setActiveFilter(f.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-colors border ${
                      activeFilter === f.id 
                      ? 'bg-primary-600 border-primary-600 text-white' 
                      : 'bg-white border-gray-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {f.icon} {f.label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredDestinations.map(dest => (
                  <div key={dest.id} className={`relative p-6 rounded-2xl border-2 transition-all hover:shadow-lg hover:-translate-y-1 group ${dest.theme}`}>
                    <div className="mb-6 opacity-80 group-hover:scale-110 transition-transform duration-500">
                        {dest.icon}
                    </div>
                    
                    <div className="mb-4">
                        <div className="flex justify-between items-start">
                            <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">{dest.province}</p>
                            <div className="flex items-center gap-1 font-bold text-xs bg-white/50 px-2 py-0.5 rounded-full">
                                <Star size={10} className="fill-current" /> {dest.rating}
                            </div>
                        </div>
                        <h3 className="font-heading font-black text-xl leading-tight mb-2 min-h-[56px] flex items-end">
                            {dest.name}
                        </h3>
                        <div className="inline-block px-2 py-1 bg-white/50 rounded text-xs font-bold backdrop-blur-sm border border-black/5">
                            {dest.highlight}
                        </div>
                    </div>

                    <div className="pt-4 border-t border-black/5 flex flex-wrap gap-2">
                        {dest.tags.map(t => (
                            <span key={t} className="text-[10px] font-bold uppercase border border-current px-1.5 rounded-sm opacity-60">
                                {t}
                            </span>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* --- TAB 2: DETAILED PLANNER --- */}
          {activeTab === 'planner' && (
            <div className="grid md:grid-cols-2 gap-10 animate-fadeIn">
              <div className="space-y-8">
                <div>
                    <h3 className="text-3xl font-black text-slate-900 mb-2">LỊCH TRÌNH CHI TIẾT</h3>
                    <p className="text-slate-500">Chọn thời gian, chúng tôi sẽ gợi ý lịch trình ăn chơi chuẩn "thổ địa" cho bạn.</p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Thời gian đi</label>
                    <div className="grid grid-cols-3 gap-4">
                      {['1', '2', '3'].map(d => (
                        <button
                          key={d}
                          onClick={() => setPlanDays(d)}
                          className={`py-4 rounded-xl font-bold text-lg border-2 transition-all ${
                            planDays === d ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-100 text-slate-400 hover:border-slate-300'
                          }`}
                        >
                          {d} Ngày
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Phong cách ăn uống</label>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { id: 'low', label: 'Bình dân' },
                        { id: 'medium', label: 'Tiêu chuẩn' },
                        { id: 'high', label: 'Sang trọng' }
                      ].map(b => (
                        <button
                          key={b.id}
                          onClick={() => setPlanBudget(b.id)}
                          className={`py-4 rounded-xl font-bold text-sm border-2 transition-all ${
                            planBudget === b.id ? 'border-primary-600 bg-primary-50 text-primary-700' : 'border-slate-100 text-slate-400 hover:border-slate-300'
                          }`}
                        >
                          {b.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={generateItinerary}
                    className="w-full bg-gradient-to-r from-primary-600 to-blue-600 text-white font-bold py-5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 uppercase tracking-wide"
                  >
                    <Sparkles size={20} />
                    Gợi ý lịch trình
                  </button>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col justify-center h-full max-h-[600px] overflow-y-auto custom-scrollbar">
                {generatedPlan ? (
                  <div className="flex flex-col animate-slideUp">
                    <div className="mb-8 p-4 bg-white rounded-xl shadow-sm border border-slate-100 flex justify-between items-center sticky top-0 z-10">
                      <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Chi phí dự kiến (4 người)</p>
                          <div className="text-3xl font-black text-slate-900">
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(generatedPlan.cost)}
                          </div>
                      </div>
                      <div className="text-right">
                          <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Thời gian</span>
                          <span className="font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-lg">{generatedPlan.days} Ngày</span>
                      </div>
                    </div>

                    <div className="space-y-0 relative border-l-2 border-slate-200 ml-4 pl-8 pb-4">
                      {generatedPlan.schedule.map((item: any, idx: number) => (
                        <div key={idx} className="mb-8 last:mb-0 relative group">
                           <div className="absolute -left-[43px] top-0 w-8 h-8 bg-white border-2 border-primary-200 text-primary-600 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                {item.icon}
                           </div>
                           <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">{item.time}</span>
                           <h4 className="font-bold text-slate-800 text-lg leading-snug">{item.activity}</h4>
                        </div>
                      ))}
                    </div>
                    
                    <button className="mt-8 w-full py-3 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-100 transition-colors text-sm">
                        Lưu lịch trình này
                    </button>
                  </div>
                ) : (
                  <div className="text-center text-slate-400">
                    <Compass size={64} className="mx-auto mb-4 opacity-20" />
                    <p className="font-medium text-lg">Bạn chưa tạo lịch trình</p>
                    <p className="text-sm mt-2">Chọn số ngày và bấm nút để xem gợi ý</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* --- TAB 3: COMPARISON --- */}
          {activeTab === 'compare' && (
            <div className="animate-fadeIn max-w-4xl mx-auto">
               <div className="grid grid-cols-2 gap-8 mb-8">
                  <div className="text-center p-6 bg-amber-50 rounded-2xl border-2 border-amber-100">
                    <h3 className="font-black text-2xl md:text-3xl text-amber-900 uppercase">CHÙA DƠI</h3>
                    <p className="font-bold text-amber-500 text-sm mt-2">Biểu tượng tâm linh</p>
                  </div>
                  <div className="text-center p-6 bg-indigo-50 rounded-2xl border-2 border-indigo-100">
                    <h3 className="font-black text-2xl md:text-3xl text-indigo-900 uppercase">CHÙA CHÉN KIỂU</h3>
                    <p className="font-bold text-indigo-500 text-sm mt-2">Kiến trúc độc bản</p>
                  </div>
               </div>

               <div className="space-y-4">
                  {[
                      { title: "Điểm độc đáo", v1: "Hàng ngàn con dơi quạ treo mình", v2: "Ốp toàn bộ bằng chén dĩa sành sứ" },
                      { title: "Không gian", v1: "Rừng cây sao cổ thụ mát mẻ", v2: "Nhiều góc check-in màu sắc" },
                      { title: "Lời khuyên", v1: "Nên đi buổi sáng để thấy dơi", v2: "Nên thử Bánh Cống Đại Tâm gần đó" }
                  ].map((row, i) => (
                      <div key={i} className="grid grid-cols-1 md:grid-cols-3 border-b border-slate-100 py-6 last:border-0">
                          <div className="font-bold text-slate-400 uppercase text-xs tracking-widest mb-2 md:mb-0 flex items-center">
                              {row.title}
                          </div>
                          <div className="font-bold text-slate-800 md:text-center px-4">{row.v1}</div>
                          <div className="font-bold text-slate-800 md:text-center px-4 border-l border-slate-100 md:border-0 mt-2 md:mt-0 pt-2 md:pt-0">{row.v2}</div>
                      </div>
                  ))}
               </div>
            </div>
          )}

          {/* --- TAB 4: SOC TRANG SPECIALTIES SHOP --- */}
          {activeTab === 'shop' && (
            <div className="animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SHOP_ITEMS.map(item => (
                        <div key={item.id} className="flex justify-between items-start p-6 bg-white border border-slate-200 rounded-xl hover:border-primary-500 transition-colors group cursor-pointer border-dashed">
                            <div>
                                <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded mb-2 inline-block ${item.color}`}>
                                    {item.sub}
                                </span>
                                <h4 className="font-heading font-black text-xl text-slate-900 group-hover:text-primary-600 transition-colors">
                                    {item.name.toUpperCase()}
                                </h4>
                                <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                            </div>
                            <div className="text-right">
                                <span className="block font-bold text-lg text-slate-900">{item.price}</span>
                                <button className="mt-2 text-primary-600 bg-primary-50 p-2 rounded-full hover:bg-primary-600 hover:text-white transition-all">
                                    <ShoppingBag size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-8 text-center p-8 bg-slate-900 rounded-2xl text-white">
                    <h4 className="font-bold text-xl mb-2">Đừng quên mua quà về Sài Gòn!</h4>
                    <p className="text-slate-400 mb-6 max-w-lg mx-auto">Tài xế Ti Toàn sẽ ghé những lò bánh Pía gốc (như Tân Huê Viên, Công Lập Thành) để bạn mua được hàng mới ra lò.</p>
                    <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-primary-50 transition-colors">
                        Dặn tài xế ghé mua
                    </button>
                </div>
            </div>
          )}

        </div>
      </div>

      {/* --- AI CHATBOT WIDGET --- */}
      <div className={`fixed bottom-24 right-4 z-40 transition-all duration-300 ${chatOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
         <div className="bg-white w-80 rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-slate-900 p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                 <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                    <Sparkles size={16} className="text-yellow-400" />
                 </div>
                 <span className="font-bold text-sm">Thổ địa Sóc Trăng</span>
              </div>
              <button onClick={() => setChatOpen(false)}><X size={18}/></button>
            </div>
            <div className="h-64 overflow-y-auto p-4 space-y-3 bg-slate-50">
               {chatMessages.map((msg, i) => (
                 <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-3 rounded-2xl text-sm font-medium ${msg.role === 'user' ? 'bg-primary-600 text-white rounded-br-none' : 'bg-white text-slate-700 shadow-sm rounded-bl-none border border-slate-100'}`}>
                       {msg.text}
                    </div>
                 </div>
               ))}
            </div>
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex gap-2">
               <input 
                 type="text" 
                 placeholder="Hỏi quán ăn, chỗ chơi..." 
                 className="flex-1 bg-slate-100 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 font-medium"
                 value={userMsg}
                 onChange={(e) => setUserMsg(e.target.value)}
               />
               <button type="submit" className="bg-slate-900 text-white p-2.5 rounded-xl hover:bg-slate-800">
                 <Send size={16} />
               </button>
            </form>
         </div>
      </div>

      {/* Chat Trigger Button */}
      {!chatOpen && (
        <button 
          onClick={() => setChatOpen(true)}
          className="fixed bottom-24 right-4 z-40 bg-white p-2 rounded-full shadow-xl border border-slate-100 group hover:scale-105 transition-transform"
        >
          <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
          <div className="bg-slate-900 text-white p-3 rounded-full">
            <MessageCircle size={24} />
          </div>
        </button>
      )}

    </section>
  );
};

export default TravelGuide;