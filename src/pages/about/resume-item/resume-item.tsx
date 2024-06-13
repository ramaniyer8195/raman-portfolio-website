import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import "./resume-item.css";
import { ResumeCategory, ResumeItemProps } from "./resume-item.interfaces";

const ResumeItem = ({ item }: ResumeItemProps) => {
  const { category, description, name, title, year } = item;
  const icon =
    category === ResumeCategory.EDUCATION ? (
      <FaGraduationCap />
    ) : (
      <FaBriefcase />
    );
  return (
    <div className="resume__item">
      <div className="resume__icon">{icon}</div>

      <span className="resume__date">{year}</span>
      <h3 className="resume__subtitle">
        {title} <span>{name}</span>
      </h3>
      <p className="resume__description">{description}</p>
    </div>
  );
};

export default ResumeItem;
