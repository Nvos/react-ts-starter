import styled from 'styled-components/macro';
import { space, SpaceProps } from 'styled-system';

const Input = styled.input`
  &,
  &::after,
  &::before {
    box-sizing: border-box;
  }
  height: 42px;
  border-radius: 4px;
  background: gray;
  border: none;
  padding: 8px;
  font-size: 19px;
  padding-left: 16px;
  padding-right: 16px;

  &:focus {
    border: solid 1px red;
  }
`;

const Button = styled.button<SpaceProps>`
  ${space}
  font-size: 19px;
  border-radius: 4px;
  background: gray;
  border: none;

  height: 42px;
  width: 42px;
  padding: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  height: 600px;
`;

export { Button, Input, Container };
