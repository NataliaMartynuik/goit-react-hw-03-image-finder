import { Btn } from './Button.styled'
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <Btn  type="button" onClick={onClick}>
          Load More
     </Btn>

  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
