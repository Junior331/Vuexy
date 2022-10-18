import { Props } from "./@types";
import * as S from "./ProductStyled";

const Product = ({ product, addToCart, removeFromCart }: Props) => {
  return (
    <S.ProductContainer>
      <S.Img src={product.image} alt="Imagem product" />
      <S.ContainerDescription>
        <S.Title>{product.name}</S.Title>
        <S.Text>{product.description}</S.Text>
      </S.ContainerDescription>
      <S.ContainerButtons>
        <S.Button onClick={() => removeFromCart(product.id)}>-</S.Button>
      <S.Amount>{product.amount}</S.Amount>
        <S.Button onClick={() => addToCart(product)}>+</S.Button>
      </S.ContainerButtons>
      <S.PriceBuy>{(product.amount * parseInt(product.price)).toFixed(2)}</S.PriceBuy>
    </S.ProductContainer>
  );
};

export default Product;
