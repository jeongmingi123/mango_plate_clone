import FoodList from "../food_list/food_list";
import { Food } from "../../service/foodService";
import { FoodType } from "../../service/foodService";
import { useEffect } from "react";
import { useQuery } from "react-query";
import Nav from "../nav/nav";

export interface IHomeProps {
  foodService: {
    getFoods(foodType: FoodType): any;
    getFoodById(foodType: string, id: string): Promise<Food>;
  };
}

const Home = ({ foodService }: IHomeProps) => {
  const { data: hamburgurs, isLoading: hamburgursLoading } = useQuery(
    ["hamburgurs"],
    () => {
      return foodService.getFoods("burger");
    }
  );

  const { data: desserts, isLoading: dessertsLoading } = useQuery(
    ["desserts"],
    () => {
      return foodService.getFoods("dessert");
    }
  );

  const { data: pizzas, isLoading: pizzasLoading } = useQuery(
    ["pizzas"],
    () => {
      return foodService.getFoods("pizza");
    }
  );

  const { data: pastas, isLoading: pastasLoading } = useQuery(
    ["pastas"],
    () => {
      return foodService.getFoods("pasta");
    }
  );

  const { data: rices, isLoading: ricesLoading } = useQuery(["rices"], () => {
    return foodService.getFoods("rice");
  });

  const { data: dosas, isLoading: dosasLoading } = useQuery(["dosas"], () => {
    return foodService.getFoods("dosa");
  });

  useEffect(() => {
    // setPopularFoods(popularFoodUrls);
  }, []);
  return (
    <>
      <Nav />
      <FoodList
        titleName="디저트 맛집 리스트"
        foods={desserts}
        isLoading={dessertsLoading}
      />
      <FoodList
        titleName="햄버거 맛집 리스트"
        foods={hamburgurs}
        isLoading={hamburgursLoading}
      />
      <FoodList
        titleName="피자 맛집 리스트"
        foods={pizzas}
        isLoading={pizzasLoading}
      />
      <FoodList
        titleName="파스트 맛집 리스트"
        foods={pastas}
        isLoading={pastasLoading}
      />
      <FoodList
        titleName="볶음밥 맛집 리스트"
        foods={rices}
        isLoading={ricesLoading}
      />
      <FoodList
        titleName="도사 맛집 리스트"
        foods={dosas}
        isLoading={dosasLoading}
      />
    </>
  );
};

export default Home;
