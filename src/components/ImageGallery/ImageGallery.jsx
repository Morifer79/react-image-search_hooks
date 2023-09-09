import { ImageGalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <ImageGalleryList>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            image={image}
            openModal={openModal}
          />
        );
      })}
    </ImageGalleryList>
  );
};
