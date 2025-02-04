import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Swords, Brain, Zap, Target, Heart, Star } from 'lucide-react';
import { characters } from '../data/characters';

const CharacterDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const character = characters.find(char => char.id === id);

    if (!character) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl text-red-600 mb-4">Character not found</h2>
                    <button
                        onClick={() => navigate('/')}
                        className="text-white hover:text-red-500 transition-colors"
                    >
                        Return to home
                    </button>
                </div>
            </div>
        );
    }

    const statIcons = {
        strength: Shield,
        combat: Swords,
        intelligence: Brain,
        speed: Zap,
        accuracy: Target,
        durability: Heart,
        power: Star
    };

    return (
        <div className="min-h-screen pt-20 bg-black">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative h-[60vh] overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${character.backgroundImage || character.image})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
                </div>

                <div className="absolute top-4 left-4">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-white hover:text-red-500 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Back
                    </motion.button>
                </div>

                <div className="relative h-full flex items-center justify-center">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-center"
                    >
                        <h1 className="font-cinzel text-6xl font-bold text-red-600 mb-4">{character.name}</h1>
                        <p className="text-2xl text-gray-300 mb-4">{character.alias}</p>
                        <p className="text-xl text-gray-400 italic max-w-2xl mx-auto">"{character.quote}"</p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Left Column */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h2 className="font-cinzel text-3xl font-bold text-red-600 mb-6">Background</h2>
                        <div className="space-y-6 text-gray-300">
                            {character.background.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="mt-12">
                            <h2 className="font-cinzel text-3xl font-bold text-red-600 mb-6">Abilities</h2>
                            <ul className="space-y-4">
                                {character.abilities.map((ability, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                        className="flex items-center gap-4 text-gray-300"
                                    >
                                        <span className="w-2 h-2 bg-red-600 rounded-full" />
                                        {ability}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h2 className="font-cinzel text-3xl font-bold text-red-600 mb-6">Stats</h2>
                        <div className="grid gap-6">
                            {Object.entries(character.stats).map(([stat, value]) => {
                                const Icon = statIcons[stat as keyof typeof statIcons];
                                return (
                                    <motion.div
                                        key={stat}
                                        initial={{ x: 20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.6 }}
                                        className="bg-gradient-to-r from-red-900/20 to-gray-900/20 rounded-lg p-4"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                {Icon && <Icon className="w-5 h-5 text-red-500" />}
                                                <span className="text-gray-300 capitalize">{stat}</span>
                                            </div>
                                            <span className="text-red-500 font-bold">{value}</span>
                                        </div>
                                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${value}%` }}
                                                transition={{ duration: 1, delay: 0.8 }}
                                                className="h-full bg-gradient-to-r from-red-700 to-red-500 rounded-full"
                                            />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {character.equipment && (
                            <div className="mt-12">
                                <h2 className="font-cinzel text-3xl font-bold text-red-600 mb-6">Equipment</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {character.equipment.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.8 + index * 0.1 }}
                                            className="bg-gradient-to-br from-red-900/20 to-gray-900/20 p-4 rounded-lg"
                                        >
                                            <h3 className="text-red-500 font-bold mb-2">{item.name}</h3>
                                            <p className="text-gray-400 text-sm">{item.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default CharacterDetail;