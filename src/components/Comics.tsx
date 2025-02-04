import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronLeft, ChevronRight, X, BookOpen } from 'lucide-react';
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
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-mono text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800"
          >
            Batman Comics
          </motion.h2>

          {!currentComicId ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
                {comics.map((comic) => (
                    <motion.div
                        key={comic.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -10 }}
                        className="relative group"
                        onClick={() => dispatch(setCurrentComicId(comic.id))}
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-2xl blur-lg opacity-25 group-hover:opacity-100 transition duration-500"></div>
                      <div className="relative bg-black rounded-xl overflow-hidden">
                        <div className="aspect-[4/5] relative overflow-hidden">
                          <img
                              src={comic.cover}
                              alt={comic.title}
                              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          <h3 className="font-mono text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">
                            {comic.title}
                          </h3>
                          <p className="text-gray-300 text-lg mb-6 line-clamp-2">
                            {comic.description}
                          </p>
                          <div className="flex items-center space-x-2 text-red-500 group-hover:text-red-400 transition-colors">
                            <BookOpen size={20} />
                            <span className="font-mono">Read Now</span>
                          </div>
                        </div>
                        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-mono">
                          {comic.pages.length} Pages
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
                        <p className="text-xl text-gray-200 font-mono">
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
                      <span className="text-gray-400 font-mono">
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