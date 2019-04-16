---
to: <%=location%>/<%=name%>/<%=name%>.tsx 
---
import React from 'react';
<% if (h.isSet(configuration, 'styles')) { -%>
import { Wrapper } from './styles';
<% } -%>
<% if (h.isSet(configuration, 'connected')) { %>
import { connected } from 'react-redux';

interface <%=name%>Props
  extends ReturnType<typeof mapStateToProps>,
    ReturnType<typeof mapDispatchToProps> {}
<% } else { %>
interface <%=name%>Props {}
<% } %>
const <%=name%>: React.FC<<%=name%>Props> = ({ children }) => {
  <% if (h.isSet(configuration, 'styles')) { -%>return (<Wrapper>Component <%=name%></Wrapper>);<% } else { -%>return (<div>Component <%=name%></div>);<% } %>
};
<% if (h.isSet(configuration, 'connected')) { %>
const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = (dispatch: any) => ({});
export default connected(mapStateToProps, mapDispatchToProps)(<%=name%>);
<% } else { %>
export default <%=name%>;
<% } %>