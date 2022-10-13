import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import { Food } from "../../service/foodService";
import { foodState } from "../../store/atoms";
import { useSetRecoilState } from "recoil";

interface IFoodItem {
  food: Food;
}

const Img = tw.img`
  w-96
  h-64
  rounded-md
`;

const Box = tw.div`
  mt-2
`;

const TextContainer = tw.div`
  flex
  w-full
  text-2xl
`;

const StoreNameText = tw.span``;

const RatingText = tw.span`
  ml-3
  text-orange-400
`;
const FoodTypeText = tw.span`
  text-xm
  text-gray-400
`;

const FoodItem = ({ food }: IFoodItem) => {
  const setFoodItem = useSetRecoilState(foodState);

  const handleFood = () => {
    setFoodItem(food);
  };

  return (
    <>
      <Link to={{ pathname: `/${food.type}/${food.id}` }}>
        <Img src={food.image!} onClick={handleFood} />
        <Box>
          <TextContainer>
            <StoreNameText>{food.storeName}</StoreNameText>
            <RatingText>{food.rating}</RatingText>
          </TextContainer>
          <FoodTypeText>종류 - {food.type}</FoodTypeText>
        </Box>
      </Link>
    </>
  );
};
export default FoodItem;
