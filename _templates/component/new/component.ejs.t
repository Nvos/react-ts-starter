---
to: <%=location%>/<%=name%>/<%=name%>.tsx 
---
import React from 'react';
<% if (h.isSet(configuration, 'styles')) { -%>
import { Wrapper } from './styles';
<% } -%>
<% if (h.isSet(configuration, 'connected')) { %>
import { useDispatch, useSelector } from 'react-redux';
<% } -%>

type Props = {};

const <%=name%>: React.FC<Props> = ({ children }) => {
<% if (h.isSet(configuration, 'connected')) { -%>
  const state = useSelector(state => state);
  const dispatch = useDispatch();

<% } -%>
  <% if (h.isSet(configuration, 'styles')) { -%>return <Wrapper>Component <%=name%></Wrapper>;<% } else { -%>return <div>Component <%=name%></div>;<% } %>
};

export default <%=name%>;
