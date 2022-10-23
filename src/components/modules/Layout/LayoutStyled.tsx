import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  margin: 0 auto;
  max-width: 100%;
  align-items: center;
  flex-direction: column;
`;

export const LayoutContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  max-width: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  max-width: 100%;
  align-items: center;
  flex-direction: column;
  padding: 15px 28px 21px;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.palette.background.dark};
`;