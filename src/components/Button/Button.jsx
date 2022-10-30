import { Btn } from './Button.styled'


const Button = ({ onClick }) => {
  return (
    <Btn  type="button" onClick={onClick}>
          Load More
     </Btn>

  );
};

export default Button;
