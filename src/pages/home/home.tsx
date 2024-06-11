import "./home.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Profile from "../../assets/me.jpg";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Raman Iyer.</span> Full Stack Developer
          </h1>

          <p className="home__description">
            I am a versatile Full Stack Developer specializing in the MERN
            stack. With robust experience in MongoDB, Express.js, React, and
            Node.js, I excel in building efficient and scalable web
            applications.
          </p>

          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block" />
    </section>
  );
};

export default Home;
