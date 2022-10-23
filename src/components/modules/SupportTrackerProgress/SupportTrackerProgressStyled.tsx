import styled from "styled-components";

export const SupportTrackerProgressContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: sticky;
  max-width: 400px;
  max-height: 268px;
  align-items: center;
  justify-content: center;
  
  .MuiCircularProgress-root {
    color: #283046;
    border: 2px solid;
    border-radius: 100%;
    width: 100% !important;
    height: 100% !important;
    background: linear-gradient(300deg, #E7555B 24.14%, #BD5C91 49.42%, #9263CA 75.77%);
  }
  .MuiBox-root {
    transform: rotate3d(1295, -70, 0, 180deg);
    .MuiBox-root {
      > div:first-child {
        width: 100%;
        height: 100%;
        display: flex;
        position: absolute;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .MuiTypography-root{
    z-index: 1;
    line-height: 29px;
    color: ${(props) => props.theme.palette.text.light};
    font-weight: ${(props) => props.theme.typography.fontWeightRegular};
    font-size: ${(props) => props.theme.typography.fontSizeRegular + 0.2}rem;
  }
`;

export const Circle = styled.div`
    width: 83%;
    height: 83%;
    position: absolute;
    border-radius: 100%;
    background-color: #283046;
`;