import styled from "styled-components";

const ContainerGeneric = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;
export const ProductContainer = styled(ContainerGeneric)`
  width: 100%;
  padding: 12px 15px;
  border-top: 1px solid #3b4253;
  border-bottom: 1px solid #3b4253;
`;
export const Img = styled.img`
  width: 62px;
  height: 58px;
  padding: 10px;
  margin-right: 14px;
  border-radius: 6px;
  background: #161d31;
`;
export const Title = styled.h1`
  max-width: 130px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.palette.text.light};
  font-size: ${(props) => props.theme.typography.fontSize}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
`;
export const Text = styled.p`
  max-width: 130px;
  overflow: hidden;
  line-height: 21px;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.palette.text.regular};
  font-size: ${(props) => props.theme.typography.fontSize}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightLight};
`;
export const Amount = styled.h2`
  width: 52px;
  color: #b4b7bd;
  padding: 3px 10px;
  text-align: center;
  border-radius: 5px;
  background: #161d31;
  font-size: ${(props) => props.theme.typography.fontSize}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
`;
export const PriceBuy = styled.h2`
  color: ${(props) => props.theme.palette.text.light};
  font-size: ${(props) => props.theme.typography.fontSize}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightLight};
`;
export const ContainerDescription = styled(ContainerGeneric)`
  width: 100%;
  max-width: 130px;
  flex-direction: column;
  align-items: flex-start;
`;
export const ContainerButtons = styled(ContainerGeneric)`
  margin: 0 15px 0 2px;
  button:first-child {
    left: 8px;
    position: relative;
  }
  button:last-child {
    right: 8px;
    position: relative;
  }
`;
export const Button = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  border-radius: 5px;
  background: #7367f0;
  color: ${(props) => props.theme.palette.text.white};
`;
