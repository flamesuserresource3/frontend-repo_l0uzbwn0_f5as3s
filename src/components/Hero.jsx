import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white dark:via-neutral-900/30 dark:to-neutral-900" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl py-24 sm:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur px-3 py-1 text-xs font-medium">
            <Sparkles className="h-3.5 w-3.5" /> Interactive Game Dev Portfolio
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Building playful, immersive experiences
          </h1>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-base sm:text-lg">
            I craft games and real‑time 3D prototypes with a focus on tight feel, slick visuals, and performant code. Explore selected work, tools, and experiments below.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-black text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800">
              <Rocket className="h-4 w-4" /> View Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-black/10 dark:border-white/20 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
