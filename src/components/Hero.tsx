import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import batmanLogo from '../../assets/logo.png';

const Hero = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const textVariants = {
        hidden: { opacity: 0 },
        visible: (i: number) => ({
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.8,
            },
        }),
    };

    return (
        <div className="relative h-screen overflow-hidden">
            {/* Background GIF */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2 }}
            >
                <img
                    src="https://i.pinimg.com/originals/0e/3f/b6/0e3fb6d0ad3f72c8b5f420a8e8bf7eb3.gif"
                    alt="Batman Background"
                    className="object-cover w-full h-full"
                />
            </motion.div>

            {/* Dark Overlay with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/60" />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
                {/* Animated Bat Logo */}
                <motion.div
                    className="mb-4 sm:mb-6 md:mb-8"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
                >
                    <img
                        src={batmanLogo}
                        alt="Batman Logo"
                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 animate-pulse-slow"
                    />
                </motion.div>

                {/* Staggered Text Animation */}
                <div className="overflow-hidden">
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent"
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, type: 'spring' }}
                    >
                        <AnimatePresence>
                            {inView && "I AM BATMAN".split('').map((char, i) => (
                                <motion.span
                                    key={i}
                                    custom={i}
                                    variants={textVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="inline-block"
                                    whileHover={{
                                        scale: 1.2,
                                        rotate: Math.random() * 10 - 5,
                                        textShadow: '0 0 20px rgba(255,69,0,0.8)',
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </AnimatePresence>
                    </motion.h1>
                </div>

                {/* Animated Subtitle with Glitch Effect */}
                <motion.p
                    className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-12 font-mono text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    whileHover={{
                        textShadow: [
                            '2px 2px 0px rgba(255,0,0,0.5)',
                            '-2px -2px 0px rgba(0,255,255,0.5)',
                            '2px 2px 0px rgba(255,0,0,0.5)'
                        ],
                        transition: { duration: 0.1, repeat: 3 }
                    }}
                >
                    THE DARK KNIGHT RISES
                </motion.p>

                {/* Interactive Button with Hover Effects */}
                <motion.button
                    className="relative px-8 py-3 sm:px-10 sm:py-4 md:px-12 md:py-4 text-lg sm:text-xl font-bold bg-red-700 rounded-lg group hover:bg-red-800 transition-colors"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    whileHover={{
                        scale: 1.1,
                        boxShadow: '0 0 40px rgba(255,69,0,0.5)'
                    }}
                >
                    <span className="relative z-10 flex items-center gap-2">
                        <span className="text-shadow">ENTER THE BATCAVE</span>
                        <img
                            src={batmanLogo}
                            className="w-5 h-5 sm:w-6 sm:h-6 animate-throw"
                            alt="batarang"
                        />
                    </span>
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-red-600 to-orange-500 mix-blend-screen" />
                </motion.button>

                {/* Floating Bats Animation */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(15)].map((_, i) => (
                        <motion.img
                            key={i}
                            src={batmanLogo}
                            className="absolute opacity-20 w-10 sm:w-12 md:w-14"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -100],
                                x: [0, Math.random() * 100 - 50],
                                opacity: [0.2, 0],
                                scale: [1, 0.5],
                            }}
                            transition={{
                                duration: 4 + Math.random() * 4,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                            }}
                        />
                    ))}
                </div>

                {/* Scrolling Indicator */}
                <motion.div
                    className="absolute bottom-8 animate-bounce-slow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                >
                    <span className="block mb-2 text-sm">SCROLL DOWN</span>
                    <div className="w-6 h-10 border-4 rounded-full border-red-600">
                        <motion.div
                            className="w-2 h-2 mt-2 bg-red-600 rounded-full mx-auto"
                            animate={{ y: [0, 12] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </div>

            {/* Interactive Background Grid */}
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 pointer-events-none">
                {[...Array(72)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="border border-white/5"
                        whileHover={{
                            backgroundColor: 'rgba(255,69,0,0.1)',
                            transition: { duration: 0.3 }
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;