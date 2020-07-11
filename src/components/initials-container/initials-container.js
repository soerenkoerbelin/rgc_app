import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './initials-container.css';

const InitialsContainer = ({ svg, color, size }) => {
  let SVG = svg;

  return (
    <Wrapper color={color} size={size}>
      <SVG />
    </Wrapper>
  );
};

InitialsContainer.propTypes = {
  size: PropTypes.string,
  color: PropTypes.oneOf(['rgc_blue', 'rgc_red', 'rgc_black', 'rgc_lightgray']),
};

export default InitialsContainer;
