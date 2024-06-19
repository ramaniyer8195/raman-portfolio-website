import { Link, useParams } from "react-router-dom";
import "./blog-details.css";
import { useEffect, useState, Children, isValidElement } from "react";
import { BLOGS } from "../../constants/data";
import { FaArrowLeft, FaBookOpen, FaUser } from "react-icons/fa";
import { BlogItem } from "../blog/blog.interfaces";
import Share from "./share/share";
import BlogCard from "../blog/blog-card/blog-card";

const BlogDetails = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState<BlogItem>();
  const [readTime, setReadTime] = useState("0");
  const [relatedBlogs, setRelatedBlogs] = useState<BlogItem[]>([]);

  useEffect(() => {
    setRelatedBlogs(BLOGS.filter((blog) => blog.id !== blogId).slice(0, 2));
    const selectedBlog = BLOGS.find((blog) => blog.id === blogId);

    setBlog(selectedBlog);
    if (selectedBlog) {
      const words = extractWordsFromJsx(selectedBlog.content);

      setReadTime((words.length / 200).toFixed(0));
    }
  }, [blogId]);

  const extractWordsFromJsx = (jsxElement: JSX.Element) => {
    const words: string[] = [];

    // Recursive function to traverse JSX element tree
    const traverse = (element: JSX.Element) => {
      Children.toArray(element.props.children).forEach((child) => {
        if (typeof child === "string") {
          words.push(...child.split(/\s+/));
        } else if (isValidElement(child)) {
          traverse(child);
        }
      });
    };

    traverse(jsxElement);

    return words;
  };

  const getDisplayDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

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

      <div className="portfolio__details-container container">
        {blog && (
          <>
            <h2 className="blog__details-title">{blog.title}</h2>
            <div className="publish__details">
              <div className="blog__author">
                <FaUser className="blog__author-icon" />{" "}
                <span>{blog.author}</span>
              </div>

              <div className="vertical__separator"></div>

              <div className="blog__publish-date">
                {getDisplayDate(blog.publishedAt)}
              </div>

              <div className="vertical__separator"></div>

              <div className="blog__read-time">
                <FaBookOpen /> {readTime} min read
              </div>
            </div>
            <img src={blog.img} alt="" className="blog__details-img" />
            <div className="blog__details-content">{blog.content}</div>
          </>
        )}

        <div className="share__container">
          <Share />
        </div>

        <div className="related__blog-container">
          <div className="related__blog-header">
            <h3 className="related__blog-title">Related Blogs</h3>
            <Link to="/blog">
              <button className="button button__categories view__all">
                View All
              </button>
            </Link>
          </div>
          <div className="related__blogs-grid grid">
            {relatedBlogs.map((blog) => (
              <BlogCard blog={blog} key={blog.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
