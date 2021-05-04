import logoImage from './assets/logo.png';
import backgroundImage from './assets/background-ocean.jpg';
import solution1Image from './assets/solution1.jpg';
import solution2Image from './assets/solution2.jpg';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import SolutionCard from './SolutionCard';

const useStyles = makeStyles({
  first: {
      height: '100vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
  }, 
  second: {
      height: '100vh'
  },
  logo: {
    height: 50,
    borderRadius: '50%'
  },
  card: {
    maxWidth: 400
  },
  media: {
    width: 400,
    height: 400
  },
  actions: {
    justifyContent: 'center'
  }
});

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth={false} disableGutters>
      <CssBaseline />
      <Container className={classes.first} maxWidth={false} disableGutters>
        <Box
          display='flex'
          flexDirection='column'
          height='100%'
        >
          <Box
            p={2}
            display='flex'
            justifyContent='space-between'
            alignItems='center'
          >
            <img className={classes.logo} src={logoImage} alt='Palm logo' />
            <Box>
              <Button size='large' color='primary'>Solutions</Button>
              <Button size='large' color='primary'>About Us</Button>
              <Button size='large' color='primary'>Contact Us</Button>
            </Box>
          </Box>
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            flexGrow={1}
          >
            <Typography gutterBottom variant='h3'>
              Choose your best holidays!
            </Typography>
            <Button variant='outlined' size='large' color='primary'>Solutions</Button>
          </Box>
        </Box>
      </Container>
      <Container className={classes.second} maxWidth={false} disableGutters>
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
    </Container>
  );
}

export default App;
