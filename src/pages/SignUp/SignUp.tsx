import { getImage } from "../../assets/img";
import { Form } from "./Components/Form";
import * as S from "./SignUpStyled";

export const SignUp = () => {
  return (
    <S.SignUpContainer>
        <S.ContainerAbstract>
        <S.Img src={getImage("monsterCharacter")} alt="" />
      </S.ContainerAbstract>
      <S.Container>
        <Form />
      </S.Container>
    </S.SignUpContainer>
  );
};
