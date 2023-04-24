import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    let savedCart = getShoppingCart();
    let newCartArray = [];
    for (const id in savedCart) {
      let addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        addedProduct.quantity = savedCart[id];
        newCartArray.push(addedProduct);
      }
      // console.log(newCartArray);
      setCart(newCartArray);
      console.log(cart);
    }
  }, [products]);
  const handleAddToCart = (product) => {
    let newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };
  const clearCartHandler = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="shop-container">
      <div className="products-section">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-section">
        <Cart cart={cart} clearCartHandler={clearCartHandler}>
          <Link className="proceed-link" to="/orders">
            <span>Review Order</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
