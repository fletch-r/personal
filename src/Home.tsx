import reactLogo from './assets/react.svg'

function Home() {
  return (
    <div className='max-w-[1170px] mx-auto flex flex-col items-center gap-[100px]'>
      <h4 className='text-black font-sans text-2xl tracking-wider w-[600px] text-center mt-[90px]'>
        Hey, I'm <span className='font-cals'>Andrew</span>. A Frontend developer from a town in the middle of Liverpool and Manchester called Warrington.
      </h4>
      <h4 className='text-black text-2xl tracking-wider text-center'>
        My Skills, Passion and Experience
      </h4>
      <img src={reactLogo} className="logo react" alt="React logo" />
    </div>
  )
}

export default Home