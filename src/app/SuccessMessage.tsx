type SuccessMessageProps = {
  status: string;
  setStatus: (str: string) => void;
};

const SuccessMessage: React.FC<SuccessMessageProps> = ({
  status,
  setStatus,
}) => {
  return (
    <div
      className={`text-white ${
        status === "success" ? "success-alert-show" : "success-alert-hide"
      }
        mt-4
         bg-green-500
         flex justify-center items-center
          h-10
            origin-center
            rounded
            border
              border-white
        `}
      onTransitionEnd={() => {
        setStatus("");
      }}
    >
      <p className="m-0">Success</p>
    </div>
  );
};

export default SuccessMessage;
