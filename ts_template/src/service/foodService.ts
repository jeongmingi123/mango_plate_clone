import { v4 as uuidv4 } from "uuid";

export type Food = {
  id: string;
  storeName: string;
  url: string;
  type: FoodType;
  rating: number;
  address: "경기도 화성시 병점";
  tel: "*23#";
  branch: "경기도 화성시 병점점";
  menu: "안알려줌";
};

export type FoodType =
  | "biryani"
  | "burger"
  | "butter-chicken"
  | "dessert"
  | "dosa"
  | "idly"
  | "pasta"
  | "pizza"
  | "rice"
  | "samosa";

class FoodService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = "https://foodish-api.herokuapp.com/images";
  }

  getPopularFood(foodType: FoodType): Food {
    const url: string = `${this.baseUrl}/${foodType}/${foodType}30.jpg`;
    return {
      id: uuidv4(),
      storeName: `${foodType}30`,
      type: foodType,
      url,
      rating: 4.3,
      address: "경기도 화성시 병점",
      tel: "*23#",
      branch: "경기도 화성시 병점점",
      menu: "안알려줌",
    };
  }

  getPopularFoods(): Food[] {
    const foods: Food[] = [];
    foods.push(this.getPopularFood("burger"));
    foods.push(this.getPopularFood("pizza"));
    foods.push(this.getPopularFood("dessert"));
    foods.push(this.getPopularFood("pasta"));
    return foods;
  }

  getFoods(foodType: FoodType, count: number): Food[] {
    const foods: Food[] = [];
    for (let i = 1; i <= count; i++) {
      const url: string = `${this.baseUrl}/${foodType}/${foodType}${i}.jpg`;
      foods.push({
        id: uuidv4(),
        storeName: `${foodType}${i}`,
        type: foodType,
        url,
        rating: 4.5,
        address: "경기도 화성시 병점",
        tel: "*23#",
        branch: "경기도 화성시 병점점",
        menu: "안알려줌",
      });
    }
    return foods;
  }
}

export default FoodService;
