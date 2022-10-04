import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMatch } from "react-router-dom";
import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

export interface INavbarProps {}

const NavContainer = tw.div<{ isOverTextBox: boolean }>`
  w-full
`;

const Navbar = tw.div<{ isOverTextBox: boolean }>`
  ${(props) => (props.isOverTextBox ? "fixed" : "static")}
  ${(props) => (props.isOverTextBox ? "text-black" : "text-white")}
  ${(props) => (props.isOverTextBox ? "bg-white" : "bg-orange-400")}
  ${(props) => (props.isOverTextBox ? "shadow-2xl" : "")}
  ${(props) => (props.isOverTextBox ? "shadow-orange-500/40" : "")}
  ${(props) => (props.isOverTextBox ? "border-b-2" : "")}
  flex
  w-full
  justify-between
  items-center
  p-5
  pl-8
  pr-8
  text-md
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

const TextBox = tw.div<{ isOverTextBox: boolean }>`
  ${(props) => (props.isOverTextBox ? "hidden" : "flex")}
  ${(props) => (props.isOverTextBox ? "" : "bg-orange-400")}
  ${(props) => (props.isOverTextBox ? "" : "h-96")}
  flex-col
  items-center
  justify-center
  text-white
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

const myVars = {
  start: { scale: 0.8 },
  end: {
    scale: 1,
    transition: { type: "spring" },
  },
};

export function Nav() {
  const homeMatch = useMatch("/");

  const { scrollY } = useScroll();

  const [isOverTextBox, setIsOverTextBox] = useState(false);

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 340) {
        setIsOverTextBox(true);
      } else {
        setIsOverTextBox(false);
      }
    });
  }, [scrollY]);

  return (
    <>
      <NavContainer isOverTextBox={isOverTextBox}>
        <Navbar isOverTextBox={isOverTextBox}>
          <Link to="/" style={{ display: "inline-block", height: "32px" }}>
            Sweet PLATE
          </Link>
          <Menu>
            <Link to="/" style={{ display: "inline-block", height: "32px" }}>
              EAT딜
            </Link>
            <Link to="/" style={{ display: "inline-block", height: "32px" }}>
              맛집 리스트
            </Link>
            <Link to="/" style={{ display: "inline-block", height: "32px" }}>
              Sweet 스토리
            </Link>
            <div>
              <Icon icon="fa-solid fa-user" />
            </div>
          </Menu>
        </Navbar>
        {homeMatch ? (
          <TextBox isOverTextBox={isOverTextBox}>
            <Text>솔직한 리뷰, 믿을 수 있는 평점!</Text>
            <Text>호박고구마 플레이트</Text>
            <InnerSearch>
              <SearchInput></SearchInput>
              <SearchBtn>검색</SearchBtn>
            </InnerSearch>
          </TextBox>
        ) : (
          ""
        )}
      </NavContainer>
    </>
  );
}
