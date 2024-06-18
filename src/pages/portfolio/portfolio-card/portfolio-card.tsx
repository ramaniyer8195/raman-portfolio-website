import "./portfolio-card.css";
import { PortfolioCardProps } from "./portfolio-card.interfaces";
import { FaRegTimesCircle, FaBloggerB, FaCode } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { useState } from "react";

const PortfolioCard = ({ item }: PortfolioCardProps) => {
  const {
    img,
    title,
    details: { language, preview, blogLink },
  } = item;
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="portfolio__item">
      <img src={img} alt={title} className="portfolio__img" />

      <div className="portfolio__hover" onClick={toggleModal}>
        <h3 className="portfolio__title">{title}</h3>
      </div>

      {modal && (
        <div className="portfolio__modal" onClick={toggleModal}>
          <div
            className="portfolio__modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <FaRegTimesCircle className="modal__close" onClick={toggleModal} />

            <h3 className="modal__title">{title}</h3>
            <div className="modal__list">
              <p className="modal__item tech__stack">
                <FaCode />
                <div>
                  <span className="item__title">Tech Stack : </span>
                  <span className="item__details">{language.join()}</span>
                </div>
              </p>
              <p className="modal__item preview__links">
                <div className="modal__link-container">
                  <a href={preview} className="modal__link">
                    Preview
                  </a>{" "}
                  <FiExternalLink className="modal__icon" />
                </div>
                <div className="modal__link-container">
                  <a href={blogLink} className="modal__link">
                    Read More
                  </a>{" "}
                  <FaBloggerB className="modal__icon" />
                </div>
              </p>
            </div>

            <img src={img} alt={title} className="modal__img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioCard;
