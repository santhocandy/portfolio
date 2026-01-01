import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

import './index.css';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      delay: 0,
    });
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ display: 'flex', flexDirection: 'column', marginTop: '0px' }}>
        <Hero />
        <About />
        <Skills />
        <Projects />

        {/* Illustration */}
        <section className="illustration" data-aos="fade-up" style={{ marginTop: '50px', textAlign: 'center' }}>
          <img src="/pictures/illustration.svg" alt="Illustration" style={{ maxWidth: '100%', height: 'auto' }} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
