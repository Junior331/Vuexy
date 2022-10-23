import styled from "styled-components";

const ContainerGeneric = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const YourCartContainer = styled.div`
  top: 65px;
  width: 400px;
  right: 165px;
  display: flex;
  border-radius: 6px;
  position: absolute;
  flex-direction: column;
  box-shadow: 0px 5px 25px rgb(0 0 0 / 10%);
  background-color: ${(props) => props.theme.palette.background.regular};
`;
export const Title = styled.h1`
  color: ${(props) => props.theme.palette.text.light};
  font-size: ${(props) => props.theme.typography.fontSize + 0.4}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
`;
export const Header = styled(ContainerGeneric)`
  height: 53px;
  padding: 0 18px;
  justify-content: space-between;
`;
export const AmountItems = styled.h2`
  color: #7367F0;
  padding: 3px 10px;
  border-radius: 17px;
  background: #7367f01e;
  font-size: ${(props) => props.theme.typography.fontSize + 0.4}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
`;
export const ContainerItems = styled(ContainerGeneric)`
  height: 420px;
  overflow-y: hidden;
  flex-direction: column;
  justify-content: flex-start;
  &:hover {
    overflow-y: scroll;
  }
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
`;
export const Total = styled(ContainerGeneric)`
  padding: 5px 18px;
  justify-content: space-between;
`;
export const Text = styled.p`
  line-height: 21px;
  color: ${(props) => props.theme.palette.text.regular};
  font-size: ${(props) => props.theme.typography.fontSize}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightLight};
`;
export const ValueBuy = styled.h2`
  color: #7367F0;
  font-size: ${(props) => props.theme.typography.fontSize}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
`;
export const Checkout = styled.button`
  width: 356px;
  height: 37px;
  border: none;
  margin: 0 auto;
  line-height: 17px;
  border-radius: 5px;
  margin-bottom: 25px;
  background: #7367F0;
  letter-spacing: 0.4px;
  color: ${(props) => props.theme.palette.text.white};
  font-size: ${(props) => props.theme.typography.fontSize}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
`;
