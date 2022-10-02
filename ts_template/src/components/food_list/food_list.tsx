import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import FoodService, { FoodType } from "../../service/foodService";

interface IFoodList {
  titleName: string;
  foodService: {
    getFoods(foodType: FoodType, count: number): string[];
  };
}
const FoodListWrapper = tw.section`
  w-full
  foodList-height
  bg-white
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
  grid-cols-3
  gap-7
`;

const Title = tw.h1`
  text-orange-400
  text-2xl
`;

const FoodList = ({ titleName, foodService }: IFoodList) => {
  const urls = foodService.getFoods("burger", 8);
  return (
    <>
      <FoodListWrapper>
        <Header>
          <Title>{titleName}</Title>
          <Link to="/">리스트 더 보기</Link>
        </Header>
        <FoodListBox>
          {urls.map((url) => (
            <img src={url} key={url} width="550px" height="250px" />
          ))}
        </FoodListBox>
      </FoodListWrapper>
    </>
  );
};

export default FoodList;
