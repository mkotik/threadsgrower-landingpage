const EmailForm = () => {
  return (
    <div className="flex justify-center gap-2">
      <div className="flex flex-col w-72 ">
        <p className="mb-1 text-center text-white">
          Join the email list for{" "}
          <span className="font-bold">early access</span>:
        </p>
        <input
          className="mb-1 px-4 py-1 rounded-tl rounded-tr focus-visible:outline-none focus-visible:bg-[#f5f5f5]"
          placeholder="Threads Handle"
        />
        <input
          className="mb-1 px-4 py-1 focus-visible:outline-none focus-visible:bg-[#f5f5f5]"
          placeholder="Email..."
        />
        <button className="rounded-br rounded-bl px-4 py-1 text-white  bg-red hover:bg-[#de144a]">
          Join
        </button>
      </div>
    </div>
  );
};

export default EmailForm;
