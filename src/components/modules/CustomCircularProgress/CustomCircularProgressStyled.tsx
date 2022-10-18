import styled, { keyframes } from 'styled-components';

const rotating = keyframes`
from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }

`;
const CustomCircularProgressContainer = styled.img`
  width: 30px;
  height: 30px;
  display: flex;
  margin: auto;

  -webkit-animation: ${rotating} 2s linear infinite;
  -moz-animation: ${rotating} 2s linear infinite;
  -ms-animation: ${rotating} 2s linear infinite;
  -o-animation: ${rotating} 2s linear infinite;
  animation: ${rotating} 2s linear infinite;
`;
export { CustomCircularProgressContainer };
