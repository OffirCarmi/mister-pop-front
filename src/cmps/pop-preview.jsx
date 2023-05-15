import { ImgBox } from "./img-box";

export const PopPreview = ({ pop }) => {
  return (
    <article className="pop-preview">
      <ImgBox popId={pop._id} />
      <hr />
      <h3 className="pop-name">{pop.name}</h3>
      <b className="pop-price">
        <span>$</span>
        {pop.price.toFixed(2)}
      </b>
      <button className="add-to-cart">Add to cart</button>
    </article>
  );
};
