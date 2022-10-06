import { atom } from "recoil";
import { Food } from "./service/foodService";

export const foodState = atom<Food>({
  key: "toDo",
  default: undefined,
});
