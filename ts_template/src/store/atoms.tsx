import { atom } from "recoil";
import { Food } from "../service/foodService";

export const foodState = atom<Food>({
  key: "food",
  default: undefined,
});

export const popularFoodState = atom<Food[]>({
  key: "popularFood",
  default: [],
});

// export const reviewsState = atom<Food[]>({
//   key: "reviews",
//   default: [],
// });
