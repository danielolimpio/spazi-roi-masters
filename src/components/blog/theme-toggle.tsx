import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("spazi-theme") : null;
    const prefers = typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldDark = saved ? saved === "dark" : prefers;
    setDark(shouldDark);
    document.documentElement.classList.toggle("dark", shouldDark);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("spazi-theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Alternar tema"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:bg-accent hover:text-foreground"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}