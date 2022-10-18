import { ButtonSmall } from "../../../../components/elements/Button/ButtonStyled";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import media from "styled-media-query";

const Form = styled.form`
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
        background: transparent;
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
      background-color: #2f2744;
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

  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    border-radius: 5px;
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
  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root {
    font-size: ${(props) => props.theme.typography.fontSizeRegular - 0.6}rem;
  }

  .MuiFormHelperText-root {
    margin-bottom: 10px;
    font-size: ${(props) => props.theme.typography.fontSize}rem;
  }
`;

const Register = styled(ButtonSmall)`
  width: 50%;
  height: auto;
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

const ContainerTermo = styled.div`
  width: 100%;
  margin-top: -10px;
  color: ${(props) => props.theme.palette.text.light};
  font-size: ${(props) => props.theme.typography.fontSize}rem;
  span {
    padding: 0 9px 0 0;
    color: ${(props) => props.theme.palette.text.light};

    svg {
      height: 24px;
      width: 24px;
    }
  }
`;

const ContainerInput = styled.div<{ error?: boolean }>`
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
  ${media.lessThan("medium")`
    width: 100%;
  `}
  ${(props) =>
    props.error &&
    css`
      :last-of-type {
        margin-bottom: 0;
      }
      /*
      .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-error {
        color: ${props.theme.palette.error.main};
        font-size: ${props.theme.typography.fontSize}rem;
      } */

      .MuiOutlinedInput-notchedOutline {
        font-size: ${props.theme.typography.fontSize}rem;
        border-color: ${props.theme.palette.error.main} !important;
      }

      .css-1wc848c-MuiFormHelperText-root {
        margin-left: 5px;
      }
    `};
`;

const ContainerPassword = styled.div`
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
    position: absolute;
    border-radius: 0px !important;
    background-color: transparent;
    color: ${(props) => props.theme.palette.title.default};
    :hover {
      background-color: transparent;
    }
    .MuiSvgIcon-root {
      font-size: ${(props) => props.theme.typography.fontSizeRegular + 0.3}rem;
    }
  }
`;

const Message = styled.p`
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 5px;
  color: ${(props) => props.theme.palette.error.main};
  font-weight: ${(props) => props.theme.typography.fontWeightLight};
  font-size: ${(props) => props.theme.typography.fontSizeRegular - 0.6}rem;
`;

const ChangePassword = styled.span`
  width: 100%;
  cursor: pointer;
  text-align: end;
  line-height: 24px;
  font-style: normal;
  margin-bottom: 22px;
  letter-spacing: 0.15px;
  color: rgba(255, 255, 255, 0.6);
  font-size: ${(props) => props.theme.typography.fontSize}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightLight};
`;
const Text = styled.p`
  gap: 4px;
  width: 100%;
  display: flex;
  letter-spacing: 0.15px;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: ${(props) => props.theme.typography.fontSize}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightLight};
`;
const TextError = styled.p`
  gap: 4px;
  width: 100%;
  display: flex;
  letter-spacing: 0.15px;
  justify-content: center;
  color: rgba(255, 0, 0, 0.6);
  font-size: ${(props) => props.theme.typography.fontSize}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightLight};
`;
const BlueLink = styled(Link)`
  color: ${(props) => props.theme.palette.text.lightBlue};
  display: flex;
  cursor: pointer;
  text-decoration: underline;
`;
export {
  Form,
  Text,
  TextError,
  Message,
  BlueLink,
  Register,
  ChangePassword,
  ContainerTermo,
  ContainerInput,
  ContainerPassword,
};
