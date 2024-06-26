import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Portfolio from "./pages/portfolio/portfolio";
import Blog from "./pages/blog/blog";
import Contact from "./pages/contact/contact";
import BlogDetails from "./pages/blog-details/blog-details";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:blogId" element={<BlogDetails />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
