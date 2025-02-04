import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Zap } from 'lucide-react';

const features = [
    {
        icon: <Shield className="w-8 h-8" />,
        title: "Exclusive Access",
        description: "Get early access to limited edition Batman comics and exclusive artwork."
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Community",
        description: "Join discussions with fellow Batman enthusiasts and comic collectors."
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Special Events",
        description: "Participate in virtual meet-ups and special comic release events."
    }
];

const JoinUs = () => {
    return (
        <section className="bg-black text-white py-24">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-mono font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
                        Join the Dark Knight's Legion
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Become part of an exclusive community of Batman comic enthusiasts. Get access to premium content, special events, and connect with fellow fans.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                            <div className="relative bg-white-900 p-8 rounded-lg">
                                <div className="text-red-500 mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-mono font-bold mb-3 text-red-400">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="max-w-md mx-auto"
                >
                    {/*<div className="relative">*/}
                    {/*    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>*/}
                    {/*    <form className="relative bg-white-900 p-8 rounded-lg">*/}
                    {/*        <div className="mb-6">*/}
                    {/*            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">*/}
                    {/*                Email Address*/}
                    {/*            </label>*/}
                    {/*            <input*/}
                    {/*                type="email"*/}
                    {/*                id="email"*/}
                    {/*                className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"*/}
                    {/*                placeholder="your@email.com"*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*        <button*/}
                    {/*            type="submit"*/}
                    {/*            className="w-full bg-gradient-to-r from-red-900 to-red-800 text-white font-mono py-3 px-6 rounded-lg hover:from-red-700 hover:to-red-900 transition-all duration-300 transform hover:-translate-y-1"*/}
                    {/*        >*/}
                    {/*            Join Now*/}
                    {/*        </button>*/}
                    {/*        <p className="text-gray-500 text-sm mt-4 text-center">*/}
                    {/*            By joining, you agree to our Terms of Service and Privacy Policy*/}
                    {/*        </p>*/}
                    {/*    </form>*/}
                    {/*</div>*/}
                </motion.div>
            </div>
        </section>
    );
};

export default JoinUs;