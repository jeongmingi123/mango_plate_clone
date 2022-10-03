import * as React from "react";
import { Nav } from "../nav/nav";
import tw from "tailwind-styled-components";
import FoodList from "../food_list/food_list";
import FoodService from "../../service/foodService";
import { FoodType } from "../../service/foodService";

export interface IHomeProps {
  foodService: {
    getFoods(foodType: FoodType, count: number): string[];
  };
}

const Home = ({ foodService }: IHomeProps) => {
  const hamburgurUrls = foodService.getFoods("burger", 8);
  const dessertUrls = foodService.getFoods("dessert", 8);
  const pizzaUrls = foodService.getFoods("pizza", 8);
  const pastaUrls = foodService.getFoods("pasta", 8);
  const riceUrls = foodService.getFoods("rice", 8);
  const dosaUrls = foodService.getFoods("dosa", 8);

  return (
    <>
      <Nav />
      <FoodList titleName="햄버거 맛집 리스트" urls={hamburgurUrls} />
      <FoodList titleName="디저트 맛집 리스트" urls={dessertUrls} />
      <FoodList titleName="피자 맛집 리스트" urls={pizzaUrls} />
      <FoodList titleName="파스트 맛집 리스트" urls={pastaUrls} />
      <FoodList titleName="볶음밥 맛집 리스트" urls={riceUrls} />
      <FoodList titleName="볶음밥 맛집 리스트" urls={dosaUrls} />
    </>
  );
};

export default Home;
