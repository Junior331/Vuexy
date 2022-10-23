import { ProductType } from "../../Product/@types";

export type Props = {
  products: ProductType[];
  addToCart: (clickedItem: ProductType) => void;
  removeFromCart: (id: number) => void;
};
