import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Characters from './components/Characters';
import Gallery from './components/Gallery';
import Comics from './components/Comics';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-bat-black font-inter">
        <Navigation />
        <main>
          <Hero />
          <Characters />
          <Gallery />
          <Comics />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;