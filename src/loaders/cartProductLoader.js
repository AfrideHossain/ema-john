import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async () => {
  let fetchProduct = await fetch("products.json");
  let products = await fetchProduct.json();
  //   console.log(products);

  // if cart data is in database you have to use async await
  const savedCart = getShoppingCart();
  const newCartArray = [];
  //   console.log(savedCart);
  for (const id in savedCart) {
    let addedProduct = products.find((pd) => pd.id === id);
    if (addedProduct) {
      const quantity = savedCart[id];
      addedProduct.quantity = quantity;
      newCartArray.push(addedProduct);
    }
  }
  return newCartArray;
};

export default cartProductLoader;
