import icons from "../../assets/img/icons";
import { ItemList } from "../../pages/Account/Components/Table/@types";

export const LIST: ItemList[] = [
  ...new Array(2).fill({
    id: Math.floor(Math.random() * 1000),
    icon: icons.send,
    type: "send",
    name: "Myra Foster",
    email: "tilalep@cofsi.gov",
    total: "$4598",
    avatar:
      "https://i.pinimg.com/originals/d8/ac/9d/d8ac9d666043f14e1dae7ee272637304.jpg",
    balance: "Paid",
  }),
  ...new Array(5).fill({
    id: Math.floor(Math.random() * 1000),
    icon: icons.iconChart,
    name: "Sweden",
    type: "chart",
    email: "pevhaze@pamihu.edu",
    total: "$6224.38",
    avatar:
      "https://i.pinimg.com/originals/d8/ac/9d/d8ac9d666043f14e1dae7ee272637304.jpg",
    balance: "-$202",
  }),
  ...new Array(38).fill({
    id: Math.floor(Math.random() * 1000),
    icon: icons.arrowDown,
    type: "arrowDownCircle",
    name: "Matilda Robertson",
    email: "tumcufiza@ti.io",
    total: "$634",
    avatar:
      "https://i.pinimg.com/originals/d8/ac/9d/d8ac9d666043f14e1dae7ee272637304.jpg",
    balance: "Paid",
  }),
];
