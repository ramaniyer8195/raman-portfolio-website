export interface PortfolioItem {
  id: string;
  img: string;
  title: string;
  details: PortfolioDetails;
}

export interface PortfolioDetails {
  language: string[];
  preview: string;
  blogLink: string;
}
