import { SpaceProps, space } from 'styled-system';
import styled from 'styled-components/macro';

interface ButtonProps extends SpaceProps {
  loading?: boolean;
}

const Button = styled.button<ButtonProps>`
  ${space}
`;

export default Button;
