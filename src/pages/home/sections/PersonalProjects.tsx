import React from 'react';
import va from '@vercel/analytics';

function PersonalProjects() {
    return (
        <section className="w-full relative">
            <h4 className="text-2xl font-cals mb-5 slide-up">What I&apos;m working on:</h4>
            <div className="w-full flex flex-col md:flex-row gap-6">
                <a
                    href="/simple-commit"
                    className="flex flex-1 justify-between gap-2 flex-col bg-oxford-main/10 hover:bg-transparent hover:bg-gradient-to-r hover:from-[#8BA7F7]/10 hover:to-[#BBA2F2]/10 p-4 rounded-lg invisible animate-slide-up-1"
                    onClick={() => va.track('SimpleCommit', { location: 'home' })}
                >
                    <div className='flex flex-col gap-2'>
                        <h4 className="text-xl font-bold">Simple Commit</h4>
                        <p className="text-sm">Simple Commit is a VSCode extension that simplifies the commit process for developers.</p>
                    </div>
                    <div className="flex gap-2 justify-start items-center h-6">
                        <div className="w-2 h-2 bg-typescript-main rounded-full"></div>
                        <p className='text-sm'>Typescript</p>
                    </div>
                </a>

                <a
                    href="/create-react-interface"
                    className="flex flex-1 justify-between gap-2 flex-col bg-oxford-main/10 hover:bg-transparent hover:bg-gradient-to-r hover:from-typescript-main/10 hover:to-javascript-main/10 p-4 rounded-lg invisible animate-slide-up-1"
                    onClick={() => va.track('CreateReactInterface', { location: 'home' })}
                >
                    <div className='flex flex-col gap-2'>
                        <h4 className="text-xl font-bold">Create React Interface</h4>
                        <p className="text-sm">An NPM package that gets you started with a React UI Library.</p>
                    </div>
                    <div className="flex gap-2 justify-start items-center h-6">
                        <div className="w-2 h-2 bg-typescript-main rounded-full"></div>
                        <p className='text-sm'>Typescript</p>
                        <div className="w-2 h-2 bg-javascript-main rounded-full"></div>
                        <p className='text-sm'>Javascript</p>
                    </div>
                </a>
            </div>

            {/* <div className="w-full flex flex-col md:flex-row gap-6 mb-6">
                <a href="/radix-table" className="flex flex-1 justify-between gap-2 flex-col bg-oxford-main/10 hover:bg-transparent hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-orange-600/10 p-4 rounded-lg invisible animate-slide-up-2">
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

                <a href="/documentation-ui" className="flex flex-1 justify-between gap-2 flex-col bg-oxford-main/10 hover:bg-transparent hover:bg-gradient-to-r hover:from-blue-600/10 hover:via-orange-600/10 hover:to-cyan-600/10 p-4 rounded-lg invisible animate-slide-up-2">
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
            </div> */}
        </section>
    )
}

export default PersonalProjects