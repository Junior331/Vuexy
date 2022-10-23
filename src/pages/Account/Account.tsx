import images from "../../assets/img";
import icons from "../../assets/img/icons";
import * as S from "./AccountStyled";
import {
  AvgSessions,
  SupportTracker,
  UserTimeline,
  Sales,
  Team,
} from "./Components";

export const Account = () => {
  return (
    <S.AccountContainer>
      <S.Content>
        <S.SubContent>
          <S.InfoUser>
            <S.Flag src={images.decoreLeft} alt="bandeiras" />
            <S.Flag src={images.decoreRight} alt="bandeiras" />
            <S.ContainerIcon>
              <S.Icon src={icons.medal} alt="medalha" />
            </S.ContainerIcon>
            <S.Title size={"2.8"} weight={"500"} lineHeight={"34"}>
              Congratulations Pablo
            </S.Title>
            <S.Text white>
              You have done<strong> 57.6% </strong>more sales today. Check your
              new badge in your profile.
            </S.Text>
          </S.InfoUser>
          <S.Box>
            <S.SubscribersGained>
            <S.ContainerIcon>
              <S.Icon small src={icons.users} alt="usuarios" />
            </S.ContainerIcon>
            </S.SubscribersGained>
            <S.OrdersReceived></S.OrdersReceived>
          </S.Box>
          <AvgSessions />
          <SupportTracker />
          <UserTimeline />
          <Sales />
          <Team />
        </S.SubContent>
      </S.Content>
    </S.AccountContainer>
  );
};
