import "styled-components";
import {
  ButtonType,
  ColorType,
  TextType,
  TitleType,
  TypographyType,
  BackgroundType,
} from "./interfaces";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      text: TextType;
      title: TitleType;
      button: ButtonType;
      background: BackgroundType;
      error: ColorType;
      success?: ColorType;
      warning?: ColorType;
    };
    typography: TypographyType;
  }
}
