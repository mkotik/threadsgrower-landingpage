import Image from "next/image";

export default function Home() {
  return (
    <body className="flex flex-col min-h-screen bg-red-100 ">
      {/* <nav className="h-12 bg-black">hi</nav> */}
      <main className="flex-grow bg-black">
        <h3 className="text-white">Threads-Grower</h3>
        <p className="text-white">
          Boost Your Growth on Threads: Track, Analyze, and Excel with
          Threads-Grower
        </p>
        <p className="text-white">Join our email list for early access</p>
        <div>
          <input className="px-4 py-2" placeholder="email" />
          <button className="px-4 py-2 text-white bg-red">Join</button>
        </div>
      </main>
      <footer className="h-12 bg-red">bye</footer>
    </body>
  );
}
