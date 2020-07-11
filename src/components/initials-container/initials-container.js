import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './initials-container.css';

const InitialsContainer = ({ svg, color }) => {
  let SVG = svg;

  return (
    <Wrapper color={color}>
      <SVG />
    </Wrapper>
  );
};

InitialsContainer.propTypes = {
  color: PropTypes.oneOf(['rgc_blue', 'rgc_red', 'rgc_black', 'rgc_lightgray']),
};

export default InitialsContainer;
