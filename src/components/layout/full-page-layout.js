import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from 'global.css.js';
import { Container, ContentWrapper } from './full-page-layout.css';

const FullPageLayout = ({ children }) => (
  <Container>
      <GlobalStyle />
      {children}
  </Container>
);

FullPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FullPageLayout;
