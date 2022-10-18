import home from "./Home.svg";
import chat from "./Chat.svg";
import file from "./File.svg";
import user from "./User.svg";
import flag from "./Flag.svg";
import star from "./Star.svg";
import cube from "./Cube.svg";
import users from "./Users.svg";
import email from "./Email.svg";
import medal from "./medal.svg";
import search from "./Search.svg";
import loading from "./loading.svg";
import checked from "./Checked.svg";
import calendar from "./Calendar.svg";
import ecommerce from "./Ecommerce.svg";
import fileNoLine from "./File_noLine.svg";
import loadingGray from "./loading-gray.svg";
import notification from "./Notification.svg";
interface IIcon<TValue> {
  [id: string]: TValue;
}

const icons: IIcon<string> = {
  file,
  user,
  cube,
  home,
  chat,
  star,
  flag,
  email,
  medal,
  users,
  search,
  loading,
  checked,
  calendar,
  ecommerce,
  fileNoLine,
  loadingGray,
  notification,
};

export const getIcon = (id: string) => icons[id];

export default icons;
