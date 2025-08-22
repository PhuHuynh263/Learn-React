import { useState } from "react";
import "./Cart.scss";

function Cart() {
  const unitPrice = 100;
  const [quality, setQuality] = useState(1);

  const handleChange = (e) => {
    const updateQuality = parseInt(e.target.value);
    setQuality(updateQuality);
  };

  return (
    <>
      <table className="cart">
        <thead>
          <tr>
            <th>Name</th>
            <th>Count</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Adiform</td>
            <td>
              <input
                type="number"
                defaultValue={1}
                min={1}
                onChange={handleChange}
              />
            </td>
            <td>{unitPrice}$</td>
            <td>{unitPrice * quality}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default Cart;
