import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { rgc_blue, rgc_red, rgc_black, rgc_lightgray } from 'constants/theme';

export const Text = styled.span`
  display: block;
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '400';
      default:
        return '500';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '3.2rem';
      default:
        return '2rem';
    }
  }};
  color: ${({ color }) => () => {
    switch (color) {
      case 'rgc_blue':
        return rgc_blue;
      case 'rgc_red':
        return rgc_red;
      case 'rgc_black':
        return rgc_black ;
      default:
        return rgc_lightgray;
    }
  }};
  line-height: 1.2;

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '2.6rem';
        default:
          return '2rem';
      }
    }};
  `};
`;
