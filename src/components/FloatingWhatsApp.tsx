import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const message = `Hello Sri Kaveri Ice Plant,\n\nI would like to place an order.\n\nProduct: \n\nQuantity: \n\nDelivery Location: \n\nPlease contact me regarding availability.`;
    const text = encodeURIComponent(message);
    window.open(`https://wa.me/919164532669?text=${text}`, '_blank');
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white text-primary text-xs font-bold font-sans py-2.5 px-4 rounded-lg shadow-md border border-outline-variant/60 whitespace-nowrap hidden sm:block flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Order Ice: +91 91645 32669
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleClick}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        className="relative bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center cursor-pointer focus:outline-none"
        aria-label="Order Ice via WhatsApp"
        id="floating-whatsapp-btn"
      >
        {/* Soft pulse glow background */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10" />
        
        <MessageSquare className="h-6 w-6 fill-white stroke-none" />
        
        {/* Small badge count to attract eye */}
        <span className="absolute -top-1 -right-1 bg-red-500 text-white font-mono text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center animate-bounce">
          1
        </span>
      </motion.button>
    </div>
  );
}
