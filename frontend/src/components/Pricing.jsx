import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RewardCard from './RewardCard';
import PledgeModal from './PledgeModal';
import SuccessModal from './SuccessModal';
import ProductImage from '../assets/reward-headphones.png';
import StarterEditionImage from '../assets/starter-edition.jpg';
import CommunityEditionImage from '../assets/community-edition.jpg';
import RescuePackImage from '../assets/rescue-pack.jpg';

const Pricing = () => {
    const [selectedTier, setSelectedTier] = useState(null);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [confirmedTier, setConfirmedTier] = useState(null);

    const tiers = [
        {
            title: 'Starter Edition – Single Unit',
            saveAmount: 'Early Supporter Price',
            features: ['1× Satellite SMS Bridge Device', 'Emergency SMS Communication', 'Works without Internet', 'USB Power Cable', 'Basic User Guide', '1-Year Warranty'],
            highlight: false,
            image: StarterEditionImage,
            deliveryDate: 'April 2026',
            buttonLabel: '👉 Support This Project',
            pricingOptions: [
                { price: '₹786', claimed: '999' },
            ]
        },
        {
            title: 'Community Edition – 2 Units',
            saveAmount: 'Save 20%',
            features: ['2× Satellite SMS Bridge Devices', 'Ideal for villages / disaster teams', 'Works during network failures', 'Priority Updates', 'USB Cables', '1-Year Warranty'],
            highlight: true,
            image: CommunityEditionImage,
            deliveryDate: 'April 2026',
            buttonLabel: '👉 Support & Save More',
            pricingOptions: [
                { price: '₹1,999', claimed: '2,999' },
            ]
        },
        {
            title: 'Rescue Pack – 4 Units',
            saveAmount: 'Best Value',
            features: ['4× Satellite SMS Bridge Devices', 'For NGOs, rescue teams & remote areas', 'Reliable SMS during emergencies', 'Priority Support', '2-Year Warranty'],
            highlight: false,
            image: RescuePackImage,
            deliveryDate: 'April 2026',
            buttonLabel: '👉 Support Large-Scale Impact',
            pricingOptions: [
                { price: '₹7,499', claimed: '9,999' },
            ]
        },
    ];

    const handlePledge = (tier) => {
        setSelectedTier(tier);
    };

    const handleConfirmPledge = () => {
        setConfirmedTier(selectedTier);
        setSelectedTier(null);
        setIsSuccessOpen(true);
    };

    return (
        <section id="rewards" className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Choose Your Support Plan</h2>
                    <p className="text-brand-gray text-lg">Back us now to help bring this technology to life.</p>
                </div>

                <div className="flex flex-col gap-6 max-w-4xl mx-auto">
                    {tiers.map((tier, idx) => (
                        <RewardCard
                            key={idx}
                            {...tier}
                            onPledge={() => handlePledge(tier)}
                        />
                    ))}
                </div>
            </div>

            <PledgeModal
                isOpen={!!selectedTier}
                onClose={() => setSelectedTier(null)}
                tier={selectedTier}
                onConfirm={handleConfirmPledge}
            />

            <SuccessModal
                isOpen={isSuccessOpen}
                onClose={() => setIsSuccessOpen(false)}
                tier={confirmedTier}
            />
        </section>
    );
};

export default Pricing;
