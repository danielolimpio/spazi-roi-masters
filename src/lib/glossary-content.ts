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
    "investidores de imóveis comerciais que avaliam yield, cap rate e retorno cash-on-cash em imóveis não residenciais",
  medical:
    "proprietários e investidores que operam edifícios médicos, suítes odontológicas, clínicas estéticas e centros ambulatoriais",
  legal:
    "family offices e holdings que estruturam a titularidade de imóveis comerciais para eficiência tributária e planejamento sucessório",
  diligence:
    "compradores, corretores e analistas que conduzem due diligence de aquisição em ativos comerciais de escritório, saúde e varejo",
  cases:
    "sponsors, LPs e operadores que estruturam joint ventures, capital stacks e estratégias value-add em imóveis comerciais",
};

function pretty(term: GlossaryTerm) {
  return term.term;
}

export function buildTermContent(term: GlossaryTerm): TermContent {
  const t = pretty(term);
  const audience = CATEGORY_CONTEXT[term.category];
  const catName = GLOSSARY_CATEGORIES[term.category].name;

  const answer =
    `${t} é ${lower(term.short)} Em imóveis comerciais, é um conceito central em que ${audience} se apoiam ao analisar operações, negociar contratos e modelar retornos de longo prazo em imóveis geradores de renda.`;

  const definition = [
    `${t} refere-se a ${lower(term.short)} O conceito está no cruzamento entre finanças, locação e estrutura jurídica, e é um dos termos recorrentes na prática profissional de imóveis comerciais.`,
    `Dentro da disciplina de ${catName.toLowerCase()}, ${t.toLowerCase()} descreve um mecanismo, índice ou arranjo específico que altera materialmente como o investidor percebe risco e retorno. Entendê-lo com precisão — e não de forma aproximada — é o que separa o underwriting institucional da especulação amadora.`,
    `Como contratos de imóveis comerciais são longos e ilíquidos, uma pequena interpretação errada de ${t.toLowerCase()} pode se traduzir em diferenças relevantes de yield, TIR ou valor de reversão ao longo de todo o período de hold.`,
  ];

  const keyFacts = [
    `Pertence ao vocabulário de ${catName} usado nos fluxos de aquisição, underwriting e gestão de ativos.`,
    `Aplica-se principalmente a imóveis não residenciais geradores de renda, como consultórios médicos, salas corporativas, unidades de varejo e clínicas especializadas.`,
    `Conecta-se diretamente a conceitos como ${term.related.slice(0, 3).map((r) => humanize(r)).join(", ")}.`,
    `Aparece com frequência em memorandos de oferta, resumos contratuais, laudos de avaliação e term sheets de bancos.`,
    `Interpretar ${t.toLowerCase()} corretamente pode alterar o retorno projetado em 100–300 pontos-base em um hold típico de cinco anos.`,
  ];

  const quickSummary = `${t} — ${term.short} Investidores usam este conceito nos fluxos de ${catName.toLowerCase()} para comparar operações de forma consistente.`;

  const example = buildExample(term);

  const whyMatters =
    `Em um portfólio de imóveis comerciais que busca yields acima de 12% ao ano, toda métrica, cláusula e estrutura jurídica recorrente se acumula. ${t} afeta diretamente como ${audience} precificam risco, dimensionam dívida e negociam condições. Ignorar esse conceito — ou aplicar uma intuição de mercado residencial — é um dos motivos mais comuns pelos quais operações aparentemente atraentes ficam abaixo do pro forma. Investidores sofisticados tratam ${t.toLowerCase()} como um item de checklist que precisa estar documentado em todo memorando de oferta antes do aporte de capital.`;

  const howItWorks = [
    `Identifique o imóvel, contrato ou operação em que ${t.toLowerCase()} está sendo aplicado e reúna a documentação de suporte.`,
    `Isole as variáveis financeiras, jurídicas ou operacionais relevantes — por exemplo aluguel, despesas, crédito do locatário ou cláusulas contratuais.`,
    `Aplique a definição de forma consistente em cada operação comparável do underwriting para comparar de maneira homogênea.`,
    `Estresse a premissa flexionando vacância, reajuste de aluguel ou cap rate de saída para medir a sensibilidade do resultado a ${t.toLowerCase()}.`,
    `Documente a interpretação no memorando de investimento para que futuros gestores, auditores e LPs compartilhem o mesmo entendimento.`,
  ];

  const advantages = [
    `Padroniza a conversa entre investidores, corretores, avaliadores e bancos com o mesmo vocabulário.`,
    `Aumenta a precisão do pro forma ao ancorar premissas em um conceito bem definido.`,
    `Facilita comparar imóveis comerciais heterogêneos em mercados e classes de ativos diferentes.`,
    `Sustenta relatórios de padrão institucional para LPs, auditores e reguladores.`,
    `Reduz o risco de cláusulas ocultas ou termos mal interpretados sobreviverem no contrato assinado.`,
  ];

  const disadvantages = [
    `As definições podem variar sutilmente entre jurisdições, corretoras e modelos de bancos.`,
    `Confiar apenas em ${t.toLowerCase()}, sem cruzar com outras métricas, pode esconder risco de execução.`,
    `Benchmarks históricos podem não refletir a dinâmica atual de juros ou vacância.`,
    `Exige documentação disciplinada para evitar ambiguidade entre as partes.`,
  ];

  const mistakes = [
    `Copiar o número apresentado pelo corretor sem validar o rent roll e a planilha de despesas.`,
    `Confundir ${t.toLowerCase()} com um conceito de mercado residencial parecido apenas na superfície.`,
    `Ignorar como ${t.toLowerCase()} interage com termos relacionados como ${term.related.slice(0, 2).map((r) => humanize(r)).join(" e ")}.`,
    `Deixar de reconciliar a premissa do pro forma com contratos assinados e declarações de estoppel.`,
    `Aplicar um único benchmark a submercados ou classes de ativos radicalmente diferentes.`,
  ];

  const faqs = [
    {
      q: `O que significa ${t} em imóveis comerciais?`,
      a: `${t} significa ${lower(term.short)} É um conceito bem definido que ${audience} aplicam ao analisar, estruturar ou reportar imóveis não residenciais geradores de renda.`,
    },
    {
      q: `Como ${t} difere da prática do mercado residencial?`,
      a: `Operações comerciais são analisadas pela renda e pelo crédito do contrato, não por casas comparáveis. Isso faz com que ${t.toLowerCase()} tenha implicações diferentes de preço, financiamento e saída em relação ao equivalente residencial — se é que existe.`,
    },
    {
      q: `Onde ${t} costuma ser documentado?`,
      a: `Você encontra ${t.toLowerCase()} em memorandos de oferta, resumos de contratos, laudos de avaliação, term sheets de bancos e memorandos de comitê. Operadores institucionais mantêm a mesma interpretação em todos os documentos.`,
    },
    {
      q: `Como ${t} afeta o ROI projetado?`,
      a: `Pequenas variações em ${t.toLowerCase()} podem mover a TIR alavancada e o cash-on-cash em centenas de pontos-base num hold típico de cinco anos, especialmente combinado a premissas correlatas como ${humanize(term.related[0] ?? "cap-rate")}.`,
    },
    {
      q: `Quais termos relacionados o investidor deve estudar junto com ${t}?`,
      a: `Comece por ${term.related.map((r) => humanize(r)).join(", ")}. Dominar o conjunto oferece um modelo mental muito mais preciso do que estudar ${t.toLowerCase()} isoladamente.`,
    },
  ];

  const furtherReading = [
    `Aprofundamento: como ${t.toLowerCase()} molda o underwriting em ${catName.toLowerCase()}`,
    `Playbook: como ler ${t.toLowerCase()} em um memorando de oferta institucional`,
    `Checklist: como validar ${t.toLowerCase()} durante a due diligence de aquisição`,
  ];

  const references = [
    `Manual de Real Estate Institucional — capítulo sobre ${catName.toLowerCase()}.`,
    `Publicações do Appraisal Institute sobre avaliação de imóveis comerciais.`,
    `Pesquisa interna spazi.info sobre yields comerciais acima de 12% ao ano.`,
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
  return `Considere um edifício médico estabilizado de 1.200 m² adquirido por R$ 27 milhões, com receita operacional líquida estabilizada de R$ 2,43 milhões ao ano. Quando o investidor avalia essa operação, ${t.toLowerCase()} tem um papel específico na construção da projeção: altera o numerador, o denominador, o perfil de risco ou o envelope jurídico do fluxo de caixa. Compradores institucionais documentam exatamente como ${t.toLowerCase()} foi interpretado para que o relatório ao LP, o memorando de crédito do banco e o laudo de avaliação conciliem linha a linha.`;
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