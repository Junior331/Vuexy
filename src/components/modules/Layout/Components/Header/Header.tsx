import axios from "axios";
import { useState,useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import images from "../../../../../assets/img";
import icons from "../../../../../assets/img/icons";
import { getNakamaServer } from "../../../../../utils/connectors";
import { ProductType } from "./Components/Product/@types";
import { YourCart } from "./Components/YourCart";
import * as S from "./HeaderStyled";

const Header = () => {
  const navigate = useNavigate();
  const [cart] = useState(false); // setCart
  const token = localStorage.getItem("token");
  const [cartProducts, setCartProducts] = useState<ProductType[]>([]);
  const [profileData, setProfileData] = useState({
    user: {
      id: "",
      username: "",
      lang_tag: "",
      create_time: "",
      update_time: "",
    },
    wallet: "",
    email: "",
  });
  const nakamaServer = getNakamaServer();


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
  console.log(" token ::",token)

  const getUser = useCallback(() => {
    axios
      .get(`${nakamaServer}v2/account`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(function (response: any) {
        setProfileData(response?.data);
      })
      .catch(function (error: any) {
        console.log("error ::", error)
        if (error?.request?.status === 401) {
          navigate("/");
        }
      });
  }, [nakamaServer, navigate, token]);
  
  useEffect(() => {
    getUser()
  }, [getUser]);
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
        {/* <S.Translate>
          <S.Flag src={icons.flag} alt="Icon flag USA" />
          <S.Text>English</S.Text>
        </S.Translate>
        <S.Icon
          alt="Icon dashboard"
          src={icons.ecommerce}
        />
        <S.Icon src={icons.notification} alt="Icon dashboard" /> */}
        <S.UserInfo>
          <S.ContainerText>
            <S.Text>{profileData.user.username}</S.Text>
            <S.Text>{profileData.email}</S.Text>
          </S.ContainerText>
          <S.Avatar
            src={images.lovemonster}
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
