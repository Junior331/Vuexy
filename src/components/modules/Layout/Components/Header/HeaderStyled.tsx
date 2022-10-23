import styled, { css } from "styled-components";
import media from "../../../../../styles/breakpoints";

const ContainerGeneric = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HeaderContainer = styled(ContainerGeneric)`
  z-index: 2;
  width: 100%;
  padding: 0 20px;
  position: sticky;
  min-height: 62px;
  margin-top: 20px;
  border-radius: 6px;
  justify-content: space-between;
  box-shadow: 0px 4px 24px #0000001e;
  background-color: ${(props) => props.theme.palette.background.regular};
  ${media.lessThan("medium")`
    justify-content: flex-end;
  `}
`;
export const ContainerIcons = styled(ContainerGeneric)`
  gap: 14px;
  ${media.lessThan("medium")`
    display: none;
  `}
`;
export const Line = styled.div`
  height: 20px;
  width: 1.5px;
  background-color: #3b4253;
`;
export const Icon = styled.img<{click?: boolean}>`
  ${(props) =>
    props.click &&
    css`
    cursor: pointer;
  `}
`;

export const Text = styled.h2`
  line-height: 21px;
  color: ${(props) => props.theme.palette.text.regular};
  font-size: ${(props) => props.theme.typography.fontSize}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightLight};
`;
export const ContainerInfo = styled(ContainerGeneric)`
  gap: 14px;
`;
export const Translate = styled(ContainerGeneric)`
  gap: 14px;
  ${media.lessThan("small")`
    display: none;
  `}
`;
export const Flag = styled.img``;
export const ContainerText = styled(ContainerGeneric)`
  align-items: flex-end;
  flex-direction: column;
  h2{
    line-height: 14px;
  }
`;
export const UserInfo = styled(ContainerGeneric)`
  gap: 14px;
`;
export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 100%;
`;
