/* eslint-disable @next/next/no-img-element */
import LoginForm from "@/components/Form/LoginForm";
import RegisterForm from "@/components/Form/RegisterForm";
import TextInput from "@/components/TextInput";
import React, { useState } from "react";
import { auth } from "@/firebase/firebaseConfig";
import ResetForm from "@/components/Form/ResetForm";
import Cover from "../assets/CoverImage.jpg";
import Cover2 from "../assets/CoverImage2.jpg";
import Cover3 from "../assets/CoverImage3.jpg";
import Cover4 from "../assets/CoverImage4.jpg";
import Cover5 from "../assets/CoverImage5.jpg";
import Image from "next/image";

export enum LoginState {
  LOGIN,
  FIRST_LOGIN,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  REGISTER,
}

const LoginPage = () => {
  const [loginState, setLoginState] = useState<LoginState>(LoginState.LOGIN);

  const stateChangeHandler = (newState: LoginState) => {
    setLoginState(newState);
  };

  return (
    <>
      <div className="min-h-screen flex">
        <div className="flex-1 ...">
          <div className="flex flex-row min-h-screen shadow-inner bg-slate-500 justify-center items-center">
            <div className="flex flex-col h-128 w-128 p-10 md:w-128 sm:w-96 m-10  justify-between rounded-lg shadow-xl items-center bg-gray-200">
              {/* span div */}

              {/* input div  */}
              {loginState === LoginState.LOGIN ? (
                <LoginForm stateHandler={stateChangeHandler} />
              ) : (
                ""
              )}
              {loginState === LoginState.REGISTER ? (
                <RegisterForm stateHandler={stateChangeHandler} />
              ) : (
                " "
              )}
              {loginState === LoginState.RESET_PASSWORD ? (
                <ResetForm stateHandler={stateChangeHandler} />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="flex-1 ...">
          <div className="flex min-h-screen bg-slate-200 justify-center shadow-2xl items-center">
            {/* <img src="/assets/CoverImage.jpg" alt="Cover" /> */}
            <Image
              className=" h-screen w-screen"
              src={Cover5}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
