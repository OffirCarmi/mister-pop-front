export const MovieBox = ({ movieCode }) => {
  return (
    <div className="movie-container">
      <img
        src={require(`../assets/imgs/movies/${movieCode}.png`)}
        alt="pop-img"
      />
    </div>
  );
};
