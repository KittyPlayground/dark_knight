import React from 'react';
import { motion } from 'framer-motion';
import batman from '../../assets/batman.jpeg';

const GothamAbout: React.FC = () => {
    return (
        <div className="relative min-h-screen bg-black text-white flex items-center justify-center">
            {/* Batman Background Image */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2 }}
            >
                <img
                    src={batman}
                    alt="Batman Background"
                    className="object-cover w-full h-full"
                />
            </motion.div>

            {/* Dark Overlay for contrast */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content Section */}
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
                {/* Batman Story Section */}
                <motion.div
                    className="max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <motion.h1
                        className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-red-600 mb-6"
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, type: 'spring' }}
                    >
                        Gotham's Vigilante
                    </motion.h1>
                    <motion.p
                        className="text-lg sm:text-xl md:text-2xl font-mono text-gray-300 mb-6 sm:mb-8 md:mb-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        whileHover={{
                            textShadow: [
                                '2px 2px 0px rgba(255,0,0,0.5)',
                                '-2px -2px 0px rgba(0,255,255,0.5)',
                                '2px 2px 0px rgba(255,0,0,0.5)',
                            ],
                            transition: { duration: 0.1, repeat: 3 },
                        }}
                    >
                        Born from tragedy, Bruce Wayne became Gotham's dark protector: **Batman**. With the loss of his parents,
                        he vowed to rid his city of the darkness that consumed it.
                        Through grit, training, and technology, he emerged as a symbol of hope in the shadows,
                        fighting criminals and keeping Gotham safe, even when the city itself is against him.
                    </motion.p>
                    <motion.p
                        className="text-lg sm:text-xl md:text-2xl font-mono text-gray-300 mb-6 sm:mb-8 md:mb-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                        whileHover={{
                            textShadow: [
                                '2px 2px 0px rgba(255,0,0,0.5)',
                                '-2px -2px 0px rgba(0,255,255,0.5)',
                                '2px 2px 0px rgba(255,0,0,0.5)',
                            ],
                            transition: { duration: 0.1, repeat: 3 },
                        }}
                    >
                        Batman is not just a hero—he's a symbol of resilience, justice, and the fight against corruption.
                        Every night, he faces new challenges, but his resolve is unbreakable.
                        Gotham’s protector, known only as the **Dark Knight**, continues to fight for the city he swore to defend.
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
};

export default GothamAbout;
