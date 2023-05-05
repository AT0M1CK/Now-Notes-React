import React from "react";
import TextInput from "../TextInput";
import { LoginState } from "@/pages/login";
import { useForm } from "react-hook-form";
import { auth } from "@/firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { log } from "console";
import { useRouter } from "next/router";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const LoginForm = (props: { stateHandler: (newState: LoginState) => void }) => {
  const router = useRouter();
  const provider = new GoogleAuthProvider();

  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
    setError,
  } = useForm();

  const onFormSubmit = (data: any) => {
    console.log(data);
    signIn(data.email, data.password);
  };

  // sign in

  const signIn = async (email: string, password: string) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      router.replace("/");
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  // sign in with popup

  const signInWithGooglePopup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
      console.log(user);
      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className=" w-full flex justify-center text-center items-center my-5">
          <span>LOGIN</span>
        </div>
        <div className=" justify-center w-full flex flex-col p-2 ">
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
          {/* button */}
          <button
            type="submit"
            className="bg-blue-500 rounded-md text-white p-2"
          >
            LOGIN
          </button>
          <button
            className="mt-2 py-2 border text-center align-middle flex justify-center border-gray-500"
            onClick={() => {
              signInWithGooglePopup();
            }}
          >
            Sign in with google
          </button>
        </div>{" "}
        {/* links div */}
        <div className="flex w-full flex-col  justify-center items-center p-2 my-2">
          <div className="flex flex-row justify-center items-center text-center align-middle">
            <span>Dont have an account ?</span>
            <button
              onClick={() => {
                props.stateHandler(LoginState.REGISTER);
              }}
              className="text-blue-600 font-semibold px-2"
            >
              Sign Up
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

export default LoginForm;
