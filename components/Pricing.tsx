import React from 'react';
import { PRICE_LIST, HOTLINE } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Bảng Giá Tham Khảo
          </h2>
          <p className="text-slate-600 text-lg">
            Giá đã bao gồm xăng xe, cầu đường, tài xế. Không phát sinh thêm.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="hidden md:block border rounded-2xl overflow-hidden shadow-sm bg-white">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-primary-600">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">Tuyến Đường</th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">Khoảng cách</th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">Xe 4 Chỗ</th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">Xe 7 Chỗ</th>
                    <th scope="col" className="px-6 py-4 text-right text-sm font-bold text-white uppercase tracking-wider">Đặt xe</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {PRICE_LIST.map((route) => (
                    <tr key={route.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                        {route.from} <span className="text-gray-400 mx-2">➝</span> {route.to}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                        {route.distance}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-brand-blue">
                        {route.price4Seat}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-brand-orange">
                        {route.price7Seat}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href={`tel:${HOTLINE.replace(/\./g, '')}`} className="text-primary-600 hover:text-primary-900 font-bold border border-primary-600 px-4 py-2 rounded-lg hover:bg-primary-50 transition-colors">
                          Gọi ngay
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards View */}
            <div className="md:hidden space-y-4">
              {PRICE_LIST.map((route) => (
                <div key={route.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg text-slate-900">{route.from} - {route.to}</h3>
                    <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded">{route.distance}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-50 p-3 rounded-xl text-center">
                      <p className="text-xs text-blue-600 font-semibold mb-1">4 Chỗ</p>
                      <p className="font-bold text-blue-900 text-lg">{route.price4Seat}</p>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-xl text-center">
                      <p className="text-xs text-orange-600 font-semibold mb-1">7 Chỗ</p>
                      <p className="font-bold text-orange-900 text-lg">{route.price7Seat}</p>
                    </div>
                  </div>
                  <a 
                    href={`tel:${HOTLINE.replace(/\./g, '')}`} 
                    className="block w-full text-center bg-primary-600 text-white font-bold py-3 rounded-xl shadow-md hover:bg-primary-700 active:scale-95 transition-all"
                  >
                    Đặt chuyến này
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <CheckCircle2 className="h-5 w-5 text-yellow-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-800">
                <strong>Lưu ý:</strong> Giá trên là giá tham khảo ngày thường. Lễ, Tết hoặc đi 2 chiều trong ngày sẽ có giá ưu đãi hơn. Vui lòng gọi Hotline để được báo giá chính xác nhất.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;