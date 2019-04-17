import styled from 'styled-components/macro';
import { SpaceProps, space } from 'styled-system';

interface ButtonProps extends SpaceProps {
  loading?: boolean;
}

const Button = styled.button<ButtonProps>`
  ${space}
`;

export default Button;
