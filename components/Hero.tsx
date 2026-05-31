'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg"
          alt="Industrial roofing background"
          fill
          className="object-cover brightness-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 gap-12 items-center max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Overline */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="w-12 h-0.5 bg-accent" />
              <span className="font-barlow text-sm text-accent tracking-widest">ROOFING & STRUCTURAL EXCELLENCE</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-6xl lg:text-6xl font-900 text-heading uppercase leading-tight tracking-tighter"
            >
              Pinnacle is more than a roofing company.
            </motion.h1>

            {/* Accent Phrase */}
            <motion.p
              variants={itemVariants}
              className="font-serif text-4xl lg:text-5xl italic text-text leading-relaxed"
            >
              It&apos;s a craft.
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="font-body text-lg text-text/80 leading-relaxed max-w-xl"
            >
              Two decades of precision engineering. Premium materials. Industrial precision. We don&apos;t just repair roofs—we engineer structural solutions that protect and endure.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-accent text-background font-barlow font-600 text-sm uppercase tracking-widest border-2 border-accent hover:bg-background hover:text-accent transition-all duration-300">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border-2 border-accent text-accent font-barlow font-600 text-sm uppercase tracking-widest hover:bg-accent hover:text-background transition-all duration-300">
                View Portfolio
              </button>
            </motion.div>

            {/* Trust Indicator */}
            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-4">
              <div className="h-1 w-12 bg-accent" />
              <p className="text-sm text-text/70 font-body">
                <span className="text-accent font-semibold">500+</span> projects completed. Average rating: <span className="text-accent font-semibold">4.9★</span>
              </p>
            </motion.div>
          </motion.div>


        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-foreground/60 font-dm">Scroll to explore</p>
          <svg
            className="w-5 h-5 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
