import PropTypes from 'prop-types';

import logoImage from '../../assets/logo.png';
import backgroundImage from '../../assets/background-ocean.jpg';

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
  logo: {
    height: 50,
    borderRadius: '50%'
  },
  textColor: {
    color: palette.background.paper
  }
}));

const Main = ({
  onSolutionsClick,
  onAboutUsClick
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
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
        >
          <img className={classes.logo} src={logoImage} alt='Palms logo' />
          <Box
            display='flex'
            flexWrap='wrap'
            justifyContent='flex-end'
          >
            <Button size='large' color='primary' className={classes.textColor}>Solutions</Button>
            <Button
              size='large'
              color='primary'
              className={classes.textColor}
              onClick={onAboutUsClick}
            >
              About Us
            </Button>
            <Button size='large' color='primary' className={classes.textColor}>
              Contact Us
            </Button>
          </Box>
        </Box>
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
  onAboutUsClick: PropTypes.func.isRequired
};

export default Main;
