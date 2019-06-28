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

const Typography = styled.div<Props>`
  ${fontSize}
  ${fontWeight}
  ${textAlign}
  ${lineHeight}
  ${space}
  ${color}
`;

Typography.defaultProps = {
  fontSize: 1,
};

const span = styled(Typography).attrs({
  as: 'span',
})<Props>``;

const p = styled(Typography).attrs({
  as: 'p',
})<Props>``;

const s = styled(Typography).attrs({
  as: 's',
})<Props>``;

export { span, p, s };
