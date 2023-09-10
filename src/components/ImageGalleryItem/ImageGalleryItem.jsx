import React from 'react';
import { GalleryItemCard, GalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({image, openModal}) => {
  return (
    <GalleryItemCard key={image.id} onClick={() => openModal(image)}>
      <GalleryItemImage src={image.webformatURL} alt={image.tags} />
    </GalleryItemCard>
  );
};
