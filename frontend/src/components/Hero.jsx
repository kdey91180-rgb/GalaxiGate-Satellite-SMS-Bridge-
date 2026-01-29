import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-brand-dark/60 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent z-10"></div>
                <iframe
                    className="w-full h-full object-cover scale-150 pointer-events-none opacity-60"
                    src="https://www.youtube.com/embed/4OglXLvR_hk?autoplay=1&mute=1&controls=0&loop=1&playlist=4OglXLvR_hk&playsinline=1&showinfo=0&rel=0"
                    title="Background Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    style={{ border: 'none' }}
                ></iframe>
            </div>

            <div className="container mx-auto px-6 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight drop-shadow-2xl">
                        GalaxiGate
                    </h1>
                    <p className="text-xl md:text-2xl text-brand-gray max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                        Gateway to communication beyond networks
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/dashboard" className="btn-primary w-full sm:w-auto text-lg px-10 hover:scale-105 transition-transform duration-300 ring-2 ring-brand-primary/50 ring-offset-2 ring-offset-brand-dark flex items-center justify-center">
                            Start Support from ₹99
                        </Link>
                        <a href="https://youtu.be/QFLsXTlJCK0" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2 group backdrop-blur-md bg-white/5 border-white/20 hover:bg-white/10">
                            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-secondary group-hover:text-brand-dark transition-colors duration-300">
                                <Play size={14} fill="currentColor" />
                            </span>
                            Watch Video
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-gray/50 hover:text-white transition-colors cursor-pointer"
                onClick={() => document.getElementById('story').scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gray/50 to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
