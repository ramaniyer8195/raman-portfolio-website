import "./portfolio.css";
import { PORTFOLIO } from "../../constants/data";
import PortfolioCard from "./portfolio-card/portfolio-card";

const Portfolio = () => {
  return (
    <section className="portfolio section">
      <h2 className="section__title">
        My <span>Portfolio</span>
      </h2>

      <div className="portfolio__container container grid">
        {PORTFOLIO.map((item) => {
          return <PortfolioCard key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
