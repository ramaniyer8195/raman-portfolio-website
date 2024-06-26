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
import { Tooltip } from "react-tooltip";
import { getShareLinks } from "../../../utils/share";
import { SocialSites } from "../../../interfaces/share";

const Share = () => {
  return (
    <>
      <h3 className="share__title">Share</h3>
      <div className="share__socials">
        <a
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
          }}
          className="share__social-link"
          data-tooltip-id="share-icon-tooltip"
          data-tooltip-content="Copy Link"
        >
          <FaLink />
        </a>
        <a
          href={getShareLinks(
            SocialSites.LINKEDIN,
            "https://www.linkedin.com/"
          )}
          className="share__social-link"
          data-tooltip-id="share-icon-tooltip"
          data-tooltip-content="LinkedIn"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
        <a
          href={getShareLinks(SocialSites.TWITTER, "https://twitter.com/")}
          className="share__social-link"
          data-tooltip-id="share-icon-tooltip"
          data-tooltip-content="Twitter"
          target="_blank"
        >
          <FaXTwitter />
        </a>
        <a
          href={getShareLinks(SocialSites.FACEBOOK, "https://facebook.com/")}
          className="share__social-link"
          data-tooltip-id="share-icon-tooltip"
          data-tooltip-content="Facebook"
          target="_blank"
        >
          <FaFacebookF />
        </a>
        <a
          href={getShareLinks(SocialSites.REDDIT, "https://reddit.com/")}
          className="share__social-link"
          data-tooltip-id="share-icon-tooltip"
          data-tooltip-content="Reddit"
          target="_blank"
        >
          <FaRedditAlien />
        </a>
        <a
          href={getShareLinks(
            SocialSites.WHATSAPP,
            "https://api.whatsapp.com/send"
          )}
          className="share__social-link"
          data-tooltip-id="share-icon-tooltip"
          data-tooltip-content="WhatsApp"
          target="_blank"
        >
          <FaWhatsapp />
        </a>
        <a
          href={getShareLinks(
            SocialSites.HACKER_NEWS,
            "https://news.ycombinator.com/submitlink"
          )}
          className="share__social-link"
          data-tooltip-id="share-icon-tooltip"
          data-tooltip-content="Hacker News"
          target="_blank"
        >
          <FaHackerNews />
        </a>
        <Tooltip id="share-icon-tooltip" />
      </div>
    </>
  );
};

export default Share;
