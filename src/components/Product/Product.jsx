import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { name, seller, price, ratings, img } = props.product;
  const { handleAddToCart } = props;
  return (
    <div className="product">
      <img src={img} />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p className="product-price">Price: ${price}</p>
        <p className="seller">Manufacturer: {seller}</p>
        <p className="rating">Rating: {ratings} stars</p>
      </div>
      <button
        onClick={() => handleAddToCart(props.product)}
        className="btn-cart"
      >
        <p>Add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
