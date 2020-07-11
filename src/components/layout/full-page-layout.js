import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from 'global.css.js';
import { Container, ContentWrapper } from './full-page-layout.css';

const FullPageLayout = ({ children }) => (
  <Container>
    <div>
      <GlobalStyle />
      <ContentWrapper>{children}</ContentWrapper>
    </div>
  </Container>
);

FullPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FullPageLayout;
