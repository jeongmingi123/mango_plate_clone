import { Link } from "react-router-dom";
import { useMatch } from "react-router-dom";
import tw from "tailwind-styled-components";

export interface INavbarProps {}

const NavContainer = tw.div<{ isHome: boolean }>`
  ${(props) => (props.isHome ? "nav-height" : "h-48")}
  w-full
  bg-orange-400
  text-white
`;

const Navbar = tw.div`
  flex
  justify-between
  p-5
  pl-8
  pr-8
  text-lg
`;

const Title = tw.h1`
`;

const Menu = tw.div`
  flex
  justify-between
  w-400px
`;

const Icon = tw.i<{ icon: string }>`
  ${(props) => props.icon}
`;

const MenuItem = tw.h1`

`;

// Text

const TextBox = tw.div`
  h-80
  flex
  flex-col
  items-center
  justify-center
`;

const Text = tw.h1`
  text-4xl
  mt-1
`;

const InnerSearch = tw.div`
  w-2/5
  h-16
  bg-white
  rounded-full	
  mt-14
`;

const SearchInput = tw.input`
  w-3/4
  h-full
  rounded-full	
`;

const SearchBtn = tw.button`
  w-1/4
  h-full
  rounded-full
  bg-emerald-400
  text-base
`;

export function Nav() {
  const homeMatch = useMatch("/");

  return (
    <>
      <NavContainer isHome={homeMatch !== null}>
        <Navbar>
          <Link to="/" style={{ display: "inline-block", height: "40px" }}>
            Sweet PLATE
          </Link>
          <Menu>
            <Link to="/" style={{ display: "inline-block", height: "40px" }}>
              EAT딜
            </Link>
            <Link to="/" style={{ display: "inline-block", height: "40px" }}>
              맛집 리스트
            </Link>
            <Link to="/" style={{ display: "inline-block", height: "40px" }}>
              Sweet 스토리
            </Link>
            <Icon icon="fa-solid fa-user" />
          </Menu>
        </Navbar>
        <TextBox>
          <Text>솔직한 리뷰, 믿을 수 있는 평점!</Text>
          <Text>호박고구마 플레이트</Text>
          <InnerSearch>
            <SearchInput></SearchInput>
            <SearchBtn>검색</SearchBtn>
          </InnerSearch>
        </TextBox>
      </NavContainer>
    </>
  );
}
