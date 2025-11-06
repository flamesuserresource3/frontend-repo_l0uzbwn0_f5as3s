import { Gamepad2, Github, Mail } from "lucide-react";

export default function Navbar() {
  const links = [
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="inline-flex items-center gap-2 font-semibold tracking-tight">
          <Gamepad2 className="h-5 w-5" />
          <span>DevPlay</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="mailto:hello@devplay.studio"
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
