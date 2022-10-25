export enum TypeBalance {
  PAIND = "Paid",
  VALUE = 0,
}

export type ItemList = {
  id: string;
  type: string;
  icon: string;
  name: string;
  email: string;
  total: string;
  avatar: string;
  balance: TypeBalance;
};
