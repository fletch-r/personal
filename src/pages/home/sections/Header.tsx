import React from 'react'
import me from '../../../assets/headshot.png';

function Header() {
    return (
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
    )
}

export default Header