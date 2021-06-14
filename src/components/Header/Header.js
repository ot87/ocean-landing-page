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
  handleSolutionsButtonClick,
  innerAboutUsRef,
  innerContactUsRef
}) => {
  const classes = useStyles();
  const handleAboutUsButtonClick = () => {
    innerAboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleContactUsButtonClick = () => {
    innerContactUsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

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
        <Button
          size='large'
          color='primary'
          className={classes.textColor}
          onClick={handleSolutionsButtonClick}
        >
          Solutions
        </Button>
        <Button
          size='large'
          color='primary'
          className={classes.textColor}
          onClick={handleAboutUsButtonClick}
        >
          About Us
        </Button>
        <Button
          size='large'
          color='primary'
          className={classes.textColor}
          onClick={handleContactUsButtonClick}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

Header.propTypes = {
  handleSolutionsButtonClick: PropTypes.func.isRequired,
  innerAboutUsRef: PropTypes.object.isRequired,
  innerContactUsRef: PropTypes.object.isRequired
};

export default Header;
