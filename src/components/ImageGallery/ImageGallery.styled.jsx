import styled from '@emotion/styled';

export const ImageGalleryList = styled.ul`
  margin: 0 auto;
  padding: 0;

  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  list-style: none;
`;
