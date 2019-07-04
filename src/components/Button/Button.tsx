import { SpaceProps, space } from 'styled-system';
import styled from 'styled-components/macro';

interface ButtonProps extends SpaceProps {}

const Button = styled.button<ButtonProps>`
  ${space}
`;

export default Button;
