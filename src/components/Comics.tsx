import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { RootState } from '../store/store';
import { setCurrentComicId, setCurrentComicPage } from '../store/batmanSlice';

const comics = [
  {
    id: 'dark-knight-returns',
    title: 'The Dark Knight Returns',
    cover: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3',
    description: 'An aging Batman returns from retirement to fight crime in a dark future Gotham.',
    pages: [
      {
        image: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3',
        text: 'The streets of Gotham lay silent, a city holding its breath. After ten years of absence, something stirs in the shadows...',
      },
      {
        image: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?ixlib=rb-4.0.3',
        text: 'Crime has taken over Gotham. The city needs its Dark Knight more than ever.',
      },
      {
        image: 'https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-4.0.3',
        text: 'Bruce Wayne dons the cape and cowl once again, older but unbroken.',
      },
    ],
  },
  {
    id: 'killing-joke',
    title: 'The Killing Joke',
    cover: 'https://images.unsplash.com/photo-1507457379470-08b800bebc67?ixlib=rb-4.0.3',
    description: 'The definitive Joker story that changed Batman comics forever.',
    pages: [
      {
        image: 'https://images.unsplash.com/photo-1507457379470-08b800bebc67?ixlib=rb-4.0.3',
        text: 'One bad day. That\'s all it takes to drive a man to madness.',
      },
      {
        image: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-4.0.3',
        text: 'The Joker\'s past remains a mystery, but his present threatens to destroy everything Batman holds dear.',
      },
    ],
  },
];

const Comics = () => {
  const dispatch = useDispatch();
  const { currentComicId, currentComicPage } = useSelector((state: RootState) => state.batman);

  const currentComic = comics.find(comic => comic.id === currentComicId);

  const handleNextPage = () => {
    if (currentComic && currentComicPage < currentComic.pages.length - 1) {
      dispatch(setCurrentComicPage(currentComicPage + 1));
    }
  };

  const handlePrevPage = () => {
    if (currentComicPage > 0) {
      dispatch(setCurrentComicPage(currentComicPage - 1));
    }
  };

  return (
    <section className="bg-black text-white py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-cinzel text-5xl font-bold text-center mb-12 text-red-600"
        >
          Batman Comics
        </motion.h2>

        {!currentComicId ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {comics.map((comic) => (
              <motion.div
                key={comic.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-900 to-red-900 rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => dispatch(setCurrentComicId(comic.id))}
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src={comic.cover}
                    alt={comic.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-cinzel text-2xl font-bold text-red-500 mb-2">{comic.title}</h3>
                    <p className="text-gray-300">{comic.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentComicId}-${currentComicPage}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="relative max-w-4xl mx-auto"
            >
              <button
                onClick={() => dispatch(setCurrentComicId(null))}
                className="absolute -top-12 right-0 text-red-500 hover:text-red-400 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="bg-gradient-to-br from-gray-900 to-red-900 rounded-lg overflow-hidden shadow-2xl">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src={currentComic?.pages[currentComicPage].image}
                    alt={`Page ${currentComicPage + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-xl text-gray-200 font-inter">
                      {currentComic?.pages[currentComicPage].text}
                    </p>
                  </div>
                </div>

                <div className="p-4 flex justify-between items-center">
                  <button
                    onClick={handlePrevPage}
                    disabled={currentComicPage === 0}
                    className="p-2 text-red-500 hover:text-red-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <span className="text-gray-400">
                    Page {currentComicPage + 1} of {currentComic?.pages.length}
                  </span>
                  <button
                    onClick={handleNextPage}
                    disabled={currentComic && currentComicPage === currentComic.pages.length - 1}
                    className="p-2 text-red-500 hover:text-red-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};

export default Comics;