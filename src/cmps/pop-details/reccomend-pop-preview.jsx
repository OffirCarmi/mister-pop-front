import { useNavigate } from "react-router-dom";

export const RecommendPopPreview = ({ pop }) => {
    const navigate=useNavigate()
  return (
    <ul className="recommend-pop-preview" onClick={()=>navigate(`/pop/${pop._id}`)}>
      <img
        src={require(`../../assets/imgs/pops/${pop._id}.jpg`)}
        alt="pop-preview"
      />
    </ul>
  );
};
