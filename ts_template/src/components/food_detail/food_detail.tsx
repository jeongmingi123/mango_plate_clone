import React from "react";
import { useParams } from "react-router-dom";
import FoodService, { Food } from "../../service/foodService";
import { Nav } from "../nav/nav";
import tw from "tailwind-styled-components";
import { useEffect } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { popularFoodState } from "../../atoms";

interface IProps {
  food: Food;
}

const Images = tw.div`
  grid
  grid-cols-5
  w-full
  mt-1
  gap-2
`;

const Image = tw.img`
  w-96
  h-80
`;

const Wrapper = tw.div`
  w-full
  flex
  mt-7
`;

const Detail = tw.div`
  flex
  justify-center
  w-4/5
  h-96
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
  mb-5
`;

const DetailNavTexts = tw.div`
  flex
  w-60
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

const Box = tw.div`
  flex
  flex-col
`;

const StoreName = tw.span`
`;

const Type = tw.span`
  mt-1
  text-base
  text-gray-400
`;

const Rating = tw.span`
  ml-1
  text-orange-400
`;

const Line = tw.div`
  w-full
  h-2
  border-t-2
  border-gray-300
`;

// Detail Main

const DetailMain = tw.div`
  w-full
  mb-5
`;

const DetailTable = tw.table`
  mt-5
`;
const TableBody = tw.body`
  
`;
const Tr = tw.tr`
  text-sm
  
`;
const Th = tw.th`
  text-gray-400
  table-fixed
  text-left
  w-32
  pb-2
`;
const Td = tw.td`
  text-gray-500
`;

// more infomation => map, restaurant
const MoreInfo = tw.div`
  w-1/5
  h-96
  bg-stone-200
`;

const Map = tw.div`
  flex
  items-center
  justify-center
  w-full
  h-96
  text-5xl
`;

const PopularFoods = tw.div`
  mt-5
  bg-stone-200
  pl-4
  
`;

const PopularTitle = tw.h2`
  pt-7
  pb-7
  text-3xl
  text-orange-400
`;

const PopularFoodItem = tw.div`
 flex
 mt-3
 mb-3
`;

const PopularFoodImage = tw.img`
  w-32
  h-32
`;

const PopularTextWapper = tw.div`
  ml-3
`;

const PopularStoreName = tw.span`
  text-xl
`;

const Container = tw.div`
  flex
  text-sm
`;

const Dt = tw.dt`
  text-gray-400
`;

const Dd = tw.dd`
  ml-1
  text-gray-700
`;

const FoodDetail = ({ food }: IProps) => {
  const params = useParams();
  const popularFood = useRecoilValue(popularFoodState);
  console.log(popularFood);

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
      <Wrapper>
        <Detail>
          <DetailContainer>
            <DetailNav>
              <DetailNavTexts>
                <Box>
                  <StoreName>{food.storeName}</StoreName>
                  <Type>{food.branch}</Type>
                </Box>
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
            <Line />
            <DetailMain>
              <DetailTable>
                <TableBody>
                  <Tr>
                    <Th>주소</Th>
                    <Td>{food.address}</Td>
                  </Tr>
                  <Tr>
                    <Th>전화번호</Th>
                    <Td>{food.tel}</Td>
                  </Tr>
                  <Tr>
                    <Th>가격대</Th>
                    <Td>2만원 미만</Td>
                  </Tr>
                  <Tr>
                    <Th>음식 종류</Th>
                    <Td>{food.type}</Td>
                  </Tr>
                  <Tr>
                    <Th>주차</Th>
                    <Td>안됨</Td>
                  </Tr>
                  <Tr>
                    <Th>영업시간</Th>
                    <Td>12:00 ~ 22:00</Td>
                  </Tr>
                  <Tr>
                    <Th>쉬는시간</Th>
                    <Td>16:00 ~ 17:00</Td>
                  </Tr>
                  <Tr>
                    <Th>마지막주문</Th>
                    <Td>22:00</Td>
                  </Tr>
                  <Tr>
                    <Th>웹 사이트</Th>
                    <Td>없음</Td>
                  </Tr>
                </TableBody>
              </DetailTable>
            </DetailMain>
            <Line />
          </DetailContainer>
        </Detail>
        <MoreInfo>
          <Map>Map</Map>
          <PopularFoods>
            <PopularTitle>인기 식당</PopularTitle>
            {popularFood.length !== 0 &&
              popularFood.map((food) => (
                <>
                  <PopularFoodItem>
                    <PopularFoodImage src={food.url} />
                    <PopularTextWapper>
                      <PopularStoreName>{food.storeName}</PopularStoreName>
                      <Container>
                        <Dt>음식 종류:</Dt>
                        <Dd>{food.type}</Dd>
                      </Container>
                      <Container>
                        <Dt>위치:</Dt>
                        <Dd>{food.address}</Dd>
                      </Container>
                      <Container>
                        <Dt>가격대</Dt>
                        <Dd>2만원 미만</Dd>
                      </Container>
                    </PopularTextWapper>
                  </PopularFoodItem>
                  <Line></Line>
                </>
              ))}
          </PopularFoods>
        </MoreInfo>
      </Wrapper>
    </>
  );
};

export default FoodDetail;
