import { useEffect } from "react";
import { useState } from "react";
import "./UseEffect2.scss";

function UseEffect3() {
  const limit = 10;
  const [data, setData] = useState([]);
  const [pageActive, setPageActive] = useState(0);
  const [qualityPage, setQualityPage] = useState(0);

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?skip=${pageActive * limit}&limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        setData(data.products);
        setQualityPage(Math.ceil(data.total / limit));
      });
  }, [pageActive]);

  const handleClickPagi = (e) => {
    setPageActive(e);
  };

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

      <ul className="pagination">
        {[...Array(qualityPage)].map((_, index) => {
          return (
            <li key={index} onClick={() => handleClickPagi(index)}>
              {index + 1}
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default UseEffect3;
