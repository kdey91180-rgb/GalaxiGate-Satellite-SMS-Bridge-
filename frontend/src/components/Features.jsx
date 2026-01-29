import React from 'react';
import { motion } from 'framer-motion';
import { Battery, Cpu, Globe, MapPin, MessageSquare, Shield } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Globe className="w-8 h-8 text-brand-primary drop-shadow-[0_0_8px_rgba(162,89,255,0.5)]" />,
            title: 'Satellite Communication Module',
            desc: 'Enables SMS transmission via satellite when cellular networks are unavailable.',
        },
        {
            icon: <Cpu className="w-8 h-8 text-brand-secondary drop-shadow-[0_0_8px_rgba(243,208,59,0.5)]" />,
            title: 'Wireless Controller (ESP32 / MCU)',
            desc: 'Manages message processing, routing, and communication control.',
        },
        {
            icon: <Battery className="w-8 h-8 text-brand-primary drop-shadow-[0_0_8px_rgba(162,89,255,0.5)]" />,
            title: 'Rechargeable Power System',
            desc: 'High-capacity Li-ion battery for extended operation during emergencies.',
        },
        {
            icon: <MapPin className="w-8 h-8 text-brand-secondary drop-shadow-[0_0_8px_rgba(243,208,59,0.5)]" />,
            title: 'GPS Module',
            desc: 'Provides real-time location data for emergency and rescue messaging.',
        },
        {
            icon: <MessageSquare className="w-8 h-8 text-brand-primary drop-shadow-[0_0_8px_rgba(162,89,255,0.5)]" />,
            title: 'SMS Encoding & Transmission',
            desc: 'Text messages are encoded and transmitted securely via satellite links.',
        },
        {
            icon: <Shield className="w-8 h-8 text-brand-secondary drop-shadow-[0_0_8px_rgba(243,208,59,0.5)]" />,
            title: 'Emergency-Ready Design',
            desc: 'Designed for disaster zones, remote areas, and network-failure scenarios.',
        },
    ];

    return (
        <section id="features" className="py-24 bg-[#0F0F1A] relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-brand-dark/50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full bg-gradient-to-r from-brand-primary/5 via-transparent to-brand-secondary/5 blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Specifications</h2>
                    <p className="text-brand-gray text-lg">Engineered for reliable satellite-based SMS communication.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-300 group cursor-default backdrop-blur-sm hover:border-white/10 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1"
                        >
                            <div className="bg-brand-dark w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/20 border border-white/5">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{feature.title}</h3>
                            <p className="text-brand-gray text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-brand-gray/80 text-sm font-medium tracking-wide border-t border-white/5 pt-8 inline-block px-12">
                        Designed as a low-cost, reliable communication bridge for critical situations.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Features;
