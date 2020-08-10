import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { rgc_blue, rgc_red, rgc_black, rgc_lightgray } from 'constants/theme';

export const Text = styled.span`
  display: block;
  line-height: 1.2;

  font-weight: ${({ weight }) => () => {
    switch (weight) {
      case 'bold':
        return '700';
      case 'bolder':
        return '800';
      default:
        return '500';
    }
  }};

  font-size: ${({ size }) => () => {
    switch (size) {
      case 'larger':
        return '5em';
      case 'large':
        return '1.75em';
      default:
        return '1.5em';
    }
  }};

  color: ${({ color }) => () => {
    switch (color) {
      case 'rgc_blue':
        return rgc_blue;
      case 'rgc_red':
        return rgc_red;
      case 'rgc_black':
        return rgc_black;
      default:
        return rgc_lightgray;
    }
  }};

  ${MEDIA.DESKTOP`
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'larger':
        return '4em';
      case 'large':
        return '1.5em';
      default:
        return '1.35em';
    }
  }};
`};

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'larger':
          return '2.5em';
        case 'large':
          return '1.25em';
        default:
          return '1.25em';
      }
    }};
  `};

  ${MEDIA.PHONE`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'larger':
          return '1.75em';
        case 'large':
          return '1em';
        default:
          return '1em';
      }
    }};
  `};
`;
