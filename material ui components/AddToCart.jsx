import {Button} from '@mui/material';
import {styled} from '@mui/material/styles';

const StyledButton = styled(Button)({
  borderRadius: '25px',
  outline: '2px solid green',
  border: '2px solid green',
  backgroundColor: 'transparent',
});

export default function AddToCart() {
  return (
    <>
      <StyledButton>Add to cart</StyledButton>
    </>
  );
}
