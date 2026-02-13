import React from 'react';
import { TreePine, Tent, Ship, Landmark } from 'lucide-react';

const EXPERIENCES = [
  {
    icon: <TreePine size={32} strokeWidth={1.5} />,
    title: 'Du lịch sinh thái',
    desc: 'Hòa mình vào thiên nhiên miệt vườn xanh mát.'
  },
  {
    icon: <Landmark size={32} strokeWidth={1.5} />,
    title: 'Văn hóa tâm linh',
    desc: 'Tham quan hệ thống chùa Khmer cổ kính.'
  },
  {
    icon: <Ship size={32} strokeWidth={1.5} />,
    title: 'Chợ nổi truyền thống',
    desc: 'Trải nghiệm nét văn hóa sông nước độc đáo.'
  },
  {
    icon: <Tent size={32} strokeWidth={1.5} />,
    title: 'Làng nghề bản địa',
    desc: 'Khám phá quy trình làm đặc sản thủ công.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4 py-4 md:py-0 group">
              <div className="text-primary-400 group-hover:text-gold transition-colors duration-300 mb-4">
                {exp.icon}
              </div>
              <h3 className="font-serif font-bold text-lg text-primary-900 mb-2 uppercase tracking-wide">{exp.title}</h3>
              <p className="text-slate-500 text-sm font-light">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;