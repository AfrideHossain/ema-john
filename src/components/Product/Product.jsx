import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, seller, price, ratings, img } = props.product;
  return (
    <div className="product">
      <img src={img} />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p className="product-price">Price: ${price}</p>
        <p className="seller">Manufacturer: {seller}</p>
        <p className="rating">Rating: {ratings} stars</p>
      </div>
      <button className="btn-cart">Add to cart</button>
    </div>
  );
};

export default Product;
