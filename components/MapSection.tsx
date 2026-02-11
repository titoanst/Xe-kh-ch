import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { HOTLINE } from '../constants';

const MapSection: React.FC = () => {
  return (
    <section id="contact-map" className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Liên Hệ & Chỉ Đường
          </h2>
          <p className="text-slate-600 text-lg">
            Ghé thăm văn phòng của chúng tôi tại Sóc Trăng
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Card */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm h-full flex flex-col justify-center">
                <h3 className="text-xl font-bold text-slate-900 mb-8">Thông tin liên hệ</h3>
                
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="bg-primary-100 p-3 rounded-full text-primary-600 shrink-0">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg">Trụ sở chính</h4>
                            <p className="text-slate-600 mt-1">TP. Sóc Trăng, Tỉnh Sóc Trăng</p>
                            <p className="text-sm text-slate-500 mt-1">(Vui lòng gọi trước khi đến)</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="bg-primary-100 p-3 rounded-full text-primary-600 shrink-0">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg">Hotline đặt xe</h4>
                            <a href={`tel:${HOTLINE.replace(/\./g, '')}`} className="text-2xl font-bold text-brand-orange hover:text-orange-700 block mt-1">
                                {HOTLINE}
                            </a>
                            <p className="text-slate-600 text-sm">Hỗ trợ 24/7</p>
                        </div>
                    </div>

                     <div className="flex items-start gap-4">
                        <div className="bg-primary-100 p-3 rounded-full text-primary-600 shrink-0">
                            <Clock size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg">Giờ hoạt động</h4>
                            <p className="text-slate-600 mt-1">Thứ 2 - Chủ Nhật</p>
                            <p className="text-slate-600 font-medium">04:00 - 22:00</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-2 h-[450px] lg:h-auto rounded-2xl overflow-hidden shadow-lg border border-slate-200 relative">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251678.9625345638!2d105.7486246320539!3d9.60155097402636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a101746eb53e7d%3A0x624e03d351368945!2zVHAuIFPD72MgVHLEg25nLCBTw7NjIFRyxINuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1709230000000!5m2!1svi!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, minHeight: '450px' }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bản đồ Sóc Trăng"
                    className="absolute inset-0 w-full h-full"
                ></iframe>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;