import { Link } from "react-router-dom";
import "./Product.css";

const ProductList = ({ data }) => {
  return data?.map((product, index) => {
    return (
      <Link to={`/product/${product.id}`}>
        <div className="product" key={index}>
          <div className="image-box">
            <img className="images" id="image-1" src={product.thumbnail} />
          </div>
          <div className="text-box">
            <h2 className="item" title={product.title}>
              {product.title.length > 20
                ? `${product?.title.slice(0, 20)}...`
                : product?.title}
            </h2>
            <h3 className="price">${product.price}</h3>
            <p className="description" title={product.description}>
              {product.description.length > 50
                ? `${product?.description.slice(0, 50)}...`
                : product?.description}
            </p>
            {/* <label for="item-1-quantity">Quantity:</label>
          <input
            type="text"
            name="item-1-quantity"
            id="item-1-quantity"
            value="1"
          /> */}
            <button type="button" name="item-1-button" id="item-1-button">
              Read More
            </button>
          </div>
        </div>
      </Link>
    );
  });
};

export default ProductList;
