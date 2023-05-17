import React from "react";

import { Counter } from "../counter";

export class PopActions extends React.Component {
  state = { price: this.props.pop.price };

  setPrice = (count) => {
    const { pop } = this.props;
    this.setState({ price: pop.price * count });
  };

  render() {
    const { price } = this.state;
    return (
      <aside className="actions">
        <div className="cart">
          <b className="pop-price">
            <span>$</span>
            {price.toFixed(2)}
          </b>
          <Counter setPrice={this.setPrice} />
          <button className="add-to-cart">Add to cart</button>
        </div>
        <button className="review">Write a review</button>
      </aside>
    );
  }
}
