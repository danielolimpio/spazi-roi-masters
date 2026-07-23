import type { CategorySlug } from "./blog";

export type GlossaryCategory = "roi" | "medical" | "legal" | "diligence" | "cases";

export const GLOSSARY_CATEGORIES: Record<GlossaryCategory, { name: string; color: string; blogCategory: CategorySlug; description: string }> = {
  roi: { name: "ROI & Financial Metrics", color: "#0f766e", blogCategory: "roi", description: "Return, yield, valuation and cash-flow metrics that drive commercial real estate decisions." },
  medical: { name: "Medical & Healthcare CRE", color: "#0891b2", blogCategory: "medicos", description: "Terminology specific to medical office buildings, clinics and healthcare tenants." },
  legal: { name: "Legal, Tax & Holding", color: "#7c2d12", blogCategory: "holding", description: "Entities, leases, tax vehicles and legal structures used by CRE investors." },
  diligence: { name: "Due Diligence & Risk", color: "#a16207", blogCategory: "due-diligence", description: "Investigations, reports and analyses performed before closing a CRE deal." },
  cases: { name: "Deal Structuring & Cases", color: "#166534", blogCategory: "cases", description: "Capital-stack, strategy and structuring concepts illustrated by real deals." },
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
  { slug: "cap-rate", term: 'Cap Rate', category: "roi", short: 'Capitalization rate — annual net operating income divided by property value, expressed as a percentage.', related: ["ROI", "NOI", "yield"], updated: "2026-07-20" },
  { slug: "net-operating-income", term: 'Net Operating Income', category: "roi", short: 'Property revenue minus operating expenses, before debt service and taxes.', related: ["NOI", "cap-rate", "gross-rent"], updated: "2026-07-20" },
  { slug: "gross-rent-multiplier", term: 'Gross Rent Multiplier', category: "roi", short: 'Property price divided by annual gross rent — a quick valuation shortcut.', related: ["cap-rate", "valuation"], updated: "2026-07-20" },
  { slug: "cash-on-cash-return", term: 'Cash-on-Cash Return', category: "roi", short: 'Annual pre-tax cash flow divided by total cash invested, expressed as a percentage.', related: ["ROI", "leverage", "IRR"], updated: "2026-07-20" },
  { slug: "internal-rate-of-return", term: 'Internal Rate of Return', category: "roi", short: 'Discount rate that makes the net present value of all cash flows equal zero.', related: ["NPV", "cash-flow", "hold-period"], updated: "2026-07-20" },
  { slug: "net-present-value", term: 'Net Present Value', category: "roi", short: 'Sum of all discounted future cash flows minus initial investment.', related: ["IRR", "discount-rate"], updated: "2026-07-20" },
  { slug: "yield-on-cost", term: 'Yield on Cost', category: "roi", short: 'Stabilized NOI divided by total project cost, used to benchmark development returns.', related: ["cap-rate", "development"], updated: "2026-07-20" },
  { slug: "equity-multiple", term: 'Equity Multiple', category: "roi", short: 'Total cash distributions divided by total equity invested over the hold period.', related: ["IRR", "hold-period"], updated: "2026-07-20" },
  { slug: "debt-service-coverage-ratio", term: 'Debt Service Coverage Ratio', category: "roi", short: 'NOI divided by annual debt service — lenders require this to exceed 1.20x typically.', related: ["DSCR", "financing", "NOI"], updated: "2026-07-20" },
  { slug: "loan-to-value", term: 'Loan-to-Value Ratio', category: "roi", short: 'Mortgage balance divided by appraised property value, expressed as a percentage.', related: ["LTV", "financing"], updated: "2026-07-20" },
  { slug: "gross-yield", term: 'Gross Yield', category: "roi", short: 'Annual gross rent divided by property price, before expenses.', related: ["cap-rate", "net-yield"], updated: "2026-07-20" },
  { slug: "net-yield", term: 'Net Yield', category: "roi", short: 'Annual net income divided by total investment, after all operating costs.', related: ["cap-rate", "gross-yield"], updated: "2026-07-20" },
  { slug: "occupancy-rate", term: 'Occupancy Rate', category: "roi", short: 'Percentage of leasable space currently generating rent.', related: ["vacancy-rate", "NOI"], updated: "2026-07-20" },
  { slug: "vacancy-rate", term: 'Vacancy Rate', category: "roi", short: 'Percentage of leasable space unoccupied at a given time.', related: ["occupancy-rate", "market-analysis"], updated: "2026-07-20" },
  { slug: "rent-roll", term: 'Rent Roll', category: "roi", short: 'Document listing tenants, lease terms, and rent paid for each unit in a property.', related: ["due-diligence", "underwriting"], updated: "2026-07-20" },
  { slug: "effective-gross-income", term: 'Effective Gross Income', category: "roi", short: 'Gross potential income minus vacancy and credit losses.', related: ["NOI", "underwriting"], updated: "2026-07-20" },
  { slug: "operating-expense-ratio", term: 'Operating Expense Ratio', category: "roi", short: 'Operating expenses divided by effective gross income.', related: ["NOI", "underwriting"], updated: "2026-07-20" },
  { slug: "hold-period", term: 'Hold Period', category: "roi", short: 'Total time an investor plans to own a property before selling.', related: ["IRR", "exit-strategy"], updated: "2026-07-20" },
  { slug: "exit-cap-rate", term: 'Exit Cap Rate', category: "roi", short: 'Assumed cap rate at sale, used to project reversion value.', related: ["cap-rate", "IRR"], updated: "2026-07-20" },
  { slug: "reversion-value", term: 'Reversion Value', category: "roi", short: 'Projected sale proceeds at the end of a hold period.', related: ["exit-cap-rate", "hold-period"], updated: "2026-07-20" },
  { slug: "pre-money-valuation", term: 'Pre-Money Valuation', category: "roi", short: 'Property value before new equity or capital improvements are added.', related: ["valuation"], updated: "2026-07-20" },
  { slug: "stabilized-noi", term: 'Stabilized NOI', category: "roi", short: 'Projected NOI after lease-up and expense normalization.', related: ["NOI", "yield-on-cost"], updated: "2026-07-20" },
  { slug: "break-even-occupancy", term: 'Break-Even Occupancy', category: "roi", short: 'Occupancy level needed to cover all operating expenses and debt service.', related: ["DSCR", "vacancy-rate"], updated: "2026-07-20" },
  { slug: "return-on-equity", term: 'Return on Equity', category: "roi", short: "Annual return relative to the investor's equity in a property.", related: ["cash-on-cash-return", "leverage"], updated: "2026-07-20" },
  { slug: "levered-irr", term: 'Levered IRR', category: "roi", short: 'Internal rate of return calculated with debt financing included.', related: ["IRR", "leverage"], updated: "2026-07-20" },
  { slug: "medical-office-building", term: 'Medical Office Building', category: "medical", short: 'Commercial property leased primarily to healthcare providers and clinical services.', related: ["MOB", "healthcare-real-estate"], updated: "2026-07-20" },
  { slug: "healthcare-real-estate", term: 'Healthcare Real Estate', category: "medical", short: 'Property class occupied by clinics, hospitals, labs and outpatient facilities.', related: ["medical-office-building", "specialty-clinic"], updated: "2026-07-20" },
  { slug: "outpatient-clinic", term: 'Outpatient Clinic', category: "medical", short: 'Facility providing same-day medical procedures without overnight stay.', related: ["medical-office-building", "specialty-clinic"], updated: "2026-07-20" },
  { slug: "specialty-clinic", term: 'Specialty Clinic', category: "medical", short: 'Dedicated space for a single medical specialty such as dermatology or cardiology.', related: ["outpatient-clinic", "healthcare-real-estate"], updated: "2026-07-20" },
  { slug: "dental-suite", term: 'Dental Suite', category: "medical", short: 'Purpose-built office space configured for dental practice, plumbing and imaging.', related: ["specialty-clinic", "build-to-suit"], updated: "2026-07-20" },
  { slug: "aesthetic-medical-space", term: 'Aesthetic Medical Space', category: "medical", short: 'Commercial unit designed for aesthetic and cosmetic procedures.', related: ["specialty-clinic"], updated: "2026-07-20" },
  { slug: "ambulatory-surgical-center", term: 'Ambulatory Surgical Center', category: "medical", short: 'Licensed facility for same-day surgical care outside a hospital.', related: ["outpatient-clinic"], updated: "2026-07-20" },
  { slug: "medical-anchor-tenant", term: 'Medical Anchor Tenant', category: "medical", short: 'Large healthcare tenant that stabilizes an entire MOB with long-term credit.', related: ["medical-office-building", "credit-tenant"], updated: "2026-07-20" },
  { slug: "healthcare-triple-net-lease", term: 'Healthcare Triple-Net Lease', category: "medical", short: 'Long-term NNN lease where a healthcare tenant pays taxes, insurance and maintenance.', related: ["triple-net-lease", "credit-tenant"], updated: "2026-07-20" },
  { slug: "clinical-fit-out", term: 'Clinical Fit-Out', category: "medical", short: 'Interior build-out meeting healthcare regulatory and infection-control standards.', related: ["tenant-improvement", "build-to-suit"], updated: "2026-07-20" },
  { slug: "diagnostic-imaging-center", term: 'Diagnostic Imaging Center', category: "medical", short: 'Facility housing MRI, CT and radiology equipment requiring shielded rooms.', related: ["specialty-clinic"], updated: "2026-07-20" },
  { slug: "physician-owned-real-estate", term: 'Physician-Owned Real Estate', category: "medical", short: 'Model in which doctors own the commercial space they practice from.', related: ["medical-office-building"], updated: "2026-07-20" },
  { slug: "hospital-adjacent-property", term: 'Hospital-Adjacent Property', category: "medical", short: 'MOB located near a hospital campus, benefiting from referral traffic.', related: ["medical-office-building"], updated: "2026-07-20" },
  { slug: "veterinary-clinic-space", term: 'Veterinary Clinic Space', category: "medical", short: 'Commercial unit adapted for animal healthcare, kennels and surgery.', related: ["specialty-clinic"], updated: "2026-07-20" },
  { slug: "telehealth-hub", term: 'Telehealth Hub', category: "medical", short: 'Compact clinical space designed to support remote consultations.', related: ["outpatient-clinic"], updated: "2026-07-20" },
  { slug: "holding-company", term: 'Holding Company', category: "legal", short: 'Legal entity created to own and manage real estate assets for tax and estate planning.', related: ["asset-protection", "estate-planning"], updated: "2026-07-20" },
  { slug: "special-purpose-vehicle", term: 'Special Purpose Vehicle', category: "legal", short: 'Isolated legal entity created to hold a single property or investment.', related: ["holding-company"], updated: "2026-07-20" },
  { slug: "triple-net-lease", term: 'Triple-Net Lease', category: "legal", short: 'Lease in which the tenant pays property taxes, insurance and maintenance.', related: ["NNN", "gross-lease"], updated: "2026-07-20" },
  { slug: "gross-lease", term: 'Gross Lease', category: "legal", short: 'Lease where the landlord covers all operating expenses out of a fixed rent.', related: ["triple-net-lease", "modified-gross-lease"], updated: "2026-07-20" },
  { slug: "modified-gross-lease", term: 'Modified Gross Lease', category: "legal", short: 'Hybrid lease where landlord and tenant split operating expenses.', related: ["gross-lease", "triple-net-lease"], updated: "2026-07-20" },
  { slug: "build-to-suit", term: 'Build-to-Suit', category: "legal", short: "Property developed to a specific tenant's specifications under a long-term lease.", related: ["clinical-fit-out", "credit-tenant"], updated: "2026-07-20" },
  { slug: "credit-tenant", term: 'Credit Tenant', category: "legal", short: 'Tenant with an investment-grade credit rating that de-risks lease income.', related: ["triple-net-lease", "medical-anchor-tenant"], updated: "2026-07-20" },
  { slug: "lease-guarantor", term: 'Lease Guarantor', category: "legal", short: 'Third party legally responsible for rent if the tenant defaults.', related: ["security-deposit", "personal-guarantee"], updated: "2026-07-20" },
  { slug: "personal-guarantee", term: 'Personal Guarantee', category: "legal", short: 'Personal commitment by a business owner to cover corporate lease obligations.', related: ["lease-guarantor"], updated: "2026-07-20" },
  { slug: "estate-planning", term: 'Estate Planning', category: "legal", short: 'Legal strategy to transfer real estate wealth across generations tax-efficiently.', related: ["holding-company", "asset-protection"], updated: "2026-07-20" },
  { slug: "asset-protection", term: 'Asset Protection', category: "legal", short: 'Legal structures used to shield real estate from personal or corporate liabilities.', related: ["holding-company", "special-purpose-vehicle"], updated: "2026-07-20" },
  { slug: "1031-exchange", term: '1031 Exchange', category: "legal", short: 'US tax provision allowing deferral of capital gains when reinvesting in like-kind property.', related: ["capital-gains", "tax-deferral"], updated: "2026-07-20" },
  { slug: "capital-gains-tax", term: 'Capital Gains Tax', category: "legal", short: 'Tax on the profit realized from selling an appreciated real estate asset.', related: ["1031-exchange", "depreciation-recapture"], updated: "2026-07-20" },
  { slug: "depreciation-recapture", term: 'Depreciation Recapture', category: "legal", short: 'Tax owed on previously deducted depreciation when a property is sold.', related: ["depreciation", "capital-gains-tax"], updated: "2026-07-20" },
  { slug: "depreciation", term: 'Depreciation', category: "legal", short: "Accounting deduction that spreads a property's cost over its useful life.", related: ["depreciation-recapture", "cost-segregation"], updated: "2026-07-20" },
  { slug: "due-diligence", term: 'Due Diligence', category: "diligence", short: 'Investigation phase where buyers verify financial, legal, and physical property claims.', related: ["environmental-review", "title-search"], updated: "2026-07-20" },
  { slug: "environmental-site-assessment", term: 'Environmental Site Assessment', category: "diligence", short: 'Investigation identifying contamination risks on a property.', related: ["Phase-I", "due-diligence"], updated: "2026-07-20" },
  { slug: "phase-i-esa", term: 'Phase I ESA', category: "diligence", short: 'Baseline environmental assessment reviewing historical property records.', related: ["environmental-site-assessment"], updated: "2026-07-20" },
  { slug: "phase-ii-esa", term: 'Phase II ESA', category: "diligence", short: 'Follow-up study with soil and groundwater sampling when contamination is suspected.', related: ["phase-i-esa"], updated: "2026-07-20" },
  { slug: "title-search", term: 'Title Search', category: "diligence", short: 'Review of public records confirming ownership and encumbrances on a property.', related: ["title-insurance", "due-diligence"], updated: "2026-07-20" },
  { slug: "title-insurance", term: 'Title Insurance', category: "diligence", short: 'Policy protecting buyers and lenders from defects in property title.', related: ["title-search"], updated: "2026-07-20" },
  { slug: "property-condition-assessment", term: 'Property Condition Assessment', category: "diligence", short: 'Inspection quantifying remaining useful life of building systems.', related: ["due-diligence", "capex-reserve"], updated: "2026-07-20" },
  { slug: "estoppel-certificate", term: 'Estoppel Certificate', category: "diligence", short: 'Signed tenant statement confirming lease terms during a sale.', related: ["due-diligence", "rent-roll"], updated: "2026-07-20" },
  { slug: "snda-agreement", term: 'SNDA Agreement', category: "diligence", short: 'Subordination, non-disturbance and attornment agreement between lender and tenant.', related: ["estoppel-certificate", "financing"], updated: "2026-07-20" },
  { slug: "survey-alta", term: 'ALTA Survey', category: "diligence", short: 'Detailed boundary survey meeting American Land Title Association standards.', related: ["due-diligence"], updated: "2026-07-20" },
  { slug: "zoning-verification", term: 'Zoning Verification', category: "diligence", short: 'Confirmation that current or intended use complies with municipal zoning code.', related: ["due-diligence", "entitlements"], updated: "2026-07-20" },
  { slug: "entitlements", term: 'Entitlements', category: "diligence", short: 'Legal rights granted by a municipality to develop or use land for specific purposes.', related: ["zoning-verification"], updated: "2026-07-20" },
  { slug: "capex-reserve", term: 'Capex Reserve', category: "diligence", short: 'Cash set aside to fund future capital improvements.', related: ["property-condition-assessment"], updated: "2026-07-20" },
  { slug: "underwriting", term: 'Underwriting', category: "diligence", short: 'Financial analysis that projects revenues, expenses, and returns of a property.', related: ["rent-roll", "pro-forma"], updated: "2026-07-20" },
  { slug: "pro-forma", term: 'Pro Forma', category: "diligence", short: "Projected financial statement modeling a property's future performance.", related: ["underwriting", "stabilized-noi"], updated: "2026-07-20" },
  { slug: "market-analysis", term: 'Market Analysis', category: "diligence", short: 'Study of local supply, demand, and comparable rents driving property value.', related: ["comparable-sales", "vacancy-rate"], updated: "2026-07-20" },
  { slug: "comparable-sales", term: 'Comparable Sales', category: "diligence", short: 'Recent sales of similar properties used to benchmark market value.', related: ["market-analysis", "appraisal"], updated: "2026-07-20" },
  { slug: "appraisal", term: 'Appraisal', category: "diligence", short: 'Licensed valuation of a property using income, cost and comparable methods.', related: ["comparable-sales", "valuation"], updated: "2026-07-20" },
  { slug: "valuation", term: 'Valuation', category: "diligence", short: 'Process of estimating the market value of a real estate asset.', related: ["appraisal", "cap-rate"], updated: "2026-07-20" },
  { slug: "credit-check-tenant", term: 'Tenant Credit Check', category: "diligence", short: "Review of a prospective tenant's financial history and payment record.", related: ["credit-tenant", "underwriting"], updated: "2026-07-20" },
  { slug: "rent-comps", term: 'Rent Comparables', category: "diligence", short: 'Rental rates from similar spaces used to price a lease.', related: ["market-analysis"], updated: "2026-07-20" },
  { slug: "chain-of-title", term: 'Chain of Title', category: "diligence", short: 'Historical sequence of ownership recorded in public land records.', related: ["title-search"], updated: "2026-07-20" },
  { slug: "mechanic-lien", term: "Mechanic's Lien", category: "diligence", short: "Contractor's legal claim against a property for unpaid work.", related: ["title-search"], updated: "2026-07-20" },
  { slug: "easement", term: 'Easement', category: "diligence", short: "Legal right to use another party's land for a specific purpose.", related: ["title-search"], updated: "2026-07-20" },
  { slug: "encumbrance", term: 'Encumbrance', category: "diligence", short: 'Any claim, lien, or restriction attached to a property title.', related: ["easement", "mechanic-lien"], updated: "2026-07-20" },
  { slug: "core-investment", term: 'Core Investment', category: "cases", short: 'Low-risk, stabilized property with credit tenants and predictable cash flow.', related: ["core-plus", "value-add"], updated: "2026-07-20" },
  { slug: "core-plus", term: 'Core Plus', category: "cases", short: 'Mostly stabilized property with modest upside from light repositioning.', related: ["core-investment", "value-add"], updated: "2026-07-20" },
  { slug: "value-add", term: 'Value-Add Investment', category: "cases", short: 'Property requiring renovation or lease-up to unlock incremental NOI.', related: ["opportunistic", "core-plus"], updated: "2026-07-20" },
  { slug: "opportunistic-investment", term: 'Opportunistic Investment', category: "cases", short: 'High-risk strategy targeting development, distressed or major repositioning.', related: ["value-add"], updated: "2026-07-20" },
  { slug: "distressed-asset", term: 'Distressed Asset', category: "cases", short: 'Property sold below market value due to financial or operational stress.', related: ["opportunistic-investment", "workout"], updated: "2026-07-20" },
  { slug: "workout", term: 'Loan Workout', category: "cases", short: 'Negotiation between borrower and lender to restructure distressed debt.', related: ["distressed-asset"], updated: "2026-07-20" },
  { slug: "preferred-equity", term: 'Preferred Equity', category: "cases", short: 'Investment class ranking between debt and common equity in the capital stack.', related: ["capital-stack", "mezzanine-debt"], updated: "2026-07-20" },
  { slug: "mezzanine-debt", term: 'Mezzanine Debt', category: "cases", short: 'Subordinated financing secured by ownership interests rather than the property.', related: ["preferred-equity", "capital-stack"], updated: "2026-07-20" },
  { slug: "capital-stack", term: 'Capital Stack', category: "cases", short: 'Hierarchy of debt and equity funding a real estate transaction.', related: ["preferred-equity", "mezzanine-debt"], updated: "2026-07-20" },
  { slug: "waterfall-distribution", term: 'Waterfall Distribution', category: "cases", short: 'Tiered method of allocating cash flow between investors and sponsors.', related: ["promote", "preferred-return"], updated: "2026-07-20" },
  { slug: "preferred-return", term: 'Preferred Return', category: "cases", short: 'Minimum annual return paid to equity investors before sponsor promote.', related: ["waterfall-distribution", "promote"], updated: "2026-07-20" },
  { slug: "promote", term: 'Sponsor Promote', category: "cases", short: 'Disproportionate share of profits earned by a sponsor beyond hurdles.', related: ["waterfall-distribution", "preferred-return"], updated: "2026-07-20" },
  { slug: "joint-venture", term: 'Joint Venture', category: "cases", short: 'Partnership between a sponsor and equity partners to acquire a specific asset.', related: ["capital-stack"], updated: "2026-07-20" },
  { slug: "sale-leaseback", term: 'Sale-Leaseback', category: "cases", short: 'Owner sells the property and leases it back from the buyer under a long-term lease.', related: ["triple-net-lease", "credit-tenant"], updated: "2026-07-20" },
  { slug: "ground-lease", term: 'Ground Lease', category: "cases", short: 'Long-term lease of the land only, with tenant owning improvements built on it.', related: ["build-to-suit"], updated: "2026-07-20" },
  { slug: "refinance", term: 'Refinance', category: "cases", short: 'Replacing existing property debt with new financing on improved terms.', related: ["cash-out-refinance", "LTV"], updated: "2026-07-20" },
  { slug: "cash-out-refinance", term: 'Cash-Out Refinance', category: "cases", short: 'Refinance that returns equity to the owner using increased property value.', related: ["refinance", "LTV"], updated: "2026-07-20" },
  { slug: "exit-strategy", term: 'Exit Strategy', category: "cases", short: 'Predefined plan to sell, refinance, or recapitalize an investment.', related: ["hold-period", "reversion-value"], updated: "2026-07-20" },
  { slug: "cash-flow", term: 'Cash Flow', category: "cases", short: 'Net cash generated after all expenses, debt service, and reserves.', related: ["NOI", "cash-on-cash-return"], updated: "2026-07-20" },
  { slug: "leverage", term: 'Leverage', category: "cases", short: 'Use of borrowed capital to amplify equity returns on a property.', related: ["LTV", "levered-irr"], updated: "2026-07-20" },
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