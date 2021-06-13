import PropTypes from 'prop-types';

import logoImage from '../../assets/logo.png';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(({ palette }) => ({
  logo: {
    height: 50,
    borderRadius: '50%'
  },
  textColor: {
    color: palette.background.paper
  }
}));

const Header = ({
  onAboutUsClick,
  onContactUsClick
}) => {
  const classes = useStyles();

  return (
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
        <Button
          size='large'
          color='primary'
          className={classes.textColor}
          onClick={onContactUsClick}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

Header.propTypes = {
  onAboutUsClick: PropTypes.func.isRequired,
  onContactUsClick: PropTypes.func.isRequired
};

export default Header;
