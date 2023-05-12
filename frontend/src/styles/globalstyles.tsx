import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {

    color: inherit;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }


  :root{


    /* Color used on all backgroungpages */
    --bg-page:#f4f6f9;
    --bg-page2:#404953;

    // Sky color
    --bg-sky-color: #DBEAFF

    // Text colors
    --text-col:#rgb(32,179,119);
    --text-col2:#424955;


    /* Color used on all raw products pages */
    --bg-raw-prod:#edcece;
    --bg-raw-head:#9c9c92;

    /* Background accordion */
    --bg-content-1:#7f3232;
    --bg-content-2:#dbc5ed;
    --bg-content-3:#7f3232;

    --bg-title-1:#7f3232;
    --bg-title-2:#dca3a3;
    --bg-title-3:#7f3232;

    /* Color orders */
    --bg-orders:#f3e9e9;

     /* Color shopping */
    --bg-shopping:#f3e9e9;

    --color-bg:#141414;
    --color-bg2:rgb(0, 2, 17);

    --color-bg-footer: #473131;

    --color-bg-login:#f6f0f0;
    --color-bg-sidebar:#23282D;
    /* --color-bg-sidebar:#0293F0; */
    --color-text-sidebar: white;


    --color-text: #4cdc17 ;
    --color-subtext: #FFBA71;
    --color-page-profile:#e7adad;

      --clr-white: #ffffff;

      --clr-black: #000000;
      --clr-gray-dark: #333333;
      --clr-gray-medium: #4f4f4f;
      --clr-gray-semi: #828282;
      --clr-gray-light: #bdbdbd;
      --clr-pink: #ff3294;
      --bg-primary: #f2f2f2;
      --bg-secondary: #f5f5f5;
      --doc-height: 100%;

    --gradient-text: none;

    --font-family:sans-serif;

    --height-banner:60vh;
    --height-banner-mobile:30vh;

    // Font sizes
    --font-size-label:1.3rem;
    --font-size-text:0.9rem;
    --font-size-tinyText:12px;
  }
`;

export default GlobalStyle;

// How to use variables in teh styled-components
// font-size: var(--font-size-label);
