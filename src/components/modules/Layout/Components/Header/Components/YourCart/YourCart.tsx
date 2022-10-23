import { useState } from "react";
import { Product } from "../Product";
import { ProductType } from "../Product/@types";
import { Props } from "./@types";
import * as S from "./YourCartStyled";

const YourCart = ({ products, addToCart, removeFromCart }: Props) => {
  const calculateTotal = (items: ProductType[]) => items.reduce((acc, item) => acc + item.amount * parseInt(item.price), 0);
  return (
    <S.YourCartContainer>
      <S.Header>
        <S.Title>Your Cart</S.Title>
        <S.AmountItems>{products.length} Items</S.AmountItems>
      </S.Header>
      <S.ContainerItems>
        {products.map((product: ProductType) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </S.ContainerItems>
      <S.Total>
        <S.Text>Total:</S.Text>
        <S.ValueBuy>${calculateTotal(products).toFixed(2)}</S.ValueBuy>
      </S.Total>
      <S.Checkout>Checkout</S.Checkout>
    </S.YourCartContainer>
  );
};

export default YourCart;
