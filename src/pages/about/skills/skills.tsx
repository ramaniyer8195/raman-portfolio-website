import { MouseEvent, useState } from "react";
import "./skills.css";
import { SKILLS } from "../../../constants/data";

const skillTitles = [
  "Frontend",
  "Backend",
  "Database",
  "DevOps",
  "Frameworks",
  "Testing",
];

const Skills = () => {
  const [logos, setLogos] = useState(SKILLS["frontend"]);
  const [selectedTitle, setSelectedTitle] = useState("Frontend");

  const handleTitleChange = (event: MouseEvent<HTMLButtonElement>) => {
    const buttonName = event.currentTarget.name;
    setSelectedTitle(buttonName);
    const logoNames = SKILLS[buttonName.toLowerCase()];
    setLogos(logoNames);
  };

  return (
    <div className="skills__container">
      <div className="skill__stack-title grid">
        {skillTitles.map((title, id) => (
          <button
            name={title}
            className={`button button__skills ${
              selectedTitle === title ? "button__skills-active" : ""
            }`}
            onClick={handleTitleChange}
            key={id}
          >
            {title}
          </button>
        ))}
      </div>

      <div className="skill__logos grid">
        {logos.map((logo, id) => (
          <div className="skill__logo" key={id}>
            {logo.logo}
            <p className="skills__logo-title">{logo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
