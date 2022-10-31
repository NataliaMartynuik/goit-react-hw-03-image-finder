import { Item, ImageItem } from './ImageGalleryItem.styled';




import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, onToggleModal, largeImageURL }) => {
 return (
    <Item
      
      onClick={() => onToggleModal(largeImageURL)}
    >
      <ImageItem src={webformatURL} alt="" />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};


export default ImageGalleryItem;