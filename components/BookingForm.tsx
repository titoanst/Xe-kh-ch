import React, { useState } from 'react';
import { 
  MapPin, Calendar, Clock, User, Phone, CheckCircle, Car, 
  Loader2, Plus, Trash2, Milestone, ShoppingCart,
  Baby, VolumeX, Wind, Briefcase, Users, Check
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

const BookingForm: React.FC = () => {
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
      alert("Vui lòng điền đầy đủ thông tin chuyến đi trước khi thêm.");
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
    
    // If current form is filled, add it to booking list
    if (currentTrip.pickup && currentTrip.dropoff && currentTrip.date && currentTrip.time) {
      tripsToBook.push({ ...currentTrip, id: 'current' });
    }

    if (tripsToBook.length === 0) {
      alert("Vui lòng nhập ít nhất một chuyến đi.");
      return;
    }

    if (!contactInfo.name || !contactInfo.phone) {
        alert("Vui lòng nhập thông tin liên hệ.");
        return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      // Sync state for success view
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
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-100 text-center">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} />
            </div>
            <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">ĐẶT XE THÀNH CÔNG!</h3>
            <p className="text-slate-600 mb-8">
              Cảm ơn <strong>{contactInfo.name}</strong>. Chúng tôi đã nhận được yêu cầu đặt <strong>{cart.length} chuyến xe</strong> của bạn.
            </p>
            
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-8 text-left">
                {cart.map((trip, idx) => (
                    <div key={idx} className="flex gap-3 mb-3 last:mb-0 border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                        <Milestone className="text-primary-500 shrink-0 mt-1" size={18} />
                        <div className="w-full">
                            <p className="font-bold text-slate-800 text-sm">{trip.pickup} ➝ {trip.dropoff}</p>
                            <p className="text-xs text-slate-500">{trip.time} - {trip.date} • {trip.passengers} chỗ</p>
                            {trip.preferences.length > 0 && (
                              <div className="flex flex-wrap gap-1 mt-1">
                                {trip.preferences.map(pref => (
                                  <span key={pref} className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded border border-green-200">
                                    {getPreferenceLabel(pref)}
                                  </span>
                                ))}
                              </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={resetForm} className="bg-primary-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-primary-700 transition-colors">
              Đặt chuyến mới
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-12 -mt-10 relative z-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="bg-primary-600 py-4 px-6 flex justify-between items-center">
                <h3 className="text-white font-heading font-bold text-xl flex items-center gap-2">
                    <Car className="text-primary-200" />
                    ĐẶT XE TRỰC TUYẾN
                </h3>
                {cart.length > 0 && (
                    <div className="flex items-center gap-2 text-white bg-primary-700 px-3 py-1 rounded-full text-sm">
                        <ShoppingCart size={16} />
                        <span>{cart.length} chuyến</span>
                    </div>
                )}
            </div>

            <div className="p-6 md:p-8">
                 <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Trip Form */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-1">
                            <label className="text-sm font-semibold text-slate-700">Điểm đón</label>
                            <div className="relative">
                                <MapPin className="absolute top-3 left-3 text-gray-400" size={18} />
                                <input
                                    type="text"
                                    name="pickup"
                                    className="pl-10 block w-full rounded-lg border-gray-200 bg-gray-50 focus:bg-white focus:border-primary-500 focus:ring-primary-500 py-2.5 transition-colors"
                                    placeholder="VD: 123 Nguyễn Huệ"
                                    value={currentTrip.pickup}
                                    onChange={handleTripChange}
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-semibold text-slate-700">Điểm đến</label>
                            <div className="relative">
                                <MapPin className="absolute top-3 left-3 text-gray-400" size={18} />
                                <input
                                    type="text"
                                    name="dropoff"
                                    className="pl-10 block w-full rounded-lg border-gray-200 bg-gray-50 focus:bg-white focus:border-primary-500 focus:ring-primary-500 py-2.5 transition-colors"
                                    placeholder="VD: Sóc Trăng"
                                    value={currentTrip.dropoff}
                                    onChange={handleTripChange}
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-semibold text-slate-700">Ngày đi</label>
                            <div className="relative">
                                <Calendar className="absolute top-3 left-3 text-gray-400" size={18} />
                                <input
                                    type="date"
                                    name="date"
                                    className="pl-10 block w-full rounded-lg border-gray-200 bg-gray-50 focus:bg-white focus:border-primary-500 focus:ring-primary-500 py-2.5 transition-colors"
                                    value={currentTrip.date}
                                    onChange={handleTripChange}
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-semibold text-slate-700">Giờ đón</label>
                            <div className="relative">
                                <Clock className="absolute top-3 left-3 text-gray-400" size={18} />
                                <input
                                    type="time"
                                    name="time"
                                    className="pl-10 block w-full rounded-lg border-gray-200 bg-gray-50 focus:bg-white focus:border-primary-500 focus:ring-primary-500 py-2.5 transition-colors"
                                    value={currentTrip.time}
                                    onChange={handleTripChange}
                                />
                            </div>
                        </div>

                        {/* Vehicle Selection Cards */}
                        <div className="md:col-span-2 space-y-2">
                             <label className="text-sm font-semibold text-slate-700">Chọn loại xe</label>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {VEHICLE_OPTIONS.map((vehicle) => (
                                    <div
                                        key={vehicle.id}
                                        onClick={() => setCurrentTrip({...currentTrip, passengers: vehicle.id})}
                                        className={`cursor-pointer rounded-xl p-4 border-2 transition-all relative ${
                                            currentTrip.passengers === vehicle.id
                                            ? 'border-primary-600 bg-primary-50 ring-1 ring-primary-600'
                                            : 'border-gray-200 bg-white hover:border-primary-300'
                                        }`}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex items-center gap-2">
                                                <Car className={currentTrip.passengers === vehicle.id ? 'text-primary-600' : 'text-slate-400'} size={20} />
                                                <h4 className={`font-bold text-lg ${currentTrip.passengers === vehicle.id ? 'text-primary-800' : 'text-slate-800'}`}>
                                                    {vehicle.title}
                                                </h4>
                                            </div>
                                            {currentTrip.passengers === vehicle.id && <CheckCircle className="text-primary-600" size={20} />}
                                        </div>
                                        <p className="text-xs text-slate-500 mb-3">{vehicle.models}</p>
                                        <ul className="space-y-1.5 mb-3">
                                            {vehicle.suitability.map((item, idx) => (
                                                <li key={idx} className="text-xs text-slate-700 flex items-center gap-2">
                                                    <Check size={12} className="text-green-500" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="text-sm font-bold text-accent bg-orange-50 inline-block px-2 py-1 rounded">
                                            {vehicle.priceLabel}
                                        </div>
                                    </div>
                                ))}
                             </div>
                        </div>

                        {/* Vehicle Preferences */}
                        <div className="md:col-span-2 space-y-2">
                           <label className="text-sm font-semibold text-slate-700">Tiện ích thêm</label>
                           <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                              {PREFERENCE_OPTIONS.map((option) => (
                                <button
                                  key={option.id}
                                  type="button"
                                  onClick={() => togglePreference(option.id)}
                                  className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg border text-sm font-medium transition-all ${
                                    currentTrip.preferences.includes(option.id)
                                      ? 'bg-primary-50 border-primary-500 text-primary-700 ring-1 ring-primary-500'
                                      : 'bg-white border-gray-200 text-slate-600 hover:border-primary-300'
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
                        className="w-full py-3 border-2 border-dashed border-primary-300 rounded-xl text-primary-600 font-semibold hover:bg-primary-50 hover:border-primary-500 transition-all flex items-center justify-center gap-2"
                    >
                        <Plus size={20} />
                        Thêm chuyến này vào danh sách
                    </button>

                    {/* Cart Display */}
                    {cart.length > 0 && (
                        <div className="bg-primary-50 rounded-xl p-4 space-y-3">
                            <h4 className="font-bold text-primary-800 text-sm uppercase">Danh sách chuyến đi</h4>
                            {cart.map((trip) => (
                                <div key={trip.id} className="bg-white p-3 rounded-lg shadow-sm flex justify-between items-center border border-primary-100">
                                    <div className="flex-1">
                                        <div className="font-bold text-slate-800 text-sm flex items-center gap-2 flex-wrap">
                                            <span className="bg-primary-100 text-primary-700 px-2 py-0.5 rounded text-xs whitespace-nowrap">{trip.passengers} chỗ</span>
                                            <span className="break-words">{trip.pickup} ➝ {trip.dropoff}</span>
                                        </div>
                                        <div className="text-xs text-slate-500 mt-1">
                                            {trip.time}, {trip.date}
                                        </div>
                                        {trip.preferences.length > 0 && (
                                            <div className="flex flex-wrap gap-1 mt-1.5">
                                              {trip.preferences.map(pref => (
                                                <span key={pref} className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-gray-200">
                                                  {getPreferenceLabel(pref)}
                                                </span>
                                              ))}
                                            </div>
                                        )}
                                    </div>
                                    <button 
                                        type="button" 
                                        onClick={() => removeFromCart(trip.id)}
                                        className="text-red-400 hover:text-red-600 p-2 hover:bg-red-50 rounded-full ml-2"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Contact Info */}
                    <div className="border-t border-gray-100 pt-6">
                        <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <User size={20} className="text-accent" />
                            Thông tin liên hệ
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <input
                                type="text"
                                name="name"
                                required
                                className="block w-full rounded-lg border-gray-200 bg-gray-50 focus:bg-white focus:border-accent focus:ring-accent py-3 px-4 transition-colors"
                                placeholder="Họ và tên của bạn"
                                value={contactInfo.name}
                                onChange={handleContactChange}
                            />
                            <input
                                type="tel"
                                name="phone"
                                required
                                pattern="[0-9]{10}"
                                className="block w-full rounded-lg border-gray-200 bg-gray-50 focus:bg-white focus:border-accent focus:ring-accent py-3 px-4 transition-colors"
                                placeholder="Số điện thoại"
                                value={contactInfo.phone}
                                onChange={handleContactChange}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-4 rounded-xl shadow-lg text-lg font-bold text-white bg-accent hover:bg-accent-hover transition-all flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:-translate-y-1'}`}
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