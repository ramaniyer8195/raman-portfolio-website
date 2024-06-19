import { Link, useParams } from "react-router-dom";
import "./blog-details.css";
import { useEffect, useState } from "react";
import { BLOGS } from "../../constants/data";
import { FaArrowLeft } from "react-icons/fa";
import { BlogItem } from "../blog/blog.interfaces";

const BlogDetails = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState<BlogItem>();

  useEffect(() => {
    const selectedBlog = BLOGS.find((blog) => blog.id === blogId);

    setBlog(selectedBlog);
  }, []);

  return (
    <section className="blog__details section">
      <Link to="/blog">
        <button className="button back__button">
          <span className="button__icon back__button__icon">
            <FaArrowLeft />
          </span>
          Back
        </button>
      </Link>

      {blog && (
        <div className="portfolio__details-container container">
          <h2 className="blog__details-title">{blog.title}</h2>
          <div className="publish__details">
            <div className="blog__author">
              by <span>{blog.author}</span>
            </div>
            <div className="blog__publish-date">
              {blog.publishedAt.toLocaleDateString()}
            </div>
          </div>
          <img src={blog.img} alt="" className="blog__details-img" />
          <div className="blog__details-content">{blog.content}</div>
        </div>
      )}
    </section>
  );
};

export default BlogDetails;
