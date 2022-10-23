import React from 'react';

import { AvgSessionsProps } from './@types';
import { Category } from './Category/Category';
import { Graphic } from './Graphic/Graphic';

import * as S from './AvgSessionsStyled';
import { getCategory } from '../../../../services/mocks/Category';
import { graphicData } from '../../../../services/mocks/graphicData';

export const AvgSessions = ({ width = '', height = '' }: AvgSessionsProps) => (
  <S.AvgSessionsContainer width={width} height={height}>
    <S.AvgSessionsBody>
      <S.AvgSessionsLeft>
        <S.AvgSessionsLeftTexts>
          <S.AvgSessionsLeftTitle>2.7k</S.AvgSessionsLeftTitle>
          <S.AvgSessionsLeftSubTitle>Avg Sessions</S.AvgSessionsLeftSubTitle>
          <S.AvgSessionsLeftText>
            <p>+5.2%</p>
            <p>VS last 7 days</p>
          </S.AvgSessionsLeftText>
        </S.AvgSessionsLeftTexts>
        <S.AvgSessionsLeftButton>View Details</S.AvgSessionsLeftButton>
      </S.AvgSessionsLeft>
      <S.AvgSessionsRight>
        <Graphic data={graphicData} />
      </S.AvgSessionsRight>
    </S.AvgSessionsBody>

    <S.AvgSessionsSeparator />

    <S.AvgSessionsFooter>
      {getCategory.map(({ name, value, color, porcentage },index) => (
        <Category
          key={index}
          name={name}
          value={value}
          color={color}
          progressPorcentage={porcentage}
        />
      ))}
    </S.AvgSessionsFooter>
  </S.AvgSessionsContainer>
);