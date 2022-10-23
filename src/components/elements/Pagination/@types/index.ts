export type Props = {
  numberOfPages: number;
  selectedPage: number;
  clickOnRightArrow?: () => void;
  clickOnLeftArrow?: () => void;
  clickOnPageIndicator?: (requestedPage: number) => void;
};
