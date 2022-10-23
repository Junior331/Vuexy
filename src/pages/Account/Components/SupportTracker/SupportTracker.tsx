import React, { useState, useEffect } from "react";
import { SupportTrackerProgress } from "../../../../components/modules/SupportTrackerProgress";
import * as S from "./SupportTrackerStyled";
export const SupportTracker = () => {
  const [progress, setProgress] = useState(0);

  const progressCircle = (newProgress: number) => {
    setProgress(newProgress);
  };

  useEffect(() => {
    progressCircle(83);
  }, [progress]);

  return (
    <S.SupportTrackerContainer>
      <S.Container>
        <S.Title size={"1.8"} weight={"500"} lineHeight={"22"}>
          Support Tracker
        </S.Title>
        <S.Text>Last 7 Days</S.Text>
      </S.Container>
      <S.Container>
        <S.Container column>
          <S.Title size={"4.2"} weight={"600"} lineHeight={"51"}>
            163
          </S.Title>
          <S.Text>Tickets</S.Text>
        </S.Container>
        <SupportTrackerProgress
          progress={progress}
        />
      </S.Container>
      <S.Container>
        <S.ContainerText>
          <S.Text>New Tickets</S.Text>
          <S.Title size={"2.4"} weight={"500"} lineHeight={"29"}>
            29
          </S.Title>
        </S.ContainerText>
        <S.ContainerText>
          <S.Text>Open Tickets</S.Text>
          <S.Title size={"2.4"} weight={"500"} lineHeight={"29"}>
            63
          </S.Title>
        </S.ContainerText>
        <S.ContainerText>
          <S.Text>Response Time</S.Text>
          <S.Title size={"2.4"} weight={"500"} lineHeight={"29"}>
            1d
          </S.Title>
        </S.ContainerText>
      </S.Container>
    </S.SupportTrackerContainer>
  );
};
