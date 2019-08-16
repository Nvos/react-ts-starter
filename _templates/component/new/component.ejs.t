---
to: "<%=h.joinPath(location, name, name + '.tsx')%>" 
---
import React from 'react';
<% if (h.isSet(configuration, 'styles')) { -%>
import { Wrapper } from './styles';
<% } -%>
<% if (h.isSet(configuration, 'connected')) { -%>
import { useDispatch, useSelector } from 'react-redux';
import { <%=module%>State } from 'Types';
import { rootActions } from '@/shared';
<% if (h.isModuleView(location)) { -%>import { rootActions as moduleActions } from '../../slice';<% } %>
<% } -%>

type Props = {};

const <%=name%>: React.FC<Props> = ({ children }) => {
<% if (h.isSet(configuration, 'connected')) { -%>
  const state = useSelector((state: <%=module%>State) => state);
  const dispatch = useDispatch();

<% } -%>
  <% if (h.isSet(configuration, 'styles')) { -%>return <Wrapper>Component <%=name%></Wrapper>;<% } else { -%>return <div>Component <%=name%></div>;<% } %>
};

export default <%=name%>;
