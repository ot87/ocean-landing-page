import PropTypes from 'prop-types';

import backgroundImage from '../../assets/background-ocean.jpg';

import Header from '../Header/Header';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  textColor: {
    color: palette.background.paper
  }
}));

const Main = ({
  onSolutionsClick,
  onAboutUsClick,
  onContactUsClick
}) => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth={false} disableGutters>
      <Box
        p={2}
        display='flex'
        flexDirection='column'
        height='100%'
      >
        <Header
          onAboutUsClick={onAboutUsClick}
          onContactUsClick={onContactUsClick}
        />
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          flexGrow={1}
        >
          <Typography
            gutterBottom
            variant='h3'
            align='center'
            className={classes.textColor}
          >
            Choose your best holidays!
          </Typography>
          <Button
            variant='outlined'
            size='large'
            color='primary'
            onClick={onSolutionsClick}
          >
            Solutions
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

Main.propTypes = {
  onSolutionsClick: PropTypes.func.isRequired,
  onAboutUsClick: PropTypes.func.isRequired,
  onContactUsClick: PropTypes.func.isRequired
};

export default Main;
