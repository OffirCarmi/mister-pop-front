import { useNavigate } from "react-router-dom";

import { PopBox } from "../pop-box";

export const PopPreview = ({ pop }) => {
  const navigate = useNavigate();

  return (
    <article
      className="pop-preview"
      onClick={() => navigate(`/pop/${pop._id}`)}
    >
      <PopBox popId={pop._id} />
      <hr />
      <h3 className="pop-name">{pop.name}</h3>
      <b className="pop-price">
        <span>$</span>
        {pop.price}
      </b>
      <button className="add-to-cart">Add to cart</button>
    </article>
  );
};
