"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle, Loader2 } from "lucide-react";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone must be at least 10 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    service: z.string().min(1, "Please select a service"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
    {
        icon: Phone,
        label: "Phone",
        value: "(555) 123-4567",
        href: "tel:5551234567",
    },
    {
        icon: Mail,
        label: "Email",
        value: "hello@pinnaclebuilds.com",
        href: "mailto:hello@pinnaclebuilds.com",
    },
    {
        icon: MapPin,
        label: "Office",
        value: "Los Angeles, CA 90001",
        href: "#",
    },
];

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form data:", data);
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 3000);
        setIsSubmitting(false);
    };

    return (
        <section
            id="contact"
            className="py-24 bg-light-bg diagonal-pattern relative overflow-hidden"
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
                    <span className="font-barlow text-sm text-bg tracking-widest uppercase">
                        GET IN TOUCH
                    </span>
                    <h2 className="font-display text-5xl md:text-6xl font-900 text-bg mb-4 tracking-tight uppercase">
                        Ready to Build Your Project?
                    </h2>
                    <p className="font-body text-light-muted max-w-2xl">
                        Contact us today for a free consultation and quote. Our
                        team is ready to bring your construction vision to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Contact Info Cards */}
                    {contactInfo.map((info, index) => {
                        const Icon = info.icon;
                        return (
                            <motion.a
                                key={info.label}
                                href={info.href}
                                className="bg-light-surface border-2 border-light-border p-6 card-hover cursor-pointer group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <Icon className="w-8 h-8 text-bg mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <p className="font-barlow text-lg font-600 text-bg mb-2 uppercase tracking-wide">
                                    {info.label}
                                </p>
                                <p className="font-body text-light-muted">
                                    {info.value}
                                </p>
                            </motion.a>
                        );
                    })}
                </div>

                {/* Form */}
                <motion.div
                    className="max-w-2xl mx-auto bg-light-surface border-2 border-light-border p-8 md:p-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {isSuccess ? (
                        <motion.div
                            className="flex flex-col items-center justify-center py-12 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <CheckCircle size={48} className="text-bg mb-6" />
                            <h3 className="font-display text-3xl font-900 text-bg mb-2">
                                Message Sent.
                            </h3>
                            <p className="font-body text-light-muted mb-8">
                                We&apos;ll be in touch within the hour.
                            </p>
                            <button
                                onClick={() => {
                                    setIsSuccess(false);
                                    reset();
                                }}
                                className="font-body text-bg hover:text-accent-blue transition-colors duration-300 underline"
                            >
                                Send Another Message
                            </button>
                        </motion.div>
                    ) : (
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            {/* Name & Email Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name Field */}
                                <div>
                                    <label className="block font-body text-xs text-bg mb-2 uppercase tracking-wide font-600">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        {...register("name")}
                                        className="w-full px-4 py-3 bg-light-surface border-2 border-light-border text-bg placeholder-light-muted focus:outline-none focus:border-bg transition-colors duration-300"
                                        placeholder="Your name"
                                    />
                                    {errors.name && (
                                        <p className="text-red-600 text-xs mt-1 font-body">
                                            {errors.name.message}
                                        </p>
                                    )}
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label className="block font-body text-xs text-bg mb-2 uppercase tracking-wide font-600">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        {...register("email")}
                                        className="w-full px-4 py-3 bg-light-surface border-2 border-light-border text-bg placeholder-light-muted focus:outline-none focus:border-bg transition-colors duration-300"
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && (
                                        <p className="text-red-600 text-xs mt-1 font-body">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Phone & Service Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Phone Field */}
                                <div>
                                    <label className="block font-body text-xs text-bg mb-2 uppercase tracking-wide font-600">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        {...register("phone")}
                                        className="w-full px-4 py-3 bg-light-surface border-2 border-light-border text-bg placeholder-light-muted focus:outline-none focus:border-bg transition-colors duration-300"
                                        placeholder="(555) 123-4567"
                                    />
                                    {errors.phone && (
                                        <p className="text-red-600 text-xs mt-1 font-body">
                                            {errors.phone.message}
                                        </p>
                                    )}
                                </div>

                                {/* Service Dropdown */}
                                <div>
                                    <label className="block font-body text-xs text-bg mb-2 uppercase tracking-wide font-600">
                                        Service Type
                                    </label>
                                    <select
                                        {...register("service")}
                                        className="w-full px-4 py-3 bg-light-surface border-2 border-light-border text-bg focus:outline-none focus:border-bg transition-colors duration-300"
                                    >
                                        <option value="">
                                            Select a service
                                        </option>
                                        <option value="installation">
                                            New Construction
                                        </option>
                                        <option value="repair">
                                            Repair & Renovation
                                        </option>
                                        <option value="storm">
                                            Structural Work
                                        </option>
                                        <option value="commercial">
                                            Commercial
                                        </option>
                                        <option value="other">Other</option>
                                    </select>
                                    {errors.service && (
                                        <p className="text-red-600 text-xs mt-1 font-body">
                                            {errors.service.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Message Field */}
                            <div>
                                <label className="block font-body text-xs text-bg mb-2 uppercase tracking-wide font-600">
                                    Message
                                </label>
                                <textarea
                                    {...register("message")}
                                    rows={5}
                                    className="w-full px-4 py-3 bg-light-surface border-2 border-light-border text-bg placeholder-light-muted focus:outline-none focus:border-bg transition-colors duration-300 resize-none"
                                    placeholder="Tell us about your project..."
                                />
                                {errors.message && (
                                    <p className="text-red-600 text-xs mt-1 font-body">
                                        {errors.message.message}
                                    </p>
                                )}
                            </div>

                            {/* Error Message */}
                            {error && (
                                <motion.div
                                    className="p-4 bg-red-100 border-2 border-red-300 text-red-700"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <p className="font-body text-sm">
                                        {error}{" "}
                                        <a
                                            href="tel:5551234567"
                                            className="underline hover:no-underline"
                                        >
                                            Call us at (555) 123-4567
                                        </a>
                                        .
                                    </p>
                                </motion.div>
                            )}

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-8 py-4 bg-bg text-light-surface font-barlow font-600 text-sm uppercase tracking-widest border-2 border-bg hover:bg-transparent hover:text-bg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {isSubmitting && (
                                    <Loader2
                                        size={18}
                                        className="animate-spin"
                                    />
                                )}
                                {isSubmitting ? "Sending..." : "Send Inquiry"}
                            </motion.button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
