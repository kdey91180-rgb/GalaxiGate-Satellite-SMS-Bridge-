import React from 'react';
import { motion } from 'framer-motion';
import { Check, Crown } from 'lucide-react';

const RewardCard = ({
    title,
    price,
    retailPrice,
    saveAmount,
    features,
    highlight,
    image,
    deliveryDate,
    onPledge,
    buttonLabel = "Support This Project",
    backers,
    pricingOptions
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${highlight
                ? 'bg-gradient-to-b from-brand-primary/10 to-brand-dark border-brand-primary shadow-[0_0_30px_rgba(162,89,255,0.15)]'
                : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
        >
            {highlight && (
                <div className="absolute top-0 right-0 z-10 bg-brand-primary text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl shadow-lg shadow-brand-primary/40 tracking-wider uppercase flex items-center gap-1">
                    <Crown size={12} fill="currentColor" /> Most Popular
                </div>
            )}

            <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden bg-black/20">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                        <span className="bg-brand-secondary text-brand-dark text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wide">
                            {saveAmount}
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6 md:p-8 flex flex-col">
                    <div className="mb-4">
                        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                        {pricingOptions && pricingOptions.length > 0 ? (
                            <div className="flex flex-col gap-2 mt-3">
                                {pricingOptions.map((opt, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <span className="text-2xl font-bold text-brand-primary">{opt.price}</span>
                                        <span className="text-sm font-bold text-[#00DDA2] bg-[#00DDA2]/10 px-2 py-0.5 rounded">{opt.claimed} claimed</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex items-baseline gap-3">
                                <span className="text-3xl font-bold text-brand-primary">{price}</span>
                                {retailPrice && <span className="text-sm text-brand-gray line-through decoration-white/30">{retailPrice}</span>}
                                {backers && <span className="text-sm font-bold text-[#00DDA2] bg-[#00DDA2]/10 px-2 py-0.5 rounded ml-auto md:ml-0">{backers} claimed</span>}
                            </div>
                        )}
                    </div>

                    <div className="w-full h-[1px] bg-white/10 mb-6"></div>

                    <ul className="mb-6 space-y-3 flex-grow">
                        <p className="text-sm text-brand-gray uppercase tracking-wider mb-2 font-semibold">Includes:</p>
                        {features.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-brand-gray/90 text-sm">
                                <Check className={`w-4 h-4 shrink-0 mt-0.5 ${highlight ? 'text-brand-primary' : 'text-brand-secondary'}`} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto pt-4 border-t border-white/5">
                        <div className="flex items-center justify-between mb-4 text-xs text-brand-gray/60">
                            <span>Estimated Delivery</span>
                            <span className="text-white font-medium">{deliveryDate}</span>
                        </div>
                        <button
                            onClick={onPledge}
                            className={`w-full py-3.5 rounded-xl font-bold transition-all duration-300 relative overflow-hidden ${highlight
                                ? 'bg-brand-primary text-white hover:bg-[#8A3CE0] shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40'
                                : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                {buttonLabel}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default RewardCard;
