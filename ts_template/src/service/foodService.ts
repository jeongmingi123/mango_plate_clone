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

  getPopularFood(foodType: FoodType): string {
    const url: string = `${this.baseUrl}/${foodType}/${foodType}30.jpg`;
    return url;
  }

  getPopularFoods(): string[] {
    const urls: string[] = [];
    urls.push(this.getPopularFood("burger"));
    urls.push(this.getPopularFood("pizza"));
    urls.push(this.getPopularFood("dessert"));
    urls.push(this.getPopularFood("pasta"));
    return urls;
  }

  getFoods(foodType: FoodType, count: number): string[] {
    const urls: string[] = [];
    for (let i = 1; i <= count; i++) {
      const url: string = `${this.baseUrl}/${foodType}/${foodType}${i}.jpg`;
      urls.push(url);
    }
    return urls;
  }
}

export default FoodService;
