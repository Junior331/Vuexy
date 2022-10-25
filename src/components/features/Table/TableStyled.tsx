import styled from "styled-components";

export const TableContainer = styled.table`
  width: 100%;
  background-color: #151C2F;
`;

export const Thead = styled.thead`
  background-color: #283046;
`;

export const TrHead = styled.tr`
  color: #D0D2D6;
  background-color: #283046;
  border: 0px;
  text-align: left;
`;

export const ThHeader = styled.th`
  padding: 5px;
  text-align: ${props => props.align}
`;

export const TrBody = styled.tr`
  color: #D0D2D6;
  padding-left: 5px;
`;

export const Tbody = styled.tbody``;

export const TdBody = styled.td`
  text-align: center;
`;

export const CustomTdName = styled(TdBody)`
  display: flex;
  // justify-content: center;
`;

export const UserImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.p``;

export const UserEmail = styled.p``;

// export const TableContainer = styled(ContainerGeneric)`
//   width: 100%;
//   height: 505px;
//   border-radius: 6px;
//   background: #283046;
//   ${media.greaterThan("huge")`
//     width: 98.52%;
//   `}
// `;
export const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;