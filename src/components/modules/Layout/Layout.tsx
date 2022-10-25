import { GlobalStyles } from "../../../styles/globalStyled";
import { Menu, Header } from "./Components";
import { LayoutProps } from "./@types";
import { useLocation } from "react-router-dom";
import * as S from "./LayoutStyled";

const Layout = ({ children }: LayoutProps) => {
  const router = useLocation();
  const routes = ["/", "/signUp", "emailconfirmation"];

  // const accessDenied = routes.includes(router.pathname);
  const accessDenied = true;

  console.log("accessDenied ::",accessDenied)

  return (
    <S.LayoutContainer>
      <GlobalStyles />
      <S.LayoutContent>
        {!accessDenied && <Menu />}
        <S.Container>
        {!accessDenied && <Header />}
          <>{children}</>
        </S.Container>
      </S.LayoutContent>
    </S.LayoutContainer>
  );
};

export default Layout;
