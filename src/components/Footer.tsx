import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Github } from 'lucide-react';
import batlogo from "../../assets/logo.png";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  const quickLinks = [
    { name: 'About Batman', href: '#' },
    { name: 'Gotham City', href: '#' },
    { name: 'Villains', href: '#' },
    { name: 'Wayne Enterprises', href: '#' },
  ];

  return (
      <footer className="bg-gradient-to-b from-black-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Batman Logo Section */}
          <div className="py-12 flex justify-center">
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.8}}
                className="relative"
            >
              <img src={batlogo} alt="Batman Logo" className="w-15 h-10"/>
            </motion.div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-t border-red-900/20">
            {/* About Section */}
            <div>
              <h3 className="font-cinzel text-xl font-bold text-red-700 mb-4">About</h3>
              <p className="text-gray-400 mb-4">
                Protecting Gotham City from the shadows, Batman strikes fear into the hearts of criminals while bringing hope to the innocent.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-cinzel text-xl font-bold text-red-700 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                    <li key={link.name}>
                      <motion.a
                          href={link.href}
                          whileHover={{ x: 5, color: '#3B82F6' }}
                          className="text-gray-400 hover:text-red-700 transition-colors duration-300"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                ))}
              </ul>
            </div>

            {/* Latest News */}
            <div>
              <h3 className="font-cinzel text-xl font-bold text-red-700 mb-4">Latest News</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-300 font-semibold">Arkham Asylum Breakout</p>
                  <p className="text-gray-400 text-sm">Multiple inmates escaped from Arkham Asylum...</p>
                </div>
                <div>
                  <p className="text-gray-300 font-semibold">Wayne Tower Renovation</p>
                  <p className="text-gray-400 text-sm">Bruce Wayne announces major renovation plans...</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-cinzel text-xl font-bold text-red-700 mb-4">Follow the Bat</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                    <motion.a
                        key={social.label}
                        href={social.href}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300 group"
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-6 border-t border-blue-900/20 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Batman. All rights reserved. | Gotham City's Dark Knight
            </p>
          </div>
        </div>

      </footer>
  );
};

export default Footer;