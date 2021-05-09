import { forwardRef } from 'react';

import logoImage from './assets/logo.png';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
      paddingRight: 0
    }
  },
  media: {
    float: 'right',
    width: '35vh'
  }
}));

const AboutUs = forwardRef(function AboutUs(_, ref) {
  const classes = useStyles();

  return (
    <Container className={classes.root} ref={ref}>
      <Box p={2}>
        <Card raised>
          <CardContent>
            <Typography
              gutterBottom
              variant='h4'
              color='primary'
              align='center'
            >
              About Us
            </Typography>
            <Typography
              gutterBottom
              variant='h5'
              color='textSecondary'
              align='center'
            >
              About us subheader
            </Typography>
            <img src={logoImage} className={classes.media} alt='Palms logo' />
            <Typography variant='body1' gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod eu risus id lobortis. Proin eget nibh suscipit, egestas dui volutpat, eleifend nisl. Curabitur et mauris non quam semper mattis ac in tellus. Phasellus viverra euismod massa, eu fermentum mauris tincidunt in. Donec et neque et tortor rutrum lacinia. Proin lobortis massa ut felis suscipit pulvinar. Pellentesque diam arcu, tempor ut tempus ultrices, lobortis eu turpis. Aenean nunc nisl, consequat laoreet pharetra in, sollicitudin vitae metus. Quisque mauris urna, vehicula ut suscipit sit amet, faucibus a nulla. Aliquam maximus eu mi id fermentum. Nullam ante justo, placerat et mollis ullamcorper, elementum fermentum eros.
            </Typography>
            <Typography variant='body1'>
              Nunc viverra sapien ac lacus volutpat, a tempor ante iaculis. Sed congue ante nisl, id congue erat elementum bibendum. Ut et turpis turpis. Curabitur suscipit, enim eget dapibus sodales, lectus eros rhoncus erat, eget laoreet nunc eros vel diam. Maecenas tellus lectus, vulputate et gravida sed, mattis sit amet turpis. Nulla aliquet porttitor maximus. Suspendisse pulvinar rutrum lobortis. Phasellus pharetra felis at augue sodales, a cursus est lacinia. Nulla non finibus massa, at volutpat quam.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
});

export default AboutUs;
