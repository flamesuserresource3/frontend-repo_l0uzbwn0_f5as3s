import { ExternalLink, PlayCircle } from "lucide-react";

const projects = [
  {
    title: "Neon Drifter",
    description: "Synthwave endless runner focused on flow and reactive visuals.",
    tags: ["Unity", "C#", "Shader Graph"],
    link: "#",
    cover: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Orbital Tactics",
    description: "Turn-based micro tactics with tight loops and crunchy juice.",
    tags: ["Godot", "GDScript", "Pixel Art"],
    link: "#",
    cover: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Echo Lab",
    description: "Procedural audio toys exploring rhythm and motion.",
    tags: ["WebGL", "Three.js", "Audio"],
    link: "#",
    cover: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-24 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Featured Projects</h2>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300 max-w-2xl">
              A selection of experiments and shipped work. Each piece focuses on satisfying inputs and moment-to-moment clarity.
            </p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium hover:underline">
            Commission work <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-xl overflow-hidden border border-black/10 dark:border-white/10 hover:shadow-lg transition-shadow bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
              <div className="relative aspect-video overflow-hidden">
                <img src={p.cover} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-2 text-white text-sm font-medium bg-black/50 backdrop-blur px-3 py-1.5 rounded-full">
                    <PlayCircle className="h-4 w-4" /> Play demo
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300 line-clamp-2">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-black/5 dark:bg-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
