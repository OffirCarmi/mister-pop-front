import { RecommendPopPreview } from "./reccomend-pop-preview";

export const RecommendPopList = ({ pop }) => {
  const capitalize = (movieTitle) =>
    movieTitle.charAt(0).toUpperCase() + movieTitle.slice(1);

  return (
    <div className="recommendations">
      <h4>{`More POPs from ${capitalize(pop.movieTitle)}`}</h4>
      <li className="recommend-pop-list clean-list">
        {pop.recommendations.map((pop) => (
          <RecommendPopPreview pop={pop} key={pop._id} />
        ))}
      </li>
    </div>
  );
};
