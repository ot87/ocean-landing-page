import { memo } from 'react';

import Button from '@material-ui/core/Button';

const CustomSubmitButton = memo(function CustomSubmitButton() {
  return (
    <Button
      variant='contained'
      size='large'
      color='primary'
      type='submit'
    >
      Submit
    </Button>
  );
});

export default CustomSubmitButton;
