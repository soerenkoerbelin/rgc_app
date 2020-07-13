import styled from 'styled-components';
import { rgc_blue } from 'constants/theme';

export const Container = styled.div`
  background-color: ${rgc_blue};

  padding: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 5em;
    font-style: italic;
    font-weight: bolder;

    :first-child {
      margin-bottom: -30px;
    }

    :nth-child(3) {
      margin-top: -40px;
    }
  }

  h2 {
    font-size: 1.75em;
    font-style: italic;
    font-weight: regular;
    text-align: center;

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
