import React from 'react';
import { motion } from 'framer-motion';
import SatelliteImg from '../assets/satellite.jpg';
import ProjectHardwareImg from '../assets/project-hardware.jpg';

const Story = () => {
    return (
        <section id="story" className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-1/4 -left-64 w-96 h-96 bg-brand-primary/10 rounded-full blur-[128px]"></div>
            <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[128px]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Communication without internet. <span className="text-gradient drop-shadow-[0_0_15px_rgba(162,89,255,0.4)]">Anywhere. Anytime</span>.
                    </h2>
                    <p className="text-lg md:text-xl text-brand-gray leading-relaxed font-light">
                        Satellite SMS Bridge enables message delivery using satellites when mobile networks and internet are unavailable. It is designed for emergencies, disasters, and remote areas.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-2 md:order-1"
                    >
                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl shadow-black/50 hover:bg-white/10 transition-colors duration-500">
                            <h3 className="text-2xl font-bold mb-4 text-brand-primary drop-shadow-lg">Problem We Solve</h3>
                            <p className="text-brand-gray mb-6 leading-relaxed">
                                During disasters and remote travel, mobile networks fail. People are unable to send SMS or contact help. Satellite SMS Bridge solves this problem.
                            </p>
                            <ul className="space-y-3">
                                {['No internet required', 'Works during network failure', 'Emergency-ready communication'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-white/90">
                                        <span className="w-5 h-5 rounded-full bg-brand-secondary/20 flex items-center justify-center text-brand-secondary shadow-[0_0_10px_rgba(243,208,59,0.2)]">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-1 md:order-2 relative"
                    >
                        <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-brand-dark relative group border border-white/5 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60 z-10 transition-opacity group-hover:opacity-40"></div>
                            {/* Replaced with local satellite image */}
                            <img
                                src={SatelliteImg}
                                alt="Satellite Communication"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute bottom-6 left-6 z-20">
                                <span className="bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/10">Global Coverage</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-brand-dark relative group border border-white/5 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60 z-10 transition-opacity group-hover:opacity-40"></div>
                            {/* Replaced with local project hardware image */}
                            <img
                                src={ProjectHardwareImg}
                                alt="Project Hardware Prototype"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute bottom-6 left-6 z-20">
                                <span className="bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/10">Project Hardware</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl shadow-black/50 hover:bg-white/10 transition-colors duration-500">
                            <h3 className="text-2xl font-bold mb-4 text-brand-secondary drop-shadow-lg">How Satellite SMS Bridge Works</h3>
                            <p className="text-brand-gray mb-6 leading-relaxed">
                                Messages are sent from the user device to a satellite through a bridge gateway. The satellite forwards the message to the receiver as SMS, even when cellular networks are down.
                            </p>
                            <button className="text-brand-secondary font-semibold hover:text-white transition-colors flex items-center gap-2 group">
                                Learn about our Tech <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Story;
