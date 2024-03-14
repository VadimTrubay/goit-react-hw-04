import { useEffect, useState } from 'react';
import axios from 'axios';
// import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './SearchBar/SearchBar';
import LoadMoreButton from './LoadMoreButton/LoadMoreButton';

const API_KEY = 'xSOm-Z_unIVqC8MgDg2y9mEie0lF4PPcCIwRyGMZNsw'

const App = () => {
  const [images, setImages] = useState([]);
  // const [loading, setLoading] = useState(false);  
  useEffect(() => {
    async function loadImages() {
      const response = await axios.get(`https://api.unsplash.com/photos/?client_id=${API_KEY}`);
      setImages(response.data)
    }
    loadImages();
  }, []);

  const onSubmit = (queryText) => { 
    console.log(queryText);
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {/* <Loader /> */}
      {images.length > 0 && <ImageGallery images={images} />}      
      <LoadMoreButton />
    </div>
  );
};

export default App;
