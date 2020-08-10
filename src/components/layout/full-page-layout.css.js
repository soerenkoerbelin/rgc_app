import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { rgc_blue } from 'constants/theme';

export const Container = styled.div`
  background-color: ${rgc_blue};
  height: 100vh;

  padding: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-style: italic;
    text-align: center;

    :first-child {
      margin-bottom: -25px;
    }

    :nth-child(3) {
      margin-top: -35px;
    }
  }

  ${MEDIA.DESKTOP`
  padding: 13rem;

  h1 {
    :first-child {
      margin-bottom: -20px;
    }

    :nth-child(3) {
      margin-top: -30px;
    }
  }
`};

  ${MEDIA.TABLET`
  padding: 10rem;
  h1 {
    :first-child {
      margin-bottom: -15px;
    }

    :nth-child(3) {
      margin-top: -20px;
    }
  }
`};

  ${MEDIA.PHONE`
  padding: 5rem;
  h1 {
    :first-child {
      margin-bottom: -10px;
    }

    :nth-child(3) {
      margin-top: -20px;
    }
  }
`};

  h2 {
    font-style: italic;
    text-align: center;
  }

  .subheadline {
    margin-top: 3em;
  }

  .initials-container {
    margin-top: 3em;
  }

  svg {
    margin-top: 3em;
  }

  figure {
    text-align: -webkit-center !important;
    text-align: center;
  }

  .gatsby-image-wrapper {
    max-width: 350px;
  }
`;
