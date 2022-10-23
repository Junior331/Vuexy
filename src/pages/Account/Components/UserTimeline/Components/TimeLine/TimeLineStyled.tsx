import styled, { css } from "styled-components";
import { Props } from "../@types";
export const TimelineContainer = styled.div`
  width: 100%;
  height: 100%;
  .MuiTimelineConnector-root {
    width: 1.5px;
    margin: -11.5px 0;
    background-color: #3b4253;
  }
  .MuiTimelineItem-root:nth-child(1) {
    .MuiTimelineSeparator-root {
      .MuiTimelineDot-root {
        background-color: #9c27b0;
        box-shadow: 0px 0px 0px 7px #7367f01f;
      }
    }
  }
  .MuiTimelineItem-root:nth-child(2) {
    .MuiTimelineSeparator-root {
      .MuiTimelineDot-root {
        background-color: #ff9f43;
        box-shadow: 0px 0px 0px 7px #ff9f431e;
      }
    }
  }
  .MuiTimelineItem-root:nth-child(3) {
    .MuiTimelineSeparator-root {
      .MuiTimelineDot-root {
        background-color: #00cfe8;
        box-shadow: 0px 0px 0px 7px #03c3ec8c;
      }
    }
  }
  .MuiTimelineItem-root:nth-child(4) {
    .MuiTimelineSeparator-root {
      .MuiTimelineDot-root {
        background-color: #ea5455;
        box-shadow: 0px 0px 0px 7px #ea54551e;
      }
    }
  }
  .MuiTypography-root {
    margin-bottom: 22px;
  }
`;
export const Title = styled.h2`
  line-height: 23px;
  color: ${(props) => props.theme.palette.text.light};
  font-size: ${(props) => props.theme.typography.fontSize}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightLight};
`;
export const Text = styled.p`
  line-height: 21px;
  color: ${(props) => props.theme.palette.text.regular};
  font-size: ${(props) => props.theme.typography.fontSize}rem;
  font-weight: ${(props) => props.theme.typography.fontWeightLight};
`;
export const Container = styled.div<Props>`
  width: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: ${(props) => props.margin};
  ${(props) =>
    props.column &&
    css`
      width: auto;
      flex-direction: column;
    `};
  ${(props) =>
    props.scroll &&
    css`
      overflow-x: auto;
      max-width: 270px;
      padding-left: 5px;
      padding-bottom: 10px;

      &::-webkit-scrollbar {
        height: 5px;
      }
      &::-webkit-scrollbar-track {
        border-radius: 10px;
        background: #2b2346;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 37px;
        box-sizing: border-box;
        backdrop-filter: blur(150px);
        background: rgba(255, 255, 255, 0.1);
      }
    `};
`;
export const Avatar = styled.img<Props>`
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin-right: 8px;
  border-radius: 100%;

  ${(props) =>
    props.stacked &&
    css`
      margin: 0 -6px;
      position: relative;
      background: #283046;
      border: 3px solid #283046;
      box-shadow: 0px 0px 8px rgb(0 0 0 / 14%);
    `};
`;
export const Info = styled.div``;
