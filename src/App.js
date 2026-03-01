// src/App.js
import React from 'react';
import './App.css';
import Hero from './components/Hero'; 
import Gallery from './components/Gallery'; 
import VideoSection from './components/VideoSection';
import Footer from './components/Footer'; // <-- 1. Importar Footer

function App() {
  return (
    <div className="App">
      <main>
        <Hero />
        <Gallery />
        <VideoSection />
      </main>
      <Footer /> {/* <-- 2. Agregar Footer aquí */}
    </div>
  );
}

export default App;