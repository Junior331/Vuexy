import styled from 'styled-components';

type AvgSessionsStyledProps = {
  width: string;
  height: string;
};

export const AvgSessionsContainer = styled.div<AvgSessionsStyledProps>`
  width: ${({ width }) => width || '548px'};
  height: ${({ height }) => height || '430px'};
  background: #283046;
  border-radius: 6px;
  min-width: 548px;
  min-height: 430px;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    min-height: 489px;
    height: 489px;
    min-width: 358px;
    width: 358px;
  }
`;

export const AvgSessionsBody = styled.div`
  width: 100%;
  height: 59%;
  padding: 19px 27px 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 25px;
    height: calc(100% - 126px);
  }
`;

export const AvgSessionsLeft = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AvgSessionsLeftTexts = styled.div``;


export const AvgSessionsLeftTitle = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #D0D2D6;
  padding-bottom: 5px;
`;

export const AvgSessionsLeftSubTitle = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #B4B7BD;
  padding-bottom: 20px;
`;

export const AvgSessionsLeftText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #28C76F;
  display: flex;
  flex-direction: row;
  gap: 17px;
`;

export const AvgSessionsLeftButton = styled.p`
  background: #7367F0;
  border-radius: 5px;
  width: 137px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  cursor: pointer;
`;


export const AvgSessionsRight = styled.div`
  max-width: 285px;
  width: 60%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 247px;
  }
`;

export const AvgSessionsSeparator = styled.div`
  background-color: #3b4253;
  width: calc(100% - 33px - 32px);
  height: 1px;
  padding: 0 33px;
`;

export const AvgSessionsFooter = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px 54px;
  padding: 24px 21px 32px 27px;

  @media (max-width: 768px) {
    padding: 17px 30px 23px 30px;
    max-height: 126px;
    gap: 16px 27px;
  }
`;
