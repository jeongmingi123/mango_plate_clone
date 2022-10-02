import { Link } from "react-router-dom";
import { useMatch } from "react-router-dom";
import styled from "styled-components";
import tw from "tailwind-styled-components";

export interface INavbarProps {}

const NavContainer = tw.div<{ isHome: boolean }>`
  flex
  justify-between
  ${(props) => (props.isHome ? "nav-height" : "h-48")}
  w-full
  bg-red-500
  text-white
  text-lg
  p-5
  pl-8
  pr-8
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

const MenuItem = tw.h1``;

export function Nav() {
  const homeMatch = useMatch("/");

  return (
    <>
      <NavContainer isHome={homeMatch !== null}>
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
      </NavContainer>
    </>
  );
}
