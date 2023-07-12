"use client";
import axios from "axios";

const EmailForm = () => {
  const handleSubmit = () => {
    if (!process.env.NEXT_PUBLIC_API_URL) return;
    axios
      .post(process.env.NEXT_PUBLIC_API_URL, {
        email: "mkotik97@gmail.com",
        handle: "@marat_kotik",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGetSignups = () => {
    if (!process.env.NEXT_PUBLIC_API_URL) return;
    axios
      .get(process.env.NEXT_PUBLIC_API_URL)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex justify-center gap-2">
      <div className="flex flex-col w-72 ">
        <p className="mb-1 text-center text-white">
          Join the email list for{" "}
          <span className="font-bold">early access</span>:
        </p>
        <input
          className="mb-1 px-4 py-1 rounded-tl rounded-tr focus-visible:outline-none focus-visible:bg-[#f5f5f5]"
          placeholder="Threads Handle..."
        />
        <input
          className="mb-1 px-4 py-1 focus-visible:outline-none focus-visible:bg-[#f5f5f5]"
          placeholder="Email..."
        />
        <button
          onClick={() => handleSubmit()}
          className="rounded-br rounded-bl px-4 py-1 text-white  bg-purple hover:bg-[#7c79ba]"
        >
          Join
        </button>
        <button onClick={() => handleGetSignups()}>Get all Signups</button>
      </div>
    </div>
  );
};

export default EmailForm;
