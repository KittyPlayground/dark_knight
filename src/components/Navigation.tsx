import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { setCurrentSection, toggleMenu } from '../store/batmanSlice';
import batlogo from "../../assets/logo.png";

const Navigation = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const isMenuOpen = useSelector((state) => state.batman.isMenuOpen);

    const menuItems = [
        { name: 'HOME', path: '/' },
        {name: 'ABOUT', path: '/about'},
        { name: 'CHARACTERS', path: '/characters' },
        { name: 'GALLERY', path: '/gallery' },
        { name: 'JOIN US', path: '/join-us' },

    ];

    const handleNavigation = (item) => {
        dispatch(setCurrentSection(item.name.toLowerCase()));
        if (item.path.includes('#')) {
            const element = document.querySelector(item.path);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            navigate(item.path);
        }

        if (isMenuOpen) {
            dispatch(toggleMenu());
        }
    };

    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/' && !location.hash;
        }
        return location.pathname === path || location.hash === path.split('#')[1];
    };

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location.pathname, location.hash]);

    return (
        <>
            {/* Menu Button - Top Right (Mobile Menu) */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed top-6 right-6 z-50 p-2 text-white hover:text-red-600 transition-colors md:hidden"
                onClick={() => dispatch(toggleMenu())}
            >
                <Menu size={24} />
            </motion.button>

            {/* Logo - Top Left */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed top-6 left-6 z-50"
            >
                <button
                    onClick={() => navigate('/')}
                    className="text-white hover:text-red-600 transition-colors"
                >
                    <img src={batlogo} alt="Batman Logo" className="w-15 h-10" />
                </button>
            </motion.div>

            {/* Desktop Navigation - Right Side */}
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed right-12 top-1/2 -translate-y-1/2 z-50 hidden md:block"
            >
                <div className="flex flex-col items-end gap-6">
                    {menuItems.map((item) => {
                        const active = isActive(item.path);
                        return (
                            <div key={item.name} className="group flex items-center gap-3">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: active ? 24 : 0 }}
                                    className="h-[1px] bg-red-600"
                                />
                                <button
                                    onClick={() => handleNavigation(item)}
                                    className={`text-sm tracking-[0.2em] ${
                                        active ? 'text-red-600' : 'text-gray-500'
                                    } group-hover:text-red-600 transition-colors duration-300`}
                                >
                                    {item.name}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-40 flex items-center justify-end md:hidden"
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-6 right-6 text-white hover:text-red-600 transition-colors"
                            onClick={() => dispatch(toggleMenu())}
                        >
                            <X size={24} />
                        </button>

                        {/* Menu Links */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="flex flex-col items-end gap-8"
                        >
                            {menuItems.map((item) => {
                                const active = isActive(item.path);
                                return (
                                    <button
                                        key={item.name}
                                        onClick={() => handleNavigation(item)}
                                        className={`text-2xl ${
                                            active ? 'text-red-600' : 'text-gray-500'
                                        } hover:text-red-600 transition-colors tracking-[0.2em]`}
                                    >
                                        {item.name}
                                    </button>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;
