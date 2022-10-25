import styled from "styled-components";

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #151C2F;
  padding: 0 25px;
`;

export const Thead = styled.thead`
  background-color: #343D55;
`;

export const TrHead = styled.tr`
  color: #D0D2D6;
  background-color: #283046;
  border: 0px;
  color: #d0d2d6;
  text-align: left;
  background-color: #283046;
`;

export const ThHeader = styled.th`
  padding: 5px;
  text-align: ${props => props.align || 'left'};
  font-size: 12px;
  font-weight: 600;
`;

export const ThHeaderContent = styled.div`
`;

export const TrBody = styled.tr`
  color: #d0d2d6;
  padding-left: 5px;
  border-top: 2pt solid #3B4253;
`;

export const TdId = styled.td`
  color: #7367F0;
  font-weight: 600;
  font-size: 14px;
`;

export const Tbody = styled.tbody``;

export const TdBody = styled.td`
  text-align: ${props => props.align || 'left'};
  font-size: 14px;
  font-weight: 400;
  color: #B4B7BD;
`;

export const NameContainer = styled.div`
  gap: 10px;
  display: flex;
  padding: 19px 0;
  align-items: center;
  justify-content: flex-start;
`;

export const UserImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const ColumnBox = styled.div`
  gap: 5px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const UserName = styled.p``;

export const UserEmail = styled.p``;

export const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

export const Img = styled.img<{
  variant: "send" | "chart" | "arrowDownCircle";
}>`
  --main-color: ${(props) => {
    switch (props.variant) {
      case "send":
        return "#6c757d1e;";
      case "chart":
        return "#28c76f1e;";
      case "arrowDownCircle":
        return "#00cfe81e;";
      default:
        return "#6c757d1e";
    }
  }};
  border-radius: 45px;
  padding: 7.5px 6.5px;
  background-color: ${(props) => {
    return 'var(--main-color)';
  }};
`;


// Balance styled components

export const BalancePaidText = styled.span`
  background-color: rgba(40, 199, 111, 0.12);
  border-radius: 17px;
  padding: 1px 9px;
  color: #28C76F;
  font-size: 12px;
`;

export const BalanceText = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #B4B7BD;
`;

// Actions styled components

export const ActionsContainer = styled.div`
  display: flex;
  gap: 20.85px;
`;

export const ActionIcon = styled.img`
  width: 20.85px;
  height: 18px;
  cursor: pointer;
`;


// SortByColumn styled components

export const SortContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 10px;
`;

export const SortArrow = styled.img`
  width: 16.22px;
  height: 14px;
  cursor: pointer;
`;
