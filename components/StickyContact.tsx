import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { HOTLINE, ZALO_ID } from '../constants';

const StickyContact: React.FC = () => {
  return (
    <>
      {/* Desktop Floating Buttons (Bottom Right) */}
      <div className="hidden md:flex flex-col gap-3 fixed bottom-8 right-8 z-50">
        <a 
          href={`https://zalo.me/${ZALO_ID}`}
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-110"
          title="Chat Zalo"
        >
          <MessageCircle size={28} />
          <span className="font-bold">Chat Zalo</span>
        </a>
        <a 
          href={`tel:${HOTLINE.replace(/\./g, '')}`}
          className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-110 animate-bounce"
          title="Gọi ngay"
        >
          <Phone size={28} />
          <span className="font-bold">Gọi ngay</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 px-4 py-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex gap-3">
        <a 
          href={`https://zalo.me/${ZALO_ID}`}
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-blue-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <MessageCircle size={20} />
          Zalo
        </a>
        <a 
          href={`tel:${HOTLINE.replace(/\./g, '')}`}
          className="flex-1 bg-red-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 active:scale-95 transition-transform animate-pulse"
        >
          <Phone size={20} />
          Gọi xe
        </a>
      </div>
    </>
  );
};

export default StickyContact;