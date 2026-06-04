"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CornerBracket } from "./CornerBracket";

const services = [
    {
        title: "Foundation Work",
        description: "Precision installation with premium materials",
        image: "/placeholder.svg",
    },
    {
        title: "Structural Repairs",
        description: "Expert diagnostics and precision repairs",
        image: "/placeholder.svg",
    },
    {
        title: "Waterproofing",
        description: "Complete water protection systems",
        image: "/placeholder.svg",
    },
    {
        title: "Drainage Solutions",
        description: "Custom drainage solutions",
        image: "/placeholder.svg",
    },
    {
        title: "Windows & Doors",
        description: "Premium installations and upgrades",
        image: "/placeholder.svg",
    },
    {
        title: "Emergency Services",
        description: "24/7 storm damage response",
        image: "/placeholder.svg",
    },
    {
        title: "Commercial Construction",
        description: "Durable commercial solutions",
        image: "/placeholder.svg",
    },
    {
        title: "Interior Finishing",
        description: "Full interior construction services",
        image: "/placeholder.svg",
    },
];

export function Services() {
    return (
        <section
            id="services"
            className="py-24 bg-light-bg diagonal-pattern relative"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="font-barlow text-sm text-accent tracking-widest uppercase">
                        OUR SERVICES
                    </span>
                    <h2 className="font-display text-5xl md:text-6xl font-900 text-heading mb-6 tracking-tight uppercase">
                        Complete Solutions
                    </h2>
                    <p className="font-body text-text/70 max-w-2xl">
                        From new construction to renovation, we deliver
                        precision across every construction service.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className="group relative h-80 overflow-hidden cursor-pointer card-hover border-2 border-light-border"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 overflow-hidden">
                                <motion.div
                                    className="w-full h-full"
                                    whileHover={{ opacity: 0.18 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover opacity-12"
                                    />
                                </motion.div>
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-light-surface" />

                            {/* Content */}
                            <div className="relative h-full flex flex-col justify-end p-6">
                                <h3 className="font-display text-xl font-900 text-bg uppercase tracking-wide mb-2">
                                    {service.title}
                                </h3>
                                <p className="font-body text-sm text-light-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
