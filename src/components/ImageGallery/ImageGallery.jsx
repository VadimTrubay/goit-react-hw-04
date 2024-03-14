import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({images}) => {
  return (
    <div className={css.image_container}>
      <ul className={css.image_gallery}>
        {images.map(({id, urls}) => (<li key={id}>
          <ImageCard urls={urls} />
        </li>))};
      </ul>
      
    </div>
  )
}

export default ImageGallery;