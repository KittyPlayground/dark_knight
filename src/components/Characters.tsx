import React from 'react';
import { motion } from 'framer-motion';

const characters = [
  {
    name: 'Batman',
    alias: 'Bruce Wayne',
    description: 'Billionaire by day, vigilante by night. Gotham\'s protector.',
    image: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3',
    stats: {
      strength: 90,
      intelligence: 95,
      speed: 85,
      combat: 95,
    },
  },
  {
    name: 'Catwoman',
    alias: 'Selina Kyle',
    description: 'Master thief with a complex relationship with the Dark Knight.',
    image: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-4.0.3',
    stats: {
      strength: 75,
      intelligence: 85,
      speed: 90,
      combat: 85,
    },
  },
  {
    name: 'The Joker',
    alias: 'Unknown',
    description: 'The Clown Prince of Crime and Batman\'s greatest nemesis.',
    image: 'https://images.unsplash.com/photo-1507457379470-08b800bebc67?ixlib=rb-4.0.3',
    stats: {
      strength: 70,
      intelligence: 90,
      speed: 75,
      combat: 80,
    },
  },
];

const Characters = () => {
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {characters.map((character, index) => (
            <motion.div
              key={character.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group bg-gradient-to-br from-gray-900 to-red-900/30 rounded-lg overflow-hidden"
            >
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-cinzel text-2xl font-bold text-red-500 mb-1">{character.name}</h3>
                  <p className="font-inter text-gray-300 mb-2">{character.alias}</p>
                  <p className="font-inter text-gray-400 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {character.description}
                  </p>
                  
                  {/* Character Stats */}
                  <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {Object.entries(character.stats).map(([stat, value]) => (
                      <div key={stat} className="flex items-center gap-2">
                        <span className="text-gray-400 capitalize text-sm w-24">{stat}</span>
                        <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${value}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-red-600 rounded-full"
                          />
                        </div>
                        <span className="text-gray-400 text-sm w-8">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Characters