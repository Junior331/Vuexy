import { useEffect, useState } from "react";
import { Pagination } from "../../../../components/elements/Pagination";
import { LIST } from "../../../../services/mocks/List";
import { ItemList } from "./@types";
import { List } from "./Components/List";
import * as S from "./TableStyled";

export const Table = () => {
  const [numberOfPages, setNumberOfPages] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [data] = useState<ItemList[]>(LIST);
  const [dataToShow, setDataToShow] = useState(data);
  const [loading] = useState(true);

  useEffect(() => {
    const calculatePaginationVars = (): void => {
      const container = document.querySelector("#list");
      const card = document.querySelector("#card");

      if (container && card) {
        const GAP = 14;
        const ROWS = window.innerHeight < 269 ? 6 : 2;
        const COMPENSATION = window.innerHeight < 99 ? 2 * GAP : GAP;
        const cardsOnScreen =
          Math.floor(
            (container.clientWidth + COMPENSATION) / (card.clientWidth + GAP)
          ) * ROWS;
        setDataToShow(data.slice(0, cardsOnScreen));
        setNumberOfPages(Math.ceil(data.length / cardsOnScreen));
        setPage(1);
      }
    };

    calculatePaginationVars();

    window.addEventListener("resize", calculatePaginationVars);

    return () => window.removeEventListener("resize", calculatePaginationVars);
  }, [data]);

  const goFowardOnList = (): void => {
    const container = document.querySelector("#list");
    const card = document.querySelector("#card");

    if (container && card && page < numberOfPages) {
      const GAP = 24;
      const ROWS = window.innerWidth < 669 ? 6 : 2;
      const COMPENSATION = window.innerWidth < 299 ? 2 * GAP : GAP;
      const cardsOnScreen =
        Math.floor(
          (container.clientWidth + COMPENSATION) / (card.clientWidth + GAP)
        ) * ROWS;

      setDataToShow(
        data.slice(cardsOnScreen * page, (page + 1) * cardsOnScreen)
      );

      setPage(page + 1);
    }
  };

  const goBackwardsOnList = (): void => {
    const container = document.querySelector("#list");
    const card = document.querySelector("#card");

    if (container && card && page > 1) {
      const GAP = 24;
      const ROWS = window.innerWidth < 669 ? 6 : 2;
      const COMPENSATION = window.innerWidth < 299 ? 2 * GAP : GAP;
      const cardsOnScreen =
        Math.floor(
          (container.clientWidth + COMPENSATION) / (card.clientWidth + GAP)
        ) * ROWS;

      setDataToShow(
        data.slice((page - 2) * cardsOnScreen, cardsOnScreen * (page - 1))
      );

      setPage(page - 1);
    }
  };

  const clickOnPageIndicator = (requestedPage: number): void => {
    const container = document.querySelector("#list");
    const card = document.querySelector("#card");

    if (container && card) {
      const GAP = 24;
      const ROWS = window.innerWidth < 669 ? 6 : 2;
      const COMPENSATION = window.innerWidth < 299 ? 2 * GAP : GAP;
      const cardsOnScreen =
        Math.floor(
          (container.clientWidth + COMPENSATION) / (card.clientWidth + GAP)
        ) * ROWS;
      setDataToShow(
        data.slice(
          (requestedPage - 1) * cardsOnScreen,
          cardsOnScreen * requestedPage
        )
      );

      setPage(requestedPage);
    }
  };


  return (
    <S.TableContainer>
      <List
        loading={loading}
        data={dataToShow}
      />
      <S.PaginationWrapper>
        <Pagination
          numberOfPages={numberOfPages}
          selectedPage={page}
          clickOnRightArrow={goFowardOnList}
          clickOnLeftArrow={goBackwardsOnList}
          clickOnPageIndicator={clickOnPageIndicator}
        />
      </S.PaginationWrapper>
    </S.TableContainer>
  );
};
