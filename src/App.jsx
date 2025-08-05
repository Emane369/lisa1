import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e) => setCursorPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);

    document.querySelectorAll('[data-animation="fade-in"]').forEach(element => {
      element.style.opacity = '0';
      setTimeout(() => {
        element.style.transition = 'opacity 1s ease-in';
        element.style.opacity = '1';
      }, 100);
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="custom-cursor fixed w-5 h-5 bg-pink-500/50 rounded-full pointer-events-none z-50" style={{ left: cursorPosition.x - 10, top: cursorPosition.y - 10 }}></div>
      <section className="hero flex flex-col items-center justify-center h-[400px] bg-[url('/assets/background.jpg')] bg-cover bg-center">
        <h1 className="title text-5xl text-pink-400 font-bold" data-animation="fade-in">LALISA MANOBAL</h1>
        <p className="subtitle text-gray-300 text-xl" data-animation="fade-in">Main Dancer, Rapper, Fashion Icon</p>
      </section>
      <section className="music py-5 text-center">
        <h2 className="text-3xl text-pink-400 mb-4">Lisa's Hits</h2>
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/artist/5L1lO4eRHmJ7a0Q6csE5cT?utm_source=generator"
          width="100%"
          height="380"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </section>
      <section className="video-gallery py-5 text-center">
        <h2 className="text-3xl text-pink-400 mb-4">Video Gallery</h2>
        <div className="videos flex flex-wrap justify-center gap-5">
          {['awkkyBH2zEo', 'dNCWe_6HAM8', 'xi1YS_HfNyY'].map((id, index) => (
            <iframe
              key={index}
              src={`https://www.youtube.com/embed/${id}`}
              title={`Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="video w-[300px] h-[200px] rounded-lg"
            ></iframe>
          ))}
        </div>
      </section>
      <section className="photo-gallery py-5 text-center">
        <h2 className="text-3xl text-pink-400 mb-4">Photo Gallery</h2>
        <div className="photos flex flex-wrap justify-center gap-5">
          {['l2.webp', 'l1.webp', 'l3.webp'].map((src, index) => (
            <div className="photo-card" key={index}>
              <img src={`/assets/${src}`} alt={`Lisa ${index + 1}`} className="w-[300px] h-[200px] object-cover rounded-lg transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50" />
            </div>
          ))}
        </div>
      </section>
      <section className="portfolio py-5 text-center">
        <h2 className="text-3xl text-pink-400 mb-4">About the Developer</h2>
        <p className="text-gray-300">
          This fan page was crafted by [Your Name], a passionate web developer. Check out my{' '}
          <a href="https://yourportfolio.com" target="_blank" className="portfolio-link text-pink-400 underline hover:text-pink-300">
            portfolio
          </a>{' '}
          for more projects!
        </p>
      </section>
      <section className="x-feed py-5 text-center">
        <h2 className="text-3xl text-pink-400 mb-4">Latest from X</h2>
        <ul className="feed-list list-none p-0">
          {['Lisa rocks Coachella!', 'New song teaser out!', 'Fan art alert!'].map((post, index) => (
            <li key={index} className="feed-item text-pink-400 my-2">
              {post}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;