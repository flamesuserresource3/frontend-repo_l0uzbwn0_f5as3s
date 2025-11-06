export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">About</h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            I’m a game developer focused on moment-to-moment feel, expressive tools, and performant gameplay systems. I love mixing tight mechanics with bold, readable art direction and juicy feedback.
          </p>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">
            My toolkit includes engines like Unity and Godot, alongside web tech for quick prototypes. I care about clean architecture, frame pacing, and shipping polished experiences.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            <li className="text-sm"><span className="font-medium">Specialties:</span> feel-first design, shaders, VFX, UI/UX</li>
            <li className="text-sm"><span className="font-medium">Engines:</span> Unity, Godot, custom C# stacks</li>
            <li className="text-sm"><span className="font-medium">Platforms:</span> PC, WebGL, Mobile</li>
            <li className="text-sm"><span className="font-medium">Values:</span> clarity, responsiveness, accessibility</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
