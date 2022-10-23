import styled, { css } from 'styled-components';
import media from '../../../../styles/breakpoints';
import { TitleProps } from './@types';

export const SupportTrackerContainer = styled.div`
  gap: 22px;
  width: 548px;
  height: 430px;
  display: flex;
  padding: 18px 20px;
  border-radius: 6px;
  background: #283046;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  
  ${media.between("medium", "huge")`
    width: 100% !important;
  `}
  ${media.lessThan("medium")`
    width: 100% !important;
  `}
`;
export const Container = styled.div<{ column?: boolean }>`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  ${(props) =>
    props.column &&
    css`
      width: auto;
      flex-direction: column;
  `};
`;
export const Title = styled.h2<TitleProps>`
  font-size: ${(props) => props.size}rem;
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lineHeight}px;
  color: ${(props) => props.theme.palette.text.light};
`;
export const Text = styled.p`
  line-height: 21px;
  text-align: center;
  max-width: 358.16px;
  color: ${(props) => props.theme.palette.text.regular};
  font-size: ${(props) => props.theme.typography.fontSize}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightLight};
`;
export const ContainerText = styled.div`
  gap: 7px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  
  p {
    color: ${(props) => props.theme.palette.text.regular};
  }
`;

