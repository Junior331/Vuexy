import icons from "../../../assets/img/icons";
import { LIST } from "../../../services/mocks/List";
import { ItemList, TypeBalance } from "./@types";
import * as S from "./TableStyled";
import StatusIcon from '../../../assets/img/icons/Cube.svg';

interface IColumns {
  header: string;
  headerIcon?: string;
  accessorKey: string;
  hasSort?: boolean;
}

const columns: IColumns[] = [
  {
    header: "#",
    accessorKey: "id",
    hasSort: true,
  },
  {
    header: "status",
    headerIcon: icons.cube,
    accessorKey: "icon",
    hasSort: true,
  },
  {
    header: "NAME",
    accessorKey: "name",
    hasSort: true,
  },
  {
    header: "TOTAL",
    accessorKey: "total",
    hasSort: true,
  },
  {
    header: "BALANCE",
    accessorKey: "balance",
    hasSort: true,
  },
  {
    header: "ACTIONS",
    accessorKey: "avatar",
    hasSort: false,
  },
];

export const Table = () => {
  const data = LIST;

  return (
    <S.TableContainer>
      <S.TrHead>
      {columns.map((column, index) => (
          <>
            <S.ThHeader align={(index === 0 && column.headerIcon) ? 'center' : 'left'}>
              <S.ThHeaderContent>
                {column.headerIcon ? (
                    <img src={column.headerIcon} alt={column.header} />
                ): (
                  <>
                    {column.header}
                  </>
                )}
              </S.ThHeaderContent>
            </S.ThHeader>
            {column.hasSort ? (
              <th>
                <SortByColumn column={column}/>
              </th>
            ) : <></>}
          </>
        ))}
        
      </S.TrHead>
      <S.Tbody>
        {data.map((item) => {
          return (
            <S.TrBody>
              <S.TdId>#{item.id}</S.TdId>
              <TableEmptyGap />
              <S.TdBody>
                <S.Img variant={item.type} src={item.icon} alt="status icon" />
              </S.TdBody>
              <TableEmptyGap />
              <S.TdBody>
              <S.NameContainer>
                <S.UserImg src={item.avatar} alt="user name" />
                <S.ColumnBox>
                  <S.UserName>{item.name}</S.UserName>
                  <S.UserEmail>{item.email}</S.UserEmail>
                </S.ColumnBox>
              </S.NameContainer>
              </S.TdBody>
              <TableEmptyGap />
              <S.TdBody>{item.total}</S.TdBody>
              <TableEmptyGap />
              <S.TdBody><BalanceContent balance={item.balance}/></S.TdBody>
              <TableEmptyGap />
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

const TableEmptyGap = () => <div style={{width: '5px', height: '5px'}}></div>;

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

const SortByColumn = ({column}: {column: IColumns}) => {

  const onUp = () => { console.log('onUp ---> ', column.header)};
  const onDown = () => { console.log('onDown ---> ', column.header)};

  return (
    <S.SortContainer>
      <S.SortArrow src={icons.chevronUp} alt='arrow up' onClick={onUp} />
      <S.SortArrow src={icons.chevronDown} alt='arrow down' onClick={onDown} />
    </S.SortContainer>
  )
}