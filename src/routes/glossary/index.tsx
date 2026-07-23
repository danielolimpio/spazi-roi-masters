import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, BookOpen, ChevronRight } from "lucide-react";
import { Header } from "@/components/blog/header";
import { Footer } from "@/components/blog/footer";
import { NewsletterBand } from "@/components/blog/newsletter";
import {
  ALPHABET,
  GLOSSARY_CATEGORIES,
  GLOSSARY_TERMS,
  letterCounts,
  type GlossaryCategory,
} from "@/data/glossary";

export const Route = createFileRoute("/glossary/")({
  head: () => ({
    meta: [
      { title: "Commercial Real Estate Glossary — 100+ Investor Terms | spazi.info" },
      {
        name: "description",
        content:
          "Definitive glossary of 100+ commercial real estate investment terms — ROI, cap rate, NNN, holding structures, medical office building, due diligence and more.",
      },
      { property: "og:title", content: "Commercial Real Estate Glossary — spazi.info" },
      {
        property: "og:description",
        content:
          "Investor-grade definitions for 100+ commercial real estate concepts across ROI, medical CRE, legal structures, due diligence and deal structuring.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://spazi-roi-insight.lovable.app/glossary" },
    ],
    links: [{ rel: "canonical", href: "https://spazi-roi-insight.lovable.app/glossary" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: "spazi.info Commercial Real Estate Glossary",
          description:
            "A curated glossary of 100+ commercial real estate investment terms for investors targeting yields above 12% per year.",
          url: "https://spazi-roi-insight.lovable.app/glossary",
          hasDefinedTerm: GLOSSARY_TERMS.slice(0, 25).map((t) => ({
            "@type": "DefinedTerm",
            name: t.term,
            url: `https://spazi-roi-insight.lovable.app/glossary/what-is-${t.slug}`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://spazi-roi-insight.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Glossary", item: "https://spazi-roi-insight.lovable.app/glossary" },
          ],
        }),
      },
    ],
  }),
  component: GlossaryHub,
});

function GlossaryHub() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<GlossaryCategory | "all">("all");
  const counts = useMemo(() => letterCounts(), []);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return GLOSSARY_TERMS.filter((t) => {
      if (cat !== "all" && t.category !== cat) return false;
      if (query && !t.term.toLowerCase().includes(query) && !t.short.toLowerCase().includes(query)) return false;
      return true;
    });
  }, [q, cat]);

  const grouped = useMemo(() => {
    const map: Record<string, typeof GLOSSARY_TERMS> = {};
    for (const l of ALPHABET) map[l] = [];
    for (const t of filtered) {
      const l = t.term.charAt(0).toUpperCase();
      if (map[l]) map[l].push(t);
    }
    for (const l of ALPHABET) map[l].sort((a, b) => a.term.localeCompare(b.term));
    return map;
  }, [filtered]);

  const activeLetters = ALPHABET.filter((l) => grouped[l].length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="border-b border-border bg-[color:var(--cream)]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <nav className="mb-6 flex items-center gap-1 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="font-medium text-foreground">Glossary</span>
          </nav>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--teal)] text-primary-foreground">
              <BookOpen className="h-5 w-5" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[color:var(--teal-deep)]">
              Glossary Hub
            </span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            The commercial real estate glossary for serious investors
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            100+ definitions covering ROI metrics, medical office buildings, holding structures,
            due diligence and deal structuring — written for investors targeting yields above 12% per year
            on non-residential income properties.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search terms — e.g. cap rate, NNN, 1031 exchange…"
                className="w-full rounded-full border border-border bg-background py-3 pl-11 pr-5 text-sm outline-none focus:border-[color:var(--teal)]"
              />
            </div>
            <select
              value={cat}
              onChange={(e) => setCat(e.target.value as GlossaryCategory | "all")}
              className="rounded-full border border-border bg-background px-5 py-3 text-sm outline-none focus:border-[color:var(--teal)]"
            >
              <option value="all">All categories</option>
              {(Object.keys(GLOSSARY_CATEGORIES) as GlossaryCategory[]).map((k) => (
                <option key={k} value={k}>{GLOSSARY_CATEGORIES[k].name}</option>
              ))}
            </select>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {ALPHABET.map((l) => {
              const c = counts[l] ?? 0;
              const has = c > 0;
              return (
                <a
                  key={l}
                  href={has ? `#letter-${l}` : undefined}
                  aria-disabled={!has}
                  className={`grid h-9 w-9 place-items-center rounded-lg text-sm font-semibold transition-colors ${
                    has
                      ? "border border-border bg-background text-foreground hover:border-[color:var(--teal)] hover:text-[color:var(--teal)]"
                      : "cursor-not-allowed bg-muted text-muted-foreground/50"
                  }`}
                >
                  {l}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10 grid gap-4 md:grid-cols-5">
          {(Object.keys(GLOSSARY_CATEGORIES) as GlossaryCategory[]).map((k) => {
            const c = GLOSSARY_CATEGORIES[k];
            const count = GLOSSARY_TERMS.filter((t) => t.category === k).length;
            const active = cat === k;
            return (
              <button
                key={k}
                onClick={() => setCat(active ? "all" : k)}
                className={`rounded-2xl border p-4 text-left transition-colors ${
                  active
                    ? "border-[color:var(--teal)] bg-[color:var(--teal-soft)]"
                    : "border-border bg-card hover:border-[color:var(--teal)]"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: c.color }} />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {count} terms
                  </span>
                </div>
                <div className="mt-2 font-display text-lg font-bold text-foreground">{c.name}</div>
                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{c.description}</p>
              </button>
            );
          })}
        </div>

        {activeLetters.length === 0 && (
          <div className="rounded-2xl border border-border bg-card p-10 text-center text-muted-foreground">
            No terms match your search. Try a different keyword or clear the filter.
          </div>
        )}

        <div className="space-y-10">
          {activeLetters.map((letter) => (
            <section key={letter} id={`letter-${letter}`} className="scroll-mt-24">
              <div className="mb-4 flex items-baseline gap-4 border-b border-border pb-3">
                <h2 className="font-display text-4xl font-bold text-[color:var(--teal-deep)]">{letter}</h2>
                <span className="text-sm text-muted-foreground">{grouped[letter].length} terms</span>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {grouped[letter].map((t) => {
                  const c = GLOSSARY_CATEGORIES[t.category];
                  return (
                    <li key={t.slug}>
                      <Link
                        to="/glossary/what-is-$term"
                        params={{ term: t.slug }}
                        className="group flex h-full flex-col rounded-xl border border-border bg-card p-4 transition-colors hover:border-[color:var(--teal)]"
                      >
                        <div className="mb-2 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: c.color }} />
                          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                            {c.name}
                          </span>
                        </div>
                        <div className="font-display text-base font-bold text-foreground group-hover:text-[color:var(--teal)]">
                          {t.term}
                        </div>
                        <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{t.short}</p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <NewsletterBand />
      <Footer />
    </div>
  );
}