import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import { Food } from "./service/foodService";
import { FoodType } from "./service/foodService";
import FoodDetail from "./components/food_detail/food_detail";
import { foodState } from "./atoms";
import { useRecoilValue } from "recoil";

interface IProps {
  foodService: {
    getFoods(foodType: FoodType, count: number): Food[];
    getPopularFoods(): Food[];
  };
}

function App({ foodService }: IProps) {
  const food = useRecoilValue(foodState);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home foodService={foodService} />}></Route>
          <Route path="/:type/:id" element={<FoodDetail food={food} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
