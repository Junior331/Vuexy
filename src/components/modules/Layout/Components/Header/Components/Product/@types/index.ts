export type ProductType = {
  id: number;
  name: string;
  image: string;
  price: string;
  amount: number;
  description: string;
};

export type Props = {
  product: ProductType;
  addToCart: (clickedItem: ProductType) => void;
  removeFromCart: (id: number) => void;
};
