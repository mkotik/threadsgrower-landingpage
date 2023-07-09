import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-red-100 ">
      {/* <nav className="h-12 bg-black">hi</nav> */}
      <main className="flex items-center flex-grow bg-black">
        <div className="m-auto w-fit">
          <h3 className="text-3xl font-extrabold text-white">Threads-Grower</h3>
          <p className="mb-4 text-lg font-light text-white">
            Boost Your Growth on Threads: Track, Analyze, and Excel with
            Threads-Grower
          </p>
          <div className="bg-red w-[650px] h-[300px] m-auto mb-4">*Graph</div>
          <div className="flex justify-center gap-2">
            <p className=" mt-[2px] text-white">
              Join our email list for{" "}
              <span className="font-bold">early access</span>:
            </p>
            <div>
              <input
                className="px-4 py-1 rounded-tl rounded-bl focus-visible:outline-none focus-visible:bg-[#f5f5f5]"
                placeholder="Email..."
              />
              <button className="px-4 py-1 text-white rounded-tr rounded-br bg-red">
                Join
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex items-center h-12 bg-red">
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
}
