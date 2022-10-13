import { atom } from "recoil";
import { Food } from "../service/foodService";

interface IUser {
  email: string;
  id: string;
  image: string;
}

export const foodState = atom<Food>({
  key: "food",
  default: undefined,
});

export const userState = atom<IUser | undefined>({
  key: "popularFood",
  default: undefined,
});

// export const reviewsState = atom<Food[]>({
//   key: "reviews",
//   default: [],
// });
