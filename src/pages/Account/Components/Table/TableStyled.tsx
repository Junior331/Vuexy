import styled from "styled-components";
import media from "../../../../styles/breakpoints";

export const ContainerGeneric = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;
export const TableContainer = styled(ContainerGeneric)`
  width: 100%;
  height: 505px;
  border-radius: 6px;
  background: #283046;
  ${media.greaterThan("huge")`
    width: 98.52%;
  `}
`;
export const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;