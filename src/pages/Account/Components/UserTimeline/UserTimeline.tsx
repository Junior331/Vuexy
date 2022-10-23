import icons from "../../../../assets/img/icons";
import { TimelineInfo } from "./Components/TimeLine/TimeLine";
import * as S from "./UserTimelineStyled";

export const UserTimeline = () => {

  return (
    <S.UserTimelineContainer>
      <S.Header>
        <S.Icon src={icons.menu} alt="Icon menu" />
        <S.Title>User Timeline</S.Title>
      </S.Header>
      <TimelineInfo/>
    </S.UserTimelineContainer>
  );
};
