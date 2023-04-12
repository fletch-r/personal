import kaiba from './assets/kaiba.jpeg';

function Home() {
  return (
    <div className='max-w-[945px] mx-auto flex flex-col items-center gap-[100px]'>
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-6 w-[545px]">
          <h1 className="text-4xl text-white">Hey, I'm <span>Andrew Fletcher</span></h1>
          <div className="flex flex-col gap-3">
            <p className="text-lg text-white">I'm a Frontend developer from a town in the middle of Liverpool and Manchester called Warrington.</p>
            <p className="text-lg text-white">My passions are everything frontend, UI and UX. I love to code and help out on open source UI projects.</p>
          </div>
        </div>
        <div>
          <div className="w-[200px] h-[200px] bg-neutral-50 rounded-full flex items-center justify-center overflow-hidden border border-denim-500 shadow-md shadow-denim-400">
            <img src={kaiba} alt="kaiba" />
          </div>
        </div>
      </div>

      <div className="w-full">
        <h4 className="text-white text-2xl font-cals mb-5">Projects</h4>
        <div className="w-full flex gap-6">
          <a href="/simple-commit" className="border border-2 border-oxford-main hover:border-denim-main hover:bg-denim-main bg-oxford-main bg-opacity-10 hover:bg-opacity-10 p-4 rounded-lg w-1/3">
            <h4 className="text-xl text-white mb-3 font-bold">Simple Commit</h4>
            <p className="text-white">This is a description about Simple Commit. I can just take it from the README as I can't remember what I wrote.</p>
          </a>
          <a href="/content-editor" className="border border-2 border-oxford-main hover:border-denim-main hover:bg-denim-main bg-oxford-main bg-opacity-10 hover:bg-opacity-10 p-4 rounded-lg w-1/3">
            <h4 className="text-xl text-white mb-3 font-bold">Content Editor</h4>
            <p className="text-white">This is a description about the Content Editor and how it is built in Vuejs and manages JD’s content.</p>
          </a>
          <a href="/prism" className="border border-2 border-oxford-main hover:border-denim-main hover:bg-denim-main bg-oxford-main bg-opacity-10 hover:bg-opacity-10 p-4 rounded-lg w-1/3">
            <h4 className="text-xl text-white mb-3 font-bold">PRISM</h4>
            <p className="text-white">This is a description about PRISM and how it helps JD manage its millions of products.</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home