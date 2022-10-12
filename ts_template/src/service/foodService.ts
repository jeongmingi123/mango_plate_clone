import { v4 as uuidv4 } from "uuid";

export type Food = {
  id: string | undefined;
  type: FoodType | undefined;
  storeName: string | undefined;
  menu: string[] | undefined | null;
  url: string | undefined;
  tel: string | undefined;
  address: string | undefined;
  branch: string | undefined;
  rating: string | undefined;
  image: string | undefined;
  detailImage: string[] | undefined | null;
  reviews: TReview[] | undefined | null;
};

export type TReview = {
  comment: string;
  expression: "Good" | "Normal" | "Bad";
  userId: string | undefined;
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
    this.baseUrl = "http://localhost:3003";
  }

  // getPopularFood(foodType: FoodType) {
  // const url: string = `${this.baseUrl}/${foodType}/${foodType}18.jpg`;
  // return {
  //   id: uuidv4(),
  //   storeName: `${foodType}18`,
  //   type: foodType,
  //   url,
  //   rating: "4.3",
  //   address: "경기도 화성시 병점",
  //   tel: "*23#",
  //   branch: "경기도 화성시 병점점",
  //   menu: ["1", "2"],
  // };
  // }

  // getPopularFoods() {
  //   const foods: Food[] = [];
  //   foods.push(this.getPopularFood("burger"));
  //   foods.push(this.getPopularFood("pizza"));
  //   foods.push(this.getPopularFood("dessert"));
  //   foods.push(this.getPopularFood("pasta"));
  //   return foods;
  // }

  async getFoods(foodType: FoodType): Promise<Food[]> {
    return await fetch(`${this.baseUrl}/${foodType}s`)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  }

  async getFoodById(foodType: string, id: string): Promise<Food> {
    console.log(`${this.baseUrl}/${foodType}s/${id}`);
    return await fetch(`${this.baseUrl}/${foodType}s/${id}`)
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  }

  async addReview(food: Food) {
    const requsestOption = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...food }),
    };
    return await fetch(
      `http://localhost:3003/${food.type}s/${food.id}`,
      requsestOption
    );
  }
}

export default FoodService;
