import { useState } from "react";

export function NewsletterBand() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  return (
    <section className="bg-[color:var(--teal-deep)] text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-14 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h3 className="font-display text-3xl font-bold">Receba análises de ROI semanalmente</h3>
          <p className="mt-2 max-w-xl text-primary-foreground/80">
            Estudos de caso reais, tabelas de rentabilidade e alertas jurídicos — direto para o e-mail de quem investe.
          </p>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setOk(true); }}
          className="flex w-full gap-2 md:w-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            className="w-full rounded-full bg-primary-foreground/10 px-5 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 outline-none ring-1 ring-primary-foreground/20 focus:ring-primary-foreground/50 md:w-96"
          />
          <button className="rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-[color:var(--teal-deep)] transition-transform hover:scale-105">
            {ok ? "Enviado ✓" : "Assinar"}
          </button>
        </form>
      </div>
    </section>
  );
}