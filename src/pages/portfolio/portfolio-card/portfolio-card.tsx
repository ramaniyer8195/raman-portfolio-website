import { Link } from "react-router-dom";
import "./portfolio-card.css";
import { PortfolioCardProps } from "./portfolio-card.interfaces";

const PortfolioCard = ({ item }: PortfolioCardProps) => {
  const { img, title1, title2, id } = item;
  const title = `${title1} ${title2}`;
  return (
    <Link to={`/portfolio/${id}`}>
      <div className="portfolio__item">
        <img src={img} alt={title} className="portfolio__img" />

        <div className="portfolio__hover">
          <h3 className="portfolio__title">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;
