import { useState } from "react";
import "./Modal.scss";
function Modal() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    if (showModal === false) {
      setShowModal(!showModal);
    }
  };

  const handleCloseModal = () => {
    if (showModal === true) {
      setShowModal(!showModal);
    }
  };

  return (
    <>
      <button onClick={handleShowModal}>Click</button>
      {showModal && (
        <div className="modal">
          <div className="modal__body">
            <button className="modal__close" onClick={handleCloseModal}>
              Close
            </button>
            <div className="modal__content">Content....</div>
          </div>
        </div>
      )}
    </>
  );
}
export default Modal;
