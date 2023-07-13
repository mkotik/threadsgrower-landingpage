"use client";
import axios from "axios";
import { useState } from "react";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";

const EmailForm = () => {
  const [email, setEmail] = useState<string>("");
  const [handle, setHandle] = useState<string>("");
  // const [successMessage, setSuccessMessage] = useState<boolean>(true);
  const [status, setStatus] = useState<string>("");
  const handleSubmit = async () => {
    console.log(status);
    if (!process.env.NEXT_PUBLIC_API_URL) {
      console.log("API URL NOT FOUND");
      console.log(process.env.NEXT_PUBLIC_API_URL);
      return;
    }
    if (!handle) {
      console.log("handle is undefined");
      setStatus("error");
      return;
    }
    axios
      .post(process.env.NEXT_PUBLIC_API_URL, {
        email,
        handle,
      })
      .then((res) => {
        console.log(res.status);
        if (res.status === 201) {
          // setSuccessMessage(true);
          setStatus("success");
        } else {
          setStatus("error");
        }
        console.log(res);
      })
      .catch((err) => {
        setStatus("error");
        console.log(err);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name == "handle") {
      setHandle(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    }
  };

  return (
    <div className="flex justify-center gap-2 mt-10">
      <div className="flex flex-col w-72 ">
        <p className="mb-1 text-center text-white">
          Register for <span className="font-bold">early access</span>:
        </p>
        <div className="flex">
          <div className="w-10 mb-1 text-right bg-white ">
            <p className="mt-1 ">@</p>
          </div>
          <input
            className="w-full mb-1 pr-4 py-1 pl-[1px] focus-visible:outline-none focus-visible:bg-[#f5f5f5]"
            placeholder="Threads Handle..."
            name="handle"
            onChange={handleChange}
            value={handle}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />
        </div>
        {/* <input
          className="mb-1 px-4 py-1 focus-visible:outline-none focus-visible:bg-[#f5f5f5]"
          placeholder="Email..."
          name="email"
          onChange={handleChange}
          value={email}
        /> */}
        <button
          onClick={() => handleSubmit()}
          className="rounded-br rounded-bl px-4 py-1 text-white  bg-purple hover:bg-[#7c79ba]"
        >
          Join
        </button>

        <SuccessMessage status={status} setStatus={setStatus} />
        <ErrorMessage status={status} setStatus={setStatus} />
      </div>
    </div>
  );
};

export default EmailForm;
