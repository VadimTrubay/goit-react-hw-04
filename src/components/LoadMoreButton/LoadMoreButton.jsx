import css from './LoadMoreButton.module.css';

const LoadMoreButton = () => {
  const loadPhoto = () => {
    console.log('Loading')
  }

  return (
    <div className={css.load_photo}>
      <button onClick={loadPhoto}>Load photo</button>
    </div>
  )
}

export default LoadMoreButton
