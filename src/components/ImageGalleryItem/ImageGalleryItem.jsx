import React from 'react';
import { GalleryItemCard, GalleryItemImage } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends React.Component {
  render() {
    const { image, openModal } = this.props;
    return (
      <GalleryItemCard key={image.id} onClick={() => openModal(image)}>
        <GalleryItemImage src={image.webformatURL} alt={image.tags} />
      </GalleryItemCard>
    );
  }
}
