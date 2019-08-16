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
import styled from 'styled-components/macro';

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

// eslint-disable-next-line id-length
const p = styled(Typography).attrs({
  as: 'p',
})<Props>``;

// eslint-disable-next-line id-length
const s = styled(Typography).attrs({
  as: 's',
})<Props>``;

export { span, p, s };
