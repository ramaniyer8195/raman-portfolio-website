import { STATS } from "../../../constants/data";
import "./stats.css";

const stats = () => {
  return (
    <>
      {STATS.map(({ id, no, titleOne, titleTwo }) => {
        return (
          <div className="stats__box" key={id}>
            <h3 className="stats__no">{`${no}+`}</h3>
            <p className="stats__title">
              {titleOne}
              <br />
              {titleTwo}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default stats;
