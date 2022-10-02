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

  getFoods(foodType: FoodType, count: number) {
    const urls: string[] = [];
    for (let i = 1; i <= count; i++) {
      const url: string = `${this.baseUrl}/${foodType}/${foodType}${i}.jpg`;
      urls.push(url);
    }

    return urls;

    // return await Promise.all(urls.map((url) => fetch(url))).then((res) =>
    //   Promise.all(res.map((res) => res.json()))
    //     .then(console.log)
    //     .catch(console.log)
    // );
  }
}

export default FoodService;
