const EmailForm = () => {
  return (
    <div className="flex justify-center gap-2">
      <p className=" mt-[2px] text-white">
        Join our email list for <span className="font-bold">early access</span>:
      </p>
      <div>
        <input
          className="px-4 py-1 rounded-tl rounded-bl focus-visible:outline-none focus-visible:bg-[#f5f5f5]"
          placeholder="Email..."
        />
        <button className="px-4 py-1 text-white rounded-tr rounded-br bg-red hover:bg-[#de144a]">
          Join
        </button>
      </div>
    </div>
  );
};

export default EmailForm;
