import { Nav } from "../nav/nav";
import { useRecoilValue } from "recoil";
import { foodState } from "../../store/atoms";
import tw from "tailwind-styled-components";

const Section = tw.section`
  w-full
  flex
  justify-center
  mt-8

`;

const Wrapper = tw.section`
  w-2/5
`;

const TitleWapper = tw.div``;

const StoreName = tw.span`
  text-4xl
  text-orange-400
`;
const GuideText = tw.span`
  ml-2
  text-md
`;

const ReviewEditor = tw.div`
  w-full
  border-2
  h-96
  mt-5
`;

const Evaluation = tw.div`
  w-72
  flex
  justify-between
  text-md
  mt-3
  ml-3
  text-gray-300
`;

const Good = tw.div`
  flex
  items-center
`;

const Normal = tw.div`
  flex
  items-center
`;

const Bad = tw.div`
  flex
  items-center
`;

const Icon = tw.i<{ icon: string }>`
  ${(props) => props.icon}
  text-4xl
`;

const RatingText = tw.span`
  ml-2

`;

const AddDetailReview = () => {
  const food = useRecoilValue(foodState);
  return (
    <>
      <Nav></Nav>
      <Section>
        <Wrapper>
          <TitleWapper>
            <StoreName>{food.storeName}</StoreName>
            <GuideText>에 대한 솔직한 리뷰를 써주세요</GuideText>
          </TitleWapper>
          <ReviewEditor>
            <Evaluation>
              <Good>
                <Icon icon="fa-regular fa-face-smile"></Icon>
                <RatingText>맛있다</RatingText>
              </Good>
              <Normal>
                <Icon icon="fa-regular fa-face-meh"></Icon>
                <RatingText>괜찮다</RatingText>
              </Normal>
              <Bad>
                <Icon icon="fa-regular fa-face-frown-open"></Icon>
                <RatingText>별로</RatingText>
              </Bad>
            </Evaluation>
          </ReviewEditor>
        </Wrapper>
      </Section>
    </>
  );
};
export default AddDetailReview;
