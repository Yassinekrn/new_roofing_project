"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const portfolioItems = [
    {
        title: "Modern Villa Construction",
        location: "Beverly Hills, CA",
        image: "/placeholder.svg",
        description:
            "Luxury custom home built with contemporary architecture and premium finishes",
    },
    {
        title: "Commercial Office Complex",
        location: "Downtown LA",
        image: "/placeholder.svg",
        description:
            "Multi-story commercial development completed on schedule and within budget",
    },
    {
        title: "Industrial Manufacturing Facility",
        location: "San Francisco, CA",
        image: "/placeholder.svg",
        description:
            "Large-scale industrial construction with advanced structural engineering",
    },
    {
        title: "Modern Penthouse Development",
        location: "Malibu, CA",
        image: "/placeholder.svg",
        description:
            "High-end residential project featuring innovative design and smart systems",
    },
    {
        title: "Luxury Resort Renovation",
        location: "Lake Tahoe, CA",
        image: "/placeholder.svg",
        description:
            "Comprehensive renovation and expansion completed during active operations",
    },
];

export function Portfolio() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    useEffect(() => {
        if (!autoplay) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [autoplay]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setAutoplay(false);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prev) =>
                (prev - 1 + portfolioItems.length) % portfolioItems.length,
        );
        setAutoplay(false);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
        setAutoplay(false);
    };

    const current = portfolioItems[currentIndex];

    return (
        <section
            id="portfolio"
            className="py-24 bg-background grid-pattern relative overflow-hidden"
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
                        PORTFOLIO
                    </span>
                    <h2 className="font-display text-5xl md:text-6xl font-900 text-heading tracking-tight uppercase">
                        Showcase of Excellence
                    </h2>
                </motion.div>

                {/* Main Carousel */}
                <div className="relative mb-12">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            className="relative h-96 md:h-[500px] overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Image
                                src={current.image}
                                alt={current.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                >
                                    <p className="font-barlow text-accent text-sm mb-2 tracking-widest uppercase">
                                        {current.location}
                                    </p>
                                    <h3 className="font-display text-4xl md:text-5xl font-900 text-heading mb-4 tracking-wide uppercase">
                                        {current.title}
                                    </h3>
                                    <p className="font-body text-text/90 max-w-xl">
                                        {current.description}
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 border-2 border-accent text-accent hover:bg-accent hover:text-background flex items-center justify-center transition-all duration-300"
                        aria-label="Previous"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 border-2 border-accent text-accent hover:bg-accent hover:text-background flex items-center justify-center transition-all duration-300"
                        aria-label="Next"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Thumbnail Strip */}
                <div className="flex gap-4 overflow-x-auto pb-4 lg:pb-0 lg:justify-center">
                    {portfolioItems.map((item, index) => (
                        <motion.button
                            key={item.title}
                            onClick={() => goToSlide(index)}
                            className={`relative flex-shrink-0 w-24 h-24 md:w-32 md:h-32 overflow-hidden transition-all duration-300 border-2 ${
                                index === currentIndex
                                    ? "border-accent"
                                    : "border-border hover:border-accent"
                            }`}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                            />
                        </motion.button>
                    ))}
                </div>

                {/* Dot Navigation */}
                <div className="flex justify-center gap-3 mt-8">
                    {portfolioItems.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 border-2 ${
                                index === currentIndex
                                    ? "w-8 h-2 bg-accent border-accent"
                                    : "w-2 h-2 bg-transparent border-border hover:border-accent"
                            }`}
                            whileHover={{ scale: 1.2 }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
