import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Cart.css";

const Cart = ({ cart, clearCartHandler }) => {
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
      <h5 className="cart-title">Order Summary</h5>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total.toFixed(2)}</p>
      <p>Total Shipping: ${totalShipping.toFixed(2)}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <p className="grand-total">Grand Total: ${grandTotal.toFixed(2)}</p>
      <button className="delete-cart" onClick={clearCartHandler}>
        <span>Clear Cart</span>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default Cart;
