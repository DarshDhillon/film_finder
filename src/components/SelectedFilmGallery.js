import ImageGallery from 'react-image-gallery';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import 'react-image-gallery/styles/css/image-gallery.css';

const SelectedFilmGallery = () => {
  const FILM_IMAGE_PATH = 'https://image.tmdb.org/t/p/original';

  const selectedFilmImages = useSelector(
    (state) => state.filmsReducer.selectedFilmData.selectedFilmImages
  );

  const images = selectedFilmImages.map((image) => ({
    original: `${FILM_IMAGE_PATH}${image.file_path}`,
    thumbnail: `${FILM_IMAGE_PATH}${image.file_path}`,
  }));

  return (
    <ImagesContainer>
      {selectedFilmImages.length > 0 && (
        <ImageGallery items={images} showIndex={true} />
      )}
    </ImagesContainer>
  );
};

export default SelectedFilmGallery;

const ImagesContainer = styled.div`
  /* padding: 1rem; */
  width: 60%;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;
