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
  innerSolutionsRef,
  innerAboutUsRef,
  innerContactUsRef
}) => {
  const classes = useStyles();
  const handleSolutionsButtonClick = () => {
    innerSolutionsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container className={classes.root} maxWidth={false} disableGutters>
      <Box
        p={2}
        display='flex'
        flexDirection='column'
        height='100%'
      >
        <Header
          innerAboutUsRef={innerAboutUsRef}
          innerContactUsRef={innerContactUsRef}
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
            onClick={handleSolutionsButtonClick}
          >
            Solutions
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

Main.propTypes = {
  innerSolutionsRef: PropTypes.object.isRequired,
  innerAboutUsRef: PropTypes.object.isRequired,
  innerContactUsRef: PropTypes.object.isRequired
};

export default Main;
