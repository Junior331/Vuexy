import styled from "styled-components";

const LayoutContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  margin: 0 auto;
  max-width: 100%;
  align-items: center;
  flex-direction: column;
`;

const LayoutContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  max-width: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export { LayoutContainer, LayoutContent };
