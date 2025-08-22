import Modal from "react-modal";
import { useState, useEffect } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

Modal.setAppElement("#root");

function EditProduct(props) {
  const { item } = props;
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(item);
  const [dataCategory, setDataCategory] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      fetch("http://localhost:3002/category")
        .then((res) => res.json())
        .then((data) => {
          setDataCategory(data);
        });
    };
    fetchApi();
  }, []);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3002/products/${item.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setShowModal(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your product has been updated",
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  return (
    <>
      <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form className="create__form" onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label className="form__label">Title</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    value={data.title}
                    required
                  />
                </td>
              </tr>
              {dataCategory.length > 0 && (
                <tr>
                  <td>
                    <label className="form__label">Category</label>
                  </td>
                  <td>
                    <select
                      name="category"
                      className="form__select"
                      onChange={handleChange}
                      value={data.category}
                    >
                      <option>...</option>
                      {dataCategory.map((item) => (
                        <option
                          value={item.name}
                          key={item.id}
                          onChange={handleChange}
                        >
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              )}
              <tr>
                <td>
                  <label className="form__label">Price</label>
                </td>
                <td>
                  <input
                    type="number"
                    name="price"
                    onChange={handleChange}
                    value={data.price}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="form__label">Discount</label>
                </td>
                <td>
                  <input
                    type="number"
                    name="discountPercentage"
                    onChange={handleChange}
                    value={data.discountPercentage}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="form__label">Stock</label>
                </td>
                <td>
                  <input
                    type="number"
                    name="stock"
                    onChange={handleChange}
                    value={data.stock}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="form__label">Image</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="thumbnail"
                    onChange={handleChange}
                    value={data.thumbnail}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="form__label">Descriptione</label>
                </td>
                <td>
                  <textarea
                    name="description"
                    onChange={handleChange}
                    value={data.description}
                    required
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button" onClick={closeModal}>
                    Cancel
                  </button>
                </td>
                <td>
                  <button type="submit">Update Product</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </Modal>
    </>
  );
}

export default EditProduct;
