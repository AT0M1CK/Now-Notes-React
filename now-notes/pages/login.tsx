import TextInput from "@/components/TextInput";
import React from "react";

const login = () => {
  return (
    <>
      <div className="flex flex-row min-h-screen justify-center items-center">
        <div className="flex flex-col h-96 w-96 justify-center rounded-lg shadow-lg items-center bg-orange-200">
          <div className="mx-2 my-2">
            {" "}
            <TextInput type="text" placeHolder="email" size="xs" rounded="md" />
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
