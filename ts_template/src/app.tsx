import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Circle from "./circle";
import Home from "./components/home/home";
import FoodService from "./service/foodService";
import { FoodType } from "./service/foodService";

interface IProps {
  foodService: {
    getFoods(foodType: FoodType, count: number): string[];
    getPopularFoods(): string[];
  };
}

function App({ foodService }: IProps) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home foodService={foodService} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
