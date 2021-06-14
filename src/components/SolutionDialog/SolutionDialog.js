import PropTypes from 'prop-types';

import ImageCard from '../ImageCard/ImageCard';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function SolutionDialog({ open, onClose, name, text, image, imageTitle }) {
  const smScreen = useMediaQuery('(max-width:600px)');

  return (
    <Dialog
      fullScreen={smScreen}
      maxWidth='md'
      open={open}
      onClose={onClose}
    >
      <DialogTitle align='center'>{name}</DialogTitle>
      <DialogContent dividers>
        <DialogContentText align='center'>
          {text}
        </DialogContentText>
        <DialogContentText align='center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod eu risus id lobortis. Proin eget nibh suscipit, egestas dui volutpat, eleifend nisl. Curabitur et mauris non quam semper mattis ac in tellus.
        </DialogContentText>
        <DialogContentText>
          Lorem ipsum dolor sit amet.
        </DialogContentText>
        <DialogContentText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </DialogContentText>
        <Box display='flex' justifyContent='center'>
          <ImageCard
            image={image}
            title={imageTitle}
          />
          <ImageCard
            image={image}
            title={imageTitle}
          />
          <ImageCard
            image={image}
            title={imageTitle}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color='primary'>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

SolutionDialog.propTypes = {
  open:    PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  name:    PropTypes.string.isRequired,
  text:    PropTypes.string.isRequired,
  image:   PropTypes.string.isRequired,
  imageTitle: PropTypes.string.isRequired
};

export default SolutionDialog;
