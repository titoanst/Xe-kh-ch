import React from 'react';
import { FEATURES } from '../constants';

const ServiceFeatures: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
           <h2 className="font-serif text-3xl font-bold text-primary-900 mb-4">Vì Sao Chọn Ti Toàn Luxury?</h2>
           <p className="text-slate-600">Cam kết chất lượng dịch vụ hàng đầu miền Tây</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="bg-primary-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-primary-100">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-gold">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg text-primary-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;