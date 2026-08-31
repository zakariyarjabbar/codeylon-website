import portfolioData from "@/data/portfolio.json";

export type PortfolioItem = (typeof portfolioData)[number];

export const portfolio = portfolioData as PortfolioItem[];
export const featuredPortfolio = portfolio.filter((item) => item.featured);
export const getPortfolioItem = (slug: string) => portfolio.find((item) => item.slug === slug);
