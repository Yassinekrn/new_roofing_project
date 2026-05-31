'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { Hammer, ShieldCheck, HardHat, Star } from 'lucide-react';

const stats = [
  { label: 'Projects Completed', value: 500, suffix: '+', icon: Hammer },
  { label: 'Years of Excellence', value: 20, suffix: '+', icon: ShieldCheck },
  { label: 'Team Members', value: 45, suffix: '+', icon: HardHat },
  { label: 'Client Satisfaction', value: 98, suffix: '%', icon: Star },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const motionValue = useMotionValue(0);
  const displayValue = useTransform(motionValue, (latest) => Math.floor(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, { duration: 2, ease: 'easeOut' });
    }
  }, [isInView, value, motionValue]);

  return (
    <motion.span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      <span>{suffix}</span>
    </motion.span>
  );
}

export function StatBar() {
  return (
    <section className="relative py-24 md:py-32 bg-cover bg-center" style={{backgroundImage: 'url(/placeholder.svg)'}}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/88" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <IconComponent className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="font-display text-4xl md:text-5xl font-900 text-accent mb-3 tracking-wider">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="font-body text-xs md:text-sm text-text/70 uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
