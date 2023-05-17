

export const MovieBox = ({ movie }) => {


  return (
    <div className="movie-container">
    
      <img src={require(`../assets/imgs/movies/${movie}.png`)} alt="pop-img" />
    </div>
  );
};
