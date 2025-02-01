import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RootState } from '../store/store';
import { setCurrentSection, toggleMenu } from '../store/batmanSlice';
import batlogo from '../../assets/logo.png';

const Navigation = () => {
  const dispatch = useDispatch();
  const { menuOpen } = useSelector((state: RootState) => state.batman);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
      scrollY,
      [0, 100],
      ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.95)']
  );

  const menuItems = ['Home', 'Characters', 'Gallery', 'Comics'];

  // Track scroll position
  useEffect(() => {
    const unsubscribe = scrollY.onChange((y) => {
      setIsScrolled(y > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
      <motion.nav
          style={{ backgroundColor }}
          className="fixed w-full z-50 text-white border-b border-red-600/20 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="font-cinzel text-2xl font-bold text-red-600 flex items-center gap-2"
            >
              <img src={batlogo} alt="Batman Logo" className="w-8 h-8" />
              BATMAN
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item, index) => (
                  <motion.button
                      key={item}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.1, color: '#DC2626' }}
                      className="font-inter text-gray-300 hover:text-red-600 transition-colors relative group"
                      onClick={() => dispatch(setCurrentSection(item.toLowerCase()))}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
                  </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="md:hidden"
            >
              <button
                  onClick={() => dispatch(toggleMenu())}
                  className="text-gray-300 hover:text-red-600"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </motion.div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
              <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="md:hidden bg-black/95 border-t border-red-600/20"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {menuItems.map((item) => (
                      <button
                          key={item}
                          className="block w-full text-left px-3 py-2 font-inter text-gray-300 hover:text-red-600 hover:bg-red-900/20 rounded-md transition-colors"
                          onClick={() => {
                            dispatch(setCurrentSection(item.toLowerCase()));
                            dispatch(toggleMenu());
                          }}
                      >
                        {item}
                      </button>
                  ))}
                </div>
              </motion.div>
          )}
        </div>

      </motion.nav>
  );
};

export default Navigation;