import {css} from 'styled-components';

const resetStyles = css`
*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
}

ul, ol, li {
    list-style: none;
}

img {
    vertical-align: top;
}

h1, h2, h3, h4, h5, h6, p {
    font-weight: inherit;
    font-size: inherit;
}

html, body {
    height: 100%;
    line-height: 1;
}

input, button {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
}

button {
    background: none;
    cursor: pointer;
}
`

export default resetStyles;



