import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { decrease, increase } from "../features/cartSlice";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.items);
  const handleCheckout = () => {
    navigate("/payment");
  };
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="sidebar">
      <div className="cart">
        <h2>Cart:</h2>
        <ul className="cartlist">
          {cart && cart.length > 0 ? (
            cart.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.name} height={"50px"} />
                <span>{item.name}</span>
                <span>₹{item.price}</span>
                <span>Quantity: {item.quantity}</span>
                <button onClick={() => dispatch(increase(item))}>+ add</button>
                <button onClick={() => dispatch(decrease(item))}>
                  - remove
                </button>
              </li>
            ))
          ) : (
            <li>No items in the cart</li>
          )}
        </ul>
        <h3>Total Amount: ₹{totalAmount}</h3>
        {cart && cart.length > 0 ? (
          <button className="btn" onClick={handleCheckout}>
            Proceed to Payment
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
