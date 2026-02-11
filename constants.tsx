import React from 'react';
import { RoutePrice, Testimonial, Feature } from './types';
import { ShieldCheck, MapPin, Clock, HeartHandshake, Banknote, Phone } from 'lucide-react';

export const APP_NAME = "Nhà xe Ti Toàn";
export const HOTLINE = "0899.343.678";
export const ZALO_ID = "0899343678";
export const FACEBOOK_URL = "https://www.facebook.com/nguyenquoctoanst/?locale=vi_VN";

export const HERO_HEADLINE = "Về Miền Tây - Lên Sài Gòn: Xe Đời Mới, Đón Tận Cửa";
export const HERO_SUBHEADLINE = "An tâm đưa đón khám bệnh, thăm thân, về quê. Tài xế rành đường, vui vẻ. Giá trọn gói không phát sinh.";

export const PRICE_LIST: RoutePrice[] = [
  {
    id: '1',
    from: 'Sài Gòn',
    to: 'Sóc Trăng',
    price4Seat: '2.370.000đ',
    price7Seat: '2.700.000đ',
    distance: '220km'
  },
  {
    id: '2',
    from: 'Sài Gòn',
    to: 'Cần Thơ',
    price4Seat: '1.860.000đ',
    price7Seat: '2.200.000đ',
    distance: '170km'
  },
  {
    id: '3',
    from: 'Sài Gòn',
    to: 'Bạc Liêu',
    price4Seat: '2.870.000đ',
    price7Seat: '3.210.000đ',
    distance: '270km'
  },
  {
    id: '4',
    from: 'Sài Gòn',
    to: 'Cà Mau',
    price4Seat: '3.380.000đ',
    price7Seat: '3.720.000đ',
    distance: '300km'
  },
    {
    id: '5',
    from: 'Sài Gòn',
    to: 'Vĩnh Long',
    price4Seat: '1.690.000đ',
    price7Seat: '2.030.000đ',
    distance: '135km'
  },
];

export const FEATURES: Feature[] = [
  {
    id: 'f1',
    title: 'Xe Đời Mới 100%',
    description: 'Xe 4 chỗ, 7 chỗ đời mới (Xpander, Vios, Innova...), sạch sẽ, thơm tho, máy lạnh mát rượi.',
    icon: <ShieldCheck className="w-8 h-8 text-primary-600" />
  },
  {
    id: 'f2',
    title: 'Đón Trả Tận Nhà',
    description: 'Không cần ra bến xe chen chúc. Bác tài đón tận cửa, trả tận nơi tại Sóc Trăng và các tỉnh.',
    icon: <MapPin className="w-8 h-8 text-primary-600" />
  },
  {
    id: 'f3',
    title: 'Giá Trọn Gói',
    description: 'Báo giá một lần là chốt. Không phí cầu đường, không phụ thu, không vòi vĩnh.',
    icon: <Banknote className="w-8 h-8 text-primary-600" />
  },
  {
    id: 'f4',
    title: 'Tài Xế Rành Đường',
    description: 'Lái xe người miền Tây, chạy êm, biết đường tắt tránh kẹt xe, hỗ trợ bà con khi đi khám bệnh.',
    icon: <HeartHandshake className="w-8 h-8 text-primary-600" />
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Cô Ba Hạnh',
    role: 'Đi khám bệnh',
    location: 'TP. Sóc Trăng',
    content: 'Cô đi Sài Gòn khám mắt, tài xế chạy êm ru cô ngủ một mạch tới nơi. Mấy đứa nhỏ tài xế nhiệt tình, dìu cô lên xuống xe đàng hoàng. Ưng cái bụng!',
    avatarUrl: 'https://picsum.photos/seed/coba/100/100'
  },
  {
    id: 't2',
    name: 'Anh Tuấn',
    role: 'Về quê thăm nhà',
    location: 'Quận 7, TP.HCM',
    content: 'Book xe cho vợ con về quê ăn đám giỗ. Xe Xpander mới cáu, rộng rãi. Giá rẻ hơn đi taxi công nghệ nhiều mà lại an toàn.',
    avatarUrl: 'https://picsum.photos/seed/anhtuan/100/100'
  },
  {
    id: 't3',
    name: 'Chị Lan',
    role: 'Công tác',
    location: 'Cần Thơ',
    content: 'Dịch vụ chuyên nghiệp, tài xế đúng giờ. Xe không có mùi, rất sạch sẽ. Sẽ ủng hộ dài dài.',
    avatarUrl: 'https://picsum.photos/seed/chilan/100/100'
  }
];

export const STEPS = [
  { title: 'Liên hệ', desc: 'Gọi Hotline hoặc nhắn Zalo báo lộ trình.' },
  { title: 'Báo giá', desc: 'Nhân viên báo giá trọn gói và chốt loại xe.' },
  { title: 'Đón khách', desc: 'Tài xế đến đón tận nơi đúng giờ hẹn.' },
  { title: 'Thanh toán', desc: 'Thanh toán khi kết thúc hành trình.' }
];