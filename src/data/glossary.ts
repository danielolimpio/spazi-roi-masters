import type { CategorySlug } from "./blog";

export type GlossaryCategory = "roi" | "medical" | "legal" | "diligence" | "cases";

export const GLOSSARY_CATEGORIES: Record<GlossaryCategory, { name: string; color: string; blogCategory: CategorySlug; description: string }> = {
  roi: { name: "ROI & Métricas Financeiras", color: "#0f766e", blogCategory: "roi", description: "Retorno, yield, avaliação e métricas de fluxo de caixa que orientam decisões em imóveis comerciais." },
  medical: { name: "Imóveis Médicos e de Saúde", color: "#0891b2", blogCategory: "medicos", description: "Terminologia específica de edifícios médicos, clínicas e locatários da área da saúde." },
  legal: { name: "Jurídico, Tributário e Holding", color: "#7c2d12", blogCategory: "holding", description: "Entidades, contratos, veículos tributários e estruturas jurídicas usadas por investidores." },
  diligence: { name: "Due Diligence e Risco", color: "#a16207", blogCategory: "due-diligence", description: "Investigações, laudos e análises realizadas antes de fechar uma operação imobiliária." },
  cases: { name: "Estruturação e Cases", color: "#166534", blogCategory: "cases", description: "Capital stack, estratégia e estruturação ilustrados por operações reais." },
};

export type GlossaryTerm = {
  slug: string;
  term: string;
  category: GlossaryCategory;
  short: string;
  related: string[];
  updated: string;
};

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  { slug: "cap-rate", term: 'Cap Rate', category: "roi", short: 'Taxa de capitalização — receita operacional líquida anual dividida pelo valor do imóvel, em percentual.', related: ["cash-on-cash-return", "net-operating-income", "gross-yield"], updated: "2026-07-20" },
  { slug: "net-operating-income", term: 'Receita Operacional Líquida (NOI)', category: "roi", short: 'Receita do imóvel menos despesas operacionais, antes do serviço da dívida e impostos.', related: ["cap-rate", "effective-gross-income", "stabilized-noi"], updated: "2026-07-20" },
  { slug: "gross-rent-multiplier", term: 'Multiplicador de Aluguel Bruto', category: "roi", short: 'Preço do imóvel dividido pelo aluguel bruto anual — atalho rápido de avaliação.', related: ["cap-rate", "valuation"], updated: "2026-07-20" },
  { slug: "cash-on-cash-return", term: 'Retorno Cash-on-Cash', category: "roi", short: 'Fluxo de caixa anual antes de impostos dividido pelo capital investido, em percentual.', related: ["return-on-equity", "leverage", "internal-rate-of-return"], updated: "2026-07-20" },
  { slug: "internal-rate-of-return", term: 'Taxa Interna de Retorno (TIR)', category: "roi", short: 'Taxa de desconto que zera o valor presente líquido de todos os fluxos de caixa.', related: ["net-present-value", "cash-flow", "hold-period"], updated: "2026-07-20" },
  { slug: "net-present-value", term: 'Valor Presente Líquido (VPL)', category: "roi", short: 'Soma dos fluxos de caixa futuros descontados menos o investimento inicial.', related: ["internal-rate-of-return"], updated: "2026-07-20" },
  { slug: "yield-on-cost", term: 'Yield sobre o Custo', category: "roi", short: 'NOI estabilizado dividido pelo custo total do projeto — benchmark de retorno em desenvolvimento.', related: ["cap-rate", "stabilized-noi"], updated: "2026-07-20" },
  { slug: "equity-multiple", term: 'Múltiplo do Capital', category: "roi", short: 'Distribuições totais divididas pelo capital investido ao longo do período de hold.', related: ["internal-rate-of-return", "hold-period"], updated: "2026-07-20" },
  { slug: "debt-service-coverage-ratio", term: 'Índice de Cobertura da Dívida (DSCR)', category: "roi", short: 'NOI dividido pelo serviço anual da dívida — bancos costumam exigir acima de 1,20x.', related: ["loan-to-value", "net-operating-income"], updated: "2026-07-20" },
  { slug: "loan-to-value", term: 'Loan-to-Value (LTV)', category: "roi", short: 'Saldo da hipoteca dividido pelo valor avaliado do imóvel, em percentual.', related: ["debt-service-coverage-ratio", "leverage"], updated: "2026-07-20" },
  { slug: "gross-yield", term: 'Yield Bruto', category: "roi", short: 'Aluguel bruto anual dividido pelo preço do imóvel, antes das despesas.', related: ["cap-rate", "net-yield"], updated: "2026-07-20" },
  { slug: "net-yield", term: 'Yield Líquido', category: "roi", short: 'Renda líquida anual dividida pelo investimento total, após todas as despesas operacionais.', related: ["cap-rate", "gross-yield"], updated: "2026-07-20" },
  { slug: "occupancy-rate", term: 'Taxa de Ocupação', category: "roi", short: 'Percentual da área locável que está gerando aluguel.', related: ["vacancy-rate", "net-operating-income"], updated: "2026-07-20" },
  { slug: "vacancy-rate", term: 'Taxa de Vacância', category: "roi", short: 'Percentual da área locável desocupada em um determinado momento.', related: ["occupancy-rate", "market-analysis"], updated: "2026-07-20" },
  { slug: "rent-roll", term: 'Rent Roll (Quadro de Aluguéis)', category: "roi", short: 'Documento que lista locatários, prazos e aluguéis pagos por cada unidade do imóvel.', related: ["due-diligence", "underwriting"], updated: "2026-07-20" },
  { slug: "effective-gross-income", term: 'Receita Bruta Efetiva', category: "roi", short: 'Receita bruta potencial menos perdas com vacância e inadimplência.', related: ["net-operating-income", "underwriting"], updated: "2026-07-20" },
  { slug: "operating-expense-ratio", term: 'Índice de Despesas Operacionais', category: "roi", short: 'Despesas operacionais divididas pela receita bruta efetiva.', related: ["net-operating-income", "underwriting"], updated: "2026-07-20" },
  { slug: "hold-period", term: 'Período de Hold', category: "roi", short: 'Tempo total que o investidor pretende manter o imóvel antes de vender.', related: ["internal-rate-of-return", "exit-strategy"], updated: "2026-07-20" },
  { slug: "exit-cap-rate", term: 'Cap Rate de Saída', category: "roi", short: 'Cap rate presumido na venda, usado para projetar o valor de reversão.', related: ["cap-rate", "internal-rate-of-return"], updated: "2026-07-20" },
  { slug: "reversion-value", term: 'Valor de Reversão', category: "roi", short: 'Receita projetada da venda ao final do período de hold.', related: ["exit-cap-rate", "hold-period"], updated: "2026-07-20" },
  { slug: "pre-money-valuation", term: 'Avaliação Pré-Aporte', category: "roi", short: 'Valor do imóvel antes de novo aporte de capital ou melhorias.', related: ["valuation"], updated: "2026-07-20" },
  { slug: "stabilized-noi", term: 'NOI Estabilizado', category: "roi", short: 'NOI projetado após o lease-up e a normalização das despesas.', related: ["net-operating-income", "yield-on-cost"], updated: "2026-07-20" },
  { slug: "break-even-occupancy", term: 'Ocupação de Break-Even', category: "roi", short: 'Nível de ocupação necessário para cobrir despesas operacionais e serviço da dívida.', related: ["debt-service-coverage-ratio", "vacancy-rate"], updated: "2026-07-20" },
  { slug: "return-on-equity", term: 'Retorno sobre o Capital (ROE)', category: "roi", short: 'Retorno anual em relação ao capital próprio do investidor no imóvel.', related: ["cash-on-cash-return", "leverage"], updated: "2026-07-20" },
  { slug: "levered-irr", term: 'TIR Alavancada', category: "roi", short: 'Taxa interna de retorno calculada considerando o financiamento com dívida.', related: ["internal-rate-of-return", "leverage"], updated: "2026-07-20" },
  { slug: "medical-office-building", term: 'Edifício Médico (MOB)', category: "medical", short: 'Imóvel comercial locado principalmente para profissionais de saúde e serviços clínicos.', related: ["healthcare-real-estate", "medical-anchor-tenant"], updated: "2026-07-20" },
  { slug: "healthcare-real-estate", term: 'Imóveis de Saúde', category: "medical", short: 'Classe de imóveis ocupada por clínicas, hospitais, laboratórios e centros ambulatoriais.', related: ["medical-office-building", "specialty-clinic"], updated: "2026-07-20" },
  { slug: "outpatient-clinic", term: 'Clínica Ambulatorial', category: "medical", short: 'Estabelecimento que realiza procedimentos médicos no mesmo dia, sem internação.', related: ["medical-office-building", "specialty-clinic"], updated: "2026-07-20" },
  { slug: "specialty-clinic", term: 'Clínica Especializada', category: "medical", short: 'Espaço dedicado a uma única especialidade médica, como dermatologia ou cardiologia.', related: ["outpatient-clinic", "healthcare-real-estate"], updated: "2026-07-20" },
  { slug: "dental-suite", term: 'Suíte Odontológica', category: "medical", short: 'Sala comercial planejada para prática odontológica, com hidráulica e imagem específicas.', related: ["specialty-clinic", "build-to-suit"], updated: "2026-07-20" },
  { slug: "aesthetic-medical-space", term: 'Espaço para Medicina Estética', category: "medical", short: 'Unidade comercial projetada para procedimentos estéticos e cosméticos.', related: ["specialty-clinic"], updated: "2026-07-20" },
  { slug: "ambulatory-surgical-center", term: 'Centro Cirúrgico Ambulatorial', category: "medical", short: 'Estabelecimento licenciado para cirurgias no mesmo dia, fora do ambiente hospitalar.', related: ["outpatient-clinic"], updated: "2026-07-20" },
  { slug: "medical-anchor-tenant", term: 'Locatário Âncora de Saúde', category: "medical", short: 'Grande locatário de saúde que estabiliza um MOB inteiro com contrato de longo prazo.', related: ["medical-office-building", "credit-tenant"], updated: "2026-07-20" },
  { slug: "healthcare-triple-net-lease", term: 'Contrato NNN de Saúde', category: "medical", short: 'Locação NNN de longo prazo em que o locatário de saúde paga impostos, seguro e manutenção.', related: ["triple-net-lease", "credit-tenant"], updated: "2026-07-20" },
  { slug: "clinical-fit-out", term: 'Fit-Out Clínico', category: "medical", short: 'Obra interna que atende às normas regulatórias e de controle de infecção da saúde.', related: ["build-to-suit"], updated: "2026-07-20" },
  { slug: "diagnostic-imaging-center", term: 'Centro de Diagnóstico por Imagem', category: "medical", short: 'Estabelecimento com equipamentos de ressonância, tomografia e radiologia em salas blindadas.', related: ["specialty-clinic"], updated: "2026-07-20" },
  { slug: "physician-owned-real-estate", term: 'Imóvel de Propriedade Médica', category: "medical", short: 'Modelo em que os próprios médicos são donos do espaço comercial onde atuam.', related: ["medical-office-building"], updated: "2026-07-20" },
  { slug: "hospital-adjacent-property", term: 'Imóvel Adjacente a Hospital', category: "medical", short: 'MOB localizado próximo a um campus hospitalar, beneficiado pelo fluxo de encaminhamentos.', related: ["medical-office-building"], updated: "2026-07-20" },
  { slug: "veterinary-clinic-space", term: 'Espaço para Clínica Veterinária', category: "medical", short: 'Unidade comercial adaptada para saúde animal, canis e centros cirúrgicos.', related: ["specialty-clinic"], updated: "2026-07-20" },
  { slug: "telehealth-hub", term: 'Hub de Telemedicina', category: "medical", short: 'Espaço clínico compacto projetado para dar suporte a consultas remotas.', related: ["outpatient-clinic"], updated: "2026-07-20" },
  { slug: "holding-company", term: 'Holding Patrimonial', category: "legal", short: 'Entidade jurídica criada para deter e gerir imóveis com foco tributário e sucessório.', related: ["asset-protection", "estate-planning"], updated: "2026-07-20" },
  { slug: "special-purpose-vehicle", term: 'Sociedade de Propósito Específico (SPE)', category: "legal", short: 'Entidade jurídica isolada criada para deter um único imóvel ou investimento.', related: ["holding-company"], updated: "2026-07-20" },
  { slug: "triple-net-lease", term: 'Locação Triple-Net (NNN)', category: "legal", short: 'Contrato em que o locatário paga IPTU, seguro e manutenção do imóvel.', related: ["gross-lease", "modified-gross-lease"], updated: "2026-07-20" },
  { slug: "gross-lease", term: 'Locação Bruta', category: "legal", short: 'Contrato em que o locador cobre todas as despesas operacionais dentro de um aluguel fixo.', related: ["triple-net-lease", "modified-gross-lease"], updated: "2026-07-20" },
  { slug: "modified-gross-lease", term: 'Locação Bruta Modificada', category: "legal", short: 'Contrato híbrido em que locador e locatário dividem as despesas operacionais.', related: ["gross-lease", "triple-net-lease"], updated: "2026-07-20" },
  { slug: "build-to-suit", term: 'Built-to-Suit (BTS)', category: "legal", short: 'Imóvel desenvolvido conforme as especificações do locatário sob contrato de longo prazo.', related: ["clinical-fit-out", "credit-tenant"], updated: "2026-07-20" },
  { slug: "credit-tenant", term: 'Locatário de Alto Crédito', category: "legal", short: 'Locatário com rating de crédito investment grade que reduz o risco da receita locatícia.', related: ["triple-net-lease", "medical-anchor-tenant"], updated: "2026-07-20" },
  { slug: "lease-guarantor", term: 'Fiador do Contrato', category: "legal", short: 'Terceiro juridicamente responsável pelo aluguel em caso de inadimplência do locatário.', related: ["personal-guarantee"], updated: "2026-07-20" },
  { slug: "personal-guarantee", term: 'Garantia Pessoal', category: "legal", short: 'Compromisso pessoal do sócio de honrar obrigações locatícias da empresa.', related: ["lease-guarantor"], updated: "2026-07-20" },
  { slug: "estate-planning", term: 'Planejamento Sucessório', category: "legal", short: 'Estratégia jurídica para transmitir o patrimônio imobiliário entre gerações de forma eficiente.', related: ["holding-company", "asset-protection"], updated: "2026-07-20" },
  { slug: "asset-protection", term: 'Proteção Patrimonial', category: "legal", short: 'Estruturas jurídicas usadas para blindar imóveis de passivos pessoais ou empresariais.', related: ["holding-company", "special-purpose-vehicle"], updated: "2026-07-20" },
  { slug: "1031-exchange", term: 'Permuta 1031', category: "legal", short: 'Dispositivo tributário dos EUA que permite diferir ganho de capital em reinvestimentos similares.', related: ["capital-gains-tax", "depreciation-recapture"], updated: "2026-07-20" },
  { slug: "capital-gains-tax", term: 'Imposto sobre Ganho de Capital', category: "legal", short: 'Tributo sobre o lucro apurado na venda de um imóvel valorizado.', related: ["1031-exchange", "depreciation-recapture"], updated: "2026-07-20" },
  { slug: "depreciation-recapture", term: 'Recuperação de Depreciação', category: "legal", short: 'Imposto devido sobre a depreciação já deduzida quando o imóvel é vendido.', related: ["depreciation", "capital-gains-tax"], updated: "2026-07-20" },
  { slug: "depreciation", term: 'Depreciação', category: "legal", short: 'Dedução contábil que distribui o custo do imóvel ao longo da sua vida útil.', related: ["depreciation-recapture"], updated: "2026-07-20" },
  { slug: "due-diligence", term: 'Due Diligence', category: "diligence", short: 'Fase de investigação em que o comprador verifica dados financeiros, jurídicos e físicos do imóvel.', related: ["environmental-site-assessment", "title-search"], updated: "2026-07-20" },
  { slug: "environmental-site-assessment", term: 'Avaliação Ambiental do Imóvel', category: "diligence", short: 'Investigação que identifica riscos de contaminação no imóvel.', related: ["phase-i-esa", "due-diligence"], updated: "2026-07-20" },
  { slug: "phase-i-esa", term: 'ESA Fase I', category: "diligence", short: 'Avaliação ambiental preliminar que analisa o histórico documental do imóvel.', related: ["environmental-site-assessment"], updated: "2026-07-20" },
  { slug: "phase-ii-esa", term: 'ESA Fase II', category: "diligence", short: 'Estudo complementar com amostragem de solo e água quando há suspeita de contaminação.', related: ["phase-i-esa"], updated: "2026-07-20" },
  { slug: "title-search", term: 'Pesquisa Dominial', category: "diligence", short: 'Revisão de registros públicos que confirma titularidade e ônus sobre o imóvel.', related: ["title-insurance", "due-diligence"], updated: "2026-07-20" },
  { slug: "title-insurance", term: 'Seguro de Título', category: "diligence", short: 'Apólice que protege compradores e credores de vícios na matrícula do imóvel.', related: ["title-search"], updated: "2026-07-20" },
  { slug: "property-condition-assessment", term: 'Laudo de Condição do Imóvel', category: "diligence", short: 'Inspeção que quantifica a vida útil remanescente dos sistemas prediais.', related: ["due-diligence", "capex-reserve"], updated: "2026-07-20" },
  { slug: "estoppel-certificate", term: 'Declaração de Estoppel', category: "diligence", short: 'Declaração assinada pelo locatário confirmando os termos do contrato durante uma venda.', related: ["due-diligence", "rent-roll"], updated: "2026-07-20" },
  { slug: "snda-agreement", term: 'Acordo SNDA', category: "diligence", short: 'Acordo de subordinação, não perturbação e reconhecimento entre credor e locatário.', related: ["estoppel-certificate"], updated: "2026-07-20" },
  { slug: "survey-alta", term: 'Levantamento ALTA', category: "diligence", short: 'Levantamento topográfico detalhado nos padrões da American Land Title Association.', related: ["due-diligence"], updated: "2026-07-20" },
  { slug: "zoning-verification", term: 'Verificação de Zoneamento', category: "diligence", short: 'Confirmação de que o uso atual ou pretendido atende ao código de zoneamento municipal.', related: ["due-diligence", "entitlements"], updated: "2026-07-20" },
  { slug: "entitlements", term: 'Alvarás e Autorizações', category: "diligence", short: 'Direitos legais concedidos pelo município para desenvolver ou usar o terreno.', related: ["zoning-verification"], updated: "2026-07-20" },
  { slug: "capex-reserve", term: 'Reserva de CapEx', category: "diligence", short: 'Recursos separados para financiar melhorias e reformas futuras.', related: ["property-condition-assessment"], updated: "2026-07-20" },
  { slug: "underwriting", term: 'Underwriting Imobiliário', category: "diligence", short: 'Análise financeira que projeta receitas, despesas e retornos do imóvel.', related: ["rent-roll", "pro-forma"], updated: "2026-07-20" },
  { slug: "pro-forma", term: 'Pro Forma', category: "diligence", short: 'Demonstrativo financeiro projetado que modela o desempenho futuro do imóvel.', related: ["underwriting", "stabilized-noi"], updated: "2026-07-20" },
  { slug: "market-analysis", term: 'Análise de Mercado', category: "diligence", short: 'Estudo de oferta, demanda e aluguéis comparáveis que determinam o valor do imóvel.', related: ["comparable-sales", "vacancy-rate"], updated: "2026-07-20" },
  { slug: "comparable-sales", term: 'Vendas Comparáveis', category: "diligence", short: 'Vendas recentes de imóveis semelhantes usadas como referência de valor de mercado.', related: ["market-analysis", "appraisal"], updated: "2026-07-20" },
  { slug: "appraisal", term: 'Avaliação (Laudo)', category: "diligence", short: 'Avaliação por profissional habilitado usando métodos de renda, custo e comparação.', related: ["comparable-sales", "valuation"], updated: "2026-07-20" },
  { slug: "valuation", term: 'Valuation', category: "diligence", short: 'Processo de estimar o valor de mercado de um ativo imobiliário.', related: ["appraisal", "cap-rate"], updated: "2026-07-20" },
  { slug: "credit-check-tenant", term: 'Análise de Crédito do Locatário', category: "diligence", short: 'Análise do histórico financeiro e de pagamentos de um potencial locatário.', related: ["credit-tenant", "underwriting"], updated: "2026-07-20" },
  { slug: "rent-comps", term: 'Aluguéis Comparáveis', category: "diligence", short: 'Valores de aluguel de espaços semelhantes usados para precificar um contrato.', related: ["market-analysis"], updated: "2026-07-20" },
  { slug: "chain-of-title", term: 'Cadeia Dominial', category: "diligence", short: 'Sequência histórica de proprietários registrada nos cartórios de imóveis.', related: ["title-search"], updated: "2026-07-20" },
  { slug: "mechanic-lien", term: 'Ônus de Empreiteiro', category: "diligence", short: 'Direito legal do prestador de serviços sobre o imóvel por obras não pagas.', related: ["title-search"], updated: "2026-07-20" },
  { slug: "easement", term: 'Servidão', category: "diligence", short: 'Direito legal de usar terreno de terceiros para uma finalidade específica.', related: ["title-search"], updated: "2026-07-20" },
  { slug: "encumbrance", term: 'Ônus e Gravames', category: "diligence", short: 'Qualquer reivindicação, ônus ou restrição vinculada ao título do imóvel.', related: ["easement", "mechanic-lien"], updated: "2026-07-20" },
  { slug: "core-investment", term: 'Investimento Core', category: "cases", short: 'Imóvel estabilizado, de baixo risco, com locatários de crédito e fluxo previsível.', related: ["core-plus", "value-add"], updated: "2026-07-20" },
  { slug: "core-plus", term: 'Core Plus', category: "cases", short: 'Imóvel praticamente estabilizado, com pequeno upside via reposicionamento leve.', related: ["core-investment", "value-add"], updated: "2026-07-20" },
  { slug: "value-add", term: 'Investimento Value-Add', category: "cases", short: 'Imóvel que requer reforma ou lease-up para destravar NOI adicional.', related: ["opportunistic-investment", "core-plus"], updated: "2026-07-20" },
  { slug: "opportunistic-investment", term: 'Investimento Oportunístico', category: "cases", short: 'Estratégia de alto risco focada em desenvolvimento, distressed ou reposicionamento pesado.', related: ["value-add"], updated: "2026-07-20" },
  { slug: "distressed-asset", term: 'Ativo Distressed', category: "cases", short: 'Imóvel vendido abaixo do valor de mercado por estresse financeiro ou operacional.', related: ["opportunistic-investment", "workout"], updated: "2026-07-20" },
  { slug: "workout", term: 'Workout de Dívida', category: "cases", short: 'Renegociação entre devedor e credor para reestruturar uma dívida em dificuldade.', related: ["distressed-asset"], updated: "2026-07-20" },
  { slug: "preferred-equity", term: 'Equity Preferencial', category: "cases", short: 'Classe de investimento entre a dívida e o equity comum no capital stack.', related: ["capital-stack", "mezzanine-debt"], updated: "2026-07-20" },
  { slug: "mezzanine-debt", term: 'Dívida Mezanino', category: "cases", short: 'Financiamento subordinado, garantido por participação societária, não pelo imóvel.', related: ["preferred-equity", "capital-stack"], updated: "2026-07-20" },
  { slug: "capital-stack", term: 'Capital Stack', category: "cases", short: 'Hierarquia de dívida e equity que financia uma transação imobiliária.', related: ["preferred-equity", "mezzanine-debt"], updated: "2026-07-20" },
  { slug: "waterfall-distribution", term: 'Distribuição em Waterfall', category: "cases", short: 'Método escalonado de alocação de caixa entre investidores e sponsors.', related: ["promote", "preferred-return"], updated: "2026-07-20" },
  { slug: "preferred-return", term: 'Retorno Preferencial', category: "cases", short: 'Retorno anual mínimo pago aos investidores antes do promote do sponsor.', related: ["waterfall-distribution", "promote"], updated: "2026-07-20" },
  { slug: "promote", term: 'Promote do Sponsor', category: "cases", short: 'Parcela desproporcional dos lucros que o sponsor recebe após atingir metas de retorno.', related: ["waterfall-distribution", "preferred-return"], updated: "2026-07-20" },
  { slug: "joint-venture", term: 'Joint Venture', category: "cases", short: 'Parceria entre sponsor e investidores para adquirir um ativo específico.', related: ["capital-stack"], updated: "2026-07-20" },
  { slug: "sale-leaseback", term: 'Sale-Leaseback', category: "cases", short: 'O proprietário vende o imóvel e o aluga do comprador em contrato de longo prazo.', related: ["triple-net-lease", "credit-tenant"], updated: "2026-07-20" },
  { slug: "ground-lease", term: 'Locação de Solo', category: "cases", short: 'Locação de longo prazo apenas do terreno, com o locatário dono das benfeitorias.', related: ["build-to-suit"], updated: "2026-07-20" },
  { slug: "refinance", term: 'Refinanciamento', category: "cases", short: 'Substituição da dívida existente por novo financiamento com condições melhores.', related: ["cash-out-refinance", "loan-to-value"], updated: "2026-07-20" },
  { slug: "cash-out-refinance", term: 'Refinanciamento Cash-Out', category: "cases", short: 'Refinanciamento que devolve capital ao proprietário aproveitando a valorização do imóvel.', related: ["refinance", "loan-to-value"], updated: "2026-07-20" },
  { slug: "exit-strategy", term: 'Estratégia de Saída', category: "cases", short: 'Plano predefinido para vender, refinanciar ou recapitalizar um investimento.', related: ["hold-period", "reversion-value"], updated: "2026-07-20" },
  { slug: "cash-flow", term: 'Fluxo de Caixa', category: "cases", short: 'Caixa líquido gerado após despesas, serviço da dívida e reservas.', related: ["net-operating-income", "cash-on-cash-return"], updated: "2026-07-20" },
  { slug: "leverage", term: 'Alavancagem', category: "cases", short: 'Uso de capital de terceiros para amplificar o retorno sobre o capital próprio.', related: ["loan-to-value", "levered-irr"], updated: "2026-07-20" },
];

export function getTermBySlug(slug: string) {
  return GLOSSARY_TERMS.find((t) => t.slug === slug);
}

export function getTermsByCategory(cat: GlossaryCategory) {
  return GLOSSARY_TERMS.filter((t) => t.category === cat);
}

export function getTermsByLetter(letter: string) {
  return GLOSSARY_TERMS.filter((t) => t.term.charAt(0).toUpperCase() === letter.toUpperCase());
}

export const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function letterCounts() {
  const map: Record<string, number> = {};
  for (const l of ALPHABET) map[l] = 0;
  for (const t of GLOSSARY_TERMS) {
    const l = t.term.charAt(0).toUpperCase();
    if (map[l] !== undefined) map[l]++;
  }
  return map;
}