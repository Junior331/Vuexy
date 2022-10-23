import styled, { css } from "styled-components";
import { Link } from "react-router-dom";


const GenericContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: start;
`;
export const MenuContainer = styled(GenericContainer)<{ mobile?: boolean }>`
  height: 100%;
  padding: 25px 15px;
  flex-direction: column;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  width: ${props => props.mobile ? "260px": "80px"};
  background-color:  ${(props) => props.theme.palette.background.regular};
`;
export const Logo = styled.img`
  width: 100%;
  margin-bottom: 25px;
`;
export const Dashboard = styled(GenericContainer)<{ mobile?: boolean }>`
  gap: 10px;
  padding: 12px 15px;
  border-radius: 5px;
  align-items: flex-start;
  width: ${props => props.mobile ? "93%" : "auto"};
  background-color: ${(props) => props.theme.palette.background.dark};
`;
export const Icon = styled.img`
`;
export const Text = styled.p<{disabled?:boolean}>`
  width: 100%;
  color: ${(props) => props.theme.palette.text.light};
  font-size: ${(props) => props.theme.typography.fontSize + 0.2}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};

  ${(props) =>
    props.disabled &&
    css`
    margin: 30px 0;
    color: ${(props) => props.theme.palette.text.disable};
  `};
`;
export const ContainerLink = styled(GenericContainer)`
  width: 100%;
  align-items: start;
  padding: 12px 15px;
  flex-direction: column;  
`;
export const ItemLink = styled(Link)`
  gap: 10px;
  width: 100%;
  display: flex;
  padding: 5px 0;
  cursor: pointer;
  align-items: start;
  margin-bottom: 14px;
  text-decoration: none;
  justify-content: start;
  color: ${(props) => props.theme.palette.text.white};
  font-size: ${(props) => props.theme.typography.fontSize + 0.2}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
`;
export const ItemLinkNoIcon = styled(ItemLink)`
  margin-left: 27px;
`;