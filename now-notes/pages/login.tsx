import LoginForm from "@/components/Form/LoginForm";
import RegisterForm from "@/components/Form/RegisterForm";
import TextInput from "@/components/TextInput";
import React, { useState } from "react";
import { auth } from "@/firebase/firebaseConfig";

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
      <div className="flex flex-row min-h-screen bg-gray-500 justify-center items-center">
        <div className="flex flex-col h-96 w-96 justify-between rounded-lg shadow-lg items-center bg-gray-200">
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
        </div>
      </div>
    </>
  );
};

export default LoginPage;
