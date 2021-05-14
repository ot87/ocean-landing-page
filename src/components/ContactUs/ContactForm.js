import { useState } from 'react';

import CustomTextField from '../CustomTextField/CustomTextField';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  form: {
    '& .MuiFormControl-root': {
      marginBottom: theme.spacing(2)
    }
  }
}));

const ContactForm = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const onNameChange = (e) => setName(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onMessageChange = (e) => setMessage(e.target.value);
  const required = value => !value;

  return (
    <Box
      display='flex'
      flexDirection='column'
      className={classes.form}
    >
      <Typography
        gutterBottom
        variant='h5'
        color='primary'
        align='center'
      >
        Ask us a question
      </Typography>
      <CustomTextField
        name='name'
        label='Name'
        value={name}
        onChange={onNameChange}
        required={required}
      />
      <CustomTextField
        name='email'
        label='Email'
        value={email}
        onChange={onEmailChange}
        required={required}
      />
      <CustomTextField
        name='message'
        label='Message'
        value={message}
        onChange={onMessageChange}
        multiline
        rows={5}
        required={required}
      />
      <Button
        variant='contained'
        size='large'
        color='primary'
        className={classes.textColor}
        // onClick={onAboutUsClick}
      >
        Submit
      </Button>
    </Box>
  );
};

export default ContactForm;
