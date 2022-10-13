import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import { Food } from "./service/foodService";
import { FoodType } from "./service/foodService";
import FoodDetail from "./components/food_detail/food_detail";
import AddDetailReview from "./components/add_detail_review/add_detail_review";
import SignUp from "./components/signup/sign_up";
import Login from "./components/login/login";
import { IUser, IUserResponse } from "./service/auth_service";
import { useRecoilState } from "recoil";
import { userState } from "./store/atoms";
import { useEffect } from "react";
import Profile from "./components/profile/profile";

interface IProps {
  foodService: {
    getFoods(foodType: FoodType): any;
    getFoodById(foodType: string, id: string): any;
    getFoodsByUserId(id: string): any;
    addReview(food: Food): any;
  };

  authService: {
    signUp(user: IUser): Promise<IUserResponse>;
    login(user: IUser): Promise<IUserResponse>;
    getLoggedInUser(): Promise<{ email: string; id: string; image: string }>;
  };
}

function App({ foodService, authService }: IProps) {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    if (user) {
      return;
    }
    authService.getLoggedInUser().then((res) => {
      console.log(res);
      const user = {
        email: res.email,
        id: res.id,
        image: res.image,
      };
      return setUser(user);
    });
  }, []);

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
          <Route
            path="/signup"
            element={<SignUp authService={authService} />}
          />
          <Route path="/login" element={<Login authService={authService} />} />
          <Route
            path="/profile"
            element={<Profile foodService={foodService} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
