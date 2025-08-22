import ProductList from "./ProductList";
import "./Products.css";
import CreateProduct from "./CreateProduct";
import { useState } from "react";
function Products() {
  const [reLoad, setReload] = useState(false);

  const hanldeReload = () => {
    setReload(!reLoad);
  };

  return (
    <>
      <h2>Danh sách sản phẩm</h2>
      <CreateProduct onReload={hanldeReload} />
      <ProductList reLoad={reLoad} />
    </>
  );
}
export default Products;
