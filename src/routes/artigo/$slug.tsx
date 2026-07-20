import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/blog/header";
import { Footer } from "@/components/blog/footer";
import { BlogSidebar } from "@/components/blog/sidebar";
import { NewsletterBand } from "@/components/blog/newsletter";
import { ArticleCard } from "@/components/blog/article-card";
import { CategoryBadge } from "@/components/blog/category-badge";
import { AUTHORS, CATEGORIES, getArticleBySlug, getRelatedArticles, type Article } from "@/data/blog";
import { ChevronRight, Clock, Eye, Facebook, Linkedin, Twitter, Share2 } from "lucide-react";

export const Route = createFileRoute("/artigo/$slug")({
  loader: ({ params }) => {
    const article = getArticleBySlug(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Artigo — spazi.info" }, { name: "robots", content: "noindex" }] };
    const { article } = loaderData;
    return {
      meta: [
        { title: `${article.title} — spazi.info` },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:image", content: article.image },
        { property: "og:url", content: `/artigo/${article.slug}` },
      ],
      links: [{ rel: "canonical", href: `/artigo/${article.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.excerpt,
          datePublished: article.date,
        }),
      }],
    };
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center">Artigo não encontrado.</div>
  ),
});

function ArticlePage() {
  const { article } = Route.useLoaderData() as { article: Article };
  const author = AUTHORS[article.authorSlug];
  const cat = CATEGORIES[article.category];
  const related = getRelatedArticles(article);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="mx-auto max-w-7xl px-6 py-10">
        <nav className="mb-6 flex items-center gap-1 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/categoria/$slug" params={{ slug: article.category }} className="hover:text-foreground">{cat.name}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="line-clamp-1 font-medium text-foreground">{article.title}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <CategoryBadge category={article.category} size="md" />
            <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{article.excerpt}</p>

            <div className="mt-6 flex flex-wrap items-center gap-4 border-y border-border py-4 text-sm">
              <div className="flex items-center gap-3">
                <img src={author.avatar} alt={author.name} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-foreground">{author.name}</div>
                  <div className="text-xs text-muted-foreground">{author.role}</div>
                </div>
              </div>
              <div className="ml-auto flex items-center gap-4 text-xs text-muted-foreground">
                <span>{article.date}</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{article.readMinutes} min</span>
                <span className="inline-flex items-center gap-1"><Eye className="h-3.5 w-3.5" />{article.views.toLocaleString("pt-BR")}</span>
                <div className="flex items-center gap-1.5">
                  {[Facebook, Twitter, Linkedin, Share2].map((Icon, i) => (
                    <button key={i} aria-label="compartilhar" className="grid h-7 w-7 place-items-center rounded-full bg-accent text-foreground/70 transition-colors hover:bg-[color:var(--teal)] hover:text-primary-foreground">
                      <Icon className="h-3.5 w-3.5" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <img src={article.image} alt={article.title} className="mt-8 aspect-[16/9] w-full rounded-3xl object-cover" />

            <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert">
              <p className="text-lg leading-relaxed text-foreground/85">
                Este relatório reúne dados reais de operações fechadas nos últimos 24 meses. Os números apresentados
                são líquidos de IPTU, condomínio e taxa de administração, considerando vacância projetada de 4% e reajuste anual pelo IGP-M.
              </p>
              <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Estrutura do investimento</h2>
              <p className="text-foreground/80">
                A tese central deste artigo parte de três premissas: (1) localização com CNAE compatível com o uso comercial pretendido,
                (2) contrato mínimo de 60 meses com garantia real e (3) reajuste anual atrelado a índice negociado.
              </p>
              <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Números do case</h2>
              <ul className="text-foreground/80">
                <li>Ticket de entrada: entre R$ 350 mil e R$ 500 mil</li>
                <li>Aluguel bruto médio: 1,2% do valor do imóvel/mês</li>
                <li>ROI líquido projetado: 12,8% a 14,4% ao ano</li>
                <li>Tempo médio de ocupação: 92 dias após entrega</li>
              </ul>
              <h2 className="mt-8 font-display text-2xl font-bold text-foreground">Riscos e mitigação</h2>
              <p className="text-foreground/80">
                Vacância, inadimplência e revisional de aluguel são os três principais riscos. O checklist de due diligence
                — publicado em nossa coluna especializada — reduz esses três riscos em conjunto abaixo de 6%.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {article.tags.map((t: string) => (
                <span key={t} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground/80">#{t}</span>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="font-display text-2xl font-bold text-foreground">Artigos relacionados</h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {related.map((a) => <ArticleCard key={a.slug} article={a} />)}
              </div>
            </div>
          </div>

          <BlogSidebar />
        </div>
      </article>

      <NewsletterBand />
      <Footer />
    </div>
  );
}