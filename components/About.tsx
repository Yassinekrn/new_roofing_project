"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const milestones = [
    {
        year: "2004",
        description: "Founded in Staten Island. First residential project.",
    },
    { year: "2008", description: "First commercial waterproofing contract." },
    { year: "2015", description: "Expanded to New Jersey market." },
    { year: "2019", description: "200+ projects milestone reached." },
    {
        year: "2021",
        description:
            "Introduced green building and sustainable construction systems.",
    },
    {
        year: "2024",
        description: "500+ projects. 4.9★ on Google. 45 team members.",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
};

const stagger = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.08 },
    },
};

export function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-background grid-pattern"
        >
            {/* Part A: About Us Block */}
            <div className="py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 items-center">
                        {/* Left Column — The Story */}
                        <motion.div
                            className="space-y-6"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeUp}
                        >
                            <span className="font-barlow text-xs text-muted tracking-widest uppercase">
                                About Us
                            </span>

                            <div className="space-y-2">
                                <motion.h2
                                    className="font-display text-6xl md:text-7xl font-900 text-heading leading-[0.95] uppercase"
                                    variants={fadeUp}
                                >
                                    Built on Craft.
                                </motion.h2>
                                <motion.h2
                                    className="font-display text-6xl md:text-7xl font-900 text-heading leading-[0.95] uppercase"
                                    variants={fadeUp}
                                >
                                    Not Compromise.
                                </motion.h2>
                            </div>

                            <motion.div
                                className="w-[60px] h-[2px] bg-accent"
                                variants={fadeUp}
                            />

                            <motion.div
                                className="space-y-4"
                                variants={stagger}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                            >
                                <motion.p
                                    className="font-body text-base leading-relaxed text-text"
                                    variants={fadeUp}
                                >
                                    Since 2004, we've operated on a single
                                    principle — every structure we build is a
                                    construction someone depends on.
                                    Family-owned, locally rooted, and built from
                                    the ground up on Staten Island. We don't
                                    subcontract our reputation.
                                </motion.p>
                                <motion.p
                                    className="font-body text-base leading-relaxed text-text"
                                    variants={fadeUp}
                                >
                                    From a single repair to full commercial
                                    builds, our process is the same: assess with
                                    honesty, execute with precision, and stand
                                    behind every brick we lay.
                                </motion.p>
                            </motion.div>

                            <motion.div
                                className="flex gap-4 pt-2"
                                variants={stagger}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    className="border border-border px-4 py-2 text-xs font-body text-text tracking-wide uppercase"
                                    variants={fadeUp}
                                >
                                    Licensed & Insured
                                </motion.div>
                                <motion.div
                                    className="border border-border px-4 py-2 text-xs font-body text-text tracking-wide uppercase"
                                    variants={fadeUp}
                                >
                                    Est. 2004
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Right Column — Image */}
                        <motion.div
                            className="relative h-[500px] overflow-hidden"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <Image
                                src="/placeholder.svg"
                                alt="Pinnacle Construction team at work"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Diagonal accent bar */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3/5 bg-accent" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Part B: Our Journey Timeline */}
        </section>
    );
}
