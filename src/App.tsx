import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store/store';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Characters from './components/Characters';
import CharacterDetail from './components/CharacterDetail';
import Gallery from './components/Gallery';
import Comics from './components/Comics';
import Footer from './components/Footer';

function App() {
  return (
      <Provider store={store}>
        <Router>
          <div className="min-h-screen bg-bat-black font-inter">
            <Navigation />
            <Routes>
              <Route path="/" element={
                <main>
                  <Hero />
                  <Characters />
                  <Gallery />
                  <Comics />
                </main>
              } />
              <Route path="/characters" element={<Characters />} />
              <Route path="/character/:id" element={<CharacterDetail />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/comics" element={<Comics />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </Provider>
  );
}

export default App;
