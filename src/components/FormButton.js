import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-tailwind/react';

const FormButton = ({ btnlabel }) => (
  <Button size="lg">{btnlabel}</Button>
);

FormButton.propTypes = {
  btnlabel: PropTypes.string.isRequired,
};

export default FormButton;
