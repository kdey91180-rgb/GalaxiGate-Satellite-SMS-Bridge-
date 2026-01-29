import React from 'react';
import { motion } from 'framer-motion';
import { Download, MessageCircle, Home, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-primary selection:text-white">
            {/* Header */}
            <header className="border-b border-white/10 bg-brand-dark/50 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-white tracking-tight">Supporter Dashboard</h1>
                        <p className="text-sm text-gray-400">Thank you for supporting satellite-based emergency communication.</p>
                    </div>
                    <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                        <Home className="w-6 h-6" />
                    </Link>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">

                {/* Welcome Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8"
                >
                    <h2 className="text-xl md:text-2xl font-semibold mb-2">Welcome, Supporter 👋</h2>
                    <p className="text-gray-300">Your contribution is helping connect people beyond networks. We're thrilled to have you on this journey with us.</p>
                </motion.div>

                {/* Support Summary Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8"
                >
                    <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-brand-primary" />
                        Contribution Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Plan</p>
                            <p className="font-medium text-lg">Community Edition – 2 Units</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Amount Supported</p>
                            <p className="font-medium text-lg">₹786</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Support ID</p>
                            <p className="font-medium text-lg font-mono">GG-SUP-2026-001</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Status</p>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                                Confirmed
                            </span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Estimated Delivery</p>
                            <p className="font-medium text-lg flex items-center gap-2">
                                <Clock className="w-4 h-4 text-brand-primary" />
                                April 2026
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Project Progress Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8"
                >
                    <h3 className="text-lg font-semibold mb-8">Project Timeline</h3>
                    <div className="relative">
                        {/* Progress Bar Background */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 hidden md:block"></div>

                        {/* Steps */}
                        <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-0">
                            {[
                                { label: 'Idea', status: 'completed' },
                                { label: 'Prototype', status: 'current' },
                                { label: 'Testing', status: 'upcoming' },
                                { label: 'Manufacturing', status: 'upcoming' },
                                { label: 'Shipping', status: 'upcoming' },
                            ].map((step, index) => (
                                <div key={step.label} className="flex md:flex-col items-center gap-4 md:gap-2">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 
                    ${step.status === 'completed' ? 'bg-brand-primary border-brand-primary text-black' :
                                            step.status === 'current' ? 'bg-brand-dark border-brand-primary text-brand-primary' :
                                                'bg-brand-dark border-white/20 text-gray-500'}
                   `}>
                                        {step.status === 'completed' ? <CheckCircle className="w-5 h-5" /> : <div className="w-2 h-2 rounded-full bg-current" />}
                                    </div>
                                    <span className={`text-sm font-medium ${step.status === 'upcoming' ? 'text-gray-500' : 'text-white'}`}>
                                        {step.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Updates Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h3 className="text-xl font-semibold mb-4">Recent Updates</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { text: "Prototype testing completed", date: "2 days ago", icon: <CheckCircle className="w-5 h-5 text-green-400" /> },
                            { text: "Disaster-use case validation ongoing", date: "1 week ago", icon: <Clock className="w-5 h-5 text-yellow-400" /> },
                            { text: "Next update scheduled soon", date: "Upcoming", icon: <MessageCircle className="w-5 h-5 text-blue-400" /> }
                        ].map((update, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors">
                                <div className="flex items-start gap-3">
                                    <div className="mt-1">{update.icon}</div>
                                    <div>
                                        <p className="font-medium text-white">{update.text}</p>
                                        <p className="text-xs text-gray-500 mt-1">{update.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-all border border-white/10 font-medium">
                        <Download className="w-5 h-5" />
                        Download Project Details
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-black px-6 py-3 rounded-xl transition-all font-semibold">
                        <MessageCircle className="w-5 h-5" />
                        Contact Support Team
                    </button>
                    <Link to="/" className="flex items-center justify-center gap-2 text-gray-400 hover:text-white px-6 py-3 transition-colors">
                        Back to Home
                    </Link>
                </div>

                {/* Footer Note */}
                <div className="text-center pt-12 pb-4">
                    <p className="text-xs text-gray-600">
                        This is a demonstration dashboard. No real payments or shipments are involved.
                    </p>
                </div>

            </main>
        </div>
    );
}

export default Dashboard;
