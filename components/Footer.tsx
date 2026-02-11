import React from 'react';
import { APP_NAME, HOTLINE, FACEBOOK_URL } from '../constants';
import { Car, Phone, MapPin, Mail, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
               <Car className="text-primary-500" size={32} />
               <span className="text-2xl font-bold text-white">{APP_NAME}</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Chuyên cung cấp dịch vụ xe hợp đồng, xe đưa đón khám bệnh, xe về quê từ Sài Gòn đi các tỉnh Miền Tây và ngược lại. Uy tín - An toàn - Giá rẻ.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Liên kết nhanh</h3>
            <ul className="space-y-3">
              <li><a href="#hero" className="hover:text-primary-400 transition-colors">Trang chủ</a></li>
              <li><a href="#pricing" className="hover:text-primary-400 transition-colors">Bảng giá xe</a></li>
              <li><a href="#steps" className="hover:text-primary-400 transition-colors">Hướng dẫn đặt xe</a></li>
              <li><a href="#reviews" className="hover:text-primary-400 transition-colors">Khách hàng đánh giá</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Liên hệ nhà xe</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-500 mt-1" size={20} />
                <span>Trụ sở chính: TP. Sóc Trăng, Tỉnh Sóc Trăng.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary-500" size={20} />
                <a href={`tel:${HOTLINE.replace(/\./g, '')}`} className="font-bold text-white hover:text-primary-400">{HOTLINE}</a>
              </li>
              <li className="flex items-center gap-3">
                <Facebook className="text-primary-500" size={20} />
                <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="hover:text-primary-400 truncate">Facebook Nhà Xe</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;