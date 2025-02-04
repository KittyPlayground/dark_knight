import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {characters} from "../data/Characters.ts";


const Characters = () => {
  const navigate = useNavigate();

  return (
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-cinzel text-5xl font-bold text-center mb-12 text-red-600"
          >
            Characters
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {characters.map((character, index) => (
                <motion.div
                    key={character.id}
                    initial={{ opacity: 0, rotateY: -180 }}
                    whileInView={{ opacity: 1, rotateY: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="group perspective cursor-pointer"
                    onClick={() => navigate(`/character/${character.id}`)}
                >
                  <motion.div
                      className="relative w-full h-[500px] [transform-style:preserve-3d] transition-all duration-700 group-hover:[transform:rotateY(180deg)]"
                  >
                    {/* Front of the card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-red-900/30 to-black rounded-lg overflow-hidden">
                      <div className="relative h-full">
                        <img
                            src={character.image}
                            alt={character.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="font-cinzel text-3xl font-bold text-red-500 mb-2">{character.name}</h3>
                          <p className="font-inter text-xl text-gray-300 mb-2">{character.alias}</p>
                          <p className="font-inter text-gray-400 italic">"{character.quote}"</p>
                        </div>
                      </div>
                    </div>

                    {/* Back of the card */}
                    <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-gradient-to-br from-red-900/50 via-gray-900 to-black rounded-lg p-6">
                      <div className="h-full flex flex-col justify-between">
                        <div>
                          <h3 className="font-cinzel text-2xl font-bold text-red-500 mb-4">{character.name}</h3>
                          <p className="font-inter text-gray-300 mb-6">{character.description}</p>
                        </div>

                        <div className="space-y-4">
                          {Object.entries(character.stats).map(([stat, value]) => (
                              <div key={stat} className="space-y-2">
                                <div className="flex justify-between items-center">
                                  <span className="text-gray-300 capitalize font-semibold">{stat}</span>
                                  <span className="text-red-500 font-bold">{value}</span>
                                </div>
                                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                  <motion.div
                                      initial={{ width: 0 }}
                                      whileInView={{ width: `${value}%` }}
                                      transition={{ duration: 1, delay: 0.5 }}
                                      className="h-full bg-gradient-to-r from-red-700 to-red-500 rounded-full"
                                  />
                                </div>
                              </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Characters;