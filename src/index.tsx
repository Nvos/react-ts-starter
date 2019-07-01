import { setConfig } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
// DO NOT REMOVE (Type injection for cssprop)
import * as cssprop from 'styled-components/cssprop';
import App from './App';

setConfig({
  // RHL will be __completely__ disabled for SFC
  ignoreSFC: true,
  // RHL will not change render method
  pureRender: true,
});

ReactDOM.render(<App />, document.getElementById('root'));
