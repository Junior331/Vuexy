import React from 'react';
import icons from '../../../assets/img/icons';
import { Props } from './@types';

import * as S from './PaginationStyled';

const Pagination: React.FC<Props> = ({
  numberOfPages,
  selectedPage,
  clickOnRightArrow = () => {},
  clickOnLeftArrow = () => {},
  clickOnPageIndicator = () => {}
}) => {
  const renderPages = (_: number, index: number): React.ReactElement => {
    if (index + 1 === selectedPage) {
      return <S.Button selected>{index + 1}</S.Button>;
    }

    return (
      <S.Button onClick={() => clickOnPageIndicator(index + 1)}>
        {index + 1}
      </S.Button>
    );
  };

  return (
    <S.Container>
      <S.Button onClick={clickOnLeftArrow}>
        <S.Icon src={icons.arrowRight} rotate />
      </S.Button>
      {new Array(numberOfPages || 0).fill(0).map(renderPages)}
      <S.Button onClick={clickOnRightArrow}>
        <S.Icon src={icons.arrowRight} />
      </S.Button>
    </S.Container>
  );
};

export default Pagination;
