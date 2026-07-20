import { Link } from "@tanstack/react-router";
import { Search, Menu, TrendingUp } from "lucide-react";
import { useState } from "react";
import { CATEGORIES, type CategorySlug } from "@/data/blog";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="hidden bg-[color:var(--teal-deep)] text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <div className="flex items-center gap-2 text-white opacity-90">
            <TrendingUp className="h-3.5 w-3.5" />
            <span className="text-white">Novo relatório: <strong className="text-white">Rentabilidade por m² em SP — Q3 2026</strong></span>
          </div>
          <Link to="/newsletter" className="rounded-full bg-white/10 px-3 py-1 font-medium text-white transition-colors hover:bg-white/20">
            Baixar grátis →
          </Link>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-[color:var(--teal)] text-primary-foreground">
              <span className="font-display text-lg font-bold">s</span>
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-foreground">
              spazi<span className="text-[color:var(--teal)]">.info</span>
            </span>
          </Link>

          <nav className="ml-6 hidden items-center gap-6 text-sm font-medium text-foreground/80 lg:flex">
            <Link to="/" activeOptions={{ exact: true }} className="hover:text-foreground [&.active]:text-[color:var(--teal)]">Home</Link>
            {(Object.keys(CATEGORIES) as CategorySlug[]).map((k) => (
              <Link key={k} to="/categoria/$slug" params={{ slug: k }} className="hover:text-foreground [&.active]:text-[color:var(--teal)]">
                {CATEGORIES[k].short}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <button aria-label="Buscar" className="hidden h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:bg-accent hover:text-foreground md:inline-flex">
              <Search className="h-4 w-4" />
            </button>
            <ThemeToggle />
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 lg:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-border bg-background px-6 py-4 lg:hidden">
            <div className="flex flex-col gap-3 text-sm">
              <Link to="/" onClick={() => setOpen(false)}>Home</Link>
              {(Object.keys(CATEGORIES) as CategorySlug[]).map((k) => (
                <Link key={k} to="/categoria/$slug" params={{ slug: k }} onClick={() => setOpen(false)}>
                  {CATEGORIES[k].name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>
    </>
  );
}