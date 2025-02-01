import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-bat-black text-white py-20">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-cinzel text-5xl font-bold text-center mb-12"
        >
          Contact
        </motion.h2>
        
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="block font-inter text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-bat-gray border border-gray-700 rounded-lg focus:outline-none focus:border-bat-yellow text-white"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block font-inter text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-bat-gray border border-gray-700 rounded-lg focus:outline-none focus:border-bat-yellow text-white"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block font-inter text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full px-4 py-3 bg-bat-gray border border-gray-700 rounded-lg focus:outline-none focus:border-bat-yellow text-white resize-none"
              required
            />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-bat-yellow text-bat-black font-inter font-semibold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-bat-gold transition-colors duration-300"
          >
            <Send className="w-5 h-5" />
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;