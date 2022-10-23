import _ from "lodash";
import { Props } from "./@types";
import * as S from "./RadialDashedsStyled";

const RadialDasheds = ({count}: Props) => {
  const turns = 1 / count;
  return (
    <S.DashedContainer>
      {_.range(count).map((index) => (
        <S.Content key={index} turns={index * turns}>
          <S.Line />
        </S.Content>
      ))}
    </S.DashedContainer>
  );
};

export default RadialDasheds;
