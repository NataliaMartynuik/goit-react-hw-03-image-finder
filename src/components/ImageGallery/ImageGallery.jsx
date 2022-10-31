import { Component } from 'react';
import { fetchImagesByName } from '../../api';
import { toast } from 'react-toastify';

import Button from '../Button/Button';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';
import { ImageErrorView } from '../Error/Error';
import { Loader } from '../Loader/Loader';
import { Gallery } from './ImageGallery.styled';


class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
    error: null,
    showModal: false,
    largeImageURL: null,
    
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ page: 1, images: [], error: null }, () =>
        this.fetchImages(),
      );
    }

    if (prevState.page !== this.state.page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  fetchImages = () => {
    const { page } = this.state;
    const { query } = this.props;

    const options = {
      query,
      page,
    };

    this.setState({ isLoading: true });

    fetchImagesByName(options)
      .then(images => {
        if (images.length === 0) {
          return toast.error(`Sorry, there are no images matching ${query}.`)
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }))
  })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
    this.setState({ largeImageURL: null });
  };

  handleModalImage = url => {
    this.toggleModal();
    this.setState({ largeImageURL: url });
  };

  render() {
    const {
      showModal,
      images,
      error,
      isLoading,
      largeImageURL,
      } = this.state;
    const showButton = images.length > 0;

    return (
      <>
        {error && <ImageErrorView />}

        {isLoading && <Loader />}
        <Gallery >
          {images.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              onToggleModal={this.handleModalImage}
              largeImageURL={largeImageURL}
            />
          ))}
        </Gallery>

        {showButton && (
          <Button onClick={this.fetchImages} isLoading={isLoading} />
        )}

        {showModal && (
          <Modal onCloseModal={this.toggleModal}>
            <img src={largeImageURL} alt="" />
          </Modal>
        )}
      </>
    );
  }
}


export default ImageGallery;

    
    
    
    
   