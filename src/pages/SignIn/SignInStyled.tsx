import { getImage } from "../../assets/img";
import styled from "styled-components";
import media from "styled-media-query";

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
