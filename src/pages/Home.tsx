import React from 'react';
import me from '../assets/IMG_4015.jpg';

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
            <img src={me} alt="me" />
          </div>
        </div>
      </div>

      {/* Personal Projects */}
      <div className="w-full relative">
        <h4 className="text-2xl font-cals mb-5 slide-up">What I&apos;m working on:</h4>
        <div className="w-full flex flex-col md:flex-row gap-6 mb-6 slide-up-30">
          <a href="/simple-commit" className="flex flex-1 justify-between gap-2 flex-col bg-oxford-main/10 hover:bg-transparent hover:bg-gradient-to-r hover:from-[#8BA7F7]/10 hover:to-[#BBA2F2]/10 p-4 rounded-lg">
            <div className='flex flex-col gap-2'>
              <h4 className="text-xl font-bold">Simple Commit</h4>
              <p className="text-sm">Simple Commit is a VSCode extension that simplifies the commit process for developers.</p>
            </div>
            <div className="flex gap-2 justify-start items-center h-6">
              <div className="w-2 h-2 bg-sky-600 rounded-full"></div>
              <p className='text-sm'>Typescript</p>
            </div>
          </a>
          {/*
            TODO - Change below 2 projects to:
              - Create React Interface: A npm package that you run in the console to get started on a new React UI Library.
              - Documentation UI: A UI library built with CRI that is tailored to writing clean documentation.
              - Simple Table: A fancy but Simple to use Table component. Ref: https://coyleandrew.medium.com/design-better-data-tables-4ecc99d23356
          */}
          {/* <a href="/htmc" className="flex flex-1 justify-between gap-2 flex-col bg-oxford-main/10 hover:bg-transparent hover:bg-gradient-to-r hover:from-amber-600/10 hover:to-orange-600/10 p-4 rounded-lg">
            <div className='flex flex-col gap-2'>
              <h4 className="text-xl font-bold">HTMC</h4>
              <p className="text-sm">A merge tool that combines HTML files. Allows for a component like structure for HTML files.</p>
            </div>
            <div className="flex gap-2 justify-start items-center h-6">
              <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
              <p className='text-sm'>Rust</p>
              <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
              <p className='text-sm'>HTML</p>
            </div>
          </a>
          <a href="/mongui" className="flex flex-1 justify-between gap-2 flex-col bg-oxford-main/10 hover:bg-transparent hover:bg-gradient-to-r hover:from-neutral-600/10 hover:to-amber-600/10 p-4 rounded-lg">
            <div className='flex flex-col gap-2'>
              <h4 className="text-xl font-bold">MonGUI</h4>
              <p className="text-sm">A GUI for MongoDB to allow for visualization and quick navigation across your DB&apos;s to help query your data.</p>
            </div>
            <div className="flex gap-2 justify-start items-center h-6">
              <div className="w-2 h-2 bg-neutral-600 rounded-full"></div>
              <p className='text-sm'>Nextjs</p>
              <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
              <p className='text-sm'>Rust</p>
            </div>
          </a> */}
        </div>
      </div>

      {/* Work Projects */}
      <div className="w-full mb-14 md:mb-24">
        <h4 className="text-2xl font-cals mb-5 slide-up">Work projects:</h4>
        <div className="w-full flex gap-6 mb-6 flex-col md:flex-row slide-up-30">
          <a href="/content-editor" className="flex flex-1 justify-between gap-2 flex-col bg-oxford-main/10 hover:bg-green-600/10 p-4 rounded-lg">
            <div className='flex flex-col gap-2'>
              <h4 className="text-xl font-bold">Content Editor</h4>
              <p className="text-sm">A CMS built for JDSports where the content team can update landing pages content without the intervention of a developer.</p>
            </div>
            <div className="flex gap-2 justify-start items-center h-6">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <p className='text-sm'>Vue</p>
            </div>
          </a>
          <a href="/prism" className="flex flex-1 justify-between gap-2 flex-col bg-oxford-main/10 hover:bg-blue-600/10 p-4 rounded-lg">
            <div className='flex flex-col gap-2'>
              <h4 className="text-xl font-bold">PRISM</h4>
              <p className="text-sm">A PIM built and designed by me for JDSports that allows various teams to organize and manage thousands of product information.</p>
            </div>
            <div className="flex gap-2 justify-start items-center h-6">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <p className='text-sm'>React</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home