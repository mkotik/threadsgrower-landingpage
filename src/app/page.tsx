import Image from "next/image";
import EmailForm from "./EmailForm";
import DemoGraph from "./DemoGraph";
import FeaturesPanel from "./FeaturesPanel/FeaturesPanel";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen bg-purple-100 ">
      <main className="flex items-center flex-grow bg-black pt-14 fullHeight">
        <div className="w-full m-auto md:w-fit px-[10px]">
          <h3 className="text-3xl font-extrabold text-center text-white md:text-left">
            Threads-Grower
          </h3>
          <p className="mb-4 text-lg font-light text-center text-white md:text-left">
            Boost Your Growth on Threads: Track, Analyze, and Excel with
            Threads-Grower
          </p>
          <DemoGraph />
          <EmailForm />
        </div>
      </main>
      <FeaturesPanel />
      <footer className="fixed bottom-0 right-0 flex items-center w-full h-[50px] bg-purple">
        <a href="https://www.threads.net/@marat_kotik" target="_blank">
          <Image
            height={35}
            width={35}
            className="ml-2 cursor-pointer"
            src="/threads-logo.svg"
            alt="SVG"
          />
        </a>
        <div className="m-auto mr-2">&copy; 2023</div>
      </footer>
    </div>
  );
};

export default Main;
