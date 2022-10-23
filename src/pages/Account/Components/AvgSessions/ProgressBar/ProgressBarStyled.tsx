import styled from 'styled-components';

import { PBContainerStyledProps, PBProgressStyledProps } from './@types';

export const ProgressBarContainer = styled.div<PBContainerStyledProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  display: flex;
  justify-content: flex-end;
  rotate: ${({ invert }) => (invert ? '360deg' : '180deg')};
  position: relative;
`;

export const ProgressBarBackground = styled.div<PBProgressStyledProps>`
  position: absolute;
  background-color: ${({ bgColor }) => bgColor};
  width: 100%;
  height: 100%;
  opacity: 20%;
  border-radius: ${({ borderRadius }) => borderRadius};
  `;

export const ProgressBarProgress = styled.div<PBProgressStyledProps>`
  background-color: ${({ bgColor }) => bgColor};
  width: ${({ progressPorcentage }) => `${progressPorcentage}%`};
  border-radius: ${({ borderRadius }) => borderRadius};
  height: 100%;
`;
