import errorImage from '../image/error.webp';
import { WrapperError } from './Error.styled'

export const ImageErrorView = () => {
  return (
    <WrapperError role="alert">
      <img src={errorImage} width="600" alt="error" />
     
    </WrapperError>
  );
}