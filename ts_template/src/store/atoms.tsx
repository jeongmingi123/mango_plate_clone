import { atom } from "recoil";
import { Food } from "../service/foodService";

interface IUser {
  email: string;
  id: string;
}

export const foodState = atom<Food>({
  key: "food",
  default: undefined,
});

export const popularFoodState = atom<Food[]>({
  key: "popularFood",
  default: [],
});

export const userState = atom<IUser>({
  key: "popularFood",
  default: undefined,
});

// export const reviewsState = atom<Food[]>({
//   key: "reviews",
//   default: [],
// });
