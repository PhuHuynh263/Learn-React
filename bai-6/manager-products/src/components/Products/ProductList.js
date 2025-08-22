import { useEffect, useState } from "react";
import EditProduct from "./EditProduct.js";

function ProductList(props) {
  const { reload } = props;
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      fetch("http://localhost:3002/products")
        .then((res) => res.json())
        .then((data) => {
          setData(data.reverse());
        });
    };
    fetchApi();
  }, [reload]);

  return (
    <>
      <div className="product__list">
        {data.map((item) => {
          return (
            <div className="product__item" key={item.id}>
              <div className="product__image">
                <img src={item.thumbnail} alt={item.title}></img>
              </div>
              <h4 className="product__title">{item.title}</h4>
              <p className="product__price">{item.price}$</p>
              <p className="product__discount">{item.discountPercentage}%</p>
              <EditProduct item={item}></EditProduct>
              <button>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ProductList;
