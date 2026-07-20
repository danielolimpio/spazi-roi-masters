import { Link } from "@tanstack/react-router";
import { CATEGORIES, type CategorySlug } from "@/data/blog";

export function CategoryBadge({ category, size = "sm" }: { category: CategorySlug; size?: "sm" | "md" }) {
  const c = CATEGORIES[category];
  return (
    <Link
      to="/categoria/$slug"
      params={{ slug: category }}
      className="cat-chip transition-transform hover:scale-105"
      style={{ backgroundColor: c.color, fontSize: size === "md" ? "0.78rem" : undefined }}
    >
      {c.short}
    </Link>
  );
}