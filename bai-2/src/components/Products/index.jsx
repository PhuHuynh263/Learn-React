import { productList } from "../../data/product.js";
import ProductItem from "../ProductItem/index.jsx";


function Products() {
  console.log(productList);
  return (
    <>
      <div className="product__list">
        {productList.map((item) => {
          return <ProductItem item={item} key={item.id} />;
        })}
      </div>
    </>
  );
}

export default Products;
