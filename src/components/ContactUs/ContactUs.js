import { forwardRef } from 'react';

import ContactForm from './ContactForm';
import ContactSocial from './ContactSocial';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    paddingBottom: spacing(3),
    [breakpoints.down('xs')]: {
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: spacing(2)
    }
  }
}));

const ContactUs = forwardRef(function ContactUs(_, ref) {
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
              Contact Us
            </Typography>
            <Typography
              gutterBottom
              variant='h5'
              color='textSecondary'
              align='center'
            >
              Contact us subheader
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <ContactForm />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ContactSocial />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
});

export default ContactUs;
