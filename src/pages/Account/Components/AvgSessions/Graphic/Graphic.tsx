import React from 'react';

import { ProgressBar } from '../ProgressBar/ProgressBar';
import { GraphicProps } from './@types';

import * as S from './GraphicStyled';

export const Graphic = ({ data }: GraphicProps) => {
  const listValues = data.map(({ value }) => value);
  const maxValue = Math.max(...listValues);

  return (
    <S.GraphicContainer>
      <S.GraphicText>Last 7 Days</S.GraphicText>
      <S.GraphicContent>
        {data.map(
          ({
            day,
            value,
            color
          }: {
            day: number;
            value: number;
            color: string;
          }, index) => {
            const percentage = (value * 100) / maxValue;

            return (
              <ProgressBar
                key={index}
                bgColor={color}
                height={`${percentage}%`}
                width="19px"
                progressPorcentage={100}
                borderRadius="7px"
              />
            );
          }
        )}
      </S.GraphicContent>
    </S.GraphicContainer>
  );
};
