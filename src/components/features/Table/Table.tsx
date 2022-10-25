import icons from "../../../assets/img/icons";
import { LIST } from "../../../services/mocks/List";
import { ItemList, TypeBalance } from "./@types";
import * as S from "./TableStyled";
import StatusIcon from '../../../assets/img/icons/Cube.svg';

interface IColumns {
  header: string;
  headerIcon?: string;
  accessorKey: string;
}

const columns: IColumns[] = [
  {
    header: "#",
    accessorKey: "id",
  },
  {
    header: "status",
    headerIcon: icons.cube,
    accessorKey: "icon",
  },
  {
    header: "NAME",
    accessorKey: "name",
  },
  {
    header: "TOTAL",
    accessorKey: "total",
  },
  {
    header: "BALANCE",
    accessorKey: "balance",
  },
  {
    header: "ACTIONS",
    accessorKey: "avatar",
  },
];

export const Table = () => {
  const data = LIST;

  return (
    <S.TableContainer>
      <S.TrHead>
        {columns.map((column, index) => (
          <>
            {column.headerIcon ? (
              <S.ThHeader align="center">
                <img src={column.headerIcon} alt={column.header} />
              </S.ThHeader>
            ): (
              <S.ThHeader align={index === 0 ? 'center' : 'left'}>{column.header}</S.ThHeader>
            )}
          </>
        ))}
      </S.TrHead>
      <S.Tbody>
        {data.map((item) => {
          return (
            <S.TrBody>
              <S.TdId>#{item.id}</S.TdId>
              <S.TdBody>
                <S.Img variant={item.type} src={item.icon} alt="status icon" />
              </S.TdBody>
              <S.CustomTdName>
                <S.UserImg src={item.avatar} alt="user name" />
                <S.ColumnBox>
                  <S.UserName>{item.name}</S.UserName>
                  <S.UserEmail>{item.email}</S.UserEmail>
                </S.ColumnBox>
              </S.CustomTdName>
              <S.TdBody>{item.total}</S.TdBody>
              <S.TdBody><BalanceContent balance={item.balance}/></S.TdBody>
              <S.TdBody>
                <ActionsContent item={item} />
              </S.TdBody>
            </S.TrBody>
          );
        })}
      </S.Tbody>
    </S.TableContainer>
  );
};


const BalanceContent = ({balance}: {balance: TypeBalance}) => {
  const isPaid = balance === 'Paid';

  if (isPaid) return <S.BalancePaidText>{balance}</S.BalancePaidText>

  return <S.BalanceText>{balance}</S.BalanceText>
};

const ActionsContent = ({item}: {item: ItemList}) => {

  const onSend = () => { console.log('onSend ---> ', item.name, item.id)};
  const onView = () => { console.log('onView ---> ', item.name, item.id)};
  const onMore = () => { console.log('onMore ---> ', item.name, item.id)};

  return (
    <S.ActionsContainer>
      <S.ActionIcon src={icons.send} onClick={onSend} />
      <S.ActionIcon src={icons.view} onClick={onView} />
      <S.ActionIcon src={icons.more} onClick={onMore} />
    </S.ActionsContainer>
  )
};