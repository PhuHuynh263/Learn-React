import { useEffect } from "react";
import { useState } from "react";
import "./UseEffect2.scss";
function UseEffect2() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        setData(data.products);
      });
  }, []);

  return (
    <>
      <div className="product__list">
        {data.map((item) => {
          return (
            <div key={item.id} className="product__item">
              <div className="product__image">
                <img src={item.images} alt="" />
              </div>
              <h3 className="prouduct__title">{item.brand}</h3>
              <div className="product__desc">{item.description}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default UseEffect2;
