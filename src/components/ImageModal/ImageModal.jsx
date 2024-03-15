import css from "./ImageModal.module.css";

const ImageModal = ({ selectedImage, closeModal }) => {
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div onClick={handleBackdropClick}>
      <img src={selectedImage} className={css.image_card} alt="Image modal" />
    </div>
  );
};

export default ImageModal;
