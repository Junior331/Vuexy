import React, { useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import * as S from "./TimeLineStyled";

export const TimelineInfo = () => {
  const [img] = useState(
    new Array(10).fill(
      "https://i.pinimg.com/originals/d8/ac/9d/d8ac9d666043f14e1dae7ee272637304.jpg"
    )
  );

  return (
    <S.TimelineContainer>
      {/* <S.Line /> */}
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <S.Title>12 Invoices have been paid</S.Title>
            <S.Text>Invoices have been paid to the apple</S.Text>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <S.Title>Client Meeting</S.Title>
            <S.Text>Project meeting with john @10:15am</S.Text>
            <S.Container margin={"10px 0 0"}>
              <S.Avatar
                src={
                  "https://i.pinimg.com/originals/d8/ac/9d/d8ac9d666043f14e1dae7ee272637304.jpg"
                }
                alt="Image user"
              />
              <S.Container column>
                <S.Title>John Doe (Client)</S.Title>
                <S.Text>CEO of Infibeam</S.Text>
              </S.Container>
            </S.Container>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <S.Title>Create a new project for client</S.Title>
            <S.Text>Add files to new design folder</S.Text>
            <S.Container margin={"10px 0 0"} scroll>
              {img.map((item, index) => {
                return (
                  <S.Avatar stacked key={index} src={item} alt="Image user" />
                );
              })}
            </S.Container>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <S.Title>Create a new project for client</S.Title>
            <S.Text>Add files to new design folder</S.Text>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </S.TimelineContainer>
  );
};
