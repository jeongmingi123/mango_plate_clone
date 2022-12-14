import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { foodState, userState } from "../../store/atoms";
import tw from "tailwind-styled-components";
import { useRef, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FoodService, { Food, FoodType } from "../../service/foodService";
import Nav from "../nav/nav";

interface IProps {
  foodService: {
    getFoods(foodType: FoodType): any;
    getFoodById(foodType: string, id: string): Promise<Food>;
    addReview(food: Food): Promise<IResoponsePutResult>;
  };
}

interface IResoponsePutResult {
  status: number;
  ok: boolean;
  type: string;
  url: string;
  redirected: boolean;
}

export type expressionType = "Good" | "Normal" | "Bad";

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
  mt-5
`;

const Evaluation = tw.div`
  w-72
  flex
  justify-between
  text-md
  mt-3
  ml-3
`;

const Good = tw.div<{ isActive: boolean }>`
  flex
  items-center
  ${(props) => (props.isActive ? "text-orange-400" : "text-gray-300")}
  cursor-pointer
`;

const Normal = tw.div<{ isActive: boolean }>`
  flex
  items-center
  ${(props) => (props.isActive ? "text-orange-400" : "text-gray-300")}
  cursor-pointer
`;

const Bad = tw.div<{ isActive: boolean }>`
  flex
  items-center
  ${(props) => (props.isActive ? "text-orange-400" : "text-gray-300")}
  cursor-pointer
`;

const Icon = tw.i<{ icon: string }>`
  ${(props) => props.icon}
  text-4xl
`;

const RatingText = tw.span`
  ml-2
`;

const ReviewInput = tw.textarea`
  w-full
  mt-4
  p-2
  h-72
  resize-none
  caret-white
`;

const Btns = tw.div`
  flex
  justify-end
  mt-4
`;

const Button = tw.button`
  border-2
  border-gray-400
  text-gray-400
  text-2xl
  ml-3
  rounded-xl	
  w-24
  h-12
`;

const AddDetailReview = ({ foodService }: IProps) => {
  const user = useRecoilValue(userState);
  const [expression, setExpression] = useState<expressionType>("Good");
  const food = useRecoilValue(foodState);
  const setFood = useSetRecoilState(foodState);

  const params = useParams();

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const navigate = useNavigate();

  const onGood = () => {
    setExpression("Good");
  };

  const onNormal = () => {
    setExpression("Normal");
  };

  const onBad = () => {
    setExpression("Bad");
  };

  const onCancle = () => {
    navigate(`/${params.type}/${params.id}`);
  };

  const onSubmit = async () => {
    const copy: Food = {
      ...food,
      reviews: [
        ...food.reviews!,
        { userId: user!.id, comment: inputRef.current!.value, expression },
      ],
    };
    console.log(copy);

    foodService.addReview(copy).then((res) => {
      if (res.status === 404) {
        console.log(res);
        return;
      }
      setFood((prev) => {
        return {
          ...prev,
          reviews: [
            ...prev.reviews!,
            { userId: user!.id, comment: inputRef.current!.value, expression },
          ],
        };
      });
      return navigate(`/${params.type}/${params.id}`);
    });
  };

  useEffect(() => {
    if (food) {
      return;
    }
    foodService
      .getFoodById(params.type!, params.id!)
      .then((response) => setFood(response))
      .catch(console.log);
  }, []);

  return (
    <>
      <Nav />
      <Section>
        <Wrapper>
          {!user ? (
            <div>????????? ???????????????.</div>
          ) : (
            <>
              <TitleWapper>
                {food ? (
                  <StoreName>{food.storeName}</StoreName>
                ) : (
                  <StoreName>Loading....</StoreName>
                )}
                <GuideText>??? ?????? ????????? ????????? ????????????</GuideText>
              </TitleWapper>
              <ReviewEditor>
                <Evaluation>
                  <Good isActive={expression === "Good"} onClick={onGood}>
                    <Icon icon="fa-regular fa-face-smile"></Icon>
                    <RatingText>?????????</RatingText>
                  </Good>
                  <Normal isActive={expression === "Normal"} onClick={onNormal}>
                    <Icon icon="fa-regular fa-face-meh"></Icon>
                    <RatingText>?????????</RatingText>
                  </Normal>
                  <Bad isActive={expression === "Bad"} onClick={onBad}>
                    <Icon icon="fa-regular fa-face-frown-open"></Icon>
                    <RatingText>??????</RatingText>
                  </Bad>
                </Evaluation>
                <ReviewInput
                  placeholder="?????? ?????? ????????? ???????????????? ????????? ???????????? ???????????? ????????????!"
                  ref={inputRef}
                />
              </ReviewEditor>
              <Btns>
                <Button onClick={onCancle}>??????</Button>
                <Button onClick={onSubmit}>??????</Button>
              </Btns>
            </>
          )}
        </Wrapper>
      </Section>
      )
    </>
  );
};
export default AddDetailReview;
