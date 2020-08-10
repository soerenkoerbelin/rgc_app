import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import FullPageLayout from 'components/layout/full-page-layout';
import Title from 'components/title';

import InitialsContainer from 'components/initials-container';
import Initials from '../../content/images/gallery/RGC_initials.svg';

const Index = ({ data }) => (
  <FullPageLayout>
    <Title as="h1" size="larger" color="rgc_red" weight="bolder">
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
          style={{ minWidth: '150px' }}
          alt={data.underConstructionJson.rooster.title}
        />
      </figure>
    </div>
    <Title as="h1" size="larger" color="rgc_red" weight="bolder">
      {data.underConstructionJson.headline_second}
    </Title>
    <div className="subheadline">
      <Title as="h2" size="large" color="rgc_red">
        {data.underConstructionJson.subheadline_first}
      </Title>
      <Title as="h2" size="large" color="rgc_red">
        {data.underConstructionJson.subheadline_second}
      </Title>
    </div>
    <div className="initials-container">
      <InitialsContainer svg={Initials} color="rgc_lightgray" size="64px" />
    </div>
  </FullPageLayout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query UnderConstructionQuery {
    underConstructionJson {
      headline_first
      headline_second
      subheadline_first
      subheadline_second
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
