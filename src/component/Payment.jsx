// components/Payment.js
import React from "react";
import { useSelector } from "react-redux";
import Nav from "./Nav";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { decrease, increase } from "../features/cartSlice";
const Payment = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity , 0);
  const handlePayment = () => {
    alert("Payment Successful!");
  };
  function handleCheckout() {
    navigate("/");
  }

  return (
    <>
      <Nav />
      <div
        style={{
          display: "flex",
          margin: "0 auto",
          width: "1000px",
          gap: "25px",
        }}
      >
        <div>
          <h2>Payment Page</h2>
          <form>
            <div>
              <label>Card Number:</label>
              <input type="text" required />
            </div>
            <div>
              <label>Expiry Date:</label>
              <input type="text" required />
            </div>
            <div>
              <label>CVV:</label>
              <input type="text" required />
            </div>
          </form>
          {/* <h3>Total Amount: ${totalAmount}</h3> */}
          <button onClick={handlePayment}>Pay Now</button>
        </div>
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
                    <button onClick={() => dispatch(increase(item))}>
                      + add
                    </button>
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
            <Link
              to={"/"}
              className="btn"
              style={{ textDecoration: "none", color: "#111" }}
            >
              Go back to shopping
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
