import { Nav } from "../nav/nav";
import FoodList from "../food_list/food_list";
import { Food } from "../../service/foodService";
import { FoodType } from "../../service/foodService";
import { popularFoodState } from "../../atoms";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";

export interface IHomeProps {
  foodService: {
    getFoods(foodType: FoodType, count: number): Food[];
    getPopularFoods(): Food[];
  };
}

const Home = ({ foodService }: IHomeProps) => {
  const setPopularFoods = useSetRecoilState(popularFoodState);

  const popularFoodUrls = foodService.getPopularFoods();

  const hamburgurs = foodService.getFoods("burger", 8);
  const desserts = foodService.getFoods("dessert", 8);
  const pizzas = foodService.getFoods("pizza", 8);
  const pastas = foodService.getFoods("pasta", 8);
  const rices = foodService.getFoods("rice", 8);
  const dosas = foodService.getFoods("dosa", 8);

  useEffect(() => {
    setPopularFoods(popularFoodUrls);
  }, []);

  return (
    <>
      <Nav />
      <FoodList titleName="믿고 보는 맛집 리스트" foods={popularFoodUrls} />
      <FoodList titleName="디저트 맛집 리스트" foods={desserts} />
      <FoodList titleName="햄버거 맛집 리스트" foods={hamburgurs} />
      <FoodList titleName="피자 맛집 리스트" foods={pizzas} />
      <FoodList titleName="파스트 맛집 리스트" foods={pastas} />
      <FoodList titleName="볶음밥 맛집 리스트" foods={rices} />
      <FoodList titleName="도사 맛집 리스트" foods={dosas} />
    </>
  );
};

export default Home;
