import { Link } from "@tanstack/react-router";
import { AUTHORS, ARTICLES, CATEGORIES, type CategorySlug } from "@/data/blog";

export function Footer() {
  const author = AUTHORS.anastasia;
  const latest = ARTICLES.slice(0, 5);
  return (
    <footer className="border-t border-border bg-[color:var(--cream)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <img src={author.avatar} alt={author.name} className="h-14 w-14 rounded-full object-cover" />
            <div>
              <div className="font-semibold text-foreground">{author.name}</div>
              <div className="text-xs text-muted-foreground">{author.role}</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            spazi.info é o hub de referência para investidores que buscam ROI acima de 12% ao ano em espaços comerciais não-residenciais.
          </p>
        </div>

        <div>
          <h5 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">Trending Categories</h5>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {(Object.keys(CATEGORIES) as CategorySlug[]).map((k) => (
              <li key={k}>
                <Link to="/categoria/$slug" params={{ slug: k }} className="transition-colors hover:text-[color:var(--teal)]">
                  {CATEGORIES[k].name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">Latest Posts</h5>
          <ul className="space-y-3 text-sm">
            {latest.map((a) => (
              <li key={a.slug}>
                <Link to="/artigo/$slug" params={{ slug: a.slug }} className="line-clamp-2 text-foreground/80 transition-colors hover:text-[color:var(--teal)]">
                  {a.title}
                </Link>
                <div className="mt-0.5 text-xs text-muted-foreground">{a.date}</div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">Sitemap</h5>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/glossary">Glossário</Link></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Autores</a></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Termos de Uso</a></li>
            <li><a href="#">Política de Privacidade</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 text-xs text-muted-foreground md:flex-row">
          <span>© 2026 spazi.info — Todos os direitos reservados.</span>
          <span>Feito para investidores qualificados. Nada aqui é recomendação individual de investimento.</span>
        </div>
      </div>
    </footer>
  );
}