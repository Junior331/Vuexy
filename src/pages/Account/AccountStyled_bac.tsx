import styled, { css } from "styled-components";
import media from "../../styles/breakpoints";

export const AccountContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: start;
`;
export const Menu = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #131325;
`;
export const Content = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
  background-color: #fff;
  ${media.lessThan("medium")`
    width: 100%;
    padding-top: 90px;
  `}
`;
export const Title = styled.h1`
  color: ${(props) => props.theme.palette.text.regular};
  font-size: ${(props) => props.theme.typography.fontSizeRegular}rem;
`;
export const SubTitle = styled.h2`
  margin: 30px 0;
  color: ${(props) => props.theme.palette.text.dark};
  font-size: ${(props) => props.theme.typography.fontSizeRegular}rem;
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
        border-color: ${(props) => props.theme.palette.text.regular};
      }
    }
  }
  .MuiInputBase-input {
    padding: 10px 15px;
  }

  .MuiInputBase-root {
    border-radius: 0;
    border-bottom: 1px solid ${(props) => props.theme.palette.text.grey};
  }

  ${(props) =>
    props.bottom &&
    css`
      .MuiOutlinedInput-root {
        .MuiOutlinedInput-notchedOutline {
          border: none;
        }
      }
      .MuiInputBase-input {
        padding: 10px 0px;
      }
      .MuiFormControl-root {
        .MuiInputLabel-root {
          left: -15px;
          line-height: normal;
        }
      }
    `};
`;
export const ContainerInput = styled.div<{
  error?: boolean;
  bottom?: boolean;
  noBorder?: boolean;
  noWrap?: boolean;
}>`
  width: 100%;
  display: flex;
  margin: 6px 0;
  align-items: center;
  padding-bottom: 10px;
  justify-content: space-between;
  
  font-family: "Raleway", Sans-serif;
  flex-wrap: ${(props) => (props.noWrap ? "no-wrap" : "wrap")};
  border-bottom: ${(props) => (props.noBorder ? "none" : "1px solid #898989")};

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
export const Text = styled.p<{ ellipsis?: boolean; light?: boolean }>`
  width: auto;
  font-weight: bold;
  color: ${(props) => props.theme.palette.text.regular};
  font-size: ${(props) => props.theme.typography.fontSize}rem;
  
  font-family: "Raleway", Sans-serif;

  ${(props) =>
    props.ellipsis &&
    css`
      width: auto;
      margin: 10px 0;
      overflow-x: hidden;
      text-overflow: ellipsis;
    `};
  ${(props) =>
    props.light &&
    css`
      font-weight: 500;
      color: ${(props) => props.theme.palette.text.grey};
    `};
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
  padding: 10px 35px;
  border-radius: 50px;
  background-color: #5746ae;

  ${(props) =>
    props.noActive &&
    css`
      opacity: 0.6;
      cursor: no-drop;
    `};
`;
