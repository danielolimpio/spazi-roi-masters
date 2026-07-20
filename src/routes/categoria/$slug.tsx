import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/blog/header";
import { Footer } from "@/components/blog/footer";
import { BlogSidebar } from "@/components/blog/sidebar";
import { NewsletterBand } from "@/components/blog/newsletter";
import { ArticleCard } from "@/components/blog/article-card";
import { CATEGORIES, getArticlesByCategory, type CategorySlug } from "@/data/blog";
import { ChevronRight } from "lucide-react";

export const Route = createFileRoute("/categoria/$slug")({
  loader: ({ params }) => {
    if (!(params.slug in CATEGORIES)) throw notFound();
    return { slug: params.slug as CategorySlug };
  },
  head: ({ params }) => {
    const cat = CATEGORIES[params.slug as CategorySlug];
    if (!cat) return { meta: [{ title: "Categoria — spazi.info" }] };
    return {
      meta: [
        { title: `${cat.name} — spazi.info` },
        { name: "description", content: cat.description },
        { property: "og:title", content: `${cat.name} — spazi.info` },
        { property: "og:description", content: cat.description },
        { property: "og:url", content: `/categoria/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/categoria/${params.slug}` }],
    };
  },
  component: CategoryPage,
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center">Categoria não encontrada.</div>
  ),
});

function CategoryPage() {
  const data = Route.useLoaderData() as { slug: CategorySlug };
  const cat = CATEGORIES[data.slug];
  const articles = getArticlesByCategory(data.slug);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="border-b border-border bg-[color:var(--cream)]">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <nav className="mb-4 flex items-center gap-1 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">Categorias</span>
            <ChevronRight className="h-3 w-3" />
            <span className="font-medium text-foreground">{cat.name}</span>
          </nav>
          <div className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white" style={{ backgroundColor: cat.color }}>
            {cat.short}
          </div>
          <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">{cat.name}</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">{cat.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="grid gap-6 sm:grid-cols-2">
            {articles.map((a) => <ArticleCard key={a.slug} article={a} />)}
            {articles.length === 0 && (
              <div className="rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
                Ainda não há artigos publicados nesta categoria.
              </div>
            )}
          </div>
          <BlogSidebar />
        </div>
      </section>

      <NewsletterBand />
      <Footer />
    </div>
  );
}