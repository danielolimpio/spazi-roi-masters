import { Link } from "@tanstack/react-router";
import { Eye, Clock } from "lucide-react";
import { AUTHORS, type Article } from "@/data/blog";
import { CategoryBadge } from "./category-badge";

export function ArticleCard({ article, variant = "default" }: { article: Article; variant?: "default" | "compact" | "wide" }) {
  const author = AUTHORS[article.authorSlug];

  if (variant === "compact") {
    return (
      <Link
        to="/artigo/$slug"
        params={{ slug: article.slug }}
        className="group flex gap-3 rounded-xl p-2 transition-colors hover:bg-accent"
      >
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="h-16 w-20 shrink-0 rounded-lg object-cover"
        />
        <div className="min-w-0">
          <h4 className="line-clamp-2 text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
            {article.title}
          </h4>
          <p className="mt-1 text-xs text-muted-foreground">{article.date}</p>
        </div>
      </Link>
    );
  }

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl">
      <Link to="/artigo/$slug" params={{ slug: article.slug }} className="block overflow-hidden">
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute left-3 top-3">
            <CategoryBadge category={article.category} />
          </div>
        </div>
      </Link>
      <div className="p-5">
        <Link to="/artigo/$slug" params={{ slug: article.slug }}>
          <h3 className="text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
            {article.title}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{article.excerpt}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={author.avatar} alt={author.name} loading="lazy" className="h-7 w-7 rounded-full object-cover" />
            <div className="text-xs">
              <div className="font-medium text-foreground">{author.name}</div>
              <div className="text-muted-foreground">{article.date}</div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{article.readMinutes}min</span>
            <span className="inline-flex items-center gap-1"><Eye className="h-3 w-3" />{article.views.toLocaleString("pt-BR")}</span>
          </div>
        </div>
      </div>
    </article>
  );
}