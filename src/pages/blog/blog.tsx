import { MouseEvent, useState } from "react";
import "./blog.css";
import { BLOG_CATEGORIES, BLOGS } from "../../constants/data";
import BlogCard from "./blog-card/blog-card";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleTitleChange = (event: MouseEvent<HTMLButtonElement>) => {
    const buttonName = event.currentTarget.name;
    setSelectedCategory(buttonName);
  };

  return (
    <section className="blog section">
      <h2 className="section__title">
        My <span>Blog</span>
      </h2>

      <div className="blog__container container">
        <div className="blog__categories grid">
          {BLOG_CATEGORIES.map((category, idx) => (
            <button
              name={category}
              className={`button button__categories ${
                selectedCategory === category ? "button__categories-active" : ""
              }`}
              onClick={handleTitleChange}
              key={idx}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="blog__list grid">
          {BLOGS.map((blog) => {
            return <BlogCard key={blog.id} blog={blog} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
