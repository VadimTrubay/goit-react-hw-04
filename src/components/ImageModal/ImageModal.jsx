import customStyles from "../StylesModal";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ modalIsOpen, selectedImage, closeModal }) => {
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
      style={customStyles}
    >
      <div onClick={handleBackdropClick}>
        <img src={selectedImage} alt="Image modal" />
      </div>
    </Modal>
  );
};

export default ImageModal;
