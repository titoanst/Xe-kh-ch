import React, { useState } from 'react';
import { 
  MapPin, Calendar, Clock, Users, User, Phone, CheckCircle, Car, 
  Loader2, Plus, Trash2, Milestone, FileText, 
  VolumeX, Wind, Baby, Cat, Briefcase 
} from 'lucide-react';

interface TripData {
  id: string;
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  passengers: string;
  note?: string;
  amenities?: string[];
}

const AMENITY_OPTIONS = [
  { id: 'nosmell', label: 'Xe không mùi', icon: <Wind size={16} /> },
  { id: 'quiet', label: 'Yên tĩnh', icon: <VolumeX size={16} /> },
  { id: 'child', label: 'Có trẻ nhỏ', icon: <Baby size={16} /> },
  { id: 'pet', label: 'Mang thú cưng', icon: <Cat size={16} /> },
  { id: 'luggage', label: 'Nhiều hành lý', icon: <Briefcase size={16} /> },
];

const BookingForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Cart state to hold multiple trips
  const [cart, setCart] = useState<TripData[]>([]);

  // Current form state for the trip being entered
  const [currentTrip, setCurrentTrip] = useState<Omit<TripData, 'id'>>({
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    passengers: '4',
    note: '',
    amenities: []
  });

  // Contact info applies to the whole order
  const [contactInfo, setContactInfo] = useState({
    name: '',
    phone: '',
    note: ''
  });

  const handleTripChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setCurrentTrip({
      ...currentTrip,
      [e.target.name]: e.target.value
    });
  };

  const toggleAmenity = (label: string) => {
    setCurrentTrip(prev => {
      const currentAmenities = prev.amenities || [];
      if (currentAmenities.includes(label)) {
        return { ...prev, amenities: currentAmenities.filter(a => a !== label) };
      } else {
        return { ...prev, amenities: [...currentAmenities, label] };
      }
    });
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value
    });
  };

  const addToCart = () => {
    // Basic validation
    if (!currentTrip.pickup || !currentTrip.dropoff || !currentTrip.date || !currentTrip.time) {
      alert("Vui lòng điền đầy đủ thông tin chuyến đi trước khi thêm.");
      return;
    }

    const newTrip: TripData = {
      ...currentTrip,
      id: Math.random().toString(36).substr(2, 9)
    };

    setCart([...cart, newTrip]);
    
    // Reset trip form
    setCurrentTrip({
      pickup: '',
      dropoff: '',
      date: '',
      time: '',
      passengers: '4',
      note: '',
      amenities: []
    });
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(t => t.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Determine final list of trips to book
    let tripsToBook = [...cart];
    
    // If there is data in the current form, check if it's a valid trip and add it
    // This handles the case where user fills form and clicks "Book" without clicking "Add"
    const isCurrentTripFilled = currentTrip.pickup && currentTrip.dropoff && currentTrip.date && currentTrip.time;
    
    if (isCurrentTripFilled) {
      tripsToBook.push({
        ...currentTrip,
        id: 'current'
      });
    }

    if (tripsToBook.length === 0) {
      alert("Vui lòng nhập thông tin ít nhất một chuyến đi.");
      return;
    }

    if (!contactInfo.name || !contactInfo.phone) {
        alert("Vui lòng nhập thông tin liên hệ.");
        return;
    }

    setIsSubmitting(true);
    
    // Simulate API call processing
    setTimeout(() => {
      // If we auto-added the current trip to submission, let's technically add it to cart state 
      // so the success screen shows it properly
      if (isCurrentTripFilled) {
         setCart(tripsToBook); 
         setCurrentTrip({ pickup: '', dropoff: '', date: '', time: '', passengers: '4', note: '', amenities: [] });
      }
      
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const resetForm = () => {
    setIsSuccess(false);
    setCart([]);
    setCurrentTrip({
        pickup: '',
        dropoff: '',
        date: '',
        time: '',
        passengers: '4',
        note: '',
        amenities: []
    });
  };

  if (isSuccess) {
    return (
      <section id="booking" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border border-green-100 transform transition-all animate-in fade-in zoom-in duration-300">
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <CheckCircle size={48} />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-2">Đặt Xe Thành Công!</h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Cảm ơn quý khách <strong>{contactInfo.name}</strong> đã đặt <strong>{cart.length} chuyến xe</strong>.<br/>
              Tổng đài sẽ gọi lại số <strong className="text-slate-900">{contactInfo.phone}</strong> để xác nhận ngay.
            </p>
            
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-8 text-left max-w-xl mx-auto">
                <h4 className="font-bold text-slate-800 mb-4 border-b pb-2 flex items-center gap-2">
                    <Milestone size={18} /> Chi tiết lịch trình:
                </h4>
                <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
                    {cart.map((trip, idx) => (
                        <div key={idx} className="bg-white p-3 rounded border border-gray-100 text-sm shadow-sm">
                            <div className="flex justify-between font-bold text-slate-700 mb-1">
                                <span>Chuyến {idx + 1}</span>
                                <span>{trip.passengers} chỗ</span>
                            </div>
                            <div className="grid grid-cols-1 gap-1 text-slate-600">
                                <p><span className="font-medium">Từ:</span> {trip.pickup}</p>
                                <p><span className="font-medium">Đến:</span> {trip.dropoff}</p>
                                <p><span className="font-medium">Lúc:</span> {trip.time} - {trip.date}</p>
                                
                                {trip.amenities && trip.amenities.length > 0 && (
                                  <div className="flex flex-wrap gap-1 mt-1">
                                    {trip.amenities.map((amenity, i) => (
                                      <span key={i} className="text-xs bg-primary-50 text-primary-700 px-2 py-0.5 rounded border border-primary-100">
                                        {amenity}
                                      </span>
                                    ))}
                                  </div>
                                )}
                                
                                {trip.note && (
                                    <p className="text-xs text-slate-500 italic mt-1 bg-gray-50 p-1.5 rounded">" {trip.note} "</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button 
              onClick={resetForm}
              className="bg-primary-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Đặt thêm chuyến mới
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
                {/* Left Side: Info */}
                <div className="lg:w-1/3 bg-primary-600 p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-4">Đặt Xe Trực Tuyến</h3>
                        <p className="text-primary-100 mb-8">Điền thông tin để đặt xe nhanh chóng. Quý khách có thể đặt nhiều chuyến cùng lúc (Ví dụ: đi và về).</p>
                        
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center shrink-0">
                                    <Car size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold">Xe đời mới</h4>
                                    <p className="text-sm text-primary-100">4 chỗ, 7 chỗ tiện nghi</p>
                                </div>
                            </div>
                             <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center shrink-0">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold">Đúng giờ</h4>
                                    <p className="text-sm text-primary-100">Không để khách chờ lâu</p>
                                </div>
                            </div>
                             <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold">Xác nhận ngay</h4>
                                    <p className="text-sm text-primary-100">Gọi lại sau 5 phút</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 relative z-10">
                        <p className="text-sm opacity-80">Hoặc gọi trực tiếp:</p>
                        <p className="text-2xl font-bold">0899.343.678</p>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="lg:w-2/3 p-8 md:p-10">
                     <form onSubmit={handleSubmit} className="space-y-8">
                        
                        {/* Trip Details Section */}
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                                    <MapPin size={20} className="text-brand-orange" />
                                    Thông tin chuyến đi
                                </h4>
                                {cart.length > 0 && (
                                    <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                                        Đang có {cart.length} chuyến trong giỏ
                                    </span>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-slate-50 p-5 rounded-xl border border-slate-100">
                                <div className="space-y-1">
                                    <label className="block text-sm font-semibold text-slate-700">Điểm đón</label>
                                    <input
                                        type="text"
                                        name="pickup"
                                        className="block w-full rounded-lg border-gray-200 focus:border-primary-500 focus:ring-primary-500 text-sm py-2.5 px-3 transition-colors"
                                        placeholder="VD: TP. Sóc Trăng"
                                        value={currentTrip.pickup}
                                        onChange={handleTripChange}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="block text-sm font-semibold text-slate-700">Điểm đến</label>
                                    <input
                                        type="text"
                                        name="dropoff"
                                        className="block w-full rounded-lg border-gray-200 focus:border-primary-500 focus:ring-primary-500 text-sm py-2.5 px-3 transition-colors"
                                        placeholder="VD: Sài Gòn"
                                        value={currentTrip.dropoff}
                                        onChange={handleTripChange}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="block text-sm font-semibold text-slate-700">Ngày đi</label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            name="date"
                                            className="block w-full rounded-lg border-gray-200 focus:border-primary-500 focus:ring-primary-500 text-sm py-2.5 px-3 transition-colors"
                                            value={currentTrip.date}
                                            onChange={handleTripChange}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="space-y-1">
                                        <label className="block text-sm font-semibold text-slate-700">Giờ</label>
                                        <input
                                            type="time"
                                            name="time"
                                            className="block w-full rounded-lg border-gray-200 focus:border-primary-500 focus:ring-primary-500 text-sm py-2.5 px-3 transition-colors"
                                            value={currentTrip.time}
                                            onChange={handleTripChange}
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="block text-sm font-semibold text-slate-700">Loại xe</label>
                                        <select
                                            name="passengers"
                                            className="block w-full rounded-lg border-gray-200 focus:border-primary-500 focus:ring-primary-500 text-sm py-2.5 px-3 transition-colors"
                                            value={currentTrip.passengers}
                                            onChange={handleTripChange}
                                        >
                                            <option value="4">4 Chỗ</option>
                                            <option value="7">7 Chỗ</option>
                                        </select>
                                    </div>
                                </div>
                                
                                {/* Amenities Selection */}
                                <div className="md:col-span-2 space-y-2">
                                    <label className="block text-sm font-semibold text-slate-700">Tiện ích & Yêu cầu thêm</label>
                                    <div className="flex flex-wrap gap-2">
                                        {AMENITY_OPTIONS.map((amenity) => {
                                            const isSelected = currentTrip.amenities?.includes(amenity.label);
                                            return (
                                                <button
                                                    key={amenity.id}
                                                    type="button"
                                                    onClick={() => toggleAmenity(amenity.label)}
                                                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm border transition-all ${
                                                        isSelected 
                                                            ? 'bg-primary-50 border-primary-500 text-primary-700 font-medium' 
                                                            : 'bg-white border-gray-200 text-slate-600 hover:bg-gray-50'
                                                    }`}
                                                >
                                                    {amenity.icon}
                                                    {amenity.label}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="md:col-span-2 space-y-1">
                                    <label className="block text-sm font-semibold text-slate-700">Ghi chú (tùy chọn)</label>
                                    <textarea
                                        name="note"
                                        rows={2}
                                        className="block w-full rounded-lg border-gray-200 focus:border-primary-500 focus:ring-primary-500 text-sm py-2.5 px-3 transition-colors resize-none"
                                        placeholder="VD: Nhà trong hẻm, đón tại cây xăng..."
                                        value={currentTrip.note}
                                        onChange={handleTripChange}
                                    />
                                </div>
                            
                                <div className="md:col-span-2 pt-2">
                                    <button
                                        type="button"
                                        onClick={addToCart}
                                        className="w-full md:w-auto flex justify-center items-center gap-2 py-2.5 px-6 border-2 border-primary-600 text-primary-700 font-bold rounded-lg hover:bg-primary-50 transition-colors text-sm"
                                    >
                                        <Plus size={18} />
                                        Thêm vào danh sách đi
                                    </button>
                                    <p className="text-xs text-slate-500 mt-2 text-center md:text-left">
                                        * Nhấn nút này nếu bạn muốn đặt thêm chiều về hoặc đi nhiều chặng.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Cart List */}
                        {cart.length > 0 && (
                            <div className="animate-in fade-in slide-in-from-top-4 duration-300">
                                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-3">Danh sách chuyến đi ({cart.length})</h4>
                                <div className="space-y-3">
                                    {cart.map((trip, index) => (
                                        <div key={trip.id} className="bg-white border border-l-4 border-l-primary-500 border-gray-200 p-4 rounded-lg shadow-sm flex justify-between items-start group hover:border-l-primary-600">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 font-bold text-slate-800">
                                                    <span className="bg-primary-100 text-primary-800 text-xs px-2 py-0.5 rounded shrink-0">Chuyến {index + 1}</span>
                                                    <span>{trip.pickup}</span>
                                                    <span className="text-gray-400">➝</span>
                                                    <span>{trip.dropoff}</span>
                                                </div>
                                                <div className="text-sm text-slate-500 mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
                                                    <span className="flex items-center gap-1"><Calendar size={14} /> {trip.date}</span>
                                                    <span className="flex items-center gap-1"><Clock size={14} /> {trip.time}</span>
                                                    <span className="flex items-center gap-1"><Users size={14} /> {trip.passengers} chỗ</span>
                                                </div>
                                                
                                                {trip.amenities && trip.amenities.length > 0 && (
                                                    <div className="flex flex-wrap gap-1 mt-2">
                                                        {trip.amenities.map((amenity, i) => (
                                                            <span key={i} className="text-xs bg-gray-100 text-slate-600 px-2 py-0.5 rounded">
                                                                {amenity}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}

                                                {trip.note && (
                                                    <div className="text-xs text-slate-600 mt-2 flex items-start gap-1 bg-gray-50 p-2 rounded">
                                                        <FileText size={12} className="mt-0.5 shrink-0 text-slate-400" />
                                                        <span className="italic">{trip.note}</span>
                                                    </div>
                                                )}
                                            </div>
                                            <button 
                                                type="button" 
                                                onClick={() => removeFromCart(trip.id)}
                                                className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors ml-2"
                                                title="Xóa chuyến này"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="border-t border-gray-100 pt-6">
                            <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                                <User size={20} className="text-brand-orange" />
                                Thông tin liên hệ
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="block text-sm font-semibold text-slate-700">Họ và tên <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="pl-10 block w-full rounded-xl border-gray-200 bg-slate-50 border focus:bg-white focus:border-primary-500 focus:ring-primary-500 sm:text-sm py-3 transition-colors"
                                            placeholder="Nhập tên của bạn"
                                            value={contactInfo.name}
                                            onChange={handleContactChange}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="block text-sm font-semibold text-slate-700">Số điện thoại <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Phone className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            pattern="[0-9]{10}"
                                            className="pl-10 block w-full rounded-xl border-gray-200 bg-slate-50 border focus:bg-white focus:border-primary-500 focus:ring-primary-500 sm:text-sm py-3 transition-colors"
                                            placeholder="0899..."
                                            value={contactInfo.phone}
                                            onChange={handleContactChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent rounded-xl shadow-lg text-lg font-bold text-white bg-brand-orange hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:-translate-y-1'}`}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="animate-spin" size={24} />
                                    Đang xử lý...
                                </>
                            ) : (
                                `Xác Nhận Đặt ${cart.length + (currentTrip.pickup && currentTrip.dropoff ? 1 : 0)} Chuyến Xe`
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;