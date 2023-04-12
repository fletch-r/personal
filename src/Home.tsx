import kaiba from './assets/kaiba.jpeg';

function Home() {
  return (
    <div className='max-w-[945px] mx-auto flex flex-col items-center gap-[100px]'>
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-6 w-[545px]">
          <h1 className="text-4xl">Hey, I'm <span>Andrew Fletcher</span></h1>
          <div className="flex flex-col gap-3">
            <p className="text-lg">I'm a Frontend developer from a town in the middle of Liverpool and Manchester called Warrington.</p>
            <p className="text-lg">My passions are everything frontend, UI and UX. I love to code and help out on open source UI projects.</p>
          </div>
        </div>
        <div>
          <div className="w-[210px] h-[210px] bg-neutral-50 rounded-full flex items-center justify-center overflow-hidden border border-denim-500 custom-shadow shadow-denim-400">
            <img src={kaiba} alt="kaiba" />
          </div>
        </div>
      </div>

      <div className="w-full">
        <h4 className="text-2xl font-cals mb-5">Projects</h4>
        <div className="w-full flex gap-6">
          <a href="/simple-commit" className="border-2 border-oxford-main hover:border-denim-main hover:bg-denim-main bg-oxford-main bg-opacity-10 hover:bg-opacity-10 p-4 rounded-lg w-1/3">
            <h4 className="text-xl  mb-3 font-bold">Simple Commit</h4>
            <p className="text-sm">Simple Commit is a VSCode extension that simplifies the commit process for developers.</p>
          </a>
          <a href="/content-editor" className="border-2 border-oxford-main hover:border-denim-main hover:bg-denim-main bg-oxford-main bg-opacity-10 hover:bg-opacity-10 p-4 rounded-lg w-1/3">
            <h4 className="text-xl  mb-3 font-bold">Content Editor</h4>
            <p className="text-sm">This is a description about the Content Editor and how it is built in Vuejs and manages JD’s content.</p>
          </a>
          <a href="/prism" className="border-2 border-oxford-main hover:border-denim-main hover:bg-denim-main bg-oxford-main bg-opacity-10 hover:bg-opacity-10 p-4 rounded-lg w-1/3">
            <h4 className="text-xl  mb-3 font-bold">PRISM</h4>
            <p className="text-sm">This is a description about PRISM and how it helps JD manage its millions of products.</p>
          </a>
        </div>
      </div>

      <div className="h-[400px] border w-full border-neutral-400 rounded flex justify-center items-center">
        <h1>Placeholder</h1>
      </div>
    </div>
  )
}

export default Home