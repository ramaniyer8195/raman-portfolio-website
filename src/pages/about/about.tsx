import Info from "./info/info";
import Stats from "./stats/stats";
import Skills from "./skills/skills";
import { FaDownload } from "react-icons/fa";
import resume from "../../assets/resume.pdf";
import "./about.css";
import { EDUCATION, EXPERIENCE } from "../../constants/data";
import ResumeItem from "./resume-item/resume-item";

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>

        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">Personal Info</h3>

            <ul className="info__list grid">
              <Info />
            </ul>

            <a href={resume} download="" className="button">
              Download Resume
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </div>

          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section__subtitle subtitle__center">My Skills</h3>

        <div className="skills__container grid">
          <Skills />
        </div>
      </section>

      <div className="separator"></div>

      <section className="resume">
        <h3 className="section__subtitle subtitle__center">
          Education & Experience
        </h3>
        <div className="resume__container grid">
          <div className="resume__data">
            {EXPERIENCE.map((item) => {
              return <ResumeItem key={item.id} item={item} />;
            })}
          </div>

          <div className="resume__data">
            {EDUCATION.map((item) => {
              return <ResumeItem key={item.id} item={item} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
