import facebookSvgIcon  from '../../assets/social/facebook.svg';
import instagramSvgIcon from '../../assets/social/instagram.svg';
import linkedinSvgIcon  from '../../assets/social/linkedin.svg';
import twitterSvgIcon   from '../../assets/social/twitter.svg';
import whatsappSvgIcon  from '../../assets/social/whatsapp.svg';
import slackSvgIcon     from '../../assets/social/slack.svg';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  icon: {
    width: 100
  }
});

const ContactSocial = () => {
  const classes = useStyles();

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      <Typography
        gutterBottom
        variant='h5'
        color='primary'
        align='center'
      >
        or reach us through the social media
      </Typography>
      <Grid container spacing={2}>
        <Grid container item justify='space-evenly'>
          <Grid item>
            <IconButton className={classes.icon}>
              <img src={facebookSvgIcon} alt='Facebook' />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton className={classes.icon}>
              <img src={twitterSvgIcon} alt='Twitter' />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container item justify='space-evenly'>
          <Grid item>
            <IconButton className={classes.icon}>
              <img src={instagramSvgIcon} alt='Instagram' />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton className={classes.icon}>
              <img src={whatsappSvgIcon} alt='WhatsApp' />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container item justify='space-evenly'>
          <Grid item>
            <IconButton className={classes.icon}>
              <img src={linkedinSvgIcon} alt='LinkedIn' />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton className={classes.icon}>
              <img src={slackSvgIcon} alt='Slack' />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSocial;
