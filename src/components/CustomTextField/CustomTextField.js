import { memo } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

const CustomTextField = memo(function CustomTextField({
  name,
  label,
  placeholder = false,
  type = 'text',
  multiline = false,
  rows,
  field: { value, isError, error }
}) {
  return (
    <TextField
      name={name}
      label={label}
      placeholder={placeholder || label}
      variant='outlined'
      value={value}
      type={type}
      multiline={multiline}
      rows={rows}
      required={true}
      error={isError}
      helperText={isError && error}
    />
  );
});

CustomTextField.propTypes = {
  name:        PropTypes.string.isRequired,
  label:       PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type:        PropTypes.oneOf(['text', 'email']),
  multiline:   PropTypes.bool,
  rows:        PropTypes.number,
  field:       PropTypes.shape({
    value:   PropTypes.string.isRequired,
    isError: PropTypes.bool,
    error:   PropTypes.string.isRequired
  }).isRequired
};

export default CustomTextField;
