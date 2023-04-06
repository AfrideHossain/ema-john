import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";
import { removeFromDb } from "../../utilities/fakedb";

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
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Orders;
