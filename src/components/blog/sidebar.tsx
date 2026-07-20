import { Link } from "@tanstack/react-router";
import { Search, Facebook, Instagram, Linkedin, Youtube, Twitter, ChevronRight } from "lucide-react";
import { AUTHORS, CATEGORIES, TAGS, countByCategory, type CategorySlug } from "@/data/blog";
import { useState } from "react";

export function BlogSidebar() {
  const counts = countByCategory();
  const [q, setQ] = useState("");
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);

  return (
    <aside className="space-y-6">
      <div className="rounded-2xl border border-border bg-card p-5">
        <h4 className="mb-3 text-sm font-bold text-foreground">Search</h4>
        <form
          onSubmit={(e) => { e.preventDefault(); if (q) window.location.href = `/busca?q=${encodeURIComponent(q)}`; }}
          className="flex gap-2"
        >
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar artigos, tags..."
            className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-[color:var(--teal)]"
          />
          <button className="grid h-9 w-9 place-items-center rounded-lg bg-[color:var(--teal)] text-primary-foreground transition-opacity hover:opacity-90">
            <Search className="h-4 w-4" />
          </button>
        </form>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5">
        <h4 className="mb-3 text-sm font-bold text-foreground">Browse by Category</h4>
        <ul className="space-y-2">
          {(Object.keys(CATEGORIES) as CategorySlug[]).map((k) => {
            const c = CATEGORIES[k];
            return (
              <li key={k}>
                <Link
                  to="/categoria/$slug"
                  params={{ slug: k }}
                  className="group flex items-center justify-between rounded-xl px-3 py-2 text-sm text-foreground transition-colors hover:text-primary-foreground"
                  style={{ backgroundColor: `${c.color}18` }}
                >
                  <span className="flex items-center gap-2 font-medium">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: c.color }} />
                    {c.name}
                  </span>
                  <span className="rounded-full bg-background px-2 py-0.5 text-xs font-semibold text-muted-foreground">
                    {counts[k]}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5">
        <h4 className="mb-3 text-sm font-bold text-foreground">Our Authors</h4>
        <ul className="space-y-3">
          {Object.values(AUTHORS).map((a) => (
            <li key={a.slug} className="flex items-center gap-3">
              <img src={a.avatar} alt={a.name} loading="lazy" className="h-10 w-10 rounded-full object-cover" />
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold text-foreground">{a.name}</div>
                <div className="truncate text-xs text-muted-foreground">{a.role}</div>
              </div>
              <button className="grid h-7 w-7 place-items-center rounded-full bg-[color:var(--teal-soft)] text-[color:var(--teal)] transition-colors hover:bg-[color:var(--teal)] hover:text-primary-foreground">
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5">
        <h4 className="mb-3 text-sm font-bold text-foreground">Our Tags</h4>
        <div className="flex flex-wrap gap-2">
          {TAGS.map((t) => (
            <span key={t} className="cursor-pointer rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground/80 transition-colors hover:border-[color:var(--teal)] hover:text-[color:var(--teal)]">
              #{t}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5">
        <h4 className="mb-3 text-sm font-bold text-foreground">Follow Us</h4>
        <div className="flex gap-2">
          {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
            <a key={i} href="#" aria-label="rede social" className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--teal-soft)] text-[color:var(--teal)] transition-colors hover:bg-[color:var(--teal)] hover:text-primary-foreground">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5">
        <h4 className="mb-1 text-sm font-bold text-foreground">Sign Up</h4>
        <p className="mb-3 text-xs text-muted-foreground">Receba as análises semanais de ROI direto no seu e-mail.</p>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu melhor e-mail"
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-[color:var(--teal)]"
          />
          <button className="w-full rounded-lg bg-[color:var(--teal-deep)] py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
            Assinar
          </button>
          <label className="flex items-start gap-2 text-xs text-muted-foreground">
            <input type="checkbox" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} className="mt-0.5 accent-[color:var(--teal)]" />
            <span>Concordo com os termos e a política de privacidade.</span>
          </label>
        </form>
      </div>
    </aside>
  );
}