import React from 'react';
import me from '../assets/headshot.png';

function Home() {
  return (
    <section className='flex flex-col items-center gap-14 md:gap-24 h-full mx-auto'>
      {/* Intro */}
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-6 w-full">
          <h1 className="text-2xl slide-left">Hey, I&apos;m <span>Andrew Fletcher</span></h1>
          <div className="flex flex-col gap-3 w-full md:w-2/3 slide-left">
              <p className="font-inter">I&apos;m a Frontend developer from a town in the middle of Liverpool and Manchester called Warrington.</p>
              <p>My passions are everything frontend, UI and UX.</p>
              <p>I love to code and help out on open source UI projects.</p>
          </div>
        </div>
        <div className="mr-8 hidden md:block slide-right">
          <div className="w-[200px] h-[200px] rounded-full flex items-center justify-center overflow-hidden border border-denim-500 custom-shadow shadow-denim-400">
            <img src={me} alt="me" className="grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>

      {/* Personal Projects */}
      <div className="w-full relative">
        <h4 className="text-2xl font-cals mb-5 slide-up">What I&apos;m working on:</h4>
        <div className="w-full flex flex-col md:flex-row gap-6 mb-6">
          <a href="/simple-commit" className="flex flex-1 justify-between gap-2 flex-col bg-oxford-main/10 hover:bg-transparent hover:bg-gradient-to-r hover:from-[#8BA7F7]/10 hover:to-[#BBA2F2]/10 p-4 rounded-lg invisible animate-slide-up-25">
            <div className='flex flex-col gap-2'>
              <h4 className="text-xl font-bold">Simple Commit</h4>
              <p className="text-sm">Simple Commit is a VSCode extension that simplifies the commit process for developers.</p>
            </div>
            <div className="flex gap-2 justify-start items-center h-6">
              <div className="w-2 h-2 bg-typescript-main rounded-full"></div>
              <p className='text-sm'>Typescript</p>
            </div>
          </a>
          <a href="/create-react-interface" className="flex flex-1 justify-between gap-2 flex-col bg-oxford-main/10 hover:bg-transparent hover:bg-gradient-to-r hover:from-typescript-main/10 hover:to-javascript-main/10 p-4 rounded-lg invisible animate-slide-up-50">
            <div className='flex flex-col gap-2'>
              <h4 className="text-xl font-bold">Create React Interface</h4>
              <p className="text-sm">An NPM package that gets you started with a Reactjs UI Library.</p>
            </div>
            <div className="flex gap-2 justify-start items-center h-6">
              <div className="w-2 h-2 bg-typescript-main rounded-full"></div>
              <p className='text-sm'>Typescript</p>
              <div className="w-2 h-2 bg-javascript-main rounded-full"></div>
              <p className='text-sm'>Javascript</p>
            </div>
          </a>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-6 mb-6">
          <a href="/radix-table" className="flex flex-1 justify-between gap-2 flex-col bg-oxford-main/10 hover:bg-transparent hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-orange-600/10 p-4 rounded-lg invisible animate-slide-up-75">
            <div className='flex flex-col gap-2'>
              <h4 className="text-xl font-bold">Radix Table</h4>
              <p className="text-sm">Reactive and highly stylized React Table component.</p>
            </div>
            <div className="flex gap-2 justify-start items-center h-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <p className='text-sm'>React</p>
              <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
              <p className='text-sm'>HTML</p>
            </div>
          </a>
          <a href="/documentation-ui" className="flex flex-1 justify-between gap-2 flex-col bg-oxford-main/10 hover:bg-transparent hover:bg-gradient-to-r hover:from-blue-600/10 hover:via-orange-600/10 hover:to-cyan-600/10 p-4 rounded-lg invisible animate-slide-up-100">
            <div className='flex flex-col gap-2'>
              <h4 className="text-xl font-bold">Documentation UI</h4>
              <p className="text-sm">A UI library to write simple and elegant documentation pages.</p>
            </div>
            <div className="flex gap-2 justify-start items-center h-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <p className='text-sm'>React</p>
              <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
              <p className='text-sm'>HTML</p>
              <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
              <p className='text-sm'>CSS</p>
            </div>
          </a>
        </div>
      </div>

      {/* Work Projects */}
      <div className="w-full mb-14 md:mb-24">
        <h4 className="text-2xl font-cals mb-5 slide-up">Work projects:</h4>
        <div className="w-full flex gap-6 mb-6 flex-col md:flex-row slide-up-30">
          <a href="/content-editor" className="flex flex-1 justify-between gap-2 flex-col bg-oxford-main/10 hover:bg-green-600/10 p-4 rounded-lg invisible animate-slide-up-25">
            <div className='flex flex-col gap-2'>
              <h4 className="text-xl font-bold">Content Editor</h4>
              <p className="text-sm">A CMS built for JDSports where the content team can update landing pages content without the intervention of a developer.</p>
            </div>
            <div className="flex gap-2 justify-start items-center h-6">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <p className='text-sm'>Vue</p>
            </div>
          </a>
          <a href="/prism" className="flex flex-1 justify-between gap-2 flex-col bg-oxford-main/10 hover:bg-blue-600/10 p-4 rounded-lg invisible animate-slide-up-50">
            <div className='flex flex-col gap-2'>
              <h4 className="text-xl font-bold">PRISM</h4>
              <p className="text-sm">A PIM built and designed by me for JDSports that allows various teams to organize and manage thousands of product information.</p>
            </div>
            <div className="flex gap-2 justify-start items-center h-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <p className='text-sm'>React</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home