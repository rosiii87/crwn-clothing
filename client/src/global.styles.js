import { createGlobalStyle } from 'styled-components';
import { maxMedia, minMedia } from './components/styles/mixins';
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
    text-align: center;
    line-height: 1.5;
    color: ${colors.greyDark};

    ${minMedia.sm`
    font-size: 1.6rem;
    `}
  }

  button {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 1.4rem;
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
    line-height: 1.4;

    ${minMedia.sm`
    font-size: 4.8rem;
    `}
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    color: ${colors.almostBlack};
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.4;

    ${minMedia.sm`
    font-size: 3.2rem;
    font-weight: 500;
    `}
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    color: ${colors.almostBlack};
    font-size: 1.8rem;
    font-weight: 400;
    font-style: bold;
    line-height: 1.3;

    ${minMedia.sm`
    font-size: 2.8rem;
    font-weight: 500;
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

  button:focus {
    outline: 0;
  }

  .hp-carousel {
    width: 100%;
  }

  .product-detail-carousel {
    width: 100%;
  }

  .product-carousel {
    width: 100%;
  }

  ${maxMedia.sm`
  .product-carousel {
    width: 30rem;
    margin: auto;
  }
  `}
 
  .carousel {
    width: 40rem;
  }

  ${maxMedia.sm`
  .carousel {
    width: 30rem;
    margin: auto;
  }
  `}
  
  .carousel__wrap {
    position: relative;
    background-color: transparent;
  }
  
  .carousel__viewport {
    width: 100%;
    overflow: hidden;
  }
  
  .carousel__viewport.is-draggable {
    cursor: move;
    cursor: grab;
  }
  
  .carousel__viewport.is-dragging {
    cursor: grabbing;
  }
  
  .carousel__container {
    display: flex;
  }

  .product-carousel__container {
    display: flex;
    margin: 0rem 1rem 3rem 1rem;
  }

  .product-detail-carousel__container {
    display: flex;
  }
  

  .product-detail-carousel__item{
    /*position: relative;  Only needed if the carousel option is set to { loop: true } */
    flex: 0 0 100%; /* Slide width will be 80% */
    padding: 0 2rem;
  }
  
  .product-carousel__item {
    /*position: relative;  Only needed if the carousel option is set to { loop: true } */
    flex: 0 0 20%; /* Slide width will be 80% */
    padding: 0 2rem;
  }
  
  .carousel__item {
    /*position: relative;  Only needed if the carousel option is set to { loop: true } */
    flex: 0 0 100%; /* Slide width will be 80% */
  
  }

  .hp-carousel__item {
    position: relative; /*   Only needed if the carousel option is set to { loop: true } */
    flex: 0 0 100%; /* Slide width will be 80% */
  
  }

  .carousel__dots {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1rem;
  }
  
  .carousel__dot {
    display: flex;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    position: relative;
    padding: 0;
    width: 3rem;
    height: 3rem;
    margin-right: 0.75rem;
    margin-left: 0.75rem;
    border: 0;
  }
  
  .carousel__dot:after {
    background-color: ${colors.greyLight}; 
    width: 100%;
    height: 0.4rem;
    content: "";
  }
  
  .carousel__dot.is-selected:after {
    background-color: ${colors.lighter};
  }

  .carousel__arrowBtn {
    background-color: transparent;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    width: 5rem;
    height: 5rem;
    padding: 0;
    border: 0;
    cursor: pointer;
    fill: ${colors.lighter}; /* Enabled color */
  }
  
  .carousel__arrowBtn:disabled {
    fill: #e9e9e9; /* Disabled color */
    opacity: 0.5;
  }
  
  .carousel__arrowBtn--prev {
    left: calc(7% - 2.5rem);
  }
  
  .carousel__arrowBtn--next {
    right: calc(7% - 2.5rem);
  }
  

  ${maxMedia.sm`
  .carousel__arrowBtn--prev {
    left: calc(12% - 2.5rem);
  }

  .carousel__arrowBtn--next {
    right: calc(12% - 2.5rem);
  }
  `}

  .carousel__arrowBtn__svg {
    width: 3.5rem;
    height: 3.5rem;
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
