import { MovieBox } from "../movie-box";
import { LabelList } from "./label-list";
import { PopActions } from "./pop-actions";
import { useNavigate } from "react-router-dom";
import { RecommendPopList } from "./recommend-pop-list";

export const DetailsBox = ({ pop }) => {
  const navigate = useNavigate();

  return (
    <section className="details-box">
      <button className="close" onClick={() => navigate("/pop")}>
        X
      </button>
      <MovieBox movieCode={pop.movieCode} />
      <div className="info-box">
        <div className="info">
          <h2 className="name">
            {pop.name} <span className="price"> ${pop.price}</span>
          </h2>

          <LabelList labels={pop.labels} />
          <p className="description">{pop.description}</p>
        </div>
        <PopActions pop={pop} />
      </div>
      <RecommendPopList pop={pop} />
    </section>
  );
};


