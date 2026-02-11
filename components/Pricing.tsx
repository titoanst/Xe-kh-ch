import React from 'react';
import { PRICE_LIST, HOTLINE } from '../constants';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        
        {/* Vehicles Section - Added here as requested in design spec */}
        <div id="vehicles" className="mb-20">
            <div className="text-center mb-12">
                <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">Đội Xe Đời Mới</h2>
                <p className="text-slate-600">Lựa chọn dòng xe phù hợp cho chuyến đi của bạn</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="font-heading text-2xl font-bold text-primary-700 mb-2">Xe 4 Chỗ</h3>
                    <p className="text-sm text-slate-500 mb-6">Vios, Accent, City...</p>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center gap-2 text-slate-700"><Check size={18} className="text-green-500" /> Phù hợp 1-4 khách</li>
                        <li className="flex items-center gap-2 text-slate-700"><Check size={18} className="text-green-500" /> Cốp rộng để hành lý</li>
                        <li className="flex items-center gap-2 text-slate-700"><Check size={18} className="text-green-500" /> Đón tiễn sân bay, công tác</li>
                    </ul>
                    <div className="text-accent font-bold text-xl">Giá từ 1.100.000đ</div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="font-heading text-2xl font-bold text-primary-700 mb-2">Xe 7 Chỗ</h3>
                    <p className="text-sm text-slate-500 mb-6">Xpander, Innova, Veloz...</p>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center gap-2 text-slate-700"><Check size={18} className="text-green-500" /> Phù hợp gia đình 5-7 người</li>
                        <li className="flex items-center gap-2 text-slate-700"><Check size={18} className="text-green-500" /> Rộng rãi, thoáng mát</li>
                        <li className="flex items-center gap-2 text-slate-700"><Check size={18} className="text-green-500" /> Đi tỉnh, về quê, du lịch</li>
                    </ul>
                    <div className="text-accent font-bold text-xl">Giá từ 1.300.000đ</div>
                </div>
            </div>
        </div>

        {/* Pricing Table */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">
              Bảng Giá Tham Khảo
            </h2>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-700 uppercase">Tuyến đường</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-primary-600 uppercase">4 Chỗ</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-accent uppercase">7 Chỗ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {PRICE_LIST.map((route) => (
                  <tr key={route.id} className="hover:bg-blue-50/50 transition-colors">
                    <td className="px-6 py-4 text-slate-800 font-medium">
                        {route.from} - {route.to}
                    </td>
                    <td className="px-6 py-4 text-center text-slate-600 font-medium">
                      {route.price4Seat}
                    </td>
                    <td className="px-6 py-4 text-center text-slate-600 font-medium">
                      {route.price7Seat}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-center">
            <a 
                href={`tel:${HOTLINE.replace(/\./g, '')}`} 
                className="inline-block bg-accent hover:bg-accent-hover text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:-translate-y-1"
            >
                Gọi báo giá chi tiết
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;