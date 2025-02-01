import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3',
    title: 'The Dark Knight',
    description: 'Batman watches over his city, ready to strike at any moment.',
  },
  {
    url: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?ixlib=rb-4.0.3',
    title: 'Gotham City',
    description: 'The sprawling metropolis that Batman calls home.',
  },
  {
    url: 'https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-4.0.3',
    title: 'The Batcave',
    description: 'Batman\'s secret headquarters beneath Wayne Manor.',
  },
  {
    url: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3',
    title: 'Wayne Manor',
    description: 'The ancestral home of the Wayne family.',
  },
  {
    url: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-4.0.3',
    title: 'Arkham Asylum',
    description: 'Home to Gotham\'s most dangerous criminals.',
  },
  {
    url: 'https://images.unsplash.com/photo-1507457379470-08b800bebc67?ixlib=rb-4.0.3',
    title: 'The Batmobile',
    description: 'Batman\'s high-tech vehicle for fighting crime.',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-cinzel text-5xl font-bold text-center mb-12 text-red-600"
        >
          Gallery
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-lg aspect-w-16 aspect-h-9 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-cinzel text-2xl font-bold text-red-500">{image.title}</h3>
                  <p className="text-gray-300 mt-2">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 text-red-500 hover:text-red-400 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={images[selectedImage].url}
                  alt={images[selectedImage].title}
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="font-cinzel text-2xl font-bold text-red-500 mb-2">
                    {images[selectedImage].title}
                  </h3>
                  <p className="text-gray-300">{images[selectedImage].description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery