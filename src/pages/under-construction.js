import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import FullPageLayout from 'components/layout/full-page-layout';
import Title from 'components/title';

import InitialsContainer from 'components/initials-container';
import Initials from '../../content/images/gallery/RGC_initials.svg';
import { rgc_lightgray } from '../constants/theme';

const UnderConstruction = ({ data }) => (
  <FullPageLayout>
    <Title as="h1" size="large" color="rgc_red">
      {data.underConstructionJson.headline}
    </Title>
    <Title as="h2" color="rgc_red">
      {data.underConstructionJson.subheadline}
    </Title>
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
    <InitialsContainer svg={Initials} color={rgc_lightgray} />
  </FullPageLayout>
);

UnderConstruction.propTypes = {
  data: PropTypes.object.isRequired,
};

export default UnderConstruction;

export const query = graphql`
  query UnderConstructionQuery {
    underConstructionJson {
      headline
      subheadline
      rooster {
        title
        path {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
