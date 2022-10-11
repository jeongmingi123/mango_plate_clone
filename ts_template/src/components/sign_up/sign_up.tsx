import React, { useState } from "react";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const doSignUp = async () => {
    const data = JSON.stringify({
      email: emailRef.current!.value,
      password: passwordRef.current!.value,
    });

    const config = {
      method: "post",
      url: "http://localhost:3003/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        if (response.status === 201) {
          console.log(JSON.stringify(response.data));
          navigate("/");
        }
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
        <button onClick={doSignUp}>회원가입</button>
      </div>
    </>
  );
};
export default SignUp;
