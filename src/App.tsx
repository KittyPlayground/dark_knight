import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store/store';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Characters from './components/Characters';
import CharacterDetail from './components/CharacterDetail';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import About from "./components/About.tsx";
import JoinUs from "./components/JoinUs.tsx";
import News from "./components/News.tsx";
import ComicCalendar from "./components/ComicCalender.tsx";

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
                  <About/>
                  <ComicCalendar/>
                  <Characters />
                  <Gallery />
                  <News />
                  <JoinUs />
                </main>
              } />
              <Route path="/about" element={<About />} />
             <Route path="/comics" element={<ComicCalendar />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="/character/:id" element={<CharacterDetail />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/news" element={<News />} />
              <Route path="/join-us" element={<JoinUs />} />

            </Routes>
            <Footer />
          </div>
        </Router>
      </Provider>
  );
}

export default App;
