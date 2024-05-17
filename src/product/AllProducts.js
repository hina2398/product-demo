import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import loader from "../assents/image/cupertino_activity_indicator_square_small.gif";
import ProductList from "./ProductList";
import { getAllProducts } from "./ProductSlice";

function AllProducts() {
  const loading = useSelector((state) => state?.product?.loading);
  const data = useSelector((state) => state?.product?.data);
  console.log({ loading, data });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("token","userData");
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <h1>All-PRODUCTS</h1>
      <button onClick={handleClick} className="btn">
        {token ? `LOGOUT ` : `LOGIN`}
      </button>
      <div>
        {loading ? (
          <img src={loader} width="60%" height="700px" />
        ) : data?.products?.length > 0 ? (
          <ProductList data={data?.products} />
        ) : (
          <div>
            <h1>No Data Found</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default AllProducts;
