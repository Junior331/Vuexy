import { ButtonSmall } from "../../../../components/elements/Button/ButtonStyled";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import media from "styled-media-query";

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  max-width: 431px;
  align-items: flex-start;
  justify-content: flex-start;

  .MuiFormControl-root {
    margin: 0;
    width: 100%;
    .MuiInputLabel-root {
      color: rgba(255, 255, 255, 0.6);
      font-size: ${(props) => props.theme.typography.fontSize}rem;
    }
    .MuiOutlinedInput-root {
      .MuiOutlinedInput-input {
        :-webkit-autofill,
        :-webkit-autofill:hover,
        :-webkit-autofill:focus,
        :-webkit-autofill:active {
          transition: background-color 5000s ease-in-out 0s;
          -webkit-text-fill-color: #fff !important;
        }
        border-radius: 0px;
        color: rgba(255, 255, 255, 0.6);
        background-color: rgba(0, 0, 0, 0);
        transition: background-color 5000s;

        font-size: ${(props) => props.theme.typography.fontSize}rem;
      }
      .MuiOutlinedInput-notchedOutline {
        border-color: #ffffff61;
      }
      :hover {
        .MuiOutlinedInput-notchedOutline {
          border-color: #ffffff61;
        }
      }
    }
  }
  .MuiInputAdornment-root {
    margin: 0;
    padding: 0;
    width: auto;
    height: 100%;
    .MuiButtonBase-root {
      width: 100%;
      height: 100%;
      padding: 11px 20px;
      margin-right: -32px;
      background-color: #ffffff;
      border-radius: 0 !important;
      button:hover {
      }
      svg {
        width: 22px;
        height: 22px;
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }

  .css-1lwbda4-MuiStack-root {
    width: 100%;
    .MuiFormControl-root {
      width: 100%;
      .MuiOutlinedInput-input {
        border-radius: 4px !important;
      }
      .MuiOutlinedInput-root {
        padding-right: 0px;
        .MuiInputAdornment-root {
          display: none;
        }
      }
    }
  }

  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root {
    font-size: ${(props) => props.theme.typography.fontSizeRegular - 0.6}rem;
  }

  ${media.lessThan("medium")`
    .MuiFormControl-root:nth-child(n) {
      width: 100%;
    }
    .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root{
      display: -webkit-box;

    }
    .MuiInputAdornment-root {
      margin: 0;
      padding: 0;
      width: auto;
      left: -50px;
      height: 100%;
      position: relative;
    }
    .css-1lwbda4-MuiStack-root {
      width: 100%;
    }
    .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input{
      padding: 16.5px 0px;
    }
    > div:first-child {
      width: 100%;
    }
    > div:nth-child(2) {
      width: 100%;
    }
  `}

  input:-webkit-autofill {
    -webkit-text-fill-color: #ffffff99;
  }
`;
export const Register = styled(ButtonSmall)`
  width: 50%;
  height: auto;
  margin-top: 22px;
  margin-bottom: 42px;
  font-size: ${(props) => props.theme.typography.fontSize + 0.4}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightBold + 200};
  ${media.lessThan("medium")`
    width: 100%;
    max-width: 212px;
  `}

  span {
    width: 25px !important;
    height: 25px !important;
  }
`;
export const ContainerTermo = styled.div`
  width: 100%;
  color: ${(props) => props.theme.palette.text.light};
  font-size: ${(props) => props.theme.typography.fontSize}rem;
  display: flex;
  align-items: center;

  span {
    padding: 0 9px 0 0;
    color: ${(props) => props.theme.palette.text.light};

    svg {
      height: 22px;
      width: 22px;
    }
  }
`;
export const ContainerInput = styled.div<{ error?: boolean }>`
  width: 100%;
  display: flex;
  position: sticky;
  margin-bottom: 22px;
  align-items: center;
  justify-content: flex-start;
  .invalid-number-message {
    top: 45px;
    line-height: 24px;
    font-style: normal;
    position: absolute;
    letter-spacing: 0.15px;
    background-color: transparent;
    color: ${(props) => props.theme.palette.error.main};
    font-size: ${(props) => props.theme.typography.htmlFontSize};
    font-weight: ${(props) => props.theme.typography.fontWeightLight};
  }

  ${(props) =>
    props.error &&
    css`
      .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-error {
        color: ${props.theme.palette.error.main};
        font-size: ${props.theme.typography.fontSize}rem;
      }

      .MuiOutlinedInput-notchedOutline {
        font-size: ${props.theme.typography.fontSize}rem;
        border-color: ${props.theme.palette.error.main} !important;
      }
      .MuiFormHelperText-root {
        margin-bottom: 10px;
        font-size: ${props.theme.typography.fontSize}rem;
      }
    `};
  ${media.lessThan("medium")`
    width: 100%;
  `}
`;
export const ContainerPassword = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  div:first-child {
    margin-right: 0px;
    width: 100% !important;
  }
  button {
    width: 45px;
    right: 13px;
    height: 55px;
    color: #ffffff;
    position: absolute;
    border-radius: 0px !important;
    background-color: transparent;
    :hover {
      background-color: transparent;
    }
    .MuiSvgIcon-root {
      font-size: ${(props) => props.theme.typography.fontSizeRegular + 0.3}rem;
    }
  }
`;
export const Text = styled.p`
  gap: 4px;
  width: 100%;
  display: flex;
  letter-spacing: 0.15px;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: ${(props) => props.theme.typography.fontSize}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightLight};
`;
export const ErrText = styled.p`
  gap: 4px;
  width: 100%;
  display: flex;
  letter-spacing: 0.15px;
  justify-content: center;
  color: rgba(255, 0, 0, 0.6);
  font-size: ${(props) => props.theme.typography.fontSize}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightLight};
`;
export const BlueLink = styled(Link)`
  color: ${(props) => props.theme.palette.text.lightBlue};
  display: flex;
  cursor: pointer;
  text-decoration: underline;
`;