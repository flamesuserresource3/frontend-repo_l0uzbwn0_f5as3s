import { Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !message) return;
    setSent(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-6 sm:p-10">
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Contact</h2>
          </div>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">
            Have a project in mind or want to collaborate? Drop a message.
          </p>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your email"
              className="w-full rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-950/60 px-4 py-2 outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Your message"
              rows={5}
              className="w-full rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-950/60 px-4 py-2 outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-black text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>
            {sent && (
              <p className="text-sm text-green-600 dark:text-green-400">Thanks! Your message has been captured locally for demo purposes.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
