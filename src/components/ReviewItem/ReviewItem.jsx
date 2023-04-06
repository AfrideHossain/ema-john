import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product, handleDeleteCart }) => {
  const { id, img, name, quantity, price } = product;
  return (
    <div className="review-item">
      <img src={img} alt={name} />
      <div className="review-item-infos">
        <h4>{name}</h4>
        <p>
          Price : <span>${price}</span>
        </p>
        <p>
          Ordered quantity : <span>{quantity}</span>
        </p>
      </div>
      <div className="iconDiv" onClick={() => handleDeleteCart(id)}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </div>
    </div>
  );
};

export default ReviewItem;
