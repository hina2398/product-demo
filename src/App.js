import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AllProducts from "./product/AllProducts";
import ProductDetails from "./product/ProductDetails";
import Login from "./product/Login";

function App() {
  return (
    <>
      {/* <h1>redux</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:productID" element={<ProductDetails />} />
          {/* <Route path="/counter" element={<Counter />} /> */}
          <Route path="/*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
