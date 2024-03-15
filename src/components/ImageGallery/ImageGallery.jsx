import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onImageOpen }) => {
  return (
    <>
      <ImageCard images={images} onImageOpen={onImageOpen} />
    </>
  );
};

export default ImageGallery;
