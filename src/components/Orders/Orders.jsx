import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Orders = () => {
  const savedCart = useLoaderData();
  // console.log(products);
  const [cart, setCart] = useState(savedCart);
  // console.log(cart);

  const handleDeleteCart = (id) => {
    let newCart = cart.filter((item) => item.id !== id);
    // console.log(newCart);
    setCart(newCart);
    removeFromDb(id);
  };
  const clearCartHandler = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="shop-container">
      {cart.length === 0 ? (
        <h1 className="cart-error">
          It appears that your shopping cart is empty at the moment.
        </h1>
      ) : (
        <div className="review-items">
          {cart.map((item) => {
            return (
              <ReviewItem
                key={item.id}
                product={item}
                handleDeleteCart={handleDeleteCart}
              />
            );
          })}
        </div>
      )}
      <div className="cart-section">
        <Cart cart={cart} clearCartHandler={clearCartHandler}>
          <Link className="proceed-link" to="/checkout">
            <span>Proceed Checkout</span>
            <FontAwesomeIcon icon={faCreditCard} />
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
