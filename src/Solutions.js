import solution1Image from './assets/solution1.jpg';
import solution2Image from './assets/solution2.jpg';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import SolutionCard from './SolutionCard';

const useStyles = makeStyles({
  root: {
    height: '100vh'
  }
});

const Solutions = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth={false} disableGutters>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        p={2}
      >
          <Typography gutterBottom variant='h4'>
            Solutions
          </Typography>
          <Typography gutterBottom variant='h5'>
            Choose your best holidays!
          </Typography>
          <Box
            display='flex'
            justifyContent='space-evenly'
            flexWrap='wrap'
            width='100%'
          >
              <SolutionCard
                name='Solution 1'
                text='Solution 1 text'
                image={solution1Image}
                imageTitle='Solution 1'
              />
              <SolutionCard
                name='Solution 2'
                text='Solution 2 text'
                image={solution2Image}
                imageTitle='Solution 2'
              />
          </Box>
      </Box>
    </Container>
  );
};

export default Solutions;
