import { ChartRadar } from "./Chart/Chart";
import * as S from "./SalesStyled";

export const Sales = () => {

  return (
    <S.SalesContainer>
      <S.Title>Sales</S.Title>
      <S.Text>Last 6 months</S.Text>
      <ChartRadar/>
    </S.SalesContainer>
  );
};
