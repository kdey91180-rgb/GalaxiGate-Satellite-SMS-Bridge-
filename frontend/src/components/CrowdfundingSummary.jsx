import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Check } from 'lucide-react';

const CrowdfundingSummary = () => {
    const [isFollowing, setIsFollowing] = useState(false);

    return (
        <section className="bg-brand-dark/50 border-y border-white/5 backdrop-blur-sm relative z-20">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

                    {/* Stats Grid - optimized for mobile */}
                    <div className="grid grid-cols-2 md:flex items-center gap-x-8 gap-y-6 w-full lg:w-auto">

                        <div className="flex items-center gap-3">
                            <span className="bg-brand-primary/20 text-brand-primary p-2 rounded-full hidden sm:flex">
                                <Users size={20} />
                            </span>
                            <div>
                                <p className="text-xs text-brand-gray font-medium uppercase tracking-wider">Backers</p>
                                <h3 className="text-xl md:text-2xl font-bold text-white">7</h3>
                            </div>
                        </div>

                        <div className="hidden md:block h-12 w-px bg-white/10"></div>

                        <div className="flex items-center gap-3">
                            <span className="bg-brand-secondary/20 text-brand-secondary p-2 rounded-full hidden sm:flex">
                                <Heart size={20} />
                            </span>
                            <div className="flex flex-col items-start gap-1">
                                <p className="text-xs text-brand-gray font-medium uppercase tracking-wider">92 Following</p>
                                <button
                                    onClick={() => setIsFollowing(!isFollowing)}
                                    className={`text-xs font-bold py-1.5 px-4 rounded-full flex items-center gap-1.5 transition-all duration-300 ${isFollowing ? 'bg-brand-success/20 text-[#00DDA2]' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                                >
                                    {isFollowing ? (
                                        <>
                                            <Check size={12} />
                                            Following
                                        </>
                                    ) : (
                                        <>
                                            <Heart size={12} className={isFollowing ? 'fill-current' : ''} />
                                            Follow
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="h-px lg:h-12 w-full lg:w-px bg-white/10 hidden lg:block"></div>

                    <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center w-full lg:w-auto text-left lg:text-right gap-4">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#00DDA2] animate-pulse"></span>
                            <span className="text-[#00DDA2] font-semibold text-sm uppercase tracking-wide">Pledge Manager Open</span>
                        </div>

                        <div className="flex flex-col items-end">
                            <p className="text-brand-gray text-xs hidden sm:block mb-1">Everyone can now pledge.</p>
                            <button className="text-brand-primary hover:text-white font-semibold transition-colors text-sm flex items-center gap-1 group whitespace-nowrap">
                                View Summary <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                            </button>
                        </div>
                    </div>

                </div>

                <div className="w-full bg-white/5 h-1.5 rounded-full mt-6 overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-brand-primary to-[#00DDA2]"
                    ></motion.div>
                </div>
            </div>
        </section>
    );
};

export default CrowdfundingSummary;
