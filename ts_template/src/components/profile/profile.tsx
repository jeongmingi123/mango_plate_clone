import Nav from "../nav/nav";
import { useRecoilValue, useRecoilState } from "recoil";
import { userState } from "../../store/atoms";
import tw from "tailwind-styled-components";
import { Food, FoodType } from "../../service/foodService";
import { useQuery } from "react-query";
import FoodList from "../food_list/food_list";

interface IProps {
  foodService: {
    getFoodsByUserId(id: string): Promise<Food[]>;
  };
}

const ProfileSection = tw.section`
  w-full
  flex
  flex-col
  items-center
  justify-center
`;

const ProfileNav = tw.div`
  flex
  justify-center
  items-center
  w-full
  h-96
`;

const My = tw.div`
  flex
  flex-col
  justify-center
  items-center
  w-full
  h-full
  bg-orange-100
`;

const MyImage = tw.img`
  rounded-full
  w-40
`;
const MyEmail = tw.span`
  text-2xl
  mt-4
`;

const FoodListWrapper = tw.div`
  w-full
`;

const NoData = tw.div`
  mt-5
  text-center

`;

const Profile = ({ foodService }: IProps) => {
  const [user, setUser] = useRecoilState(userState);

  const { data, isLoading } = useQuery(["foodDataByUser"], () => {
    return foodService.getFoodsByUserId(user!.id!);
  });

  return (
    <>
      <Nav />
      {!user ? (
        <div>loading....</div>
      ) : (
        <ProfileSection>
          <ProfileNav>
            <My>
              {user.image ? (
                <MyImage src={user!.image!}></MyImage>
              ) : (
                <span>Image 없음</span>
              )}
              <MyEmail>{user!.email!}</MyEmail>
            </My>
          </ProfileNav>
          <FoodListWrapper>
            <FoodList
              titleName="My List"
              foods={data}
              isLoading={isLoading}
            ></FoodList>
          </FoodListWrapper>
        </ProfileSection>
      )}
    </>
  );
};

export default Profile;
