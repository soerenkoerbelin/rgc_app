import styled from 'styled-components';
import { rgc_blue, rgc_red, rgc_black, rgc_lightgray } from 'constants/theme';

export const Wrapper = styled.div`
  svg {
    width: ${({ size }) => () => {
      return size;
    }};
    height: ${({ size }) => () => {
      return size;
    }};
  }

  .a {
    fill: ${({ color }) => () => {
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
  }
`;
