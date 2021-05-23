import { useReducer } from 'react';

const UPDATE_FIELD = 'UPDATE_FIELD';
const SET_ERROR = 'SET_ERROR';

const initialState = {
  name: {
    value: '',
    isError: null,
    error: ''
  },
  email: {
    value: '',
    isError: null,
    error: ''
  },
  message: {
    value: '',
    isError: null,
    error: ''
  }
};

const formReducer = (state, { type, payload }) => {
  switch (type) {
    case UPDATE_FIELD: {
      const { name, value, isError, error } = payload;

      return {
        ...state,
        [name]: {
          value,
          isError: state[name].isError !== null ? isError: null,
          error
        }
      };
    }
    case SET_ERROR: {
      const { name, isError, error } = payload;

      return {
        ...state,
        [name]: { ...state[name], isError, error }
      };
    }
    default:
      return state;
  }
};

const useFormReducer = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const updateField = e => {
    const { name, value, validity, validationMessage } = e.target;

    dispatch({
      type: UPDATE_FIELD,
      payload: {
        name,
        value,
        isError: !validity.valid,
        error: validationMessage
      }
    });
  };
  const submitForm = (e) => {
    e.preventDefault();

    let isFormValid = true;

    Object.keys(state).forEach(name => {
      const field = e.target.elements[name];

      isFormValid = field.validity.valid;

      dispatch({
        type: SET_ERROR,
        payload: {
          name,
          isError: !field.validity.valid,
          error: field.validationMessage
        }
      });
    });

    if (isFormValid) {
      // send form to server
    }
  };

  return [state, updateField, submitForm];
};

export default useFormReducer;
