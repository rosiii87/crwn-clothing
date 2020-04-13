import { createGlobalStyle } from 'styled-components';
import { minMedia } from './components/styles/mixins';
import { colors } from './components/styles/variables';

export const GlobalStyle = createGlobalStyle`
html {
  font-size: 10px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 1.5;
    color: ${colors.greyDark};

    ${minMedia.sm`
    font-size: 1.6rem;
    `}
  }

  h1 {
    font-family: 'steelfishregular', 'Roboto', sans-serif;
    color: ${colors.primary};
    font-size: 3.6rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    line-height: 1.7;

    ${minMedia.sm`
    font-size: 4.8rem;
    `}
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    color: ${colors.almostBlack};
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.7;

    ${minMedia.sm`
    font-size: 3.2rem;
    font-wieght: 500;
    `}
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    color: ${colors.almostBlack};
    font-size: 1.8rem;
    font-weight: 400;
    font-style: bold;
    line-height: 1.5;

    ${minMedia.sm`
    font-size: 2.8rem;
    font-wieght: 500;
    `}
  }

  h4 {
    font-family: 'Roboto', sans-serif;
    color: ${colors.almostBlack};
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.5;

    ${minMedia.sm`
    font-size: 1.6rem;
    `}
  }
  
  a {
    text-decoration: none;
    color: black;
  }
 


  @font-face {
    font-family: 'steelfishbold_italic';
    src: url('/fonts/steelfish_bd_it-webfont.woff2') format('woff2'),
         url('/fonts/steelfish_bd_it-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}
@font-face {
    font-family: 'steelfishbold';
    src: url('/fonts/steelfish_bd-webfont.woff2') format('woff2'),
         url('/fonts/steelfish_bd-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}
@font-face {
    font-family: 'steelfishextrabold_italic';
    src: url('/fonts/steelfish_eb_it-webfont.woff2') format('woff2'),
         url('/fonts/steelfish_eb_it-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'steelfishextrabold';
    src: url('/fonts/steelfish_eb-webfont.woff2') format('woff2'),
         url('/fonts/steelfish_eb-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'steelfishoutline';
    src: url('/fonts/steelfish_outline-webfont.woff2') format('woff2'),
         url('/fonts/steelfish_outline-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'steelfishregular_italic';
    src: url('/fonts/steelfish_rg_it-webfont.woff2') format('woff2'),
         url('/fonts/steelfish_rg_it-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'steelfishregular';
    src: url('/fonts/steelfish_rg-webfont.woff2') format('woff2'),
         url('/fonts/steelfish_rg-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}
`;
