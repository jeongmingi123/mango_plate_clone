import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import FoodItem from "../food_item/food_item";

interface IFoodList {
  titleName: string;
  urls: string[];
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
  grid-cols-4
  gap-4
`;

const Title = tw.h1`
  text-orange-400
  text-2xl
`;

const FoodList = ({ titleName, urls }: IFoodList) => {
  return (
    <>
      <FoodListWrapper>
        <Header>
          <Title>{titleName}</Title>
          <Link to="/">리스트 더 보기</Link>
        </Header>
        <FoodListBox>
          {urls.map((url) => (
            <FoodItem url={url} key={url} />
          ))}
        </FoodListBox>
      </FoodListWrapper>
    </>
  );
};

export default FoodList;
