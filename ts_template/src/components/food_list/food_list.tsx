import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import { Food } from "../../service/foodService";
import FoodItem from "../food_item/food_item";

interface IFoodList {
  titleName: string;
  foods: Food[] | undefined;
  isLoading: boolean;
}

const FoodListWrapper = tw.section`
  w-full
  bg-gray-200
  p-14
`;

const Header = tw.div`
  flex
  justify-between
  text-gray-400
  text-xl
  mb-10
`;

const FoodListBox = tw.div`
  grid
  grid-cols-4
  gap-3
`;

const Title = tw.h1`
  text-orange-400
  text-2xl
`;

const FoodList = ({ titleName, foods, isLoading }: IFoodList) => {
  return (
    <>
      <FoodListWrapper>
        <Header>
          <Title>{titleName}</Title>
          <Link to="/">리스트 더 보기</Link>
        </Header>
        <FoodListBox>
          {isLoading ? (
            <div>loading...</div>
          ) : (
            foods && foods.map((food) => <FoodItem food={food} key={food.id} />)
          )}
        </FoodListBox>
      </FoodListWrapper>
    </>
  );
};

export default FoodList;
