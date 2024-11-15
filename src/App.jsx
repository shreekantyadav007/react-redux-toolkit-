import Nav from "./component/Nav";
import { Main } from "./component/Main";
import "./App.css";
import Payment from "../src/component/Payment";
import Cart from "../src/component/Cart";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </>
  );
}

export default App;
