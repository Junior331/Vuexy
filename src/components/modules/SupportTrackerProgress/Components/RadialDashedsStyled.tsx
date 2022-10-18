import styled from "styled-components";

export const DashedContainer = styled.div`
  /* div:nth-child(n+1):nth-child(-n+11){
    div {
      background-color: #9263CA;
    }
  }
  div:nth-child(n+11):nth-child(-n+13){
    div {
      background-color: #AB5FA9;
    }
  }
  div:nth-child(14){
    div {
      background-color: #B35D9E;
    }
  }
  div:nth-child(15){
    div {
      background-color: #C45B89;
    }
  }
  div:nth-child(16){
    div {
      background-color: #D35874;;
    }
  }
  div:nth-child(n+16):nth-child(-n+28){
    div {
      background-color: #E7555B;
    }
  }
  div:nth-child(28){
    div {
      background-color: #D45874;
    }
  }
  div:nth-child(29){
    div {
      background-color: #D35874;
    }
  }
  div:nth-child(30){
    div {
      background-color: #CC597E;
    }
  }
  div:nth-child(31){
    div {
      background-color: #C55A88;
    }
  }
  div:nth-child(32){
    div {
      background-color: #BD5C92;
    }
  }
  div:nth-child(33){
    div {
      background-color: #B35D9E;
    }
  }
  div:nth-child(34){
    div {
      background-color: #AC5EA8;
    }
  }
  div:nth-child(35){
    div {
      background-color: #9C61BC;
    }
  }
  .MuiTypography-root{
    width: 100%;
    color: #fff;
    margin: 0 auto;
    position: absolute;
    text-align: center;
  } */
`;
export const Content = styled.div<{ turns?: number }>`
  height: 100%;
  position: absolute;
  transform: rotate(${(props) => props.turns}turn);
`;
export const Line = styled.div`
  width: 10px;
  height: 10%;
  margin: -2px;
  background-color: #283046;
`;
