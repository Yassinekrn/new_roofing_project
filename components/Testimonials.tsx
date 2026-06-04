"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "Homeowner, Beverly Hills",
        content:
            "Pinnacle transformed our aging roof into a beautiful architectural statement. The attention to detail was impeccable.",
        rating: 5,
    },
    {
        name: "David Thompson",
        role: "Property Manager",
        content:
            "Professional, punctual, and pristine. They completed our commercial project on time and within budget.",
        rating: 5,
    },
    {
        name: "Jennifer Rodriguez",
        role: "Homeowner, Malibu",
        content:
            "The team handled our storm damage with expertise and compassion. Insurance process was seamless.",
        rating: 5,
    },
    {
        name: "Robert Chen",
        role: "Corporate Executive",
        content:
            "Outstanding work on our office complex. Their premium materials and craftsmanship are unmatched.",
        rating: 5,
    },
    {
        name: "Michelle Anderson",
        role: "Historic Home Owner",
        content:
            "They understood the historical significance of our property and executed the restoration perfectly.",
        rating: 5,
    },
    {
        name: "James Wilson",
        role: "Resort Manager",
        content:
            "Managed our roof replacement while maintaining operations. Zero disruption, maximum professionalism.",
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-surface relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="font-barlow text-sm text-accent tracking-widest uppercase">
                        TESTIMONIALS
                    </span>
                    <h2 className="font-display text-5xl md:text-6xl font-900 text-heading mt-4 tracking-tight uppercase">
                        What Our Clients Say
                    </h2>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            className="relative bg-surface-2 p-6 border-2 border-border card-hover"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            {/* Quote Mark Background */}
                            <div className="absolute top-4 right-4 text-primary/10 text-4xl font-serif">
                                "
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: testimonial.rating }).map(
                                    (_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            className="fill-primary text-primary"
                                        />
                                    ),
                                )}
                            </div>

                            {/* Content */}
                            <p className="font-dm text-foreground/90 mb-6 leading-relaxed">
                                {testimonial.content}
                            </p>

                            {/* Author */}
                            <div>
                                <p className="font-bebas text-primary text-lg tracking-wide">
                                    {testimonial.name}
                                </p>
                                <p className="font-dm text-sm text-foreground/70">
                                    {testimonial.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Featured Testimonial */}
                <motion.div
                    className="relative bg-primary/5 border-2 border-primary/20 rounded-xl p-8 md:p-12 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-2xl mx-auto space-y-6">
                        {/* Big Quote */}
                        <div className="text-6xl text-primary/20 font-serif">
                            "
                        </div>

                        {/* Testimonial */}
                        <p className="font-playfair text-3xl md:text-4xl text-foreground leading-tight italic">
                            Pinnacle Construction isn't just a service—they're
                            partners in building what matters most.
                        </p>

                        {/* Star Rating */}
                        <div className="flex justify-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    size={24}
                                    className="fill-primary text-primary"
                                />
                            ))}
                        </div>

                        {/* Author */}
                        <div>
                            <p className="font-bebas text-primary text-xl tracking-wide">
                                Elizabeth Foster
                            </p>
                            <p className="font-dm text-foreground/70">
                                CEO, Foster Hospitality Group
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <button className="px-8 py-3 bg-primary text-primary-foreground font-dm font-semibold rounded hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
                        Start Your Project Today
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
