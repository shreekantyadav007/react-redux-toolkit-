import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, removeFromCart, clearCart } from "../features/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const handleCheckout = () => {
    navigate("/payment");
  };
  return (
    <div>
      <h1>Cart</h1>
      {cartItems && cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => dispatch(removeFromCart(item))}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button onClick={handleCheckout}>Checkout</button>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      )}
    </div>
  );
};
export default Cart;
