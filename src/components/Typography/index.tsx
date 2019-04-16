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
  span: typeof span;
  p: typeof p;
  s: typeof s;
};

const Typography = styled.div<Props>`
  ${fontSize}
  ${fontWeight}
  ${textAlign}
  ${lineHeight}
  ${space}
  ${color}
` as StyledComponent<'div', {}, Props, never> & Extensions;

Typography.defaultProps = {
  fontSize: 1,
};

const span = styled(Typography).attrs({
  as: 'span',
});

const p = styled(Typography).attrs({
  as: 'p',
});

const s = styled(Typography).attrs({
  as: 's',
});

Typography.span = span;
Typography.s = s;
Typography.p = p;

export default Typography;
