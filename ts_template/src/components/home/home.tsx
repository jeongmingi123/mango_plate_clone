import * as React from "react";
import { Nav } from "../nav/nav";
import tw from "tailwind-styled-components";
import FoodList from "../food_list/food_list";
import FoodService from "../../service/foodService";
import { FoodType } from "../../service/foodService";

export interface IHomeProps {
  foodService: {
    getFoods(foodType: FoodType, count: number): Promise<string[]>;
  };
}

const Home = ({ foodService }: IHomeProps) => {
  return (
    <>
      <Nav />
      <FoodList foodService={foodService} titleName="믿고 보는 맛집 리스트" />
    </>
  );
};

export default Home;
