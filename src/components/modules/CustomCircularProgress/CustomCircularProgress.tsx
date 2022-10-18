import icons from "../../../assets/img/icons";
import * as S from "./CustomCircularProgressStyled";

const CustomCircularProgress = ({ isGray }: { isGray?: boolean }) => {
  return isGray ? (
    <S.CustomCircularProgressContainer src={icons.loadingGray} />
  ) : (
    <S.CustomCircularProgressContainer src={icons.loading} />
  );
};

export default CustomCircularProgress;
