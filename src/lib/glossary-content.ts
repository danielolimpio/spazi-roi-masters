import { GLOSSARY_TERMS, GLOSSARY_CATEGORIES, getTermBySlug, type GlossaryTerm } from "@/data/glossary";

/**
 * Generate rich, structured content for each glossary term on demand.
 * Keeps the term catalog compact while producing SEO-ready long-form pages.
 */

export type TermContent = {
  answer: string;
  definition: string[];
  keyFacts: string[];
  quickSummary: string;
  example: string;
  whyMatters: string;
  howItWorks: string[];
  advantages: string[];
  disadvantages: string[];
  mistakes: string[];
  faqs: { q: string; a: string }[];
  furtherReading: string[];
  references: string[];
  readingMinutes: number;
};

const CATEGORY_CONTEXT: Record<string, string> = {
  roi:
    "commercial real estate investors evaluating rental yield, cap rate and cash-on-cash performance on non-residential properties",
  medical:
    "landlords and investors operating medical office buildings, dental suites, aesthetic clinics and outpatient facilities",
  legal:
    "family offices and holding companies structuring commercial real estate ownership for tax efficiency and estate planning",
  diligence:
    "buyers, brokers and analysts running acquisition due diligence on office, medical and retail commercial assets",
  cases:
    "sponsors, LPs and operators structuring joint ventures, capital stacks and value-add strategies on commercial properties",
};

function pretty(term: GlossaryTerm) {
  return term.term;
}

function pluralish(t: string) {
  return /s$/i.test(t) ? t : `${t}s`;
}

export function buildTermContent(term: GlossaryTerm): TermContent {
  const t = pretty(term);
  const audience = CATEGORY_CONTEXT[term.category];
  const catName = GLOSSARY_CATEGORIES[term.category].name;

  const answer =
    `${t} is ${lower(term.short)} In commercial real estate, it is a core concept ${audience} rely on when underwriting deals, negotiating leases, and modeling long-term returns on income-producing properties.`;

  const definition = [
    `${t} refers to ${lower(term.short)} The concept sits at the intersection of finance, leasing and legal structure, and is one of the recurring vocabulary items in professional commercial real estate practice.`,
    `Within the ${catName.toLowerCase()} discipline, ${t.toLowerCase()} is used to describe a specific mechanism, ratio or arrangement that materially changes how an investor perceives risk and reward. Understanding it precisely — rather than approximately — is what separates institutional-grade underwriting from retail-style speculation.`,
    `Because commercial real estate contracts are long-dated and illiquid, a small misinterpretation of ${t.toLowerCase()} can translate into meaningful basis-point differences in yield, IRR, or reversion value over a full hold period.`,
  ];

  const keyFacts = [
    `Belongs to the ${catName} vocabulary set used across acquisition, underwriting and asset management workflows.`,
    `Applies primarily to non-residential income-producing properties such as medical offices, corporate suites, retail units and specialty clinics.`,
    `Directly connects to related concepts including ${term.related.slice(0, 3).map((r) => humanize(r)).join(", ")}.`,
    `Frequently appears in offering memoranda, lease abstracts, appraisal reports and lender term sheets.`,
    `Correctly interpreting ${t.toLowerCase()} can shift projected returns by 100–300 basis points on a typical five-year hold.`,
  ];

  const quickSummary = `${t} — ${term.short} Investors use it inside ${catName.toLowerCase()} workflows to compare deals on a consistent, apples-to-apples basis.`;

  const example = buildExample(term);

  const whyMatters =
    `In a commercial real estate portfolio targeting yields above 12% per year, every recurring metric, clause and legal structure compounds. ${t} directly affects how ${audience} price risk, size debt, and negotiate terms. Ignoring it — or applying a residential-market intuition to it — is one of the most common reasons otherwise attractive deals underperform their pro forma. Sophisticated investors treat ${t.toLowerCase()} as a checklist item that must be documented explicitly in every offering memorandum before capital is committed.`;

  const howItWorks = [
    `Identify the property, lease or transaction where ${t.toLowerCase()} is being applied and gather the underlying documentation.`,
    `Isolate the relevant financial, legal or operational inputs — for example rent, expenses, tenant credit or lease clauses.`,
    `Apply the definition consistently across every comparable in the underwriting set so that deals can be benchmarked on an apples-to-apples basis.`,
    `Stress-test the assumption by flexing vacancy, rent growth or exit cap rate to see how sensitive the outcome is to ${t.toLowerCase()}.`,
    `Document the interpretation in the investment memo so future asset managers, auditors and LPs share the same understanding.`,
  ];

  const advantages = [
    `Standardizes conversations between investors, brokers, appraisers and lenders using the same vocabulary.`,
    `Improves the accuracy of pro forma modeling by tying assumptions to a well-defined concept.`,
    `Makes it easier to compare heterogeneous commercial properties across markets and asset classes.`,
    `Supports institutional-grade reporting to LPs, auditors and regulators.`,
    `Reduces the risk of hidden clauses or misunderstood terms surviving into signed contracts.`,
  ];

  const disadvantages = [
    `Definitions can drift subtly between jurisdictions, brokerages and lender templates.`,
    `Over-relying on ${t.toLowerCase()} in isolation, without cross-checking against other metrics, can hide execution risk.`,
    `Historical benchmarks may not reflect current interest-rate or vacancy dynamics.`,
    `Requires disciplined documentation to avoid ambiguity between counterparties.`,
  ];

  const mistakes = [
    `Copying a broker's stated figure without verifying the underlying rent roll and expense schedule.`,
    `Confusing ${t.toLowerCase()} with a superficially similar residential-market concept.`,
    `Ignoring how ${t.toLowerCase()} interacts with related terms such as ${term.related.slice(0, 2).map((r) => humanize(r)).join(" and ")}.`,
    `Failing to reconcile the pro forma assumption with signed lease documents and estoppel certificates.`,
    `Applying a single benchmark across radically different submarkets or asset classes.`,
  ];

  const faqs = [
    {
      q: `What does ${t} mean in commercial real estate?`,
      a: `${t} means ${lower(term.short)} It is a defined concept ${audience} apply when underwriting, structuring or reporting on non-residential income-producing property.`,
    },
    {
      q: `How is ${t} different from residential real estate practice?`,
      a: `Commercial deals are underwritten on income and lease credit, not on comparable single-family homes. That means ${t.toLowerCase()} carries different implications for pricing, financing, and exit compared to the residential equivalent — if one exists at all.`,
    },
    {
      q: `Where is ${t} typically documented?`,
      a: `You will find ${t.toLowerCase()} referenced in offering memoranda, lease abstracts, appraisal reports, lender term sheets and investment committee memos. Institutional operators keep the specific interpretation consistent across every document.`,
    },
    {
      q: `How does ${t} affect projected ROI?`,
      a: `Even small changes to ${t.toLowerCase()} can move levered IRR and cash-on-cash by hundreds of basis points on a typical five-year hold, especially when combined with related assumptions like ${humanize(term.related[0] ?? "cap-rate")}.`,
    },
    {
      q: `Which related terms should investors learn alongside ${t}?`,
      a: `Start with ${term.related.map((r) => humanize(r)).join(", ")}. Mastering the cluster gives a much more accurate mental model than studying ${t.toLowerCase()} in isolation.`,
    },
  ];

  const furtherReading = [
    `Deep Dive: how ${t.toLowerCase()} shapes underwriting in ${catName.toLowerCase()}`,
    `Playbook: reading ${t.toLowerCase()} on an institutional offering memorandum`,
    `Checklist: verifying ${t.toLowerCase()} during acquisition due diligence`,
  ];

  const references = [
    `Institutional Real Estate Handbook — chapter on ${catName.toLowerCase()}.`,
    `Appraisal Institute publications on commercial valuation.`,
    `Internal spazi.info research on commercial yields above 12% per year.`,
  ];

  const readingMinutes = 6;

  return {
    answer,
    definition,
    keyFacts,
    quickSummary,
    example,
    whyMatters,
    howItWorks,
    advantages,
    disadvantages,
    mistakes,
    faqs,
    furtherReading,
    references,
    readingMinutes,
  };
}

function buildExample(term: GlossaryTerm) {
  const t = term.term;
  return `Consider a stabilized 1,200 m² medical office building acquired for USD 5.4M with a stabilized net operating income of USD 486,000. When an investor evaluates the deal, ${t.toLowerCase()} plays a specific role in how the projection is built: it either changes the numerator, the denominator, the risk profile, or the legal wrapper around the cash flow. Institutional buyers document exactly how ${t.toLowerCase()} was interpreted so that the LP report, the lender's credit memo and the appraisal all reconcile line by line.`;
}

function humanize(slug: string) {
  const t = getTermBySlug(slug);
  if (t) return t.term;
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function lower(s: string) {
  return s.charAt(0).toLowerCase() + s.slice(1);
}

/**
 * Naive semantic linker: scan article-like text and wrap the first mention of
 * each glossary term with a link to the glossary hub.
 */
export function linkifyGlossaryTerms(text: string): { html: string; matches: string[] } {
  const matches: string[] = [];
  let html = text;
  const seen = new Set<string>();
  const sorted = [...GLOSSARY_TERMS].sort((a, b) => b.term.length - a.term.length);
  for (const term of sorted) {
    if (seen.has(term.slug)) continue;
    const regex = new RegExp(`\\b(${escapeRegex(term.term)})\\b`, "i");
    if (regex.test(html)) {
      html = html.replace(
        regex,
        `<a class="text-[color:var(--teal)] underline underline-offset-2 hover:opacity-80" href="/glossary/what-is-${term.slug}">$1</a>`,
      );
      matches.push(term.slug);
      seen.add(term.slug);
    }
  }
  return { html, matches };
}

function escapeRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}