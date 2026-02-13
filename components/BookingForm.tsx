import React, { useState, useEffect } from 'react';
import { 
  MapPin, Calendar, Clock, User, CheckCircle, Car, 
  Loader2, Plus, Trash2, Milestone, ShoppingCart,
  Baby, VolumeX, Wind, Briefcase, Check
} from 'lucide-react';

interface TripData {
  id: string;
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  passengers: string;
  preferences: string[];
  note?: string;
}

export interface BookingPrefill {
  note?: string;
  pickup?: string;
  dropoff?: string;
}

interface BookingFormProps {
  prefill?: BookingPrefill;
}

const PREFERENCE_OPTIONS = [
  { id: 'child_seat', label: 'Ghế trẻ em', icon: <Baby size={16} /> },
  { id: 'quiet', label: 'Yên tĩnh', icon: <VolumeX size={16} /> },
  { id: 'no_smell', label: 'Xe không mùi', icon: <Wind size={16} /> },
  { id: 'large_trunk', label: 'Cốp rộng', icon: <Briefcase size={16} /> },
];

const VEHICLE_OPTIONS = [
  { 
    id: '4', 
    title: 'Xe 4 Chỗ', 
    models: 'Vios, Accent, City...', 
    suitability: ['1-4 khách', 'Công tác', 'Đón tiễn sân bay'], 
    priceLabel: 'Giá từ 2.420.000đ' 
  },
  { 
    id: '7', 
    title: 'Xe 7 Chỗ', 
    models: 'Xpander, Innova, Veloz...', 
    suitability: ['Gia đình 5-7 người', 'Rộng rãi', 'Đi tỉnh, du lịch'], 
    priceLabel: 'Giá từ 2.860.000đ' 
  },
];

const BookingForm: React.FC<BookingFormProps> = ({ prefill }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Cart state
  const [cart, setCart] = useState<TripData[]>([]);

  // Current form state
  const [currentTrip, setCurrentTrip] = useState<Omit<TripData, 'id'>>({
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    passengers: '4', // Default to 4 seats
    preferences: [],
    note: '',
  });

  // Contact info
  const [contactInfo, setContactInfo] = useState({
    name: '',
    phone: '',
  });

  // Handle prefill data changes
  useEffect(() => {
    if (prefill) {
      setCurrentTrip(prev => ({
        ...prev,
        pickup: prefill.pickup || prev.pickup,
        dropoff: prefill.dropoff || prev.dropoff,
        note: prefill.note || prev.note
      }));
    }
  }, [prefill]);

  const handleTripChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setCurrentTrip({
      ...currentTrip,
      [e.target.name]: e.target.value
    });
  };

  const togglePreference = (prefId: string) => {
    setCurrentTrip(prev => {
      const exists = prev.preferences.includes(prefId);
      let newPrefs;
      if (exists) {
        newPrefs = prev.preferences.filter(id => id !== prefId);
      } else {
        newPrefs = [...prev.preferences, prefId];
      }
      return { ...prev, preferences: newPrefs };
    });
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value
    });
  };

  const addToCart = () => {
    if (!currentTrip.pickup || !currentTrip.dropoff || !currentTrip.date || !currentTrip.time) {
      alert("Vui lòng điền đầy đủ thông tin chuyến đi trước khi thêm vào danh sách.");
      return;
    }

    const newTrip: TripData = {
      ...currentTrip,
      id: Math.random().toString(36).substr(2, 9)
    };

    setCart([...cart, newTrip]);
    
    // Reset trip form but keep logic clean
    setCurrentTrip({
      pickup: '',
      dropoff: '',
      date: '',
      time: '',
      passengers: '4',
      preferences: [],
      note: '',
    });
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(t => t.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let tripsToBook = [...cart];
    
    // If current form is filled, add it to booking list automatically
    if (currentTrip.pickup && currentTrip.dropoff && currentTrip.date && currentTrip.time) {
      tripsToBook.push({ ...currentTrip, id: 'current' });
    }

    if (tripsToBook.length === 0) {
      alert("Vui lòng nhập ít nhất một chuyến đi hoặc thêm vào danh sách.");
      return;
    }

    if (!contactInfo.name || !contactInfo.phone) {
        alert("Vui lòng nhập tên và số điện thoại liên hệ.");
        return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // If we auto-added the current trip, clear the form for the success state view
      if (currentTrip.pickup && currentTrip.dropoff) {
         setCart(tripsToBook);
         setCurrentTrip({ pickup: '', dropoff: '', date: '', time: '', passengers: '4', preferences: [], note: '' });
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
        preferences: [],
        note: '',
    });
    setContactInfo({ name: '', phone: '' });
  };

  const getPreferenceLabel = (id: string) => {
    return PREFERENCE_OPTIONS.find(p => p.id === id)?.label || id;
  };

  if (isSuccess) {
    return (
      <section id="booking" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gold/30 text-center">
            <div className="w-20 h-20 bg-primary-50 text-gold rounded-full flex items-center justify-center mx-auto mb-6 border border-gold/20">
              <CheckCircle size={40} />
            </div>
            <h3 className="font-serif text-3xl font-bold text-primary-900 mb-2">ĐẶT XE THÀNH CÔNG!</h3>
            <p className="text-slate-600 mb-8 font-light">
              Cảm ơn <strong>{contactInfo.name}</strong>. Chúng tôi đã nhận được yêu cầu đặt <strong>{cart.length} chuyến xe</strong> của bạn. Bác tài sẽ liên hệ sớm nhất!
            </p>
            
            <div className="bg-primary-50 p-6 rounded-xl border border-primary-100 mb-8 text-left">
                <h4 className="font-serif font-bold text-primary-900 mb-4 border-b border-primary-200 pb-2">Chi tiết hành trình</h4>
                {cart.map((trip, idx) => (
                    <div key={idx} className="flex gap-4 mb-4 last:mb-0 border-b border-primary-200/50 last:border-0 pb-4 last:pb-0">
                        <div className="mt-1 text-gold"><Milestone size={20} /></div>
                        <div className="w-full">
                            <p className="font-bold text-primary-900 text-lg">{trip.pickup} <span className="text-gold mx-2">➝</span> {trip.dropoff}</p>
                            <p className="text-sm text-slate-600 mt-1">{trip.time} - {trip.date} • Xe {trip.passengers} chỗ</p>
                            {trip.note && <p className="text-xs text-slate-500 mt-1 italic">Ghi chú: {trip.note}</p>}
                            {trip.preferences.length > 0 && (
                              <div className="flex flex-wrap gap-2 mt-2">
                                {trip.preferences.map(pref => (
                                  <span key={pref} className="text-xs bg-white text-primary-700 px-2 py-1 rounded border border-primary-100 shadow-sm">
                                    {getPreferenceLabel(pref)}
                                  </span>
                                ))}
                              </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={resetForm} className="bg-gold hover:bg-gold-hover text-primary-900 font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:-translate-y-1">
              Đặt chuyến mới
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-12 relative z-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="bg-primary-900 py-6 px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <h3 className="text-white font-serif font-bold text-2xl flex items-center gap-3">
                    <Car className="text-gold" size={28} strokeWidth={1.5} />
                    ĐẶT XE TRỰC TUYẾN
                </h3>
                {cart.length > 0 && (
                    <div className="flex items-center gap-2 text-primary-900 bg-gold px-4 py-1.5 rounded-full text-sm font-bold shadow-lg animate-pulse">
                        <ShoppingCart size={18} />
                        <span>Đã chọn {cart.length} chuyến</span>
                    </div>
                )}
            </div>

            <div className="p-6 md:p-10">
                 <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Trip Form */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-primary-900 uppercase tracking-wide">Điểm đón</label>
                            <div className="relative group">
                                <MapPin className="absolute top-3.5 left-4 text-gray-400 group-focus-within:text-gold transition-colors" size={20} />
                                <input
                                    type="text"
                                    name="pickup"
                                    className="pl-12 block w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-gold focus:ring-gold py-3.5 transition-all shadow-sm"
                                    placeholder="Nhập địa chỉ đón..."
                                    value={currentTrip.pickup}
                                    onChange={handleTripChange}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-primary-900 uppercase tracking-wide">Điểm đến</label>
                            <div className="relative group">
                                <MapPin className="absolute top-3.5 left-4 text-gray-400 group-focus-within:text-gold transition-colors" size={20} />
                                <input
                                    type="text"
                                    name="dropoff"
                                    className="pl-12 block w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-gold focus:ring-gold py-3.5 transition-all shadow-sm"
                                    placeholder="Nhập địa chỉ đến..."
                                    value={currentTrip.dropoff}
                                    onChange={handleTripChange}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-primary-900 uppercase tracking-wide">Ngày đi</label>
                            <div className="relative group">
                                <Calendar className="absolute top-3.5 left-4 text-gray-400 group-focus-within:text-gold transition-colors" size={20} />
                                <input
                                    type="date"
                                    name="date"
                                    className="pl-12 block w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-gold focus:ring-gold py-3.5 transition-all shadow-sm"
                                    value={currentTrip.date}
                                    onChange={handleTripChange}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-primary-900 uppercase tracking-wide">Giờ đón</label>
                            <div className="relative group">
                                <Clock className="absolute top-3.5 left-4 text-gray-400 group-focus-within:text-gold transition-colors" size={20} />
                                <input
                                    type="time"
                                    name="time"
                                    className="pl-12 block w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-gold focus:ring-gold py-3.5 transition-all shadow-sm"
                                    value={currentTrip.time}
                                    onChange={handleTripChange}
                                />
                            </div>
                        </div>

                         {/* Note Field (Specifically for Itinerary Integration) */}
                         <div className="md:col-span-2 space-y-2">
                            <label className="text-sm font-bold text-primary-900 uppercase tracking-wide">Ghi chú</label>
                            <textarea
                                name="note"
                                rows={2}
                                className="block w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-gold focus:ring-gold py-3 px-4 transition-all shadow-sm resize-none"
                                placeholder="Ghi chú thêm cho tài xế..."
                                value={currentTrip.note}
                                onChange={handleTripChange}
                            ></textarea>
                        </div>

                        {/* Vehicle Selection Cards */}
                        <div className="md:col-span-2 space-y-3">
                             <label className="text-sm font-bold text-primary-900 uppercase tracking-wide">Chọn loại xe</label>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {VEHICLE_OPTIONS.map((vehicle) => (
                                    <div
                                        key={vehicle.id}
                                        onClick={() => setCurrentTrip({...currentTrip, passengers: vehicle.id})}
                                        className={`cursor-pointer rounded-xl p-5 border-2 transition-all relative group ${
                                            currentTrip.passengers === vehicle.id
                                            ? 'border-gold bg-primary-50'
                                            : 'border-gray-100 bg-white hover:border-gold/50'
                                        }`}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex items-center gap-3">
                                                <div className={`p-2 rounded-full ${currentTrip.passengers === vehicle.id ? 'bg-gold text-primary-900' : 'bg-gray-100 text-gray-400'}`}>
                                                    <Car size={20} />
                                                </div>
                                                <h4 className={`font-serif font-bold text-lg ${currentTrip.passengers === vehicle.id ? 'text-primary-900' : 'text-slate-700'}`}>
                                                    {vehicle.title}
                                                </h4>
                                            </div>
                                            {currentTrip.passengers === vehicle.id && <CheckCircle size={24} fill="currentColor" className="text-gold bg-white rounded-full" />}
                                        </div>
                                        <p className="text-xs text-slate-500 mb-3 pl-11">{vehicle.models}</p>
                                        <ul className="space-y-1.5 mb-3 pl-11">
                                            {vehicle.suitability.map((item, idx) => (
                                                <li key={idx} className="text-xs text-slate-700 flex items-center gap-2">
                                                    <Check size={12} className="text-gold" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="text-sm font-bold text-primary-900 bg-gold/20 inline-block px-3 py-1 rounded ml-11">
                                            {vehicle.priceLabel}
                                        </div>
                                    </div>
                                ))}
                             </div>
                        </div>

                        {/* Vehicle Preferences */}
                        <div className="md:col-span-2 space-y-3">
                           <label className="text-sm font-bold text-primary-900 uppercase tracking-wide">Tiện ích miễn phí</label>
                           <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                              {PREFERENCE_OPTIONS.map((option) => (
                                <button
                                  key={option.id}
                                  type="button"
                                  onClick={() => togglePreference(option.id)}
                                  className={`flex items-center justify-center gap-2 py-3 px-3 rounded-lg border text-sm font-medium transition-all ${
                                    currentTrip.preferences.includes(option.id)
                                      ? 'bg-primary-900 text-gold border-primary-900'
                                      : 'bg-white border-gray-200 text-slate-600 hover:border-gold hover:text-gold'
                                  }`}
                                >
                                  {option.icon}
                                  {option.label}
                                </button>
                              ))}
                           </div>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={addToCart}
                        className="w-full py-4 border-2 border-dashed border-gold/50 rounded-xl text-primary-800 font-bold hover:bg-gold/10 hover:border-gold transition-all flex items-center justify-center gap-2 group"
                    >
                        <Plus size={20} className="group-hover:rotate-90 transition-transform" />
                        THÊM CHUYẾN NÀY VÀO DANH SÁCH
                    </button>

                    {/* Cart Display */}
                    {cart.length > 0 && (
                        <div className="bg-cream rounded-xl p-6 border border-gold/20 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gold"></div>
                            <h4 className="font-serif font-bold text-primary-900 text-lg mb-4 flex items-center gap-2">
                                <ShoppingCart size={20} />
                                Danh sách chuyến đi ({cart.length})
                            </h4>
                            <div className="space-y-3">
                                {cart.map((trip) => (
                                    <div key={trip.id} className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center border border-primary-50 hover:border-gold/30 transition-colors">
                                        <div className="flex-1">
                                            <div className="font-bold text-primary-900 text-base flex items-center gap-2 flex-wrap">
                                                <span className="bg-primary-900 text-gold px-2 py-0.5 rounded text-xs whitespace-nowrap font-serif">Xe {trip.passengers} chỗ</span>
                                                <span className="break-words">{trip.pickup} ➝ {trip.dropoff}</span>
                                            </div>
                                            <div className="text-sm text-slate-500 mt-1 font-light">
                                                {trip.time}, {trip.date}
                                            </div>
                                            {trip.note && <div className="text-xs text-slate-400 mt-1 italic line-clamp-1">{trip.note}</div>}
                                            {trip.preferences.length > 0 && (
                                                <div className="flex flex-wrap gap-1 mt-2">
                                                {trip.preferences.map(pref => (
                                                    <span key={pref} className="text-[10px] bg-gray-100 text-slate-600 px-2 py-0.5 rounded-full border border-gray-200">
                                                    {getPreferenceLabel(pref)}
                                                    </span>
                                                ))}
                                                </div>
                                            )}
                                        </div>
                                        <button 
                                            type="button" 
                                            onClick={() => removeFromCart(trip.id)}
                                            className="text-slate-400 hover:text-red-500 p-2 hover:bg-red-50 rounded-full ml-2 transition-colors"
                                            title="Xóa chuyến này"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Contact Info */}
                    <div className="border-t border-gray-100 pt-8">
                        <h4 className="font-serif font-bold text-primary-900 text-xl mb-6 flex items-center gap-2">
                            <User size={24} className="text-gold" />
                            Thông Tin Liên Hệ
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1 block">Họ và tên</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="block w-full rounded-lg border-gray-200 bg-gray-50 focus:bg-white focus:border-gold focus:ring-gold py-3 px-4 transition-colors"
                                    placeholder="VD: Nguyễn Văn A"
                                    value={contactInfo.name}
                                    onChange={handleContactChange}
                                />
                            </div>
                            <div className="relative">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1 block">Số điện thoại</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    pattern="[0-9]{10}"
                                    className="block w-full rounded-lg border-gray-200 bg-gray-50 focus:bg-white focus:border-gold focus:ring-gold py-3 px-4 transition-colors"
                                    placeholder="VD: 0909 123 456"
                                    value={contactInfo.phone}
                                    onChange={handleContactChange}
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-4 rounded-full shadow-xl text-lg font-bold text-primary-900 bg-gold hover:bg-gold-hover transition-all flex items-center justify-center gap-3 uppercase tracking-wider ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:-translate-y-1'}`}
                    >
                        {isSubmitting ? <Loader2 className="animate-spin" /> : 'XÁC NHẬN ĐẶT XE'}
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;