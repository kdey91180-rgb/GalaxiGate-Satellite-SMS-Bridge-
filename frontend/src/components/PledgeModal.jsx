import React from 'react';
import { X, Crown, Check, Shield, Globe, Lock, Smartphone, Mail, User, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PledgeModal = ({ isOpen, onClose, tier, onConfirm }) => {
    if (!tier) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop with blur */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60]"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 pointer-events-none"
                    >
                        {/* Glassmorphism Modal Card */}
                        <div className="w-full max-w-2xl bg-black/80 backdrop-blur-xl border border-brand-primary/30 rounded-3xl shadow-[0_0_50px_rgba(138,60,224,0.3)] pointer-events-auto flex flex-col max-h-[90vh] overflow-hidden text-white relative">

                            {/* Decorative Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/10 blur-[100px] rounded-full pointer-events-none"></div>

                            {/* Header */}
                            <div className="p-6 border-b border-white/10 relative z-10 flex justify-between items-start">
                                <div>
                                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-brand-primary">
                                        Support GalaxiGate
                                    </h2>
                                    <p className="text-brand-gray text-sm mt-1">
                                        Help bring satellite-based emergency communication to everyone.
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full hover:bg-white/10 text-brand-gray hover:text-white transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="overflow-y-auto p-6 space-y-8 relative z-10 custom-scrollbar">

                                {/* Selected Plan Section */}
                                <div className="bg-white/5 border border-brand-primary/30 rounded-2xl p-6 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="flex justify-between items-start gap-4 relative z-10">
                                        <div>
                                            {tier.highlight && (
                                                <div className="inline-flex items-center gap-1.5 bg-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full mb-2 border border-brand-primary/30">
                                                    <Crown size={12} fill="currentColor" /> Most Popular
                                                </div>
                                            )}
                                            <h3 className="text-xl font-bold text-white mb-1">{tier.title}</h3>
                                            <div className="flex items-center gap-2 text-brand-gray text-sm">
                                                <span>Est. Delivery:</span>
                                                <span className="text-brand-secondary">{tier.deliveryDate}</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-2xl font-bold text-brand-primary">{tier.price}</div>
                                            <div className="text-xs text-brand-gray line-through decoration-white/30">{tier.retailPrice}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                                {/* What You Receive Section */}
                                <div>
                                    <h4 className="text-sm font-bold text-brand-gray uppercase tracking-wider mb-4">What You Receive</h4>
                                    <ul className="space-y-3">
                                        {[
                                            `${tier.features[0]}`,
                                            "Emergency SMS communication without internet",
                                            "Works during network failures & disasters",
                                            "Priority updates for early supporters",
                                            "1-Year warranty"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                                <div className="mt-0.5 w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary shrink-0 border border-brand-primary/30">
                                                    <Check size={12} strokeWidth={3} />
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                                {/* Supporter Details Form */}
                                <div>
                                    <h4 className="text-sm font-bold text-brand-gray uppercase tracking-wider mb-4">Your Details</h4>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="relative group">
                                            <User className="absolute top-3.5 left-3.5 text-brand-gray w-4 h-4 group-focus-within:text-brand-primary transition-colors" />
                                            <input
                                                type="text"
                                                placeholder="Full Name"
                                                className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-brand-primary focus:shadow-[0_0_15px_rgba(138,60,224,0.3)] transition-all placeholder:text-gray-600"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <Mail className="absolute top-3.5 left-3.5 text-brand-gray w-4 h-4 group-focus-within:text-brand-primary transition-colors" />
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-brand-primary focus:shadow-[0_0_15px_rgba(138,60,224,0.3)] transition-all placeholder:text-gray-600"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <Smartphone className="absolute top-3.5 left-3.5 text-brand-gray w-4 h-4 group-focus-within:text-brand-primary transition-colors" />
                                            <input
                                                type="tel"
                                                placeholder="Phone Number"
                                                className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-brand-primary focus:shadow-[0_0_15px_rgba(138,60,224,0.3)] transition-all placeholder:text-gray-600"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <MapPin className="absolute top-3.5 left-3.5 text-brand-gray w-4 h-4 group-focus-within:text-brand-primary transition-colors" />
                                            <input
                                                type="text"
                                                placeholder="Country"
                                                className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-brand-primary focus:shadow-[0_0_15px_rgba(138,60,224,0.3)] transition-all placeholder:text-gray-600"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer / Actions */}
                            <div className="p-6 border-t border-white/10 bg-black/40 relative z-10 backdrop-blur-md">
                                <button
                                    onClick={() => {
                                        onClose();
                                        onConfirm();
                                    }}
                                    className="w-full btn-primary py-4 text-lg font-bold shadow-[0_0_30px_rgba(138,60,224,0.4)] hover:shadow-[0_0_50px_rgba(138,60,224,0.6)] mb-3 relative overflow-hidden group"
                                >
                                    <span className="relative z-10">Confirm Support</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                </button>
                                <p className="text-center text-xs text-brand-gray mb-6">
                                    This is a demo support flow – no real payment required.
                                </p>

                                <div className="flex flex-wrap justify-center gap-4 sm:gap-8 opacity-70">
                                    <div className="flex items-center gap-1.5 text-[10px] text-brand-gray uppercase tracking-wider font-medium">
                                        <Lock size={12} className="text-brand-primary" /> Secure Support Flow
                                    </div>
                                    <div className="flex items-center gap-1.5 text-[10px] text-brand-gray uppercase tracking-wider font-medium">
                                        <Globe size={12} className="text-brand-secondary" /> Satellite-based Communication
                                    </div>
                                    <div className="flex items-center gap-1.5 text-[10px] text-brand-gray uppercase tracking-wider font-medium">
                                        <Shield size={12} className="text-brand-primary" /> Disaster-Ready Technology
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default PledgeModal;
