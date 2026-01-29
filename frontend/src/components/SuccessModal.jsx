import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { Check, Lock, Globe, Mail, Bell, Truck, Satellite } from 'lucide-react';

const SuccessModal = ({ isOpen, onClose, tier }) => {
    useEffect(() => {
        if (isOpen) {
            // Trigger confetti on open
            const duration = 3 * 1000;
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

            const randomInRange = (min, max) => Math.random() * (max - min) + min;

            const interval = setInterval(function () {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                const particleCount = 50 * (timeLeft / duration);
                // since particles fall down, start a bit higher than random
                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
                confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
            }, 250);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    // Fallback if no tier is passed, though flow ensures there usually is one
    const planName = tier?.title || "Community Edition – 2 Units";
    const amount = tier?.price || "₹45,999";
    const delivery = tier?.deliveryDate || "April 2026";
    const supportId = "GG-SUP-2026-" + Math.floor(100 + Math.random() * 900);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[80]"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 50 }}
                        className="fixed inset-0 z-[90] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="w-full max-w-lg bg-[#0F0F1A] border border-brand-primary/20 rounded-3xl shadow-[0_0_50px_rgba(138,60,224,0.2)] pointer-events-auto relative overflow-hidden flex flex-col items-center text-center p-8">

                            {/* Ambient Glows - Soft Green + Purple */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-green-500/10 blur-[80px] rounded-full pointer-events-none"></div>
                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[80px] rounded-full pointer-events-none"></div>

                            {/* Success Animation Icon */}
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                                className="w-20 h-20 bg-gradient-to-tr from-green-400 to-brand-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(74,222,128,0.4)] mb-6 relative z-10"
                            >
                                <Check size={40} className="text-white" strokeWidth={3} />
                                {/* Satellite/Signal Rings */}
                                <div className="absolute inset-0 rounded-full border border-white/30 animate-ping"></div>
                                <div className="absolute -inset-2 rounded-full border border-green-400/20 animate-pulse"></div>
                            </motion.div>

                            {/* Main Message */}
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 relative z-10">
                                Thank You for Supporting <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-brand-primary">GalaxiGate 🚀</span>
                            </h2>
                            <p className="text-brand-gray text-sm mb-8 max-w-sm relative z-10">
                                Your support helps bring emergency satellite communication to places with no network access.
                            </p>

                            {/* Support Summary Card */}
                            <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 mb-8 text-left relative z-10">
                                <h3 className="text-xs font-bold text-brand-gray uppercase tracking-wider mb-4 border-b border-white/5 pb-2">Support Summary</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Supported Plan:</span>
                                        <span className="text-white font-medium text-right">{planName}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Amount:</span>
                                        <span className="text-green-400 font-bold">{amount}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Est. Delivery:</span>
                                        <span className="text-brand-secondary">{delivery}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Support ID:</span>
                                        <span className="text-brand-primary font-mono text-xs bg-brand-primary/10 px-2 py-0.5 rounded">{supportId}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Next Steps */}
                            <div className="w-full text-left mb-8 relative z-10">
                                <h3 className="text-xs font-bold text-brand-gray uppercase tracking-wider mb-4">Next Steps</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brand-secondary shrink-0">
                                            <Mail size={14} />
                                        </div>
                                        <p className="text-sm text-gray-300">Confirmation email sent to your registered email</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brand-secondary shrink-0">
                                            <Bell size={14} />
                                        </div>
                                        <p className="text-sm text-gray-300">You’ll receive project updates and milestones</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brand-secondary shrink-0">
                                            <Truck size={14} />
                                        </div>
                                        <p className="text-sm text-gray-300">Shipping details will be shared before delivery</p>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="w-full relative z-10">
                                <Link
                                    to="/"
                                    onClick={onClose}
                                    className="w-full btn-primary py-4 text-center font-bold text-lg rounded-xl shadow-[0_0_30px_rgba(138,60,224,0.4)] hover:shadow-[0_0_50px_rgba(138,60,224,0.6)] flex items-center justify-center mb-6"
                                >
                                    Back to Home
                                </Link>
                            </div>

                            {/* Trust Footer */}
                            <div className="w-full flex flex-col gap-2 relative z-10 opacity-70">
                                <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 uppercase tracking-wide">
                                    <Lock size={10} /> Demo support flow – No payment processed
                                </div>
                                <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 uppercase tracking-wide">
                                    <Satellite size={10} /> GalaxiGate is a prototype project for demonstration
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default SuccessModal;
