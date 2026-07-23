import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight, Clock, BookOpen, ArrowRight, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import { Header } from "@/components/blog/header";
import { Footer } from "@/components/blog/footer";
import { NewsletterBand } from "@/components/blog/newsletter";
import {
  GLOSSARY_CATEGORIES,
  GLOSSARY_TERMS,
  getTermBySlug,
  type GlossaryTerm,
} from "@/data/glossary";
import { buildTermContent } from "@/lib/glossary-content";

export const Route = createFileRoute("/glossary/what-is-$term")({
  loader: ({ params }) => {
    const term = getTermBySlug(params.term);
    if (!term) throw notFound();
    return { term };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Termo não encontrado — Glossário spazi.info" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { term } = loaderData;
    const content = buildTermContent(term);
    const url = `https://spazi-roi-insight.lovable.app/glossary/what-is-${params.term}`;
    const title = `O que é ${term.term}? — Definição, Exemplo e Impacto no ROI | spazi.info`;
    const description = `${term.term}: ${term.short} Definição de nível institucional, exemplo prático, prós, contras e perguntas frequentes para imóveis comerciais.`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: `O que é ${term.term}?` },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `O que é ${term.term}?` },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            name: term.term,
            description: term.short,
            inDefinedTermSet: "https://spazi-roi-insight.lovable.app/glossary",
            url,
            termCode: term.slug,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: content.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
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
              { "@type": "ListItem", position: 2, name: "Glossário", item: "https://spazi-roi-insight.lovable.app/glossary" },
              { "@type": "ListItem", position: 3, name: term.term, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: TermPage,
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold">Termo não encontrado</h1>
        <p className="mt-2 text-muted-foreground">Este verbete do glossário não existe.</p>
        <Link to="/glossary" className="mt-4 inline-flex items-center gap-1 text-[color:var(--teal)] underline">
          Voltar ao Glossário <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  ),
});

function TermPage() {
  const { term } = Route.useLoaderData() as { term: GlossaryTerm };
  const cat = GLOSSARY_CATEGORIES[term.category];
  const content = buildTermContent(term);
  const related = term.related
    .map((s) => GLOSSARY_TERMS.find((t) => t.slug === s))
    .filter((t): t is GlossaryTerm => Boolean(t));
  const catSiblings = GLOSSARY_TERMS.filter((t) => t.category === term.category && t.slug !== term.slug).slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="mx-auto max-w-7xl px-6 py-10">
        <nav className="mb-6 flex items-center gap-1 text-xs text-muted-foreground" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/glossary" className="hover:text-foreground">Glossário</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="line-clamp-1 font-medium text-foreground">{term.term}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <header>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: cat.color }} />
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {cat.name}
                </span>
              </div>
              <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                O que é {term.term}?
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">{content.answer}</p>

              <div className="mt-6 flex flex-wrap items-center gap-4 border-y border-border py-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><BookOpen className="h-3.5 w-3.5" /> Verbete do glossário</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {content.readingMinutes} min de leitura</span>
                <span>Atualizado em {term.updated}</span>
              </div>
            </header>

            <aside className="mt-8 rounded-2xl border border-[color:var(--teal)] bg-[color:var(--teal-soft)] p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[color:var(--teal-deep)]">
                Resposta rápida
              </div>
              <p className="mt-2 text-base text-foreground">{content.quickSummary}</p>
            </aside>

            <section className="mt-10">
              <h2 className="font-display text-2xl font-bold text-foreground">Definição</h2>
              <div className="mt-4 space-y-4 text-foreground/85">
                {content.definition.map((p, i) => (
                  <p key={i} className="leading-relaxed">{p}</p>
                ))}
              </div>
            </section>

            <section className="mt-10">
              <h2 className="font-display text-2xl font-bold text-foreground">Fatos-chave</h2>
              <ul className="mt-4 space-y-2">
                {content.keyFacts.map((f, i) => (
                  <li key={i} className="flex gap-3 text-foreground/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[color:var(--teal)]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10">
              <h2 className="font-display text-2xl font-bold text-foreground">Exemplo prático</h2>
              <div className="mt-4 rounded-2xl border border-border bg-card p-6 text-foreground/85">
                {content.example}
              </div>
            </section>

            <section className="mt-10">
              <h2 className="font-display text-2xl font-bold text-foreground">Por que {term.term.toLowerCase()} importa</h2>
              <p className="mt-4 leading-relaxed text-foreground/85">{content.whyMatters}</p>
            </section>

            <section className="mt-10">
              <h2 className="font-display text-2xl font-bold text-foreground">Como funciona na prática</h2>
              <ol className="mt-4 space-y-3">
                {content.howItWorks.map((step, i) => (
                  <li key={i} className="flex gap-3 text-foreground/85">
                    <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-[color:var(--teal)] text-xs font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-[color:var(--teal)]" /> Vantagens
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-foreground/85">
                  {content.advantages.map((a, i) => (
                    <li key={i} className="flex gap-2"><span className="text-[color:var(--teal)]">+</span>{a}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
                  <XCircle className="h-5 w-5 text-destructive" /> Trade-offs
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-foreground/85">
                  {content.disadvantages.map((a, i) => (
                    <li key={i} className="flex gap-2"><span className="text-destructive">−</span>{a}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="mt-10">
              <h2 className="flex items-center gap-2 font-display text-2xl font-bold text-foreground">
                <AlertTriangle className="h-6 w-6 text-[color:var(--teal-deep)]" /> Erros comuns
              </h2>
              <ul className="mt-4 space-y-2">
                {content.mistakes.map((m, i) => (
                  <li key={i} className="rounded-lg border-l-4 border-[color:var(--teal-deep)] bg-card px-4 py-3 text-sm text-foreground/85">
                    {m}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10">
              <h2 className="font-display text-2xl font-bold text-foreground">Perguntas frequentes</h2>
              <div className="mt-4 divide-y divide-border rounded-2xl border border-border bg-card">
                {content.faqs.map((f, i) => (
                  <details key={i} className="group px-5 py-4">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-foreground">
                      {f.q}
                      <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="mt-3 text-sm text-foreground/80">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {related.length > 0 && (
              <section className="mt-12">
                <h2 className="font-display text-2xl font-bold text-foreground">Termos relacionados</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {related.map((r) => {
                    const rc = GLOSSARY_CATEGORIES[r.category];
                    return (
                      <Link
                        key={r.slug}
                        to="/glossary/what-is-$term"
                        params={{ term: r.slug }}
                        className="group rounded-xl border border-border bg-card p-4 transition-colors hover:border-[color:var(--teal)]"
                      >
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: rc.color }} />
                          {rc.name}
                        </div>
                        <div className="mt-1 font-display text-base font-bold text-foreground group-hover:text-[color:var(--teal)]">
                          {r.term}
                        </div>
                        <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{r.short}</p>
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          <aside className="space-y-6">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-border bg-card p-5">
                <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-foreground">Nesta página</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-[color:var(--teal)]">Definição</a></li>
                  <li><a href="#" className="hover:text-[color:var(--teal)]">Fatos-chave</a></li>
                  <li><a href="#" className="hover:text-[color:var(--teal)]">Exemplo prático</a></li>
                  <li><a href="#" className="hover:text-[color:var(--teal)]">Como funciona</a></li>
                  <li><a href="#" className="hover:text-[color:var(--teal)]">Vantagens e trade-offs</a></li>
                  <li><a href="#" className="hover:text-[color:var(--teal)]">Erros comuns</a></li>
                  <li><a href="#" className="hover:text-[color:var(--teal)]">Perguntas frequentes</a></li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5">
                <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-foreground">Mais em {cat.name}</h4>
                <ul className="space-y-2 text-sm">
                  {catSiblings.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to="/glossary/what-is-$term"
                        params={{ term: s.slug }}
                        className="text-foreground/85 transition-colors hover:text-[color:var(--teal)]"
                      >
                        {s.term}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/glossary"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[color:var(--teal)]"
                >
                  Ver todos os termos <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </article>

      <NewsletterBand />
      <Footer />
    </div>
  );
}