import React from 'react';
import * as Request from 'services/api';
import { toast } from 'react-toastify';
import { Container } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { ModalStyled } from './Modal/Modal';
import { ScrollToTop } from './ScrollToTop/ScrollToTop';

export class App extends React.Component {
  state = {
    searchValues: '',
    imageSrc: '',
    images: [],
    page: 1,
    totalPages: 0,
    isError: false,
    isLoading: false,
    isModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchValues, page } = this.state;
    if (prevState.searchValues !== searchValues || prevState.page !== page) {
      this.addImages();
    }
  }

  changeValue = query => {
    this.setState({
      searchValues: query,
      images: [],
      page: 1,
    });
  };

  loadMoreImages = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  openModal = image => {
    this.setState({ imageSrc: image, isModal: true });
  };

  closeModal = () => {
    this.setState({
      isModal: false,
      imageSrc: '',
    });
  };

  addImages = async () => {
    const { searchValues, page } = this.state;
    try {
      this.setState({ isLoading: true, isError: false });
      const data = await Request.fetchGallery(searchValues, page);

      if (data.hits.length === 0) {
        toast.error('No pictures - no problem');
      }

      const normalImages = Request.destImages(data.hits);
      this.setState(state => ({
        images: [...state.images, ...normalImages],
        isLoading: false,
        isError: '',
        totalPages: Math.ceil(data.totalHits / 12),
      }));
    } catch (error) {
      this.setState({ isError: true });
      toast.error('Houston, we have a problem!');
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images, isLoading, page, totalPages, imageSrc, isModal, isError } =
      this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.changeValue} />
        {isLoading && <Loader />}
        {isError &&
          !isLoading &&
          toast.error('You`ve entered the stratosphere...')}
        {images.length > 0 && (
          <ImageGallery images={images} openModal={this.openModal} />
        )}
        {images.length > 0 && totalPages !== page && !isLoading && (
          <Button onClick={this.loadMoreImages} />
        )}
        {/*{(totalPages === page) > 0 && toast.error('You have reached Mars!')}*/}
        {images.length > 0 && !isLoading && <ScrollToTop />}
        <ModalStyled
          isOpen={isModal}
          onRequestClose={this.closeModal}
          image={imageSrc}
        />
      </Container>
    );
  }
}
