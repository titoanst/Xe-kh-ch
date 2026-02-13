import React from 'react';
import { APP_NAME, HOTLINE, FACEBOOK_URL } from '../constants';
import { Phone, MapPin, Facebook, Car, Mail, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white pt-20 pb-12">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-primary-800 pb-16">
          
          {/* Column 1: Intro */}
          <div>
            <div className="flex items-center gap-3 mb-6">
               <div className="border border-gold p-2 rounded-sm text-gold">
                 <Car size={24} strokeWidth={1.5} />
               </div>
               <span className="text-2xl font-serif font-bold tracking-wide">
                 TI TOÀN <span className="text-gold font-normal italic text-lg">Luxury</span>
               </span>
            </div>
            <p className="text-primary-200 leading-relaxed font-light mb-6">
              Đơn vị vận chuyển hàng đầu tại miền Tây, mang đến những hành trình an toàn, sang trọng và đậm chất văn hóa bản địa.
            </p>
            <div className="flex gap-4">
                <a href={FACEBOOK_URL} className="w-10 h-10 rounded-full border border-primary-700 flex items-center justify-center hover:bg-gold hover:text-primary-900 hover:border-gold transition-all">
                    <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-primary-700 flex items-center justify-center hover:bg-gold hover:text-primary-900 hover:border-gold transition-all">
                    <Instagram size={18} />
                </a>
            </div>
          </div>

          {/* Column 2: Discover */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-gold">Khám Phá</h3>
            <ul className="space-y-4 text-primary-100 font-light">
              <li><a href="#hero" className="hover:text-gold transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gold rounded-full"></span> Trang chủ</a></li>
              <li><a href="#guide" className="hover:text-gold transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gold rounded-full"></span> Điểm đến nổi bật</a></li>
              <li><a href="#specialties" className="hover:text-gold transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gold rounded-full"></span> Ẩm thực địa phương</a></li>
              <li><a href="#vehicles" className="hover:text-gold transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gold rounded-full"></span> Đội xe cao cấp</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
           <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-gold">Dịch Vụ</h3>
            <ul className="space-y-4 text-primary-100 font-light">
              <li><a href="#" className="hover:text-gold transition-colors">Thuê xe 4 chỗ VIP</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Thuê xe 7 chỗ Gia đình</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Đưa đón sân bay</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Tour hành hương</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-gold">Liên Hệ</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-gold shrink-0 mt-1" size={20} />
                <span className="text-primary-100 font-light">TP. Sóc Trăng, Tỉnh Sóc Trăng.</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-gold shrink-0" size={20} />
                <a href={`tel:${HOTLINE.replace(/\./g, '')}`} className="font-bold text-lg hover:text-gold transition-colors">{HOTLINE}</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-gold shrink-0" size={20} />
                <span className="text-primary-100 font-light">booking@nhaxetitoan.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-400 font-light">
          <p>© {new Date().getFullYear()} Ti Toan Luxury Travel. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white">Điều khoản</a>
             <a href="#" className="hover:text-white">Chính sách bảo mật</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;