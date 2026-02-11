import React from 'react';
import { APP_NAME, HOTLINE, FACEBOOK_URL } from '../constants';
import { Phone, MapPin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-24 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
               <img 
                 src="https://sf-static.upanhlaylink.com/img/image_20260211c02b9c045c2cf002ef325a9caf46dcc4.jpg" 
                 alt={APP_NAME}
                 className="h-12 w-auto object-contain rounded-lg bg-white/10"
               />
               <span className="text-2xl font-heading font-bold">{APP_NAME}</span>
            </div>
            <p className="text-primary-100 mb-6 leading-relaxed text-sm">
              Đơn vị vận tải hành khách uy tín tuyến Sài Gòn - Miền Tây.
              Chúng tôi luôn nỗ lực nâng cao chất lượng dịch vụ để mang đến những chuyến đi an toàn và hạnh phúc cho mọi gia đình.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Thông tin</h3>
            <ul className="space-y-3 text-primary-100">
              <li><a href="#hero" className="hover:text-white transition-colors">Trang chủ</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Bảng giá xe</a></li>
              <li><a href="#contact-map" className="hover:text-white transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Liên hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="text-accent" size={20} />
                <a href={`tel:${HOTLINE.replace(/\./g, '')}`} className="font-bold text-xl hover:text-accent transition-colors">{HOTLINE}</a>
              </li>
              <li className="flex items-start gap-3 text-primary-100">
                <MapPin className="text-accent mt-1" size={20} />
                <span>TP. Sóc Trăng, Tỉnh Sóc Trăng.</span>
              </li>
              <li className="flex items-center gap-3 text-primary-100">
                <Facebook className="text-accent" size={20} />
                <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="hover:text-white">Facebook Nhà Xe</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 pt-8 text-center text-sm text-primary-300">
          <p>© {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;