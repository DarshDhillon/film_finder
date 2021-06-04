import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


*, *::before, *::after {
margin: 0;
padding: 0;
box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
 font-family: 'Open Sans', sans-serif;
 font-weight: 300;
}

h1, h2, h3, h4, h5, h6 {
 font-family: 'Archivo', sans-serif;
 font-weight: 500;
}
`;

export default GlobalStyle;
