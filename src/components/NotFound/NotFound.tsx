import React from 'react';
import { Wrapper } from './styles';

type Props = {};

const NotFound: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <h1>Page doesn&apos;t exist</h1>
    </Wrapper>
  );
};

export default NotFound;
