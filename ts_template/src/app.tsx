import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import { Food } from "./service/foodService";
import { FoodType } from "./service/foodService";
import FoodDetail from "./components/food_detail/food_detail";
import AddDetailReview from "./components/add_detail_review/add_detail_review";
import SignUp from "./components/sign_up/sign_up";
import Login from "./components/login/login";

interface IProps {
  foodService: {
    getFoods(foodType: FoodType): any;
    getFoodById(foodType: string, id: string): any;
    addReview(foodType: string, id: string, data: Food): any;
  };
}

function App({ foodService }: IProps) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home foodService={foodService} />}></Route>
          <Route
            path="/:type/:id"
            element={<FoodDetail foodService={foodService} />}
          ></Route>
          <Route
            path="/:type/:id/new"
            element={<AddDetailReview foodService={foodService} />}
          ></Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
