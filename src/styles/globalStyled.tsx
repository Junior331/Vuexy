import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body{
    scroll-behavior: smooth;
    font-size:${(props) => props.theme.typography.htmlFontSize};
  }

  body {
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    font-family: 'Montserrat', sans-serif;
    background-image: url('https://lovemonsternft.com/new/wp-content/uploads/2022/05/krvjbrv.png');
  }

  #chat-widget-container{
    display: none !important;
  }

  .content{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

`;
