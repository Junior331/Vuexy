import { MouseEvent, useRef } from "react";
import styled, { css } from "styled-components";
import { StyledButtonProps } from "./@types";

export const ButtonWithType = ({
  onClick,
  children,
  submit,
  ...props
}: StyledButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (event: MouseEvent<Element>) => {
    if (typeof onClick === "function") {
      onClick(event);
    }
  };
  return (
    <button
      {...props}
      type={submit ? "submit" : "button"}
      ref={buttonRef}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
const ButtonGeneric = styled(ButtonWithType)<{
  secondary?: boolean;
  noActive?: boolean;
}>`
  width: 100%;
  border: none;
  height: 48px;
  margin: 0 auto;
  fill: #ffffff;
  cursor: pointer;
  border-radius: 10px;
  letter-spacing: 0.5px;
  transition: 0.2s color ease;
  padding: 15px 45px 15px 45px;
  background-color: transparent;
  box-shadow: 0px 4px 20px 0px rgb(169 62 248 / 24%);
  color: ${(props) => props.theme.palette.background.light};
  font-size: ${(props) => props.theme.typography.fontSize + 0.2}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightBold - 100};
  background-image: linear-gradient(90deg, #e75469 0%, #a93ef8 100%);
  ${(props) =>
    props.secondary &&
    css`
      background-color: transparent;
      border: 1px solid ${props.theme.palette.button.default};
      color: ${props.theme.palette.button.default};
    `};
  ${(props) =>
    props.noActive &&
    css`
      cursor: no-drop;
      box-shadow: none;
      color: ${props.theme.palette.text.disable};
      background-color: ${props.theme.palette.button.disable};
    `};
`;
export const ButtonLarge = styled(ButtonGeneric)`
  width: 100%;
`;
export const ButtonMedium = styled(ButtonGeneric)`
  width: 80%;
`;
export const ButtonSmall = styled(ButtonGeneric)`
  width: 38%;
`;
