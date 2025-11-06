import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-neutral-600 dark:text-neutral-400">
      <p>© {new Date().getFullYear()} DevPlay — Built with love for games and playful tech.</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 text-neutral-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
