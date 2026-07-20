import heroMedical from "@/assets/hero-medical.jpg";
import imgOffice from "@/assets/img-office.jpg";
import imgRoi from "@/assets/img-roi.jpg";
import imgDental from "@/assets/img-dental.jpg";
import imgLegal from "@/assets/img-legal.jpg";
import imgAesthetic from "@/assets/img-aesthetic.jpg";
import imgRetail from "@/assets/img-retail.jpg";
import imgBlueprint from "@/assets/img-blueprint.jpg";
import imgDeal from "@/assets/img-deal.jpg";
import authorAnastasia from "@/assets/author-anastasia.jpg";
import authorMarco from "@/assets/author-marco.jpg";
import authorRicardo from "@/assets/author-ricardo.jpg";

export type CategorySlug = "roi" | "medicos" | "holding" | "due-diligence" | "cases";

export const CATEGORIES: Record<CategorySlug, { name: string; short: string; color: string; description: string }> = {
  roi: {
    name: "ROI & Rentabilidade",
    short: "ROI",
    color: "#0f766e",
    description: "Análises numéricas, cálculos de retorno e comparações de investimentos por m².",
  },
  medicos: {
    name: "Imóveis Médicos",
    short: "Médicos",
    color: "#0891b2",
    description: "Salas médicas, clínicas odontológicas e boxes de estética com aluguel garantido.",
  },
  holding: {
    name: "Holding & Jurídico",
    short: "Jurídico",
    color: "#7c2d12",
    description: "Estruturação de holding imobiliária, isenção fiscal e aspectos legais.",
  },
  "due-diligence": {
    name: "Due Diligence",
    short: "Due Diligence",
    color: "#a16207",
    description: "Checklist de análise, prevenção de inadimplência e análise de contratos.",
  },
  cases: {
    name: "Cases & Resultados",
    short: "Cases",
    color: "#166534",
    description: "Casos reais documentados, depoimentos de investidores e provas sociais.",
  },
};

export type Author = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
};

export const AUTHORS: Record<string, Author> = {
  anastasia: {
    slug: "anastasia",
    name: "Anastasia Doe",
    role: "Analista de ROI Imobiliário",
    bio: "12 anos analisando rentabilidade de imóveis comerciais em SP, RJ e MG. CFP®.",
    avatar: authorAnastasia,
  },
  marco: {
    slug: "marco-tributarista",
    name: "Marco Beneventi",
    role: "Advogado Tributário",
    bio: "Especialista em holding patrimonial e Lei 11.196/2005. OAB/SP.",
    avatar: authorMarco,
  },
  ricardo: {
    slug: "ricardo-consultor",
    name: "Ricardo Falcão",
    role: "Consultor de Due Diligence",
    bio: "Ex-auditor Big Four, hoje dedicado a análise de contratos de locação comercial.",
    avatar: authorRicardo,
  },
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: CategorySlug;
  authorSlug: keyof typeof AUTHORS;
  date: string;
  readMinutes: number;
  views: number;
  image: string;
  tags: string[];
  featured?: boolean;
};

export const ARTICLES: Article[] = [
  {
    slug: "espacos-comerciais-1-2-porcento-ao-mes",
    title: "Como espaços comerciais em Pinheiros pagam 1,2% ao mês — sem vacância",
    excerpt:
      "Estudo com 42 salas comerciais reais mostra ROI médio de 14,4% a.a. líquidos. Veja a estrutura de contrato, o m² ideal e o perfil de inquilino que sustenta o rendimento.",
    category: "roi",
    authorSlug: "anastasia",
    date: "18 Jul 2026",
    readMinutes: 9,
    views: 12480,
    image: heroMedical,
    tags: ["ROI", "aluguel comercial", "sala comercial", "Pinheiros"],
    featured: true,
  },
  {
    slug: "consultorio-medico-4200-liquidos-sp",
    title: "Como 1 consultório médico gera R$ 4.200/mês líquidos em SP (45m²)",
    excerpt: "Case documentado no Itaim Bibi: entrada de R$ 380 mil, aluguel garantido por 60 meses.",
    category: "medicos",
    authorSlug: "anastasia",
    date: "16 Jul 2026",
    readMinutes: 7,
    views: 8320,
    image: imgDental,
    tags: ["consultório médico", "ROI", "aluguel garantido"],
  },
  {
    slug: "holding-patrimonial-lei-11196",
    title: "Holding patrimonial: como a Lei 11.196/2005 zera o IR sobre aluguel",
    excerpt: "Estruturação em 4 etapas para investidores com mais de R$ 2 mi em imóveis comerciais.",
    category: "holding",
    authorSlug: "marco",
    date: "15 Jul 2026",
    readMinutes: 11,
    views: 6410,
    image: imgLegal,
    tags: ["holding", "Lei 11.196", "isenção fiscal"],
  },
  {
    slug: "checklist-due-diligence-locacao",
    title: "Checklist de due diligence: 27 pontos antes de assinar locação comercial",
    excerpt: "Do CNAE ao histórico judicial do inquilino — o que 92% dos investidores ignoram.",
    category: "due-diligence",
    authorSlug: "ricardo",
    date: "14 Jul 2026",
    readMinutes: 12,
    views: 5240,
    image: imgBlueprint,
    tags: ["due diligence", "inadimplência", "contrato"],
  },
  {
    slug: "case-4-boxes-esteticas-alphaville",
    title: "Case: 4 boxes de estética em Alphaville rendendo 15,8% a.a.",
    excerpt: "Investimento de R$ 1,4 mi, retorno líquido de R$ 18.400/mês. Contrato de 5 anos.",
    category: "cases",
    authorSlug: "anastasia",
    date: "12 Jul 2026",
    readMinutes: 8,
    views: 9870,
    image: imgAesthetic,
    tags: ["case", "estética", "ROI", "Alphaville"],
  },
  {
    slug: "sala-medica-vs-cdb-comparativo",
    title: "Sala médica vs CDB 110%: comparativo real de 10 anos (líquido de IR)",
    excerpt: "Simulação com dados de mercado — a diferença chega a R$ 780 mil em uma década.",
    category: "roi",
    authorSlug: "anastasia",
    date: "10 Jul 2026",
    readMinutes: 10,
    views: 7120,
    image: imgRoi,
    tags: ["ROI", "renda fixa", "consultório médico"],
  },
  {
    slug: "clinica-odontologica-45m2-ipiranga",
    title: "Clínica odontológica de 45m² no Ipiranga: análise linha por linha",
    excerpt: "IPTU, condomínio, reajuste IGP-M e a cláusula que garante 12 meses de aluguel.",
    category: "medicos",
    authorSlug: "ricardo",
    date: "09 Jul 2026",
    readMinutes: 9,
    views: 4380,
    image: imgDental,
    tags: ["clínica odontológica", "IGP-M", "contrato"],
  },
  {
    slug: "reajuste-igpm-vs-ipca-locacao",
    title: "IGP-M ou IPCA? O índice que protege R$ 22 mil/ano em locação comercial",
    excerpt: "Análise de 6 anos mostra qual índice vence e como negociar a cláusula.",
    category: "holding",
    authorSlug: "marco",
    date: "07 Jul 2026",
    readMinutes: 7,
    views: 3910,
    image: imgOffice,
    tags: ["IGP-M", "IPCA", "reajuste"],
  },
  {
    slug: "prevencao-inadimplencia-comercial",
    title: "Prevenção de inadimplência: 3 garantias que eliminam 94% do risco",
    excerpt: "Seguro fiança, caução e fiador PJ — qual escolher por tipo de inquilino.",
    category: "due-diligence",
    authorSlug: "ricardo",
    date: "05 Jul 2026",
    readMinutes: 8,
    views: 5670,
    image: imgLegal,
    tags: ["inadimplência", "seguro fiança", "garantias"],
  },
  {
    slug: "rentabilidade-por-m2-tabela-2026",
    title: "Rentabilidade por m² em 12 bairros de SP — tabela atualizada 2026",
    excerpt: "Do Jardim Paulista à Vila Leopoldina: R$/m² mensal, cap rate e liquidez.",
    category: "roi",
    authorSlug: "anastasia",
    date: "03 Jul 2026",
    readMinutes: 6,
    views: 11230,
    image: imgRoi,
    tags: ["ROI", "cap rate", "São Paulo"],
  },
  {
    slug: "case-holding-familia-4-imoveis",
    title: "Case: família estrutura holding com 4 imóveis e economiza R$ 118 mil/ano",
    excerpt: "Sucessão, IR e proteção patrimonial — o passo a passo real.",
    category: "cases",
    authorSlug: "marco",
    date: "01 Jul 2026",
    readMinutes: 10,
    views: 6890,
    image: imgDeal,
    tags: ["holding", "case", "sucessão"],
  },
  {
    slug: "loja-de-rua-vs-shopping-cap-rate",
    title: "Loja de rua vs shopping: qual entrega mais cap rate em 2026?",
    excerpt: "Vacância, custo operacional e liquidez de saída lado a lado.",
    category: "roi",
    authorSlug: "anastasia",
    date: "29 Jun 2026",
    readMinutes: 9,
    views: 4520,
    image: imgRetail,
    tags: ["cap rate", "loja de rua", "shopping"],
  },
  {
    slug: "analise-historico-inquilino-pj",
    title: "Como analisar o histórico de um inquilino PJ em 15 minutos",
    excerpt: "Serasa, JusBrasil, CNPJ e balanço — o método usado por gestoras.",
    category: "due-diligence",
    authorSlug: "ricardo",
    date: "27 Jun 2026",
    readMinutes: 7,
    views: 3210,
    image: imgOffice,
    tags: ["due diligence", "inquilino PJ", "análise"],
  },
  {
    slug: "locacao-built-to-suit-guia",
    title: "Built-to-Suit: como travar 15 anos de aluguel com correção anual",
    excerpt: "O contrato mais rentável do mercado — e as 3 cláusulas que não podem faltar.",
    category: "holding",
    authorSlug: "marco",
    date: "25 Jun 2026",
    readMinutes: 11,
    views: 5340,
    image: imgDeal,
    tags: ["built-to-suit", "contrato", "aluguel"],
  },
  {
    slug: "case-3-consultorios-moema-roi",
    title: "Case: 3 consultórios em Moema com ROI de 13,9% a.a. líquido",
    excerpt: "Aquisição, retrofit e locação em 90 dias. Todos os números abertos.",
    category: "cases",
    authorSlug: "anastasia",
    date: "23 Jun 2026",
    readMinutes: 9,
    views: 8710,
    image: imgDental,
    tags: ["case", "consultório médico", "Moema", "ROI"],
  },
];

export const TAGS = [
  "ROI", "aluguel comercial", "holding", "inadimplência", "consultório médico",
  "clínica odontológica", "cap rate", "IGP-M", "due diligence", "sala comercial",
  "Lei 11.196", "built-to-suit",
];

export function getArticleBySlug(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getRelatedArticles(article: Article, count = 3) {
  return ARTICLES
    .filter((a) => a.slug !== article.slug)
    .sort((a, b) => {
      const aScore = (a.category === article.category ? 2 : 0) +
        a.tags.filter((t) => article.tags.includes(t)).length;
      const bScore = (b.category === article.category ? 2 : 0) +
        b.tags.filter((t) => article.tags.includes(t)).length;
      return bScore - aScore;
    })
    .slice(0, count);
}

export function getArticlesByCategory(cat: CategorySlug) {
  return ARTICLES.filter((a) => a.category === cat);
}

export function countByCategory() {
  return Object.keys(CATEGORIES).reduce((acc, key) => {
    acc[key as CategorySlug] = getArticlesByCategory(key as CategorySlug).length;
    return acc;
  }, {} as Record<CategorySlug, number>);
}