export const ImgBox = ({ popId }) => {
  return (
    <div className="img-container">
      <img src={require(`../assets/imgs/pops/${popId}.jpg`)} alt="pop-img" />
    </div>
  );
};
