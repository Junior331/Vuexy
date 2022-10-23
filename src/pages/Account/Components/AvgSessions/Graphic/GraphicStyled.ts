import styled from "styled-components";

export const GraphicContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  position: sticky;
`;

export const GraphicText = styled.p`
  width: 100%;
  height: 20%;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #b4b7bd;

  @media (max-width: 768px) {
    position: absolute;
    width: calc(358px - 27px * 2);
    text-align: end;
    /* Calculei o valor da largura do componente menos os paddings laterais */
  }
`;

export const GraphicContent = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  rotate: 360deg;
  gap: 24px;
  align-items: flex-end;
`;
