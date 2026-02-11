import React from 'react';
import { ShieldCheck, Car, Smile, Clock } from 'lucide-react';

const REASONS = [
  {
    icon: <ShieldCheck size={32} />,
    title: 'An Toàn Tuyệt Đối',
    desc: 'Lái xe cẩn thận, tuân thủ luật.'
  },
  {
    icon: <Car size={32} />,
    title: 'Xe Đời Mới',
    desc: 'Xe 4-7 chỗ sạch sẽ, thơm tho.'
  },
  {
    icon: <Smile size={32} />,
    title: 'Tài Xế Thân Thiện',
    desc: 'Vui vẻ, nhiệt tình, rành đường.'
  },
  {
    icon: <Clock size={32} />,
    title: 'Luôn Đúng Giờ',
    desc: 'Không để quý khách phải chờ đợi.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">
            Vì Sao Chọn Chúng Tôi?
          </h2>
          <p className="text-slate-600">
            Chúng tôi cam kết mang lại trải nghiệm chuyến đi an toàn và thoải mái nhất cho bà con.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {REASONS.map((reason, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 shadow-sm">
                {reason.icon}
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">{reason.title}</h3>
              <p className="text-slate-500 text-sm">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;