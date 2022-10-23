import styled from 'styled-components';

export const ContainerGeneric = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const UserTimelineContainer = styled(ContainerGeneric)`
  width: 356px;
  height: 476px;
  padding: 21px;
  border-radius: 6px;
  background: #283046;
  flex-direction: column;
  align-items: flex-start;
`;
export const Header = styled(ContainerGeneric)``;
export const Icon = styled.img``;

export const Title = styled.h2`
  line-height: 22px;
  color: ${(props) => props.theme.palette.text.light};
  font-size: ${(props) => props.theme.typography.fontSize}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
`;
export const Text = styled.p`
  line-height: 21px;
  text-align: center;
  max-width: 358.16px;
  color: ${(props) => props.theme.palette.text.regular};
  font-size: ${(props) => props.theme.typography.fontSize}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightLight};
`;