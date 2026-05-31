'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export function MobileCtaBar() {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 lg:hidden z-30 h-[60px] bg-background border-t border-primary/10 flex items-center justify-between px-4"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <a
        href="tel:5551234567"
        className="flex flex-1 items-center justify-center gap-1 font-dm text-xs text-foreground/70 text-center"
      >
        <Phone style={{ width: 16, height: 16 }} /> (555) 123-4567
      </a>
      <button className="flex-1 px-4 py-3 bg-primary text-primary-foreground font-dm text-xs font-semibold rounded ml-2 hover:bg-primary/90 transition-colors duration-300">
        Get Quote
      </button>
    </motion.div>
  );
}
