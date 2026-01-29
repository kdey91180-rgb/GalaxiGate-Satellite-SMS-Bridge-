import React from 'react';
import { motion } from 'framer-motion';
import { Satellite, Cpu, Battery, Code, Box, Info } from 'lucide-react';

const TechSpecs = () => {
    const specs = [
        {
            category: "Communication",
            icon: <Satellite className="text-brand-primary" size={24} />,
            details: [
                "Satellite-based SMS communication",
                "Works without internet or cellular networks",
                "Global coverage including remote areas",
                "Average latency: 20–60 seconds"
            ]
        },
        {
            category: "Hardware",
            icon: <Cpu className="text-brand-secondary" size={24} />,
            details: [
                "Low-power microcontroller (ESP32 / ARM-based)",
                "Satellite communication module (simulated)",
                "High-gain satellite antenna",
                "Emergency SOS button and LED indicators"
            ]
        },
        {
            category: "Power",
            icon: <Battery className="text-green-400" size={24} />,
            details: [
                "Rechargeable Li-ion battery",
                "5–7 days standby time",
                "USB Type-C charging",
                "Low-power sleep mode"
            ]
        },
        {
            category: "Software",
            icon: <Code className="text-blue-400" size={24} />,
            details: [
                "Embedded firmware (C / MicroPython)",
                "Web-based supporter dashboard",
                "Secure SMS routing via satellite gateway",
                "OTA update support (planned)"
            ]
        },
        {
            category: "Physical",
            icon: <Box className="text-orange-400" size={24} />,
            details: [
                "Handheld portable device",
                "Lightweight ABS enclosure",
                "Approx. 180g weight",
                "Designed for outdoor and emergency use"
            ]
        }
    ];

    return (
        <section id="specs" className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-secondary/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Technical Specifications</h2>
                    <p className="text-brand-gray text-lg">Under the hood of GalaxiGate.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {specs.map((spec, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group"
                        >
                            <div className="flex items-center gap-4 mb-4 border-b border-white/5 pb-4">
                                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                                    {spec.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{spec.category}</h3>
                            </div>
                            <ul className="space-y-3">
                                {spec.details.map((detail, dIdx) => (
                                    <li key={dIdx} className="flex items-start gap-2 text-brand-gray text-sm">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-primary/50 shrink-0"></div>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center opacity-60">
                    <p className="inline-flex items-center gap-2 text-xs text-brand-gray uppercase tracking-wider border border-white/10 px-4 py-2 rounded-full">
                        <Info size={14} />
                        Technical specifications represent a functional prototype for academic demonstration.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TechSpecs;
