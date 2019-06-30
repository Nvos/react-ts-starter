/* eslint-disable @typescript-eslint/no-unused-vars */
import { setConfig } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
// DO NOT REMOVE (Type injection for cssprop)
import * as cssprop from 'styled-components/cssprop';
import App from './App';

setConfig({
  ignoreSFC: true, // RHL will be __completely__ disabled for SFC
  pureRender: true, // RHL will not change render method
});

ReactDOM.render(<App />, document.getElementById('root'));
