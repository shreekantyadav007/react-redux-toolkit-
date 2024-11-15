import React, { useState } from "react";
import { Product } from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { Sidebar } from "./Sidebar";
import Cart from "./Cart";
import Nav from "./Nav";

export const Main = () => {
  const [cart, setCart] = useState([]);

  const dispatch = useDispatch();
  const myState = useSelector((state) => state.cart.items);
  const products = [
    {
      name: "product 1",
      image: "https://placehold.jp/300x300.png?text=Product1",
      price: 999,
      quantity: 1,
    },
    {
      name: "product 2",
      image: "https://placehold.jp/300x300.png?text=Product2",
      price: 949,
      quantity: 1,
    },
    {
      name: "product 3",
      image: "https://placehold.jp/300x300.png?text=Product3",
      price: 899,
      quantity: 1,
    },
    {
      name: "product 4",
      image: "https://placehold.jp/300x300.png?text=Product4",
      price: 849,
      quantity: 1,
    },
    {
      name: "product 5",
      image: "https://placehold.jp/300x300.png?text=Product5",
      price: 749,
      quantity: 1,
    },
    {
      name: "product 6",
      image: "https://placehold.jp/300x300.png?text=Product6",
      price: 999,
      quantity: 1,
    },
    {
      name: "product 7",
      image: "https://placehold.jp/300x300.png?text=Product7",
      price: 799,
      quantity: 1,
    },
    {
      name: "product 8",
      image: "https://placehold.jp/300x300.png?text=Product8",
      price: 699,
      quantity: 1,
    },
    {
      name: "product 9",
      image: "https://placehold.jp/300x300.png?text=Product9",
      price: 599,
      quantity: 1,
    },
  ];
  function handleClick(product) {
    dispatch(addToCart(product));
  }

  return (
    <>
      <Nav />
      <div className="wrapper">
        <div className="main">
          {products.map((product) => (
            <Product
              key={product.name}
              name={product.name}
              imageUrl={product.image}
              price={product.price}
              quantity={product.quantity}
              handleClick={() => handleClick(product)}
            />
          ))}
        </div>
        <Sidebar />
      </div>
    </>
  );
};
