import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-tailwind/react';

const FormButton = ({
  btnlabel, size, style, color,
}) => (
  <Button style={{ ...style, backgroundColor: color }} size={size}>{btnlabel}</Button>
);

FormButton.propTypes = {
  btnlabel: PropTypes.string.isRequired,
  size: PropTypes.string,
  style: PropTypes.string,
  color: PropTypes.string,
};

FormButton.defaultProps = {
  size: 'lg',
  style: {},
  color: '#000000',
};

export default FormButton;
