'use client';

import { motion } from 'framer-motion';
import { CornerBracket } from './CornerBracket';

const materials = [
  { name: 'GAF Timberline', category: 'Architectural Shingles', color: '#8B6F47' },
  { name: 'CertainTeed', category: 'Premium Shingles', color: '#A08638' },
  { name: 'Owens Corning', category: 'Durable Shingles', color: '#6B5436' },
  { name: 'Malarkey Roofing', category: 'Eco-Friendly Shingles', color: '#4A3A25' },
  { name: 'Standing Seam Metal', category: 'Metal Roofing', color: '#7A7A7A' },
  { name: 'Clay & Concrete Tile', category: 'Premium Tiles', color: '#B8956A' },
  { name: 'Synthetic Slate', category: 'Luxury Slate', color: '#3A3A38' },
  { name: 'TPO & EPDM', category: 'Flat Roof Systems', color: '#909089' },
];

export function Materials() {
  return (
    <section className="py-24 bg-background grid-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="font-barlow text-sm text-accent tracking-widest uppercase">PREMIUM MATERIALS</span>
          <h2 className="font-display text-5xl md:text-6xl font-900 text-heading mb-4 tracking-tight uppercase">
            Top-Tier Brands
          </h2>
          <p className="font-body text-text/70 max-w-2xl">
            We exclusively use industry-leading materials from trusted manufacturers.
          </p>
        </motion.div>

        {/* Materials Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {materials.map((material, index) => (
            <motion.div
              key={material.name}
              className="group relative h-40 overflow-hidden cursor-pointer card-hover border-2 border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              {/* Background with material color */}
              <div
                className="absolute inset-0 opacity-20"
                style={{ backgroundColor: material.color }}
              />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-center items-center p-4 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <h3 className="font-barlow text-sm font-600 text-heading tracking-wide uppercase">{material.name}</h3>
                  <p className="font-body text-xs text-text/60">{material.category}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-3 border-2 border-accent text-accent font-barlow font-600 text-sm tracking-widest uppercase hover:bg-accent hover:text-background transition-all duration-300">
            View Material Specs
          </button>
        </motion.div>
      </div>
    </section>
  );
}
