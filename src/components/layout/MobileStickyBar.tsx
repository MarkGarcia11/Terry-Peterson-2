import React from 'react';
import { Phone, MessageSquare, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#2E2B26]/95 backdrop-blur-lg border-t border-white/15 px-3 py-2 shadow-2xl safe-area-pb">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call */}
        <a
          href="tel:8155457709"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-[#423E37] border border-white/10 text-white text-xs font-medium active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-[#B8905A]" />
          <span>Call</span>
        </a>

        {/* Text */}
        <a
          href="sms:8155457709"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-[#423E37] border border-white/10 text-white text-xs font-medium active:scale-95 transition-transform"
        >
          <MessageSquare className="w-3.5 h-3.5 text-[#B8905A]" />
          <span>Text</span>
        </a>

        {/* Form / Msg */}
        <Link
          to="/contact"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-[#B8905A] text-white text-xs font-medium shadow-md shadow-[#B8905A]/20 active:scale-95 transition-transform"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Intake</span>
        </Link>
      </div>
    </div>
  );
};
