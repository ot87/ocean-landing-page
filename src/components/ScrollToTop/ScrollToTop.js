import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Fab from '@material-ui/core/Fab';
import lightBlue from '@material-ui/core/colors/lightBlue';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    position: 'fixed',
    bottom: spacing(2),
    right: spacing(2),
    backgroundColor: lightBlue[100],
    '&:hover': {
      backgroundColor: lightBlue[200]
    }
  },
  arrow: {
    border: 'solid #fff',
    borderWidth: '0 3px 3px 0',
    padding: 5,
    marginBottom: -5,
    transform: 'rotate(-135deg)'
  }
}));

const ScrollToTop = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger({ disableHysteresis: true });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Slide in={trigger} direction='up'>
      <Fab onClick={handleClick} className={classes.root} color='primary'>
        <span className={classes.arrow} />
      </Fab>
    </Slide>
  );
};

export default ScrollToTop;
