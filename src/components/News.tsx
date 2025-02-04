import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Star, TrendingUp } from 'lucide-react';

const news = [
    {
        id: 1,
        image: 'https://artfiles.alphacoders.com/142/thumb-1920-142051.jpg',
        category: 'Upcoming Release',
        date: 'March 15, 2024',
        title: 'Batman: The Dark Prince Returns',
        description: 'The highly anticipated sequel to The Dark Knight Returns is coming this summer.',
        featured: true
    },
    {
        id: 2,
        image: 'https://www.nme.com/wp-content/uploads/2021/10/Fortnite-x-Batman-crossover-event.jpg',
        category: 'Event',
        date: 'March 20, 2024',
        title: 'Virtual Comic Con: Batman Edition',
        description: 'Join us for an exclusive online event featuring Batman comic artists and writers.'
    },
    {
        id: 3,
        image: 'https://i.ytimg.com/vi/Dh1CYGbs2l4/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgVShAMA8=&rs=AOn4CLC-AfMLJ1AkkzV5muwRec0TJ0K6Cw',
        category: 'Interview',
        date: 'March 18, 2024',
        title: 'Behind the Scenes: Creating Gotham',
        description: 'An exclusive interview with the creative team behind the new Batman series.'
    }
];

const News = () => {
    return (
        <section className="bg-gradient-to-b from-black-900 to-black text-white py-24">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-6xl font-mono font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
                        Latest News
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
                        Stay updated with the latest news, releases, and events
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {news.map((item, index) => {
                        if (item.featured) {
                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="lg:col-span-2 relative group"
                                >
                                    <div className="absolute -inset-1 bg-gradient-to-r from-black-600 to-red-900 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                                    <div className="relative bg-red-950 rounded-xl overflow-hidden">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="relative h-full">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-mono flex items-center gap-2">
                                                    <Star size={14} />
                                                    Featured
                                                </div>
                                            </div>
                                            <div className="p-8">
                                                <div className="flex items-center gap-4 mb-4">
                          <span className="text-black-500 font-mono text-sm flex items-center gap-2">
                            <Calendar size={14} />
                              {item.date}
                          </span>
                                                    <span className="text-gray-400 font-mono text-sm">
                            {item.category}
                          </span>
                                                </div>
                                                <h3 className="text-3xl font-mono font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-50 to-red-300">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-500 font-mono mb-6">
                                                    {item.description}
                                                </p>
                                                <button className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors font-mono">
                                                    Read More <ArrowRight size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        }

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-black-600 to-red-900 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                                <div className="relative bg-red-950 rounded-lg overflow-hidden">
                                    <div className="aspect-video relative">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black-900 to-transparent opacity-80" />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-4 mb-4">
                      <span className="text-white-500 font-mono text-sm flex items-center gap-2">
                        <Calendar size={14} />
                          {item.date}
                      </span>
                                            <span className="text-gray-400 font-mono text-sm">
                        {item.category}
                      </span>
                                        </div>
                                        <h3 className="text-xl font-mono font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-gray-50 to-red-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 mb-4 line-clamp-2 font-mono">
                                            {item.description}
                                        </p>
                                        <button className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors font-mono text-sm">
                                            Read More <ArrowRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <button className="inline-flex items-center gap-2 bg-gradient-to-r from-red-950 to-red-800 text-white font-mono py-3 px-6 rounded-lg hover:from-red-700 hover:to-red-900 transition-all duration-300 transform hover:-translate-y-1">
                        View All News <TrendingUp size={16} />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default News;