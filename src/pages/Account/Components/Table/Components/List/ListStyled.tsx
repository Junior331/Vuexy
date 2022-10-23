import styled from "styled-components";

export const Container = styled.ul`
  gap: 0px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;
  max-height: 400px;

  @media (max-width: 968px) {
    height: auto;
  }

  @media (max-width: 485px) {
    justify-content: space-between;
  }

  @media (max-width: 299px) {
    gap: 20px;
  }
`;
export const Line = styled.li`
  width: 100%;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-top: 1px solid #E9ECEF;
`;
