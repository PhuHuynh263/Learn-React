import { useEffect, useState } from "react";
import "./Tabs.scss";

function Tabs() {
  const [data, setData] = useState([]);
  const [tabActive, setTabActive] = useState("products");
  useEffect(() => {
    fetch(`https://dummyjson.com/${tabActive}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data[tabActive]);
      });
  }, [tabActive]);

  const handleClickChangeTab = (e) => {
    setTabActive(e);
  };

  return (
    <>
      <div className="tabs">
        <div
          className="tabs__item"
          onClick={() => handleClickChangeTab("products")}
        >
          Products
        </div>
        <div
          className="tabs__item"
          onClick={() => handleClickChangeTab("users")}
        >
          Users
        </div>
        <div
          className="tabs__item"
          onClick={() => handleClickChangeTab("posts")}
        >
          Posts
        </div>
      </div>
      <div className="tabs__content">
        <ul>
          {data.map((item) => {
            return (
              <li key={item.id}>
                {item.title || `${item.firstName} ${item.lastName}`}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default Tabs;
