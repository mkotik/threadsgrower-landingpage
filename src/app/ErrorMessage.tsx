type SuccessMessageProps = {
  status: string;
  setStatus: (str: string) => void;
};

const ErrorMessage: React.FC<SuccessMessageProps> = ({ status, setStatus }) => {
  return (
    <div
      className={`text-white ${
        status === "error" ? "success-alert-show" : "success-alert-hide"
      }
          mt-4
           bg-red-500
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
      <p className="m-0">Error</p>
    </div>
  );
};

export default ErrorMessage;
