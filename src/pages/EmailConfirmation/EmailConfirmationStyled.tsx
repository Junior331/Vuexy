import { getImage } from "../../assets/img";
import styled from "styled-components";
import { ButtonSmall } from "../../components/elements/Button/ButtonStyled";
import media from "styled-media-query";
import { Link } from "react-router-dom";

export const SignInContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 80px 0px 20px;
  justify-content: space-between;
`;
export const ContainerAbstract = styled.div`
  width: auto;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("${getImage("lmtTokens")}");
`;
export const Container = styled.div`
  float: right;
  display: flex;
  padding: 42px;
  overflow-x: hidden;
  border-radius: 5px;
  align-items: center;
  flex-direction: column;
  backdrop-filter: blur(150px);
  background: rgb(37, 40, 61);

  ${media.lessThan("large")`
    left: 0;
    width: 100%;
    height: auto;
    min-height: 100vh;
    position absolute;
    padding: 35px 30px;
    backdrop-filter: blur(5px);
    background: rgb(11 11 34 / 91%);
  `}
`;
export const BlueLink = styled(Link)`
  color: ${(props) => props.theme.palette.text.lightBlue};
  display: flex;
  cursor: pointer;
  text-decoration: underline;
`;
export const Img = styled.img`
  width: 100%;
  max-width: 650px;
  transform: translateY(-35px);
  animation: position 4s linear infinite;

  @keyframes position {
    0% {
      transform: translateY(-35px);
    }
    5% {
      transform: translateY(-30px);
    }
    10% {
      transform: translateY(-25px);
    }
    15% {
      transform: translateY(-15px);
    }
    20% {
      transform: translateY(-5px);
    }
    25% {
      transform: translateY(0px);
    }
    30% {
      transform: translateY(5px);
    }
    35% {
      transform: translateY(10px);
    }
    40% {
      transform: translateY(15px);
    }
    45% {
      transform: translateY(20px);
    }
    50% {
      transform: translateY(15px);
    }
    55% {
      transform: translateY(10px);
    }
    60% {
      transform: translateY(5px);
    }
    65% {
      transform: translateY(0px);
    }
    70% {
      transform: translateY(-5px);
    }
    75% {
      transform: translateY(-10px);
    }
    80% {
      transform: translateY(-15px);
    }
    85% {
      transform: translateY(-20px);
    }
    90% {
      transform: translateY(-25px);
    }
    95% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(-35px);
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
export const TextError = styled.p`
  gap: 4px;
  width: 100%;
  display: flex;
  letter-spacing: 0.15px;
  justify-content: center;
  color: rgba(255, 0, 0, 0.6);
  font-size: ${(props) => props.theme.typography.fontSize}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightLight};
`;
export const MainButton = styled(ButtonSmall)`
  width: 100%;
  height: 20%;
  font-size: ${(props) => props.theme.typography.fontSize + 0.1}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightBold + 50};
  ${media.lessThan("medium")`
    width: 100%;
    max-width: 212px;
  `}
  span {
    width: 25px !important;
    height: 25px !important;
  }
`;
