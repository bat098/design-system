import './styles/index.css';

import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Barlow', sans-serif;
}

html {
  font-size: 10px;
}
`;

export default GlobalStyle;
