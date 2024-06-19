import { Link } from "react-router-dom";
import "./blog-card.css";
import { BlogCardProps } from "./blog-card.interfaces";

const BlogCard = ({ blog }: BlogCardProps) => {
  const { id, img, title, desc } = blog;
  return (
    <div className="blog__card-container">
      <img src={img} alt="" className="blog__img" />

      <h3 className="blog__title">{title}</h3>
      <div className="blog__details">{desc}</div>

      <Link to={`/blog/${id}`}>
        <button className="button button__categories read__more">
          Read More
        </button>
      </Link>
    </div>
  );
};

export default BlogCard;
