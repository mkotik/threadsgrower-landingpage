import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-red-100 ">
      {/* <nav className="h-12 bg-black">hi</nav> */}
      <main className="flex items-center flex-grow bg-black">
        <div className="m-auto w-fit">
          <h3 className="text-3xl text-white ">Threads-Grower</h3>
          <p className="mb-4 text-lg text-white">
            Boost Your Growth on Threads: Track, Analyze, and Excel with
            Threads-Grower
          </p>
          <div className="bg-red w-[650px] h-[300px] m-auto mb-4">*Graph</div>
          <div className="m-auto">
            <p className="text-white">Join our email list for early access:</p>
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
      <footer className="h-12 bg-red"></footer>
    </div>
  );
}
