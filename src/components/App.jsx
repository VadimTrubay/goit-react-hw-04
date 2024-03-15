import { useEffect, useState } from "react";
import Loader from "./Loader/Loader";
import ImageGallery from "./ImageGallery/ImageGallery";
import SearchBar from "./SearchBar/SearchBar";
import LoadMoreButton from "./LoadMoreButton/LoadMoreButton";
import getImages from "./services/imageSearchApi";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageModal from "./ImageModal/ImageModal";
import Modal from "react-modal";
import customStyles from "./StylesModal";

Modal.setAppElement("#root");

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    async function loadImages() {
      try {
        setLoading(true);
        const response = await getImages(query, page);
        const cleanData = response.data.results;
        setImages(images.concat(cleanData));
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    loadImages();
  }, [query, page]);

  const onSearch = (queryText) => {
    setImages([]);
    setError(false);
    setQuery(queryText);
  };

  const handleBtnClick = () => {
    setPage((page) => page + 1);
  };

  function onImageOpen(e) {
    setModalIsOpen(true);
    if (modalIsOpen) {
      return;
    }

    const imageId = e.target.getAttribute("id");
    const selectedImage = images.find((image) => image.id === imageId);
    setSelectedImage(selectedImage);
  }

  function closeModal() {
    setModalIsOpen(false);
    setSelectedImage(null);
  }

  useEffect(() => {
    function keydownClick(evt) {
      if (evt.code === "Escape") {
        closeModal();
      }
    }

    window.addEventListener("keydown", keydownClick);

    return () => {
      window.removeEventListener("keydown", keydownClick);
    };
  }, []);

  return (
    <div>
      <SearchBar onSearch={onSearch} />
      {loading && <Loader />}
      {images && <ImageGallery images={images} onImageOpen={onImageOpen} />}
      {images.length > 0 && <LoadMoreButton loadPhoto={handleBtnClick} />}
      {error && <ErrorMessage />}
      {selectedImage && (
        <Modal
          onRequestClose={closeModal}
          isOpen={onImageOpen}
          contentLabel="Modal"
          style={customStyles}
        >
          <ImageModal
            modalOpen={modalIsOpen}
            closeModal={closeModal}
            selectedImage={selectedImage.urls.regular}
          />
        </Modal>
      )}
    </div>
  );
};

export default App;
