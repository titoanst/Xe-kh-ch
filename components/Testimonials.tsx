import React from 'react';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Cô Ba Hạnh',
    role: 'Khách du lịch',
    location: 'TP. Sóc Trăng',
    content: 'Chuyến đi miền Tây mang lại cảm giác yên bình và trải nghiệm văn hóa đặc sắc. Ẩm thực tuyệt vời và con người rất thân thiện.'
  },
  {
    id: 't2',
    name: 'Anh Tuấn',
    role: 'Gia đình',
    location: 'Quận 7, TP.HCM',
    content: 'Lịch trình rõ ràng, địa điểm đẹp và dễ di chuyển. Xe đời mới êm ái, bác tài vui tính. Một hành trình đáng nhớ cho cả gia đình.'
  },
  {
    id: 't3',
    name: 'Chị Lan',
    role: 'Công tác',
    location: 'Cần Thơ',
    content: 'Dịch vụ chuyên nghiệp, đúng giờ. Xe sạch sẽ không có mùi. Mình rất ấn tượng với sự chu đáo của nhà xe Ti Toàn.'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-cream border-t border-b border-gray-200">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-widest text-xs font-bold mb-3 block">Voice of Customer</span>
          <h2 className="font-serif text-4xl font-bold text-primary-900">
            Đánh Giá Từ Du Khách
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div key={review.id} className="bg-white p-10 rounded-sm shadow-sm border border-gray-100 flex flex-col relative">
              <Quote size={48} className="text-primary-50 absolute top-6 right-6" />
              
              <div className="flex items-center gap-1 text-gold mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              
              <p className="text-primary-800 font-serif italic text-lg leading-relaxed mb-8 flex-grow">
                "{review.content}"
              </p>
              
              <div className="border-t border-gray-100 pt-6">
                <h4 className="font-bold text-primary-900 uppercase tracking-wide text-sm">{review.name}</h4>
                <p className="text-xs text-slate-500 mt-1">{review.role} • {review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;