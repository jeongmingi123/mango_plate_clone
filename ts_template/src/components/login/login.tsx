import React, { useState } from "react";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../store/atoms";

const Login = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);
  const userValue = useRecoilValue(userState);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const doSignUp = async () => {
    const data = JSON.stringify({
      email: emailRef.current!.value,
      password: passwordRef.current!.value,
    });

    const config = {
      method: "post",
      url: "http://localhost:3003/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        if (response.status !== 200) {
          console.log("error 발생");
          return;
        }
        const user = {
          email: response.data.user.email,
          id: response.data.user.id,
        };
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("id", response.data.user.id);
        setUser(user);
        return navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <input name="email" ref={emailRef} />
        <input name="password" type="password" ref={passwordRef} />
        <button onClick={doSignUp}>로그인</button>
      </div>
    </>
  );
};
export default Login;
