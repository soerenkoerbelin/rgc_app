import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import FullPageLayout from 'components/layout/full-page-layout';
import Title from 'components/title';

import InitialsContainer from 'components/initials-container';
import Initials from '../../content/images/gallery/RGC_initials.svg';

const UnderConstruction = ({ data }) => (
  <FullPageLayout>
    <Title as="h1" size="large" color="rgc_red">
      {data.underConstructionJson.headline_first}
    </Title>
    <div style={{ width: '100%' }}>
      <figure>
        <Img
          fluid={
            data.underConstructionJson.rooster.path
              ? data.underConstructionJson.rooster.path.childImageSharp.fluid
              : {}
          }
          alt={data.underConstructionJson.rooster.title}
        />
      </figure>
    </div>
    <Title as="h1" size="large" color="rgc_red">
      {data.underConstructionJson.headline_second}
    </Title>
    <Title as="h2" color="rgc_red">
      {data.underConstructionJson.subheadline}
    </Title>
    <InitialsContainer svg={Initials} color="rgc_lightgray" size="64px" />
  </FullPageLayout>
);

UnderConstruction.propTypes = {
  data: PropTypes.object.isRequired,
};

export default UnderConstruction;

export const query = graphql`
  query UnderConstructionQuery {
    underConstructionJson {
      headline_first
      headline_second
      subheadline
      rooster {
        title
        path {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
