import React from "react";
import TextInput from "../TextInput";

const LoginForm = () => {
  return (
    <>
      <div className=" justify-center w-full flex flex-col p-5 ">
        <form action="">
          <div className="p-2">
            <TextInput type="text" placeHolder="email" size="xs" rounded="md" />
          </div>
          <div className="p-2">
            {" "}
            <TextInput
              type="text"
              placeHolder="password"
              size="xs"
              rounded="md"
            />
          </div>
          {/* error messages */}
          {/* button */}
        </form>
      </div>
      {/* links div */}
      <div className="flex w-full flex-col  justify-center items-center p-5">
        <div className="flex flex-row justify-center items-center text-center align-middle">
          <span>Dont have an account ?</span>
          <button className="text-blue-600 font-semibold px-2">Sign Up</button>
        </div>
        <div className="flex flex-row justify-center items-center text-center align-middle">
          <span>Trouble signing in ? </span>
          <button className="text-blue-600 font-semibold px-2">
            Click here
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
