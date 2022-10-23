import styled, { css } from "styled-components";
import media from "../../styles/breakpoints";

export const SubTitle = styled.h2<{
  size?: string;
  weight?: string;
  lineHeight?: string;
}>`
  font-size: ${(props) => props.size}rem;
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lineHeight}px;
  color: ${(props) => props.theme.palette.text.light};
`;
const ContainerGeneric = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.between("medium", "huge")`
    width: 100% !important;
  `}
  ${media.lessThan("medium")`
    width: 100% !important;
  `}
`;
export const MigrationContainer = styled(ContainerGeneric)``;
export const Content = styled(ContainerGeneric)`
  align-items: start;
  flex-direction: column;
  ${media.lessThan("medium")`
    width: 100%;
  `}
`;
export const SubContent = styled(ContainerGeneric)`
  gap: 28px;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  max-height: 100vh;
  padding-top: 21px;
  /* max-width: 1150px; */
  overflow-y: auto;
  align-items: flex-start;
  justify-content: flex-start;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #2b2346;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 37px;
    box-sizing: border-box;
    backdrop-filter: blur(150px);
    background: rgba(255, 255, 255, 0.1);
  }
  ${media.lessThan("medium")`
    overflow-y: scroll;
  `}
`;
export const Text = styled.p<{white?: boolean}>`
  width: 100%;
  margin: 10px 0;
  display: flex;
  text-align: start;
  line-height: 21px;
  overflow-x: hidden;
  word-break: break-all;
  align-self: flex-start;
  text-overflow: ellipsis;
  font-size: ${(props) => props.theme.typography.fontSize}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightLight};
  color: ${(props) => props.white ? props.theme.palette.text.white: props.theme.palette.text.regular};
`;
export const FormContainer = styled(ContainerGeneric)`
  width: 100%;
  height: auto;
  padding: 24px 22px;
  border-radius: 6px;
  background: #283046;
  flex-direction: column;
  justify-content: flex-start;
  ${media.greaterThan("huge")`
    width: 98.52%;
  `}
`;
export const Form = styled.form<{ bottom?: boolean }>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  
  .MuiFormControl-root {
    margin: 0;
    width: 100%;
    .MuiInputLabel-root {
      font-weight: bold;
      color: ${(props) => props.theme.palette.text.regular};
      font-size: ${(props) => props.theme.typography.fontSize}rem;
    }
    .MuiOutlinedInput-root {
      .MuiOutlinedInput-input {
        :-webkit-autofill,
        :-webkit-autofill:hover,
        :-webkit-autofill:focus,
        :-webkit-autofill:active {
          transition: background-color 5000s ease-in-out 0s;
          -webkit-text-fill-color: #000 !important;
        }
        border-radius: 0px;
        background-color: rgba(0, 0, 0, 0);
        transition: background-color 5000s;
        color: ${(props) => props.theme.palette.text.regular};
        font-size: ${(props) => props.theme.typography.fontSize}rem;
      }
      .MuiOutlinedInput-notchedOutline {
        border-radius: 5px;
        border: 1px solid #3B4253;
      }
    }
  }
  legend {
    font-size: 1.05rem !important;
  }
`;
export const ContainerInput = styled.div<{
  error?: boolean;
  bottom?: boolean;
  noBorder?: boolean;
  noWrap?: boolean;
}>`
  gap: 8px;
  width: 100%;
  display: flex;
  margin: 6px 0;
  align-items: center;
  padding-bottom: 10px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  font-family: "Raleway", Sans-serif;
  flex-wrap: ${(props) => (props.noWrap ? "no-wrap" : "wrap")};

  .MuiFormControl-root {
    width: 50%;
  }
  ${(props) =>
    props.error &&
    css`
      .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-error {
        color: ${props.theme.palette.error.main};
        font-size: ${props.theme.typography.fontSize}rem;
        font-family: "Raleway", Sans-serif;
      }

      .MuiOutlinedInput-notchedOutline {
        top: 0;
        font-size: ${props.theme.typography.fontSize}rem;
        border-color: ${props.theme.palette.error.main} !important;

        font-family: "Raleway", Sans-serif;
      }
      .MuiFormHelperText-root {
        margin-bottom: 5px;
        font-size: ${props.theme.typography.fontSize}rem;
        font-weight: bold;

        font-family: "Raleway", Sans-serif;
      }
    `};
  ${(props) =>
    props.bottom &&
    css`
      padding-bottom: 0px;
      .MuiFormControl-root {
        width: 100%;
      }
    `};

  /* ${media.lessThan("medium")`
    flex-wrap: wrap;
  `} */
`;
export const ContainerButtons = styled.div`
  gap: 25px;
  width: 100%;
  display: flex;
  margin: 10px 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;

  button {
    padding: 14px 30px;
  }
`;
export const Button = styled.button<{ noActive?: boolean }>`
  border: none;
  color: #fff;
  cursor: pointer;
  min-width: 145px;
  padding: 10px 35px;
  border-radius: 5px;
  background: #7367F0;
  background-color: #5746ae;

  ${(props) =>
    props.noActive &&
    css`
      opacity: 0.6;
      cursor: no-drop;
    `};
`;