import React, { useEffect, useState } from "react";

import images from "../../assets/img";
import icons from "../../assets/img/icons";

import {
  AvgSessions,
  Header,
  Menu,
} from "../../components/modules";

import * as S from "./AccountStyled";

export const Account = () => {
  const [progress, setProgress] = useState(0);

  const progressCircle = (newProgress: number) => {
    setProgress(newProgress);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 0.5));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [progress]);
  return (
    <S.AccountContainer>
      <Menu />
      <S.Content>
        <Header />
        <S.SubContent>
          <S.InfoUser>
            <S.Flag src={images.decoreLeft} alt="" />
            <S.Flag src={images.decoreRight} alt="" />
            <S.ContainerIcon>
              <S.Icon src={icons.medal} alt="User avatar" />
            </S.ContainerIcon>
            <S.SubTitle size={"2.8"} weight={"500"} lineHeight={"34"}>
              Congratulations Jaja
            </S.SubTitle>
            <S.Text white>
              You have done <strong>57.6%</strong> more sales today. Check your
              new badge in your profile.
            </S.Text>
          </S.InfoUser>
          <S.Box>
            <S.SubscribersGained>
              <S.ContainerIcon small color={"#7367f01e"}>
                <S.Icon small src={icons.users} alt="User avatar" />
              </S.ContainerIcon>
              <S.SubTitle size={"2.4"} weight={"600"} lineHeight={"29"}>
                92.6k
              </S.SubTitle>

              <S.Text>Subscribers Gained</S.Text>
            </S.SubscribersGained>
            <S.OrdersReceived>
              <S.ContainerIcon small color={"#ff9f431e"}>
                <S.Icon small src={icons.cube} alt="User avatar" />
              </S.ContainerIcon>
              <S.SubTitle size={"2.4"} weight={"600"} lineHeight={"29"}>
                38.4K
              </S.SubTitle>
              <S.Text>Orders Received</S.Text>
            </S.OrdersReceived>
          </S.Box>
          <S.Box>
          <S.AvgSessions />
          <S.SupportTracker>
            {/* <S.SubContentSupportTracker>
              <S.SubTitle size={"1.8"} weight={"500"} lineHeight={"22"}>
                Support Tracker
              </S.SubTitle>
              <S.Text>Last 7 Days</S.Text>
            </S.SubContentSupportTracker>
            <S.SubContentSupportTracker>
              <S.SubContentSupportTracker column>
                <S.SubTitle size={"4.2"} weight={"600"} lineHeight={"51px"}>
                  163
                </S.SubTitle>
                <S.Text>Tickets</S.Text>
              </S.SubContentSupportTracker>
              <SupportTrackerProgress value={progress} />
            </S.SubContentSupportTracker> */}
          </S.SupportTracker>
          </S.Box>
          <S.UserTimeline />
          <S.Sales />
          <S.AppDesign />
          <S.Table />
        </S.SubContent>
      </S.Content>
    </S.AccountContainer>
  );
};
