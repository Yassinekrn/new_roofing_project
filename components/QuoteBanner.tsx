"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function QuoteBanner() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section
            ref={ref}
            className="relative py-32 bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: "url(/placeholder.svg)" }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-background/85" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                {/* Corner Brackets */}
                <motion.div
                    className="absolute -top-8 -left-8 w-12 h-12 border-l-2 border-t-2 border-accent-line"
                    style={{ y }}
                />
                <motion.div
                    className="absolute -bottom-8 -right-8 w-12 h-12 border-r-2 border-b-2 border-accent-line"
                    style={{ y: useTransform(y, (val) => -val) }}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative z-10 space-y-8"
                >
                    {/* Quote Text with Typographic Quotes */}
                    <blockquote className="font-serif text-3xl md:text-5xl text-heading leading-tight italic">
                        <span className="text-accent mr-1">&ldquo;</span>
                        Excellence isn&apos;t a destination—it&apos;s our
                        standard on every project, every time.
                        <span className="text-accent ml-1">&rdquo;</span>
                    </blockquote>

                    {/* Attribution */}
                    <div className="pt-4">
                        <p className="font-barlow text-accent text-lg font-600 tracking-widest uppercase">
                            Marcus Chen
                        </p>
                        <p className="font-body text-text/70 text-sm">
                            Founder & Head Architect, Pinnacle Construction Co.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
