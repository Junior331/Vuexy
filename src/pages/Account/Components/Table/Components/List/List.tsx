import React from "react";
import { ItemList } from "../../@types";
import { Props } from "./@types";

import * as S from "./ListStyled";

const List: React.FC<Props> = ({ data, loading = false }) => {
  const renderItem = ({
    avatar,
    balance,
    email,
    icon,
    id,
    name,
    total,
  }: ItemList): React.ReactElement => {
    return (
      <S.Line id="card">
        {name}
      </S.Line>
    );
  };

  return <S.Container id="list">{data.map(renderItem)}</S.Container>;
};

export default List;
