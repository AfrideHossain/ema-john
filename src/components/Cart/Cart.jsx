import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  // console.log(cart);
  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    let pdQuantity = product.quantity;
    if (!pdQuantity) {
      pdQuantity = 1;
    }
    // console.log("product quantity: ", pdQuantity);
    total = product.price + total * pdQuantity;
    totalShipping = product.shipping + totalShipping;
    quantity = quantity + pdQuantity;
  }
  let tax = (total * 7) / 100;
  let grandTotal = total + totalShipping + tax;
  return (
    <div className="cart-container">
      <h5 className="cart-title">Order summary</h5>
      <p>Selected items: {quantity}</p>
      <p>Total price: ${total.toFixed(2)}</p>
      <p>Total shipping: ${totalShipping.toFixed(2)}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <p className="grand-total">Grand total: ${grandTotal.toFixed(2)}</p>
      <button className="delete-cart">
        <span>Clear cart</span>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default Cart;
