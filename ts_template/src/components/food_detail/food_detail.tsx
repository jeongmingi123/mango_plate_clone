import { useParams, Link } from "react-router-dom";
import { Food, FoodType } from "../../service/foodService";
import { Nav } from "../nav/nav";
import tw from "tailwind-styled-components";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { popularFoodState, foodState } from "../../store/atoms";
import { useQuery } from "react-query";

interface IProps {
  foodService: {
    getFoods(foodType: FoodType): Promise<Food[]>[];
    getFoodById(foodType: string, id: string): Promise<Food>;
  };
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
  justify-center
  flex
  mt-7
`;

const Detail = tw.div`
  w-full
  flex
  justify-center
  h-96
`;

const DetailContainer = tw.div`
  w-3/5
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
  w-80
  text-3xl
`;

const DetailIcons = tw.div`
  w-28
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
  pb-1
`;
const Td = tw.td`
  text-gray-500
`;

// Reivew
const ReviewWrapper = tw.div`
 w-full
 mt-3
 flex
 justify-between
`;

const ReviewTitleWrapper = tw.div`
  w-40
  text-xl
  text-gray-400
`;

const ReviewTitle = tw.span``;

const ReviewCount = tw.span`
  ml-1
  text-orange-400
`;

const ReviewEvaluationWrapper = tw.div`
  w-80
  flex
  justify-between
  text-lg
  text-gray-400
`;

const ReviewEvaluationContainer = tw.div`
`;
const ReviewEvaluation = tw.span``;

const ReviewCommentWrapper = tw.div`
  mt-7
`;

const ReviewText = tw.div`
  w-full
  h-32
  pt-5
  border-b-2
`;

const ReviewTextComment = tw.span``;

const ReviewTextCount = tw.span`
  text-orange-400
`;

// more infomation => map, restaurant
const MoreInfo = tw.div`
  w-1/5
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

const Ul = tw.ul``;

const Li = tw.li`
  mb-1
`;

const FoodDetail = ({ foodService }: IProps) => {
  const params = useParams();
  const popularFood = useRecoilValue(popularFoodState);
  const { data: food, isLoading } = useQuery<Food>(["detailFood"], () => {
    return foodService.getFoodById(params.type!, params.id!);
  });

  return (
    <>
      <Nav />
      {isLoading ? (
        <div>loading... </div>
      ) : (
        <>
          <Images>
            {food!.detailImage.map((image) => (
              <Image src={image} />
            ))}
          </Images>
          <Wrapper>
            <Detail>
              <DetailContainer>
                <DetailNav>
                  <DetailNavTexts>
                    <Box>
                      <StoreName>{food!.storeName}</StoreName>
                      <Type>{food!.branch}</Type>
                    </Box>
                    <Rating>{food!.rating}</Rating>
                  </DetailNavTexts>
                  <DetailIcons>
                    <Link
                      to={{
                        pathname: `/${food!.type}/${food!.id}/new`,
                      }}
                    >
                      <IconContainer>
                        <Icon iconName="fa-solid fa-pen" />
                        <Text>리뷰쓰기</Text>
                      </IconContainer>
                    </Link>

                    <Link to={`/${food!.type}/${food!.id}/new`}>
                      <IconContainer>
                        <Icon iconName="fa-regular fa-star" />
                        <Text>가고싶다</Text>
                      </IconContainer>
                    </Link>
                  </DetailIcons>
                </DetailNav>
                <Line />
                <DetailMain>
                  <DetailTable>
                    <TableBody>
                      <Tr>
                        <Th>주소</Th>
                        <Td>{food!.address}</Td>
                      </Tr>
                      <Tr>
                        <Th>전화번호</Th>
                        <Td>{food!.tel}</Td>
                      </Tr>
                      <Tr>
                        <Th>가격대</Th>
                        <Td>2만원 미만</Td>
                      </Tr>
                      <Tr>
                        <Th>음식 종류</Th>
                        <Td>{food!.type}</Td>
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
                        <Td>{food!.url}</Td>
                      </Tr>
                      <Tr>
                        <Th>메늎</Th>
                        <Td>
                          <Ul>{food && food.menu.map((m) => <Li>{m}</Li>)}</Ul>
                        </Td>
                      </Tr>
                    </TableBody>
                  </DetailTable>
                </DetailMain>
                <Line />

                {/* Review  */}
                <ReviewWrapper>
                  <ReviewTitleWrapper>
                    <ReviewTitle>리뷰</ReviewTitle>
                    <ReviewCount>{food!.reviews.length}</ReviewCount>
                  </ReviewTitleWrapper>
                  <ReviewEvaluationWrapper>
                    <ReviewEvaluationContainer>
                      <ReviewEvaluation>전체</ReviewEvaluation>
                      <ReviewCount>(0)</ReviewCount>
                    </ReviewEvaluationContainer>
                    <ReviewEvaluationContainer>
                      <ReviewEvaluation>맛있다</ReviewEvaluation>
                      <ReviewCount>(0)</ReviewCount>
                    </ReviewEvaluationContainer>
                    <ReviewEvaluationContainer>
                      <ReviewEvaluation>괜찮다</ReviewEvaluation>
                      <ReviewCount>(0)</ReviewCount>
                    </ReviewEvaluationContainer>
                    <ReviewEvaluationContainer>
                      <ReviewEvaluation>별로</ReviewEvaluation>
                      <ReviewCount>(0)</ReviewCount>
                    </ReviewEvaluationContainer>
                  </ReviewEvaluationWrapper>
                </ReviewWrapper>
                <ReviewCommentWrapper>
                  {food!.reviews.map((review, index) => (
                    <>
                      <ReviewText>
                        <ReviewTextCount>({index + 1})</ReviewTextCount>
                        <ReviewTextComment> {review}</ReviewTextComment>
                      </ReviewText>
                    </>
                  ))}
                </ReviewCommentWrapper>
              </DetailContainer>
            </Detail>
          </Wrapper>
        </>
      )}
    </>
  );
};

export default FoodDetail;
