import css from "./LoadMoreButton.module.css";

const LoadMoreButton = ({ loadPhoto }) => {
  return (
    <div className={css.load_photo}>
      <button type="button" onClick={loadPhoto}>
        Load photo
      </button>
    </div>
  );
};

export default LoadMoreButton;
