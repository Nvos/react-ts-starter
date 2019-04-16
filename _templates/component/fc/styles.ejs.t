---
to: "<%= h.isSet(configuration, 'styles') ? h.joinPath(location, name, 'styles.tsx') : null %>"
---
import styled from 'styled-components/macro';

const Wrapper = styled.div`

`;

export {
  Wrapper
};