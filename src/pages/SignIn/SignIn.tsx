import { getImage } from "../../assets/img";
import { Form } from "./Components/Form";
import * as S from "./SignInStyled";

export const SignIn = () => {
  return (
    <S.SignInContainer>
      <S.ContainerAbstract>
        <S.Img src={getImage("monsterCharacter")} alt="" />
      </S.ContainerAbstract>
      <S.Container>
        <Form />
      </S.Container>
    </S.SignInContainer>
  );
};
