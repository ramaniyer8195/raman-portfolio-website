export interface BlogItem {
  id: string;
  img: string;
  title: string;
  desc: string;
  content: JSX.Element;
  author: string;
  publishedAt: Date;
}
