import React from 'react';

import { ProgressBarProps } from './@types';

import * as S from './ProgressBarStyled';

export const ProgressBar = ({
  width,
  height,
  bgColor,
  progressPorcentage,
  borderRadius,
  invert = false,
  ...restProps
}: ProgressBarProps) => {

  return (
    <S.ProgressBarContainer
      bgColor={bgColor}
      width={width}
      height={height}
      invert={invert}
      borderRadius={borderRadius}
      {...restProps}
    >
      <S.ProgressBarBackground
        bgColor={bgColor}
        progressPorcentage={progressPorcentage}
        borderRadius={borderRadius}
      />
      <S.ProgressBarProgress
        bgColor={bgColor}
        progressPorcentage={progressPorcentage}
        borderRadius={borderRadius}
      />
    </S.ProgressBarContainer>
  );
};
