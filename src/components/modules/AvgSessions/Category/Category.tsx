import React from 'react';

import { CategoryProps } from './@types';

import * as S from './CategoryStyled';

export const Category = ({ name, value, color, progressPorcentage }: CategoryProps) => (
  <S.CategoryContainer>
    <S.CategoryText>{`${name}: ${value}`}</S.CategoryText>
    <S.ProgressBar
      bgColor={color}
      width="222px"
      height="6px"
      progressPorcentage={progressPorcentage}
      borderRadius="7px"
    />
  </S.CategoryContainer>
);
