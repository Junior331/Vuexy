import styled, { css } from "styled-components";
import { getImage } from "../../assets/img";
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
export const AccountContainer = styled(ContainerGeneric)``;
export const Content = styled(ContainerGeneric)`
  padding: 20px;
  align-items: start;
  flex-direction: column;
  padding: 15px 28px 21px;
  background-color: ${(props) => props.theme.palette.background.dark};
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
  max-width: 1150px;
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
export const InfoUser = styled(ContainerGeneric)`
  width: 548px;
  height: 238px;
  padding: 30px;
  position: sticky;
  border-radius: 6px;
  flex-direction: column;
  background: linear-gradient(46.62deg, #7367f0 0%, #9e95f5 93.64%);
  img:first-child {
    left: 0;
  }
  img:nth-child(2) {
    right: 0;
  }
`;
export const Flag = styled.img`
  top: 0;
  position: absolute;
`;
export const ContainerIcon = styled.div<{ color?: string; small?: boolean }>`
  display: flex;
  align-items: center;
  border-radius: 40px;
  justify-content: center;
  width: ${(props) => (props.small ? "46" : "70")}px;
  height: ${(props) => (props.small ? "46" : "70")}px;
  background: ${(props) => (props.color ? props.color : "#7367F0")};
  box-shadow: ${(props) =>
    props.color ? "none" : "0px 4px 10px rgba(0, 0, 0, 0.38)"};
`;
export const Icon = styled.img<{ small?: boolean }>`
  ${(props) =>
    props.small &&
    css`
      width: 24px;
      height: 24px;
    `};
`;
export const Text = styled.p<{white?: boolean}>`
  line-height: 21px;
  max-width: 358.16px;
  text-align: center;
  font-size: ${(props) => props.theme.typography.fontSize}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightLight};
  color: ${(props) => props.white ? props.theme.palette.text.white: props.theme.palette.text.regular};
`;
export const Box = styled(ContainerGeneric)`
  gap: 28px;
  width: auto;
  height: auto;
  ${media.lessThan("small")`
    flex-wrap: wrap;
  `}
`;
export const SubscribersGained = styled(ContainerGeneric)`
  width: 260px;
  height: 238px;
  border-radius: 6px;
  padding: 21px 21px 0;
  background: #283046;
  flex-direction: column;
  align-items: flex-start;
  background-size: 100% auto;
  background-position: bottom;
  justify-content: flex-start;
  background-repeat: no-repeat;
  background-image: url(${getImage("subscribersGained")});
  ${media.between("medium", "huge")`
    width: 50%;
    background-image: url(${getImage("subscribersGainedMedium")});
  `}
  ${media.lessThan("small")`
    background-image: url(${getImage("subscribersGainedSmall")});
  `}

  h2 {
    margin: 13px 0 7px;
  }
`;
export const OrdersReceived = styled(ContainerGeneric)`
  width: 260px;
  height: 238px;
  border-radius: 6px;
  padding: 21px 21px 0;
  background: #283046;
  flex-direction: column;
  align-items: flex-start;
  background-size: 100% auto;
  background-position: bottom;
  justify-content: flex-start;
  background-repeat: no-repeat;
  background-image: url(${getImage("ordersReceived")});
  ${media.between("medium", "huge")`
    width: 50%;
    background-image: url(${getImage("ordersReceivedMedium")});
  `}
  ${media.lessThan("small")`
    background-image: url(${getImage("ordersReceivedSmall")});
  `}
  h2 {
    margin: 13px 0 7px;
  }
`;
export const AvgSessions = styled(ContainerGeneric)`
  width: 548px;
  height: 430px;
  padding: 18px 20px;
  border-radius: 6px;
  background: #283046;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const SupportTracker = styled(ContainerGeneric)`
  width: 548px;
  height: 430px;
  padding: 18px 20px;
  border-radius: 6px;
  background: #283046;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const SubContentSupportTracker = styled.div<{ column?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${(props) =>
    props.column &&
    css`
      width: auto;
      flex-direction: column;
  `};
`;
export const UserTimeline = styled(ContainerGeneric)`
  width: 356px;
  height: 476px;
  border-radius: 6px;
  background: #283046;
`;
export const Sales = styled(ContainerGeneric)`
  width: 356px;
  height: 476px;
  border-radius: 6px;
  background: #283046;
`;
export const AppDesign = styled(ContainerGeneric)`
  width: 356px;
  height: 476px;
  border-radius: 6px;
  background: #283046;
`;
export const Table = styled.table`
  width: 100%;
  height: 505px;
  border-radius: 6px;
  background: #283046;
  ${media.greaterThan("huge")`
    width: 98.52%;
  `}
`;
