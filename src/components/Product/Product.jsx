import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, seller, price, ratings, img } = props.product;
  return (
    <div className="product">
      <img src={img} />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p className="product-price">{price}</p>
        <p className="seller">{seller}</p>
        <p className="rating">{ratings}</p>
      </div>
    </div>
  );
};

export default Product;
