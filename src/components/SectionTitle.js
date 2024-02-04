import React from 'react';
import PropTypes from 'prop-types';
import {

  Typography,

} from '@material-tailwind/react';

const SectionTitle = ({ title }) => (
  <Typography className="mb-2 text-3xl mt-6 font-bold tracking-tight text-gray-500 dark:text-white text-center">
    {title}
  </Typography>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
