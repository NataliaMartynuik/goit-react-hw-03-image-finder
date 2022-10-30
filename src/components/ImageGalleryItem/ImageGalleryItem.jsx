import { Item, ImageItem } from './ImageGalleryItem.styled';


const ImageGalleryItem = ({ webformatURL, onToggleModal, largeImageURL }) => {
 return (
    <Item
      
      onClick={() => onToggleModal(largeImageURL)}
    >
      <ImageItem src={webformatURL} alt="" />
    </Item>
  );
};

export default ImageGalleryItem;