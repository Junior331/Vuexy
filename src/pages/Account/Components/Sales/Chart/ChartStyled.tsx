import styled from "styled-components";

export const ContainerGeneric = styled.div``;
export const ChartRadarContainer = styled(ContainerGeneric)`
  height: 90%;
  width: 100%;
  display: flex;
  justify-content: center;
  .recharts-wrapper {
    width: 100%;
    height: 100%;
    max-width: 330px !important;
    max-height: 400px !important;
  }
  svg.recharts-surface {
    height: 100%;
    inline-size: 100%;
  }
  tspan {
    fill: #b9b9c3;
    font-size: ${(props) => props.theme.typography.fontSize - 0.2}rem;
    font-weight: ${(props) => props.theme.typography.fontWeightLight};
  }
  .recharts-legend-wrapper{
    top: 12px !important;
    left: 0px !important;
    .recharts-default-legend{
      width: auto;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      li:nth-child(n){  
        width: auto;
        display: flex;
        cursor: pointer;
        align-items: center;
        color: ${(props) => props.theme.palette.text.regular};
        font-size: ${(props) => props.theme.typography.fontSize}rem;
        font-weight: ${(props) => props.theme.typography.fontWeightRegular};
        svg {
          width: 12px;
          height: 12px;
          border: 2px solid;
          border-radius: 100%;
          path {
            fill: none;
          }
        }
      }
      li:nth-child(1){  
        svg {
          border-color:#00CFE8;
        }
      }
      li:nth-child(2){  
        svg {
          border-color:#7367F0;
        }
      }
    }
  }
`;
