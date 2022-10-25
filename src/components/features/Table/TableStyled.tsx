import styled from "styled-components";

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #151c2f;
`;

export const Thead = styled.thead`
  background-color: #283046;
`;

export const TrHead = styled.tr`
  border: 0px;
  color: #d0d2d6;
  text-align: left;
  background-color: #283046;
`;

export const ThHeader = styled.th`
  padding: 5px;
  text-align: ${(props) => props.align};
`;

export const TrBody = styled.tr`
  color: #d0d2d6;
  padding-left: 5px;
  border-top: 2pt solid #3B4253;
`;

export const Tbody = styled.tbody``;

export const TdBody = styled.td`
  text-align: center;
`;

export const CustomTdName = styled(TdBody)`
  gap: 10px;
  display: flex;
  padding: 19px 0;
  align-items: center;
  justify-content: flex-start;
  // justify-content: center;
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
