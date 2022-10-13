import React, { useState } from "react";
import axios from "axios";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { userState } from "../../store/atoms";
import { IUser, IUserResponse } from "../../service/auth_service";
import Nav from "../nav/nav";
import tw from "tailwind-styled-components";

interface IProps {
  authService: {
    login(user: IUser): Promise<IUserResponse>;
    getLoggedInUser(): Promise<{ email: string; id: string }>;
  };
}

const LoginSection = tw.section`
  w-full
  h-800px
  flex
  flex-col
  justify-center
  items-center
`;

const LoginWrapper = tw.div`
  flex
  flex-col
  items-center
  justify-center
  w-2/5
  h-2/3
  bg-orange-200
  rounded-lg
`;

const Title = tw.h1`
  text-5xl
  mb-10
`;

const UserWrapper = tw.div`
  w-full
  flex
  flex-col
  items-center
`;

const InputWrapper = tw.div`
  w-full
  flex
  justify-between
  items-center
  mt-5
`;

const Label = tw.label`
  w-1/3
  text-start
  text-3xl
  ml-14
`;

const Input = tw.input`
  w-2/3
  h-14
  mr-14
`;

const ButtonWrapper = tw.div`
  w-96
  flex
  justify-between
  mt-16
`;

const Button = tw.button`
  w-40
  h-16
  rounded-lg
  bg-zinc-500	
  ml-3
  text-white
  text-2xl
`;

const Login = ({ authService }: IProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const doLogin = async () => {
    const data = {
      email: emailRef.current!.value,
      password: passwordRef.current!.value,
      image: "",
    };

    authService.login(data).then((response) => {
      console.log(response.data);
      if (response.status !== 200) {
        console.log("error 발생");
        return;
      }
      const user = {
        email: response.data.user.email,
        id: response.data.user.id,
        image: response.data.user.image,
      };

      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("id", response.data.user.id);
      setUser(user);
      return navigate("/");
    });
  };

  return (
    <>
      <Nav />
      <LoginSection>
        <LoginWrapper>
          {user ? (
            <Title>이미로그인이 되어있습니다.</Title>
          ) : (
            <>
              <Title>들어가기</Title>
              <UserWrapper>
                <InputWrapper>
                  <Label>이메일 주소</Label>
                  <Input type="email" ref={emailRef} />
                </InputWrapper>
                <InputWrapper>
                  <Label>비밀번호</Label>
                  <Input type="password" ref={passwordRef} />
                </InputWrapper>
                <ButtonWrapper>
                  <Button>취소</Button>
                  <Button onClick={doLogin}>로그인</Button>
                </ButtonWrapper>
              </UserWrapper>
            </>
          )}
        </LoginWrapper>
      </LoginSection>
    </>
  );
};
export default Login;
