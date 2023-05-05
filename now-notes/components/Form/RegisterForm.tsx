import React from "react";
import TextInput from "../TextInput";
import { useForm } from "react-hook-form";
import { LoginState } from "@/pages/login";
import { useRouter } from "next/router";
import MenuButton from "../MenuButton";
import { auth } from "@/firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterForm = (props: { stateHandler: (state: LoginState) => void }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
    setError,
  } = useForm();

  const onFormSubmit = (data: any) => {
    console.log(data);
    signUp(data.email, data.password);
  };

  const signUp = async (email: string, password: string) => {
    try {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = newUser.user;
      props.stateHandler(LoginState.LOGIN);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className=" w-full flex justify-center text-center items-center my-5">
          <span>SIGN UP</span>
        </div>
        <div className=" justify-center w-full flex flex-col p-5 ">
          <div className="p-2">
            <TextInput
              type="text"
              colorScheme="white"
              rounded="md"
              size="xs"
              placeHolder="email"
              borderScheme="white"
              register={register}
              error={errors}
              name="email"
              validationSchema={{
                required: true,
                //pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                patternError: "Invalid email.",
                requiredError: "Email cannot be empty",
              }}
            />
          </div>
          <div className="p-2">
            {" "}
            <TextInput
              type="password"
              colorScheme="white"
              rounded="md"
              size="xs"
              placeHolder="password"
              borderScheme="white"
              register={register}
              error={errors}
              name="password"
              validationSchema={{
                required: true,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                patternError: "Invalid password.",
                requiredError: "Password cannot be empty",
              }}
            />
          </div>
          {/* error messages */}
          {/* <div className="flex text-red-500 justify-center text-center align-middle">
              <span>Error message</span>
            </div> */}
          {/* button */}

          <button
            type="submit"
            className="bg-blue-500 rounded-md text-white p-2"
          >
            SUBMIT
          </button>
        </div>
        {/* links div */}
        <div className="flex w-full flex-col  justify-center items-center px-5 pb-5">
          <div className="flex flex-row justify-center items-center text-center align-middle">
            <span>Already have an account ?</span>
            <button
              onClick={() => {
                props.stateHandler(LoginState.LOGIN);
              }}
              className="text-blue-600 font-semibold px-2"
            >
              Login
            </button>
          </div>
          <div className="flex flex-row justify-center items-center text-center align-middle">
            <span>Trouble signing in ? </span>
            <button className="text-blue-600 font-semibold px-2">
              Click here
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
