import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const Button = styled.button<{ selected?: boolean }>`
  width: 28px;
  height: 28px;
  object-fit: contain;
  border: 0;
  border-radius: 50%;
  color: ${({ theme }) => theme.palette.text.white};
  background-color: rgba(255, 255, 255, 0.1);
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ selected, theme }) =>
    selected &&
    css`
      border: 1px solid ${theme.palette.button.default};
      color: ${theme.palette.button.default};
    `}
`;

export const Icon = styled.img<{ rotate?: boolean }>`
  width: 20px;
  height: 20px;
  object-fit: contain;

  ${({ rotate }) =>
    rotate &&
    css`
      transform: rotate(-180deg);
    `}
`;
