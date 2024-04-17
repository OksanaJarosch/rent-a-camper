import { createGlobalStyle } from 'styled-components';
import "modern-normalize";
import {theme} from "./helpers/themes";

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: "Inter", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.color.dark};
}

code {
    font-family: "Inter", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
}

ul,
ol {
    margin: 0;
    padding: 0;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
}

a {
    text-decoration: none;
}

li {
    list-style: none;
}
`;