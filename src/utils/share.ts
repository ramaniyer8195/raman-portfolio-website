import { SocialSites } from "../interfaces/share";

export const getShareLinks = (site: SocialSites, url: string) => {
  switch (site) {
    case SocialSites.FACEBOOK:
      return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    case SocialSites.TWITTER:
      return `https://twitter.com/intent/post?url=${url}`;
    case SocialSites.LINKEDIN:
      return `https://www.linkedin.com/shareArticle?url=${url}`;
    case SocialSites.REDDIT:
      return `https://reddit.com/submit?url=${url}`;
    case SocialSites.WHATSAPP:
      return `https://wa.me/?text=${url}`;
    case SocialSites.HACKER_NEWS:
      return `https://news.ycombinator.com/submitlink?u=${url}`;
    default:
      return "";
  }
};
