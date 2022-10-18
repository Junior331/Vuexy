import { useState,useEffect } from "react";
import icons from "../../../assets/img/icons";
import { products } from "../../../services/mocks/products";
import { ProductType } from "./Components/Product/@types";
import { YourCart } from "./Components/YourCart";
import * as S from "./HeaderStyled";

const Header = () => {
  const [cart, setCart] = useState(false);
  const [cartProducts, setCartProducts] = useState<ProductType[]>([]);

  const handleAddToCart = (clickedItem: ProductType) => {
    setCartProducts((prev: ProductType[]) => {
      const isItemInCart = prev.find((item:ProductType) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item: ProductType) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };
  const handleRemoveFromCart = (id: number) => {
    setCartProducts((prev: ProductType[]) =>
      prev.reduce((acc: any, item:  ProductType) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as ProductType[])
    );
  };
  useEffect(() => {
    setCartProducts(products)
  }, []);
  return (
    <S.HeaderContainer>
      <S.ContainerIcons>
        <S.Icon src={icons.checked} alt="Icon dashboard" />
        <S.Icon src={icons.chat} alt="Icon dashboard" />
        <S.Icon src={icons.email} alt="Icon dashboard" />
        <S.Icon src={icons.calendar} alt="Icon dashboard" />
        <S.Icon src={icons.star} alt="Icon dashboard" />
        <S.Line />
        <S.Icon src={icons.search} alt="Icon dashboard" />
      </S.ContainerIcons>
      <S.ContainerInfo>
        <S.Translate>
          <S.Flag src={icons.flag} alt="Icon flag USA" />
          <S.Text>English</S.Text>
        </S.Translate>
        <S.Icon
          click
          alt="Icon dashboard"
          src={icons.ecommerce}
          onClick={() => setCart(!cart)}
        />
        <S.Icon src={icons.notification} alt="Icon dashboard" />
        <S.UserInfo>
          <S.ContainerText>
            <S.Text>Jaja</S.Text>
            <S.Text>admin</S.Text>
          </S.ContainerText>
          <S.Avatar
            src={
              "https://i.pinimg.com/originals/d8/ac/9d/d8ac9d666043f14e1dae7ee272637304.jpg"
            }
            alt="Image user"
          />
        </S.UserInfo>
      </S.ContainerInfo>
      {cart && (
        <YourCart
          products={cartProducts}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      )}
    </S.HeaderContainer>
  );
};

export default Header;
