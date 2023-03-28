import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  //   console.log(cart);
  let total = 0;
  let totalShipping = 0;
  for (const product of cart) {
    total = product.price + total;
    totalShipping = product.shipping + totalShipping;
  }
  let tax = (total * 7) / 100;
  let grandTotal = total + totalShipping + tax;
  return (
    <div className="cart-container">
      <h5 className="cart-title">Order summary</h5>
      <p>Selected items: {cart.length}</p>
      <p>Total price: ${total.toFixed(2)}</p>
      <p>Total shipping: ${totalShipping.toFixed(2)}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <p className="grand-total">Grand total: ${grandTotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
