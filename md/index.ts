import { wsProxy } from "./wsProxy";
import { debounce } from "./debounce";
import { cartesianProduct } from "./cartesianProduct";

export const list = [
  {
    title: "求笛卡尔积",
    article: cartesianProduct,
  },
  {
    title: "劫持 websocket 消息",
    article: wsProxy,
  },
  {
    title: "防抖和节流的简易实现",
    article: debounce,
  },
];
