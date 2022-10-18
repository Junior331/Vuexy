import styled from 'styled-components';

import { ProgressBar as ProgressBarComponent } from '../ProgressBar/ProgressBar';

export const CategoryContainer = styled.div`
  width: 100%;
  max-width: 222px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 768px) {
    max-width: 135px;
  }
`;

export const CategoryText = styled.p`
  width: 100%;
`;

export const ProgressBar = styled(ProgressBarComponent)`
  width: 100%;
`;
