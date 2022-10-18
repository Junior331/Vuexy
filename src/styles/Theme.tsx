import { DefaultTheme } from "styled-components";

const Theme: DefaultTheme = {
  palette: {

                                        
    text: {
      white: "#ffffff",
      light: "#D0D2D6",
      regular: "#B4B7BD",
      disable: "#676D7D",



      grey: "#898989",
      dark: "#000000",
      lightBlue: "#48B9FE",
    },
    title: {
      default: "#FFFFFF",
    },

    button: {
      default: "#FFB620",
      disable: "#EAEBEC",
    },
    background: {
      dark: "#161D31",
      light: "#ffffff",
      default: "#F5F4F6",
      regular: "#283046",
    },

    error: {
      main: "#d32f2f",
    },
    success: {
      main: "#6EBA19",
    },
    warning: {
      main: "#121A3D",
    },
  },
  typography: {
    fontSize: 1.4,
    fontSizeBold: 3.5,
    fontWeightBold: 700,
    htmlFontSize: "10px",
    fontWeightLight: 400,
    fontSizeRegular: 2.2,
    fontWeightRegular: 500,
  },
};

export default Theme;
