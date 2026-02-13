import React, { useState } from 'react';
import { MapPin, ArrowRight, Calendar, Star, Compass, Ship, User, Camera, ArrowDownCircle, Clock, Wallet, Heart, CheckCircle2, Sparkles, ExternalLink, Car } from 'lucide-react';
import BookingForm, { BookingPrefill } from './BookingForm';

const HIGHLIGHTS = [
  {
    id: 'h1',
    name: 'Chùa Dơi (Mahatup)',
    desc: 'Ngôi chùa Khmer nổi tiếng với kiến trúc độc đáo và đàn dơi ngựa tự nhiên treo mình trên cây.',
  },
  {
    id: 'h2',
    name: 'Chùa Som Rong',
    desc: 'Nổi tiếng với tượng Phật Thích Ca nhập niết bàn khổng lồ và bảo tháp tuyệt đẹp.',
  },
  {
    id: 'h3',
    name: 'Chợ Nổi Ngã Năm',
    desc: 'Giao điểm của 5 dòng sông, nét văn hóa mua bán trên ghe xuồng đặc trưng miền Tây.',
  }
];

const MORE_DESTINATIONS = [
  {
    id: 'm1',
    name: 'Chùa Chén Kiểu (Sà Lôn)',
    desc: 'Ngôi chùa Khmer độc đáo với kiến trúc được ốp hoàn toàn bằng những mảnh chén, đĩa, sành sứ nhiều màu sắc rực rỡ.',
  },
  {
    id: 'm2',
    name: 'Bảo tàng Khmer Sóc Trăng',
    desc: 'Nơi lưu giữ và trưng bày hàng ngàn hiện vật quý giá, phản ánh đời sống văn hóa, tín ngưỡng và nghệ thuật của đồng bào Khmer.',
  },
  {
    id: 'm3',
    name: 'Chùa Khleang',
    desc: 'Ngôi chùa cổ nhất Sóc Trăng với tuổi đời gần 500 năm, gắn liền với truyền thuyết về sự hình thành địa danh Sóc Trăng.',
  },
  {
    id: 'm4',
    name: 'Chùa Đất Sét (Bửu Sơn Tự)',
    desc: 'Nổi tiếng với hàng ngàn pho tượng Phật làm bằng đất sét và những cặp nến khổng lồ cháy suốt nhiều thập kỷ.',
  },
  {
    id: 'm5',
    name: 'Khu du lịch sinh thái Hồ Bể',
    desc: 'Bãi biển hoang sơ với hệ sinh thái rừng ngập mặn phong phú, không khí trong lành tại thị xã Vĩnh Châu.',
  },
  {
    id: 'm6',
    name: 'Cồn Mỹ Phước',
    desc: 'Điểm du lịch sinh thái miệt vườn giữa sông Hậu, nơi du khách thưởng thức trái cây tại vườn và nghe đờn ca tài tử.',
  }
];

const FOODS = [
  { name: 'Bún Nước Lèo', desc: 'Đặc sản trứ danh' },
  { name: 'Bánh Pía', desc: 'Quà quê ngọt ngào' },
  { name: 'Lạp Xưởng', desc: 'Hương vị gia truyền' },
];

const EXPERIENCES = [
    { icon: <Star size={32} />, label: 'Du lịch tâm linh' },
    { icon: <User size={32} />, label: 'Văn hóa Khmer' },
    { icon: <Ship size={32} />, label: 'Trải nghiệm sông nước' },
    { icon: <Camera size={32} />, label: 'Ẩm thực địa phương' },
];

const SocTrangPage: React.FC = () => {
  // Planner State
  const [plannerDuration, setPlannerDuration] = useState('2');
  const [plannerInterest, setPlannerInterest] = useState('culture');
  const [plannerBudget, setPlannerBudget] = useState('standard');
  
  // Booking Integration State
  const [bookingPrefill, setBookingPrefill] = useState<BookingPrefill | undefined>(undefined);

  interface Activity {
    time: string;
    text: string;
    linkId?: string;
  }

  interface DayItinerary {
    day: string;
    title: string;
    activities: Activity[];
  }

  const getDynamicItinerary = (): DayItinerary[] => {
    // Helper to format accommodation/dining based on budget
    const getStay = () => plannerBudget === 'luxury' ? 'Nghỉ đêm tại Resort/Khách sạn 4-5*' : (plannerBudget === 'economy' ? 'Nghỉ đêm tại Homestay bình dân' : 'Nghỉ đêm tại Khách sạn 3* trung tâm');
    const getLunch = (dish: string) => plannerBudget === 'luxury' ? `Ăn trưa ${dish} tại nhà hàng sang trọng` : `Ăn trưa ${dish} quán nổi tiếng`;

    const day1Base: DayItinerary = {
        day: 'Ngày 01',
        title: 'Khám Phá Sóc Trăng',
        activities: [
            { time: '04:00', text: 'Đón khách tận nơi tại Sài Gòn/Cần Thơ' },
            { time: '09:00', text: 'Viếng Chùa Dơi (Mahatup) - Tuyệt tác kiến trúc', linkId: 'h1' },
            { time: '11:30', text: getLunch('Bún Nước Lèo Cây Nhãn') }
        ]
    };

    // Customize Day 1 Afternoon
    if (plannerInterest === 'culture') {
        day1Base.activities.push({ time: '13:30', text: 'Check-in Chùa Som Rong & Tượng Phật nằm', linkId: 'h2' });
        day1Base.activities.push({ time: '15:00', text: 'Thăm Chùa Khleang & Bảo tàng Khmer', linkId: 'm3' }); // Linked to Khleang, adjacent to Museum
    } else if (plannerInterest === 'nature') {
        day1Base.activities.push({ time: '13:30', text: 'Di chuyển về Vĩnh Châu, tham quan Biển Hồ Bể', linkId: 'm5' });
        day1Base.activities.push({ time: '16:00', text: 'Ngắm hoàng hôn & điện gió Vĩnh Châu' });
    } else { // culinary/food
        day1Base.activities.push({ time: '13:30', text: 'Tham quan lò bánh Pía Tân Huê Viên' });
        day1Base.activities.push({ time: '15:00', text: 'Food tour Chợ Sóc Trăng (Bánh Cóng, Bánh Ống)' });
    }

    if (plannerDuration === '1') {
        day1Base.activities.push({ time: '17:00', text: 'Khởi hành về lại điểm đón' });
        return [day1Base];
    }

    // Add overnight stay for > 1 day
    day1Base.activities.push({ time: '18:00', text: getStay() });

    const day2: DayItinerary = {
        day: 'Ngày 02',
        title: '',
        activities: []
    };

    if (plannerInterest === 'culture') {
        day2.title = 'Văn Hóa & Tín Ngưỡng';
        day2.activities = [
            { time: '07:00', text: 'Điểm tâm sáng Bún Gỏi Dà' },
            { time: '08:30', text: 'Chùa Chén Kiểu (Sà Lôn) - Ốp sành sứ độc đáo', linkId: 'm1' },
            { time: '10:30', text: 'Chùa Đất Sét (Bửu Sơn Tự)', linkId: 'm4' },
            { time: '12:00', text: getLunch('Bò Nướng Ngói') },
            { time: '14:00', text: 'Mua sắm đặc sản và khởi hành về' }
        ];
    } else if (plannerInterest === 'nature') {
        day2.title = 'Sông Nước Miệt Vườn';
        day2.activities = [
            { time: '05:00', text: 'Trải nghiệm Chợ Nổi Ngã Năm sáng sớm', linkId: 'h3' },
            { time: '09:00', text: 'Tham quan Vườn Cò Tân Long' },
            { time: '11:30', text: 'Ăn trưa dân dã trên cồn Mỹ Phước', linkId: 'm6' },
            { time: '13:30', text: 'Đi cano len lỏi rạch nhỏ, nghe đờn ca tài tử' },
            { time: '15:00', text: 'Khởi hành về' }
        ];
    } else {
        day2.title = 'Hương Vị Miền Tây';
        day2.activities = [
            { time: '06:00', text: 'Đi chợ nổi Ngã Năm thưởng thức bữa sáng trên ghe', linkId: 'h3' },
            { time: '09:00', text: 'Tham quan làng nghề làm hủ tiếu/bánh tráng' },
            { time: '11:30', text: getLunch('Lẩu Mắm miền Tây') },
            { time: '14:00', text: 'Ghé lò Lạp Xưởng mua quà biếu' },
            { time: '15:00', text: 'Khởi hành về' }
        ];
    }

    if (plannerDuration === '3') {
        // Add overnight for day 2
        day2.activities.push({ time: '18:00', text: getStay() });

        const day3: DayItinerary = {
            day: 'Ngày 03',
            title: 'Kết Nối Bạc Liêu',
            activities: [
                { time: '08:00', text: 'Di chuyển sang Bạc Liêu (cách 50km)' },
                { time: '09:30', text: 'Tham quan Nhà Công Tử Bạc Liêu', linkId: 'bac-lieu' }, // Generic link if exists in grid
                { time: '11:00', text: 'Khu lưu niệm Cao Văn Lầu' },
                { time: '12:30', text: getLunch('Bánh xèo A Mật') },
                { time: '14:00', text: 'Check-in Cánh đồng điện gió Bạc Liêu' },
                { time: '16:00', text: 'Kết thúc hành trình 3N2Đ, về lại Sài Gòn' }
            ]
        };
        return [day1Base, day2, day3];
    }

    return [day1Base, day2];
  };

  const currentItinerary = getDynamicItinerary();

  const handleBookPlan = () => {
    const interestLabel = plannerInterest === 'culture' ? 'Văn hóa' : plannerInterest === 'nature' ? 'Thiên nhiên' : 'Ẩm thực';
    const budgetLabel = plannerBudget === 'economy' ? 'Tiết kiệm' : plannerBudget === 'luxury' ? 'Sang trọng' : 'Tiêu chuẩn';
    const summary = `Đặt theo Lịch trình gợi ý: ${plannerDuration} ngày, sở thích ${interestLabel}, ngân sách ${budgetLabel}.`;

    setBookingPrefill({
      pickup: 'TP.HCM',
      dropoff: 'Sóc Trăng',
      note: summary
    });

    setTimeout(() => {
        const element = document.getElementById('booking');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
  };

  const handleBookDestination = (name: string) => {
      setBookingPrefill({
          pickup: 'TP.HCM',
          dropoff: name,
          note: `Đặt xe đi tham quan ${name}`
      });
      setTimeout(() => {
        document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
  }

  const scrollToDestination = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Optional: Add highlight effect
        element.classList.add('ring-4', 'ring-gold', 'ring-offset-2');
        setTimeout(() => element.classList.remove('ring-4', 'ring-gold', 'ring-offset-2'), 2000);
    }
  };

  return (
    <div className="bg-white pt-20">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-primary-900 flex flex-col items-center justify-center">
        {/* Abstract typographic background */}
        <div className="absolute inset-0 opacity-5 flex items-center justify-center overflow-hidden select-none pointer-events-none">
            <span className="text-[20vw] font-serif font-bold text-gold whitespace-nowrap">SÓC TRĂNG</span>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-900/90"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <span className="text-gold uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-4 animate-fadeInUp">
            Điểm đến nổi bật
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fadeInUp delay-100 max-w-5xl">
            Du Lịch Sóc Trăng – Vẻ Đẹp Giao Thoa Văn Hóa Khmer
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mb-8 animate-fadeInUp delay-200">
             Khám phá chùa cổ linh thiêng, ẩm thực đặc sắc và nét đẹp miền sông nước nguyên bản.
          </p>
          <div className="flex gap-4 animate-fadeInUp delay-300">
            <button onClick={() => document.getElementById('planner')?.scrollIntoView({behavior: 'smooth'})} className="bg-gold hover:bg-gold-hover text-primary-900 px-8 py-3 rounded-full font-bold transition-all hover:-translate-y-1">
              Lập kế hoạch đi
            </button>
            <button onClick={() => document.getElementById('highlights')?.scrollIntoView({behavior: 'smooth'})} className="border border-white text-white hover:bg-white hover:text-primary-900 px-8 py-3 rounded-full font-bold transition-all hover:-translate-y-1">
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>

      {/* 2. INTRO OVERVIEW */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative group min-h-[400px]">
              <div className="absolute top-4 left-4 w-full h-full border-2 border-gold rounded-2xl z-0 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div className="relative z-10 w-full h-[400px] bg-primary-50 rounded-2xl shadow-xl flex items-center justify-center p-8 overflow-hidden">
                   <div className="text-center">
                       <h3 className="font-serif text-6xl font-bold text-primary-200 mb-2">100+</h3>
                       <span className="text-primary-800 font-bold uppercase tracking-widest block">Ngôi chùa cổ</span>
                       <div className="w-16 h-1 bg-gold mx-auto my-4"></div>
                       <p className="font-serif italic text-primary-600 text-lg">"Vùng đất của những nụ cười"</p>
                   </div>
              </div>
            </div>
            <div>
              <span className="text-gold uppercase tracking-widest text-sm font-bold mb-2 block">Giới thiệu tổng quan</span>
              <h2 className="font-serif text-4xl font-bold text-primary-900 mb-6">Xứ Sở Chùa Vàng Phương Nam</h2>
              <p className="text-dark-sub leading-relaxed mb-6 font-light text-lg">
                Sóc Trăng là điểm đến nổi bật của miền Tây Nam Bộ, nơi giao thoa văn hóa Kinh – Hoa – Khmer. Nơi đây nổi tiếng với hệ thống chùa Khmer độc đáo, ẩm thực đặc sản và không gian thanh bình đặc trưng vùng sông nước.
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
                        <p className="text-sm text-dark-sub">Tháng 11 - Tháng 4</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. HIGHLIGHTS (DESTINATIONS) */}
      <div id="highlights" className="py-20 bg-cream">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary-900 mb-4">Địa Điểm Nổi Bật</h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HIGHLIGHTS.map((item, index) => (
              <div key={item.id} id={item.id} className="group bg-white rounded-[16px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col scroll-mt-24">
                <div className="h-64 bg-primary-800 flex items-center justify-center p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary-900 opacity-50"></div>
                    <span className="absolute top-4 right-4 text-white/20 font-serif text-6xl font-bold">0{index + 1}</span>
                    <h3 className="font-serif text-3xl font-bold text-white text-center relative z-10 leading-snug group-hover:scale-110 transition-transform duration-500">
                        {item.name}
                    </h3>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                      <p className="text-dark-sub font-light mb-6">
                        {item.desc}
                      </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100/50">
                      <button className="flex items-center gap-2 text-primary-800 text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                        Xem chi tiết <ArrowRight size={16} className="text-gold" />
                      </button>
                      <button 
                        onClick={() => handleBookDestination(item.name)}
                        className="bg-white border border-primary-200 text-primary-900 hover:bg-primary-900 hover:text-gold hover:border-primary-900 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
                      >
                        Đặt xe
                      </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Link to All Destinations */}
          <div className="text-center mt-12">
            <a href="#all-destinations" className="inline-flex items-center gap-3 text-primary-900 font-bold uppercase tracking-widest hover:text-gold transition-colors group">
               Xem thêm địa điểm
               <ArrowDownCircle size={24} className="text-gold group-hover:translate-y-1 transition-transform" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>

      {/* 3.5 ALL DESTINATIONS SECTION */}
      <div id="all-destinations" className="py-20 bg-white border-t border-primary-50">
        <div className="container mx-auto px-4 max-w-[1200px]">
            <div className="text-center mb-16">
                 <span className="text-gold uppercase tracking-widest text-sm font-bold mb-2 block">Khám phá sâu hơn</span>
                 <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900">Tất cả địa điểm</h2>
                 <p className="text-dark-sub mt-4 max-w-2xl mx-auto font-light">
                    Sóc Trăng còn rất nhiều điểm đến hấp dẫn đang chờ bạn khám phá. Dưới đây là những địa danh mang đậm dấu ấn văn hóa và thiên nhiên.
                 </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MORE_DESTINATIONS.map((item) => (
                    <div key={item.id} id={item.id} className="flex flex-col p-8 rounded-xl border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all group bg-primary-50/30 scroll-mt-24">
                         <div className="flex items-start justify-between mb-4">
                            <h3 className="font-serif text-xl font-bold text-primary-900 group-hover:text-gold transition-colors">{item.name}</h3>
                            <MapPin size={18} className="text-gray-300 group-hover:text-gold transition-colors shrink-0 mt-1" />
                         </div>
                         <p className="text-slate-600 font-light text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
                         
                         <div className="mt-auto flex items-center justify-between pt-4">
                             <button className="flex items-center gap-2 text-primary-800 text-xs font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                                Xem chi tiết <ArrowRight size={14} className="text-gold" />
                             </button>
                             <button 
                                onClick={() => handleBookDestination(item.name)}
                                className="text-primary-400 hover:text-gold transition-colors"
                                title="Đặt xe đi địa điểm này"
                             >
                                <Car size={20} />
                             </button>
                         </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* 4. CUISINE */}
      <div className="py-20 bg-cream/30">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
             <h2 className="font-serif text-4xl font-bold text-primary-900">Ẩm Thực Đặc Sản</h2>
             <p className="text-dark-sub mt-4">Hương vị đậm đà khó quên của vùng đất Sóc Trăng</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FOODS.map((food, idx) => (
                <div key={idx} className="group relative rounded-xl overflow-hidden aspect-square cursor-pointer bg-white border border-gold/20 hover:bg-white hover:shadow-xl transition-all flex flex-col items-center justify-center text-center p-6">
                    <div className="w-12 h-12 rounded-full bg-gold/20 text-gold flex items-center justify-center mb-4 text-xl font-serif font-bold">
                        {food.name.charAt(0)}
                    </div>
                    <h3 className="text-primary-900 font-serif font-bold text-xl mb-1 group-hover:text-gold transition-colors">{food.name}</h3>
                    <p className="text-dark-sub text-sm font-light italic">{food.desc}</p>
                </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. TRIP PLANNER SECTION (NEW) */}
      <div id="planner" className="py-20 bg-primary-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-700/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
            <div className="text-center mb-16">
                <span className="text-gold uppercase tracking-widest text-sm font-bold mb-2 block flex items-center justify-center gap-2">
                    <Sparkles size={16} /> Thiết kế chuyến đi
                </span>
                <h2 className="font-serif text-4xl font-bold text-white">Lập Kế Hoạch Du Lịch</h2>
                <p className="text-primary-200 mt-4 max-w-2xl mx-auto font-light">
                    Chọn sở thích của bạn, chúng tôi sẽ gợi ý lịch trình hoàn hảo nhất để khám phá Sóc Trăng.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Controls */}
                <div className="lg:col-span-1 space-y-8">
                    {/* Duration */}
                    <div className="bg-primary-800/50 p-6 rounded-2xl border border-primary-700 backdrop-blur-sm">
                        <h3 className="font-serif text-xl font-bold text-gold mb-4 flex items-center gap-2">
                            <Clock size={20} /> Thời gian
                        </h3>
                        <div className="grid grid-cols-3 gap-3">
                            {['1', '2', '3'].map((day) => (
                                <button
                                    key={day}
                                    onClick={() => setPlannerDuration(day)}
                                    className={`py-3 rounded-lg font-bold border transition-all ${plannerDuration === day ? 'bg-gold text-primary-900 border-gold shadow-lg transform scale-105' : 'bg-transparent text-primary-200 border-primary-600 hover:border-gold/50'}`}
                                >
                                    {day} Ngày
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Interest */}
                    <div className="bg-primary-800/50 p-6 rounded-2xl border border-primary-700 backdrop-blur-sm">
                        <h3 className="font-serif text-xl font-bold text-gold mb-4 flex items-center gap-2">
                            <Heart size={20} /> Sở thích
                        </h3>
                        <div className="flex flex-col gap-3">
                            {[
                                {id: 'culture', label: 'Văn hóa & Tâm linh'},
                                {id: 'nature', label: 'Thiên nhiên & Sông nước'},
                                {id: 'food', label: 'Ẩm thực & Mua sắm'}
                            ].map((type) => (
                                <button
                                    key={type.id}
                                    onClick={() => setPlannerInterest(type.id)}
                                    className={`py-3 px-4 rounded-lg font-medium border text-left flex justify-between items-center transition-all ${plannerInterest === type.id ? 'bg-white/10 text-white border-gold' : 'bg-transparent text-primary-300 border-primary-700 hover:bg-white/5'}`}
                                >
                                    {type.label}
                                    {plannerInterest === type.id && <CheckCircle2 size={18} className="text-gold" />}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Budget */}
                    <div className="bg-primary-800/50 p-6 rounded-2xl border border-primary-700 backdrop-blur-sm">
                        <h3 className="font-serif text-xl font-bold text-gold mb-4 flex items-center gap-2">
                            <Wallet size={20} /> Ngân sách
                        </h3>
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                {id: 'economy', label: 'Tiết kiệm'},
                                {id: 'standard', label: 'Tiêu chuẩn'},
                                {id: 'luxury', label: 'Sang trọng'}
                            ].map((bud) => (
                                <button
                                    key={bud.id}
                                    onClick={() => setPlannerBudget(bud.id)}
                                    className={`py-2 text-xs font-bold rounded-lg border transition-all uppercase tracking-wide ${plannerBudget === bud.id ? 'bg-gold text-primary-900 border-gold' : 'bg-transparent text-primary-300 border-primary-600 hover:text-white'}`}
                                >
                                    {bud.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Itinerary Result */}
                <div className="lg:col-span-2 bg-white rounded-3xl p-8 text-primary-900 shadow-2xl relative">
                    <div className="absolute top-0 right-0 bg-gold text-primary-900 text-xs font-bold px-4 py-2 rounded-bl-2xl rounded-tr-2xl uppercase tracking-widest">
                        Lịch trình gợi ý
                    </div>
                    
                    <h3 className="font-serif text-2xl font-bold mb-6 text-primary-900">
                        Hành trình {plannerDuration} ngày tại Sóc Trăng
                    </h3>

                    <div className="space-y-8 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                        {currentItinerary.map((day, idx) => (
                            <div key={idx} className="relative pl-8 border-l-2 border-primary-100 last:border-0 pb-8 last:pb-0">
                                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gold border-4 border-white shadow-sm"></div>
                                <h4 className="font-bold text-lg text-gold mb-1">{day.day}: {day.title}</h4>
                                <ul className="space-y-3 mt-4">
                                    {day.activities.map((act, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100 hover:border-gold/30 transition-colors group">
                                            <div className="w-16 font-bold text-sm text-primary-600 shrink-0 mt-0.5">{act.time}</div>
                                            <div className="flex-1">
                                                <span className="font-light text-sm">{act.text}</span>
                                                {act.linkId && (
                                                    <button 
                                                        onClick={() => scrollToDestination(act.linkId!)}
                                                        className="ml-2 inline-flex items-center gap-1 text-xs font-bold text-gold hover:underline uppercase tracking-wider"
                                                    >
                                                        Xem <ExternalLink size={10} />
                                                    </button>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="text-sm text-slate-500">
                            * Lịch trình được thiết kế dựa trên ngân sách {plannerBudget === 'economy' ? 'tiết kiệm' : plannerBudget === 'luxury' ? 'sang trọng' : 'tiêu chuẩn'}.
                        </div>
                        <button 
                            onClick={handleBookPlan}
                            className="bg-primary-900 hover:bg-primary-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:-translate-y-1 flex items-center gap-2"
                        >
                            Đặt chuyến đi này <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* 6. EXPERIENCES */}
      <div className="py-20 bg-white border-t border-gray-100">
         <div className="container mx-auto px-4 max-w-[1200px]">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {EXPERIENCES.map((exp, i) => (
                    <div key={i} className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-cream transition-colors group">
                        <div className="text-gold mb-4 p-4 bg-primary-50 rounded-full group-hover:bg-gold group-hover:text-primary-900 transition-colors">{exp.icon}</div>
                        <h4 className="font-serif font-bold text-lg text-primary-900">{exp.label}</h4>
                    </div>
                ))}
            </div>
         </div>
      </div>

       {/* 7. MAP & INFO */}
      <div className="py-20 bg-cream">
         <div className="container mx-auto px-4 max-w-[1200px]">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                 <div>
                     <h2 className="font-serif text-3xl font-bold text-primary-900 mb-6">Thông Tin & Di Chuyển</h2>
                     <div className="space-y-6">
                         <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                             <div className="p-3 bg-primary-50 text-gold rounded-full"><MapPin size={24} /></div>
                             <div>
                                 <h4 className="font-bold text-primary-900">Khoảng cách</h4>
                                 <p className="text-slate-600">Từ Cần Thơ: 60km (1h30p)</p>
                                 <p className="text-slate-600">Từ TP.HCM: 220km (5h)</p>
                             </div>
                         </div>
                         <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                             <div className="p-3 bg-primary-50 text-gold rounded-full"><Ship size={24} /></div>
                             <div>
                                 <h4 className="font-bold text-primary-900">Phương tiện di chuyển</h4>
                                 <p className="text-slate-600">Xe khách, Ô tô riêng, Xe máy</p>
                                 <p className="text-slate-600 italic">Khuyến nghị: Thuê xe riêng 4-7 chỗ để thoải mái nhất.</p>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="h-[300px] lg:h-auto rounded-xl overflow-hidden shadow-lg border border-gold/20">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251678.9625345638!2d105.7486246320539!3d9.60155097402636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a101746eb53e7d%3A0x624e03d351368945!2zVHAuIFPD72MgVHLEg25nLCBTw7NjIFRyxINuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1709230000000!5m2!1svi!2s" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        title="Map Sóc Trăng"
                    ></iframe>
                 </div>
             </div>
         </div>
      </div>

      {/* 8. EMBEDDED BOOKING FORM (Integration) */}
      <div className="bg-slate-50 border-t border-gray-200">
         <BookingForm prefill={bookingPrefill} />
      </div>

      {/* 9. CTA FINAL (Keep purely as a fallback/footer accent) */}
      <div className="py-24 bg-primary-900 text-center px-4">
         <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">Sẵn Sàng Khám Phá Sóc Trăng?</h2>
            <p className="text-primary-200 text-lg mb-10 font-light">
                Liên hệ ngay với chúng tôi nếu bạn cần tư vấn thêm về lịch trình.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={() => document.getElementById('booking')?.scrollIntoView({behavior: 'smooth'})}
                  className="bg-gold hover:bg-gold-hover text-primary-900 font-bold py-4 px-10 rounded-full shadow-xl transition-transform hover:-translate-y-1"
                >
                    Đặt Xe Ngay
                </button>
            </div>
         </div>
      </div>

    </div>
  );
};

export default SocTrangPage;