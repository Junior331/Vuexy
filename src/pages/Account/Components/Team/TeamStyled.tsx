import styled from "styled-components";
import { Props } from "./@types";

export const ContainerGeneric = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const TeamContainer = styled(ContainerGeneric)`
  width: 356px;
  height: 476px;
  padding: 21px;
  border-radius: 6px;
  background: #283046;
  flex-direction: column;
  align-items: flex-start;
`;
export const Date = styled.p`
  padding: 1px 9px;
  color: #7367f0;
  line-height: 18px;
  border-radius: 4px;
  background: #7367f01e;
  font-size: ${(props) => props.theme.typography.fontSize - 0.2}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightRegular + 100};
`;
export const Title = styled.h2`
  line-height: 22px;
  margin: 18px 0 9px;
  color: ${(props) => props.theme.palette.text.light};
  font-size: ${(props) => props.theme.typography.fontSize + 0.4}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
`;
export const Text = styled.p`
  max-width: 310px;
  line-height: 18px;
  margin-bottom: 27px;
  color: ${(props) => props.theme.palette.text.light};
  font-size: ${(props) => props.theme.typography.fontSize - 0.2}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightLight};
`;
export const ListStacks = styled(ContainerGeneric)`
  gap: 12px;
  margin-bottom: 27px;
`;
export const Stack = styled.p<Props>`
  padding: 1px 9px;
  line-height: 21px;
  text-align: center;
  border-radius: 4px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  font-size: ${(props) => props.theme.typography.fontSize}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightRegular + 100};
`;
export const SubTitle = styled.h2`
  color: #b9b9c3;
  line-height: 23px;
  margin-bottom: 8px;
  font-size: ${(props) => props.theme.typography.fontSize - 0.2}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
`;
export const ListMembers = styled(ContainerGeneric)`
  gap: 8px;
  left: 5px;
  min-height: 45px;
  overflow-x: auto;
  max-width: 270px;

  &::-webkit-scrollbar {
    height: 5px;
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
export const Member = styled.img`
  width: 34px;
  height: 34px;
  object-fit: cover;
  border-radius: 100%;
`;
export const ContainerCards = styled(ContainerGeneric)`
  gap: 10px;
  margin-top: 14px;
`;
export const Card = styled(ContainerGeneric)`
  padding: 5px 12px;
  border-radius: 6px;
  background: #161d31;
  flex-direction: column;
  justify-content: center;
`;
export const CardTitle = styled(Text)`
  line-height: 23px;
  margin: 0;
`;
export const CardText = styled.p`
  color: #676d7d;
  line-height: 21px;
  font-size: ${(props) => props.theme.typography.fontSize}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightLight};
`;
export const Button = styled.button`
  width: 100%;
  border: none;
  cursor: pointer;
  padding: 10px 0;
  margin-top: 39px;
  line-height: 18px;
  border-radius: 5px;
  letter-spacing: 0.4px;
  background: #7367f0;
  color: ${(props) => props.theme.palette.text.white};
  font-size: ${(props) => props.theme.typography.fontSize}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
`;
