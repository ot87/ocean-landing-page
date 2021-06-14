import { useState } from 'react';
import PropTypes from 'prop-types';

import SolutionDialog from '../SolutionDialog/SolutionDialog';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(({ spacing }) => ({
  card: {
    width: 400,
    marginBottom: spacing(2)
  },
  media: {
    height: 400
  },
  actions: {
    justifyContent: 'center'
  }
}));

function SolutionCard({ name, text, image, imageTitle }) {
  const classes = useStyles();
  const [solution, setSolution] = useState(false);

  const handleClickSolution = () => {
    setSolution(true);
  };
  const handleCloseSolution = () => {
    setSolution(false);
  };

  return (
    <Card className={classes.card} raised>
      <CardActionArea disabled>
        <CardMedia
          className={classes.media}
          image={image}
          title={imageTitle}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            align='center'
            color='primary'
          >
            {name}
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            align='center'
          >
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Button
          variant='outlined'
          size='large'
          color='primary'
          onClick={handleClickSolution}
        >
          More
        </Button>
      </CardActions>
      <SolutionDialog
        open={solution}
        onClose={handleCloseSolution}
        name={name}
        text={text}
        image={image}
        imageTitle={imageTitle}
      />
    </Card>
  );
}

SolutionCard.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageTitle: PropTypes.string.isRequired
};

export default SolutionCard;
