import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Eye, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Header } from "@/components/blog/header";
import { Footer } from "@/components/blog/footer";
import { BlogSidebar } from "@/components/blog/sidebar";
import { NewsletterBand } from "@/components/blog/newsletter";
import { ArticleCard } from "@/components/blog/article-card";
import { CategoryBadge } from "@/components/blog/category-badge";
import { ARTICLES, AUTHORS } from "@/data/blog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "spazi.info — Investir em imóveis comerciais com ROI acima de 12% a.a." },
      { name: "description", content: "Análises de ROI, salas médicas, holding patrimonial e cases reais para investidores em espaços comerciais no Brasil." },
      { property: "og:title", content: "spazi.info — Investir em imóveis comerciais com ROI acima de 12% a.a." },
      { property: "og:description", content: "Análises de ROI, salas médicas, holding patrimonial e cases reais para investidores em espaços comerciais no Brasil." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const featured = ARTICLES.find((a) => a.featured)!;
  const featuredAuthor = AUTHORS[featured.authorSlug];
  const heroSideStories = ARTICLES.slice(1, 5);
  const latest = ARTICLES.slice(1, 5);
  const weekend = ARTICLES.slice(3, 8);
  const grid9 = ARTICLES.slice(5, 14);
  const fresh = ARTICLES.slice(6, 11);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="border-b border-border bg-[color:var(--cream)]">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <Link to="/artigo/$slug" params={{ slug: featured.slug }} className="group relative overflow-hidden rounded-3xl bg-card">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={featured.image} alt={featured.title} width={1600} height={900} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <CategoryBadge category={featured.category} size="md" />
                <h1 className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                  {featured.title}
                </h1>
                <div className="mt-4 flex items-center gap-3 text-sm text-white/90">
                  <img src={featuredAuthor.avatar} alt={featuredAuthor.name} className="h-8 w-8 rounded-full object-cover ring-2 ring-white/40" />
                  <span className="font-medium">{featuredAuthor.name}</span>
                  <span className="opacity-70">·</span>
                  <span>{featured.date}</span>
                  <span className="opacity-70">·</span>
                  <span className="inline-flex items-center gap-1"><Eye className="h-3.5 w-3.5" />{featured.views.toLocaleString("pt-BR")}</span>
                </div>
              </div>
            </Link>

            <div className="flex flex-col gap-3">
              {heroSideStories.map((a) => (
                <Link
                  key={a.slug}
                  to="/artigo/$slug"
                  params={{ slug: a.slug }}
                  className="group flex items-center gap-4 rounded-2xl bg-card p-3 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <img src={a.image} alt={a.title} loading="lazy" className="h-20 w-24 shrink-0 rounded-xl object-cover" />
                  <div className="min-w-0">
                    <CategoryBadge category={a.category} />
                    <h3 className="mt-1.5 line-clamp-2 text-sm font-semibold leading-snug text-foreground group-hover:text-primary">
                      {a.title}
                    </h3>
                    <div className="mt-1 text-xs text-muted-foreground">{a.date} · {a.readMinutes}min</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <SectionHeader eyebrow="Novidades da semana" title="Latest News" href="/categoria/roi" />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {latest.map((a) => <ArticleCard key={a.slug} article={a} />)}
        </div>
      </section>

      {/* WEEKEND READS */}
      <section className="bg-[color:var(--cream)] py-14">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Leituras profundas" title="Weekend Reads" href="/categoria/cases" />
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {weekend.map((a) => (
              <Link key={a.slug} to="/artigo/$slug" params={{ slug: a.slug }} className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
                <img src={a.image} alt={a.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <CategoryBadge category={a.category} />
                  <h4 className="mt-2 line-clamp-3 text-sm font-bold leading-snug">{a.title}</h4>
                  <div className="mt-1 text-[10px] opacity-80">{a.date}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-2">
            <button className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground/70 transition-colors hover:bg-accent"><ChevronLeft className="h-4 w-4" /></button>
            <button className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground/70 transition-colors hover:bg-accent"><ChevronRight className="h-4 w-4" /></button>
          </div>
        </div>
      </section>

      {/* YOU NEED TO KNOW + SIDEBAR */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <SectionHeader eyebrow="Fundamentos essenciais" title="You Need to Know" href="/categoria/due-diligence" />
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {grid9.map((a) => <ArticleCard key={a.slug} article={a} />)}
          </div>
          <BlogSidebar />
        </div>
      </section>

      {/* FRESH ARTICLES */}
      <section className="bg-[color:var(--cream)] py-14">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Publicados recentemente" title="Fresh Articles" href="/categoria/roi" />
          <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2">
            <FreshTile article={fresh[0]} className="md:col-span-2 lg:col-span-2 lg:row-span-2" tall />
            <FreshTile article={fresh[1]} />
            <FreshTile article={fresh[2]} />
            <FreshTile article={fresh[3]} />
            <FreshTile article={fresh[4]} />
          </div>
        </div>
      </section>

      <NewsletterBand />
      <Footer />
    </div>
  );
}

function SectionHeader({ eyebrow, title, href }: { eyebrow: string; title: string; href: string }) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--teal)]">{eyebrow}</div>
        <h2 className="mt-1 font-display text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
      </div>
      <a href={href} className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-[color:var(--teal)]">
        Ver todos
        <span className="grid h-8 w-8 place-items-center rounded-full border border-border transition-colors group-hover:border-[color:var(--teal)] group-hover:bg-[color:var(--teal)] group-hover:text-primary-foreground">
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </a>
    </div>
  );
}

function FreshTile({ article, className = "", tall = false }: { article: ReturnType<typeof pickArticle>; className?: string; tall?: boolean }) {
  return (
    <Link
      to="/artigo/$slug"
      params={{ slug: article.slug }}
      className={`group relative overflow-hidden rounded-2xl ${tall ? "aspect-[4/5] md:aspect-auto" : "aspect-[4/3]"} ${className}`}
    >
      <img src={article.image} alt={article.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <CategoryBadge category={article.category} />
        <h3 className={`mt-2 line-clamp-3 font-display font-bold leading-tight ${tall ? "text-2xl md:text-3xl" : "text-base"}`}>
          {article.title}
        </h3>
        <div className="mt-2 flex items-center gap-2 text-xs opacity-90">
          <span>{article.date}</span>
          <span className="opacity-60">·</span>
          <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{article.readMinutes}min</span>
        </div>
      </div>
    </Link>
  );
}

function pickArticle() { return ARTICLES[0]; }
