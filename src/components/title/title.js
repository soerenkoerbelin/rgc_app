import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './title.css';

const Title = ({ children, as = 'span', size, color }) => {
  return (
    <Text as={as} size={size} color={color}>
      {children}
    </Text>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(['large']),
  color: PropTypes.oneOf(['rgc_blue', 'rgc_red', 'rgc_black', 'rgc_lightgray']),
};

export default Title;
