import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaRedditAlien,
  FaHackerNews,
  FaLink,
} from "react-icons/fa";
import "./share.css";
import { FaXTwitter } from "react-icons/fa6";

const Share = () => {
  return (
    <>
      <h3 className="share__title">Share</h3>
      <div className="share__socials">
        <a href="#" className="share__social-link">
          <FaLink />
        </a>
        <a href="#" className="share__social-link">
          <FaLinkedinIn />
        </a>
        <a href="#" className="share__social-link">
          <FaXTwitter />
        </a>
        <a href="#" className="share__social-link">
          <FaFacebookF />
        </a>
        <a href="#" className="share__social-link">
          <FaRedditAlien />
        </a>
        <a href="#" className="share__social-link">
          <FaWhatsapp />
        </a>
        <a href="#" className="share__social-link">
          <FaHackerNews />
        </a>
      </div>
    </>
  );
};

export default Share;
