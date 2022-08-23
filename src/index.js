import React from 'react';
import ReactDOM from 'react-dom/client';

import App from "./App";
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import baseStyles from "@/styles/base";
import resetStyles from '@/styles/reset';



const Global = createGlobalStyle`
${resetStyles}
${baseStyles}
`
const theme = {
  colors: {
    primary: '#333333',
    secondary: '#FFFFFF'
  },
  media: {
    laptop: '(max-width: 1023px)',
    tablet: '(max-width: 767px)',
    mobile: '(max-width: 374px)'
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <Global/>
    <App />
  </ThemeProvider>
    
);
