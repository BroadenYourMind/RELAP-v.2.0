import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';


const Global = createGlobalStyle`
*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro';
}

a {
  text-decoration: none;
  cursor: pointer;
  color: inherit;
}

ul, ol, li {
  list-style: none;
}

body, html {
  font-family: 'Source Sans Pro';
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  color: $accent-font-color;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  font-family: Poppins;
}

h1 {
  font-size: 72px;
  line-height: 1;
}

h2 {
  font-size: 56px;
  line-height: 64px;
  @include laptop {
      font-size: 40px;
      line-height: 48px;
  }
}

h3 {
  font-size: 40px;
  line-height: 48px;
}

h4 {
  font-size: 24px;
  line-height: 32px;
}

h5 {
  font-size: 16px;
  line-height: 1.5;
  text-transform: uppercase;
}

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
