import useFormReducer from '../../utils/useFormReducer';
import CustomTextField from '../CustomTextField/CustomTextField';
import CustomSubmitButton from '../CustomSubmitButton/CustomSubmitButton';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(({ spacing }) => ({
  form: {
    '& .MuiFormControl-root': {
      marginBottom: spacing(2)
    }
  }
}));

const ContactForm = () => {
  const classes = useStyles();
  const [{ name, email, message }, updateField, submitForm] = useFormReducer();

  return (
    <form
      noValidate
      autoComplete='off'
      onChange={updateField}
      onSubmit={submitForm}
    >
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
          field={name}
        />
        <CustomTextField
          name='email'
          label='Email'
          type='email'
          placeholder='example@mail.com'
          field={email}
        />
        <CustomTextField
          name='message'
          label='Message'
          field={message}
          multiline
          rows={5}
        />
        <CustomSubmitButton />
      </Box>
    </form>
  );
};

export default ContactForm;
