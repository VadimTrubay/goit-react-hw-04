import css from './ImageCard.module.css';

const ImageCard = ({urls}) => {
  
  return (
    <>
      <img src={urls.small} className={css.image_card} alt="Image" />
    </>
  )
}

export default ImageCard
