import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

const CustomTextField = ({
  name,
  label,
  type = 'input',
  multiline = false,
  rows,
  value,
  onChange,
  required
}) => {
  return (
    <TextField
      name={name}
      label={label}
      placeholder={label}
      variant='outlined'
      value={value}
      onChange={onChange}
      type={type}
      multiline={multiline}
      rows={rows}
      // error={required(value)}
    />
  );
};

CustomTextField.propTypes = {
  name:      PropTypes.string.isRequired,
  label:     PropTypes.string.isRequired,
  type:      PropTypes.oneOf(['input', 'email']),
  multiline: PropTypes.bool,
  rows:      PropTypes.number,
  value:     PropTypes.string.isRequired,
  onChange:  PropTypes.func.isRequired,
  required:  PropTypes.func
};

export default CustomTextField;
