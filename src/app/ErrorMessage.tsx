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
           bg-red-500
           flex justify-center items-center
            h-10
              origin-center
              rounded
              border
                border-white
                transform 
                translate-y-[-40px]
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
