import { PERSONAL_INFO } from "../../../constants/data";
import "./info.css";

const info = () => {
  return (
    <>
      {PERSONAL_INFO.map(({ id, title, description }) => {
        return (
          <li className="info__item" key={id}>
            <span className="info__title">{title}</span>
            <span className="info__separator"> : </span>
            <span className="info__description">{description}</span>
          </li>
        );
      })}
    </>
  );
};

export default info;
