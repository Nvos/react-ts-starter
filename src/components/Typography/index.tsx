import React from 'react';
import styled from 'styled-components/macro';
import { StyledComponent } from 'styled-components';

import {
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  space,
  color,
  ColorProps,
  SpaceProps,
  LineHeightProps,
  TextAlignProps,
  FontWeightProps,
  FontSizeProps,
} from 'styled-system';

type Props = ColorProps &
  SpaceProps &
  LineHeightProps &
  TextAlignProps &
  FontWeightProps &
  FontSizeProps;

type Extensions = {
  span: StyledComponent<'span', any, Props, never>;
  p: StyledComponent<'p', any, Props, never>;
  s: StyledComponent<'s', any, Props, never>;
};

const Typography = styled.div<Props>`
  ${fontSize}
  ${fontWeight}
  ${textAlign}
  ${lineHeight}
  ${space}
  ${color}
` as StyledComponent<'div', any, Props, never> & Extensions;

Typography.defaultProps = {
  fontSize: 1,
};

Typography.span = Typography.withComponent('span');
Typography.p = Typography.withComponent('p');
Typography.s = Typography.withComponent('s');

// const Test: React.FC<React.ComponentProps<typeof Typography>> = props => (
//   <Typo.span />
// );

// class Typo extends React.PureComponent<
//   React.ComponentProps<typeof Typography>
// > {
//   public static span = span;
//   public static p = p;
//   public static s = s;

//   public render() {
//     return <Typography {...this.props} />;
//   }
// }

export default Typography;
