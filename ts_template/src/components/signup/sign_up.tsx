import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUser, IUserResponse } from "../../service/auth_service";
import Nav from "../nav/nav";
import tw from "tailwind-styled-components";

interface IProps {
  authService: {
    signUp(user: IUser): Promise<IUserResponse>;
  };
}

const SignupSection = tw.section`
  w-full
  h-800px
  flex
  flex-col
  justify-center
  items-center
`;

const SignupWrapper = tw.div`
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

const PasswordErrorMessage = tw.h1`
  text-red-600
  text-xl
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

const SignUp = ({ authService }: IProps) => {
  const navigate = useNavigate();

  const [isValidPassword, setIsValidPassword] = useState(true);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const password2Ref = useRef<HTMLInputElement>(null);

  const doSignUp = async () => {
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    const password2 = password2Ref.current!.value;

    if (password !== password2) {
      setIsValidPassword(false);
      return;
    }

    const user = {
      email,
      password,
    };

    authService
      .signUp(user)
      .then((response) => {
        if (response.status !== 201) {
          return;
        }
        console.log(JSON.stringify(response.data));
        navigate("/");
      })
      .catch(console.log);
  };

  return (
    <>
      <Nav />
      <SignupSection>
        <SignupWrapper>
          <Title>회원가입</Title>
          {!isValidPassword ? (
            <PasswordErrorMessage>
              패스워드를 다시 확인해주세요
            </PasswordErrorMessage>
          ) : (
            ""
          )}
          <UserWrapper>
            <InputWrapper>
              <Label>이메일 주소</Label>
              <Input type="email" ref={emailRef} />
            </InputWrapper>
            <InputWrapper>
              <Label>비밀번호</Label>
              <Input type="password" ref={passwordRef} />
            </InputWrapper>
            <InputWrapper>
              <Label>비밀번호 확인</Label>
              <Input type="password" ref={password2Ref} />
            </InputWrapper>
            <ButtonWrapper>
              <Button>취소</Button>
              <Button onClick={doSignUp}>가입</Button>
            </ButtonWrapper>
          </UserWrapper>
        </SignupWrapper>
      </SignupSection>
    </>
  );
};
export default SignUp;
