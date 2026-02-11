import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Tại Sao Bà Con Chọn Chúng Tôi?
          </h2>
          <p className="text-lg text-slate-600">
            Chúng tôi hiểu rằng mỗi chuyến đi khám bệnh hay về quê đều quan trọng. Sự an toàn và thoải mái của quý khách là ưu tiên hàng đầu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-primary-200 transition-all group"
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Visual for Driver - Prompt Implementation */}
        <div className="mt-16 bg-primary-900 rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-10 md:p-16">
              <h3 className="text-3xl font-bold text-white mb-6">Đội ngũ bác tài thân thiện</h3>
              <p className="text-primary-100 text-lg mb-8">
                Tài xế của chúng tôi là người địa phương, am hiểu đường sá miền Tây, luôn phục vụ với nụ cười và thái độ ân cần như người nhà.
              </p>
              <ul className="space-y-4 text-white">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                  Lái xe an toàn, không phóng nhanh vượt ẩu
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                  Hỗ trợ mang vác hành lý
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                  Xe luôn sạch sẽ, không mùi thuốc lá
                </li>
              </ul>
            </div>
            <div className="h-64 md:h-full relative">
               {/* Prompt: Friendly driver standing next to luxury car */}
              <img 
                src="https://picsum.photos/seed/driverfriendly/800/600" 
                alt="Tài xế thân thiện đứng cạnh xe 7 chỗ" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;