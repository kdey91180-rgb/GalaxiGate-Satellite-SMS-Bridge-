import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 bg-black border-t border-white/10">
            <div className="container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <span className="text-2xl font-bold text-white mb-2 block">GalaxiGate</span>
                    <p className="text-brand-gray text-sm">
                        © 2026 GalaxiGate Audio. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-8">
                    <a href="#" className="text-brand-gray hover:text-white transition-colors text-sm">Privacy Policy</a>
                    <a href="#" className="text-brand-gray hover:text-white transition-colors text-sm">Terms of Service</a>
                    <a href="#" className="text-brand-gray hover:text-white transition-colors text-sm">Support</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
