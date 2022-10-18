// import axios from "axios";
import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { getImage } from "../../../assets/img";
import icons from "../../../assets/img/icons";
// import { getNakamaServer } from "../../../../utils/connectors";
import * as S from "./MenuStyled";

export const Menu = () => {
  
  // const navigation = useNavigate();
  // const { state }: any = useLocation();
  // const nakamaServer = getNakamaServer();
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth >= 764);

  //TODO: Logout
  const logOut = () => {

    // let data = {
    //   token: state.data.token,
    //   refreshToken: state.data.refreshToken
    // }

    // axios.post(`${nakamaServer}v2/session/logout`, data, {
    //   auth: {
    //     username: 'lovemonsterserver',
    //     password: ''
    //   }
    // }).then(function(response: any) {      
    // }).catch(function(error) {
    // }).finally(() => {
    //   navigation('/');
    // });
  }

  useEffect(() => {
    function onResize(): void {
      if (window.innerWidth >= 764) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <S.MenuContainer mobile={isMobile}>
      {isMobile && (
      <S.Logo
        src={getImage("logo")}
        alt="Logo do lovemonster"
      />)}
      <S.Dashboard mobile={isMobile}>
        <S.Icon src={icons.home} alt="Icon dashboard"/>
        {isMobile && (<S.Text>Dashboards {isMobile}</S.Text>)}
      </S.Dashboard>
      <S.ContainerLink>
        <S.Text disabled>{isMobile ? "APPS & PAGES" : "..."}</S.Text>
        <S.ItemLink to="/Account">
          <S.Icon src={icons.email} alt="Icon dashboard"/>
          {isMobile && (<S.Text>My Account</S.Text>)}
        </S.ItemLink>
        <S.ItemLink to="/Migration">
          <S.Icon src={icons.chat} alt="Icon dashboard"/>
          {isMobile && (<S.Text>Migration</S.Text>)}
        </S.ItemLink>
        <S.ItemLink to="/Deposit">
          <S.Icon src={icons.checked} alt="Icon dashboard"/>
          {isMobile && (<S.Text>Deposit</S.Text>)}
        </S.ItemLink>
        <S.ItemLink to="/Withdraw">
          <S.Icon src={icons.calendar} alt="Icon dashboard"/>
          {isMobile && (<S.Text>Withdraw</S.Text>)}
        </S.ItemLink>
        <S.ItemLink to="/Staking">
          <S.Icon src={icons.file} alt="Icon dashboard"/>
          {isMobile && (<S.Text>Staking</S.Text>)}
        </S.ItemLink>
        <S.ItemLink to="/Affiliates">
          <S.Icon src={icons.ecommerce} alt="Icon dashboard"/>
          {isMobile && (<S.Text>Affiliates</S.Text>)}
        </S.ItemLink>
        <S.ItemLink to="/Merchandise">
          <S.Icon src={icons.user} alt="Icon dashboard"/>
          {isMobile && (<S.Text>Merchandise</S.Text>)}
        </S.ItemLink>
        <S.ItemLink to="/Settings">
          <S.Icon src={icons.fileNoLine} alt="Icon dashboard"/>
          {isMobile && (<S.Text>Settings</S.Text>)}
        </S.ItemLink>
        <S.ItemLink noIcon to="/Resources">
          {isMobile && (<S.Text>Resources</S.Text>)}
        </S.ItemLink>
        <S.ItemLink noIcon to="/Support">
          {isMobile && (<S.Text>Support</S.Text>)}
        </S.ItemLink>
        <S.ItemLink noIcon to="">
        {isMobile && (
          <S.Text onClick={() => logOut()}>Log out</S.Text>)}
        </S.ItemLink>
      </S.ContainerLink>
    </S.MenuContainer>

  );
};
