import React from "react";
import { useParams } from "react-router-dom";
import { Food } from "../../service/foodService";
import { Nav } from "../nav/nav";
import tw from "tailwind-styled-components";

interface IProps {
  food: Food;
}

const Images = tw.div`
  grid
  grid-cols-5
  w-full
  mt-2
  gap-3
  ml-3
`;

const Image = tw.img`
  w-96
  h-64
`;

const Detail = tw.div`
  flex
  justify-center
  w-4/5
  h-96
  mt-7
`;

const DetailContainer = tw.div`
  w-2/3
  h-96
`;

const DetailNav = tw.div`
  w-full
  flex
  items-center
  justify-between
`;

const DetailNavTexts = tw.div`
  w-40
  text-3xl
`;

const DetailIcons = tw.div`
  w-32
  flex
  justify-between
`;

const IconContainer = tw.div`
  flex
  flex-col
  text-3xl
  text-gray-400
`;

const Text = tw.span`
  text-sm
  mt-2
`;

const Icon = tw.i<{ iconName: string }>`
  ${(props) => props.iconName}
`;

const StoreName = tw.span`
`;

const Rating = tw.span`
  ml-4
  text-orange-400
`;

const FoodDetail = ({ food }: IProps) => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <Nav />
      <Images>
        <Image src={food.url} />
        <Image src={food.url} />
        <Image src={food.url} />
        <Image src={food.url} />
        <Image src={food.url} />
      </Images>
      <Detail>
        <DetailContainer>
          <DetailNav>
            <DetailNavTexts>
              <StoreName>{food.storeName}</StoreName>
              <Rating>{food.rating}</Rating>
            </DetailNavTexts>
            <DetailIcons>
              <IconContainer>
                <Icon iconName="fa-solid fa-pen" />
                <Text>리뷰쓰기</Text>
              </IconContainer>
              <IconContainer>
                <Icon iconName="fa-regular fa-star" />
                <Text>가고싶다</Text>
              </IconContainer>
            </DetailIcons>
          </DetailNav>
        </DetailContainer>
      </Detail>
    </>
  );
};

export default FoodDetail;
