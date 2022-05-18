import { list } from "../md/index";

const map = new Map(list.map((item) => [item.title, item]));

export const getMdArticle = (title: string) => {
  if (map.has(title)) {
    return map.get(title).article;
  }
  return "";
};
