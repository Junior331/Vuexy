import lmtTokens from "./lmt_tokens.png";
import appleWatch from "./AppleWatch.svg";
import decoreLeft from "./decore_left.svg";
import lovemonster from "./lovemonster.png";
import decoreRight from "./decore_right.svg";
import logo from "./love_monster_logo_final.png";
import ordersReceived from "./OrdersReceived.svg";
import monsterCharacter from "./monster_character.png";
import subscribersGained from "./SubscribersGained.svg";
import ordersReceivedSmall from "./OrdersReceivedSmall.svg";
import ordersReceivedMedium from "./OrdersReceivedMedium.svg";
import subscribersGainedSmall from "./SubscribersGainedSmall.svg";
import subscribersGainedMedium from "./SubscribersGainedMedium.svg";

interface IImage<TValue> {
  [id: string]: TValue;
}

const images: IImage<string> = {
  logo,
  lmtTokens,
  appleWatch,
  decoreLeft,
  decoreRight,
  lovemonster,
  ordersReceived,
  monsterCharacter,
  subscribersGained,
  ordersReceivedSmall,
  ordersReceivedMedium,
  subscribersGainedSmall,
  subscribersGainedMedium,
};

export const getImage = (id: string) => images[id];

export default images;
