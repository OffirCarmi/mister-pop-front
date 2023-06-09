import { popService } from "../../services/pop.service";
import { RecommendPopPreview } from "./reccomend-pop-preview";

export const RecommendPopList = ({ pop }) => {
  const capitalize = (movieTitle) =>
    movieTitle.charAt(0).toUpperCase() + movieTitle.slice(1);

  const moviesIndex = popService.getMoviesIndex();

  return (
    <div className="recommendations">
      <h4>{`More POPs from ${capitalize(moviesIndex[pop.movieCode])}`}</h4>
      <li className="recommend-pop-list clean-list">
        {pop.recommendations.map((pop) => (
          <RecommendPopPreview pop={pop} key={pop._id} />
        ))}
      </li>
    </div>
  );
};
