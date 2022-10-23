import { useState } from "react";
import { stacks } from "../../../../services/mocks/stacks";
import { StacksType } from "./@types";
import * as S from "./TeamStyled";

export const Team = () => {
  const [img] = useState(
    new Array(3).fill(
      "https://i.pinimg.com/originals/d8/ac/9d/d8ac9d666043f14e1dae7ee272637304.jpg"
    )
  );

  return (
    <S.TeamContainer>
      <S.Date>03, Sep, 20</S.Date>
      <S.Title>App design</S.Title>
      <S.Text>
        You can Find Only Post and Quotes Related to IOS like ipad app design,
        iphone app design
      </S.Text>
      <S.SubTitle>TEAM</S.SubTitle>
      <S.ListStacks>
        {stacks.map((stack: StacksType) => (
          <S.Stack color={stack.color} bgColor={stack.bgColor}>
            {stack.name}
          </S.Stack>
        ))}
      </S.ListStacks>
      <S.SubTitle>MEMBERS</S.SubTitle>
      <S.ListMembers>
        {img.map((item: string, index: number) => {
          return <S.Member key={index} src={item} alt="Image user" />;
        })}
      </S.ListMembers>
      <S.ContainerCards>
        <S.Card>
          <S.CardText>Due Date</S.CardText>
          <S.CardTitle>Apr 12, 8</S.CardTitle>
        </S.Card>
        <S.Card>
          <S.CardText>Budget</S.CardText>
          <S.CardTitle>$49251.91</S.CardTitle>
        </S.Card>
        <S.Card>
          <S.CardText>Cost</S.CardText>
          <S.CardTitle>$840.99</S.CardTitle>
        </S.Card>
      </S.ContainerCards>
      <S.Button>Join Team</S.Button>
    </S.TeamContainer>
  );
};
