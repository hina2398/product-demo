import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "./ProductSlice";
import "./Product.css";

const ProductDetails = () => {
  const { productID } = useParams();
  const { data, loading } = useSelector((state) => state.product.productDetail);
  const [selectedImg, setSelectedImg] = useState("")
  console.log(data, "====data");
  const dispatch = useDispatch();
  useEffect(() => {
    if (productID) {
      dispatch(getProductDetails(productID));
    }
  }, [productID]);
  useEffect(() => {
    if(data && data.images && data.images.length > 0){
      setSelectedImg(data.images[0])
    }
  },[data])
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="card-wrapper">
          <div className="card">
            <div className="product-imgs">
              <div className="img-display">
                <div className="img-showcase">
                  <img
                    src={selectedImg}
                  />
                </div>
              </div>
              <div className="img-select">
                {data?.images?.map((img, idx) => {
                  return (
                    <div className={`img-item ${selectedImg == img ? 'border' :""} `} onClick={() => {
                      setSelectedImg(img)
                    }}>
                      <a href="#" data-id={idx + 1}>
                        <img src={img} />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="product-content">
              <h2 className="product-title">{data?.title}</h2>
              <a href="#" className="product-link">
                visit {data?.brand} store
              </a>
              <div className="product-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <span>{data?.rating}({data?.stock})</span>
              </div>

              <div className="product-price">
                <p className="last-price">
                  Old Price: <span>${data?.price}</span>
                </p>
                <p className="new-price">
                  New Price: <span>${(data?.price - (data?.price * data?.discountPercentage / 100))} ({data?.discountPercentage})</span>
                </p> 
              </div>

              <div className="product-detail">
                <h2>about this item: </h2>
                <p>{data?.description}</p>
                <ul>
                  <li>Available: <span>{ data?.stock ? `in stock` : `out of stock`}</span></li>
                  <li>Category: <span>{data?.category}</span></li>
                  <li>Shipping Fee: <span>Free</span></li>
                </ul>
              </div>

              <div className="purchase-info">
                <button type="button" className="btn">
                  Add to Cart <i className="fas fa-shopping-cart"></i>
                </button>
               
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
