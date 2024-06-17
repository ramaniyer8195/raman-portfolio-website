import { Link, useParams } from "react-router-dom";
import "./portfolio-details.css";
import { useEffect, useState } from "react";
import { PortfolioItem } from "../portfolio/portfolio.interfaces";
import { PORTFOLIO } from "../../constants/data";
import { FiExternalLink } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa";

const PortfolioDetails = () => {
  const { portfolioId } = useParams();
  const [portfolioDetails, setPortfolioDetails] = useState<PortfolioItem>();

  useEffect(() => {
    const portfolio = PORTFOLIO.find((item) => item.id === portfolioId);
    setPortfolioDetails(portfolio);
  }, []);

  return portfolioDetails ? (
    <section className="section portfolio__details">
      <Link to="/portfolio">
        <button className="button back_button">
          <span className="button__icon back_button__icon">
            <FaArrowLeft />
          </span>
          Back
        </button>
      </Link>
      <h2 className="section__title">
        {portfolioDetails.title1} <span>{portfolioDetails.title2}</span>
      </h2>

      <div className="portfolio__details-container container">
        <img
          src={portfolioDetails.img}
          alt=""
          className="portfolio__details-img"
        />
        <div className="portfolio__details-tech-stack">
          {portfolioDetails.details.language}
        </div>
        <div className="portfolio__details-preview">
          {portfolioDetails.details.preview}
          <span className="portfolio__details-preview-icon">
            <FiExternalLink />
          </span>
        </div>

        <div className="separator"></div>

        <div className="portfolio__details-content">
          {portfolioDetails.content}
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
};

export default PortfolioDetails;
