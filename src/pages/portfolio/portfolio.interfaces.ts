export interface PortfolioItem {
  id: string;
  img: string;
  title1: string;
  title2: string;
  details: PortfolioDetails;
  content: JSX.Element;
}

export interface PortfolioDetails {
  language: JSX.Element;
  preview: JSX.Element;
}
