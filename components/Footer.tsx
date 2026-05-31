'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const footerLinks = [
  {
    title: 'Services',
    links: [
      { label: 'New Installation', href: '#services' },
      { label: 'Repairs & Maintenance', href: '#services' },
      { label: 'Storm Damage', href: '#services' },
      { label: 'Commercial Solutions', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Testimonials', href: '#' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'Get a Free Estimate', href: '#contact' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-primary/10 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="font-bebas text-2xl text-primary tracking-wider block">
              PINNACLE
            </Link>
            <p className="font-dm text-foreground/70 text-sm leading-relaxed">
              Premium roofing solutions for 20+ years. Creating architectural statements that protect your legacy.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {['Facebook', 'Instagram', 'LinkedIn', 'Twitter'].map((social) => (
                <button
                  key={social}
                  className="w-10 h-10 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-xs font-dm flex items-center justify-center"
                  aria-label={social}
                >
                  {social.charAt(0)}
                </button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-bebas text-foreground mb-4 tracking-wide">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-dm text-sm text-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8" />

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="font-dm text-sm text-foreground/60 text-center md:text-left">
            © 2024 Pinnacle Roofing Co. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex gap-6">
            <Link href="#" className="font-dm text-sm text-foreground/60 hover:text-primary transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="font-dm text-sm text-foreground/60 hover:text-primary transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="#" className="font-dm text-sm text-foreground/60 hover:text-primary transition-colors duration-300">
              Accessibility
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-primary/5 rounded-full blur-3xl -z-10" />
    </footer>
  );
}
