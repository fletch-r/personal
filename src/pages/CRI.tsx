import React from 'react'
import Code from '../components/Code'

import ReactSVG from '../assets/react.svg';
import Storybook from '../assets/storybook.svg';
import Tailwindcss from '../assets/tailwindcss.svg';
import Rollup from '../assets/rollup.svg';

function CRI() {
    return (
        <article className="flex flex-col gap-10">
            <section className="flex flex-col justify-center gap-4">
                <h1 className="text-4xl font-cals tracking-wider leading-none">
                    Create React Interface
                </h1>
                <h4 className="text-lg font-inter">
                    Use <Code>npx create-react-interface</Code> to get started.
                </h4>
            </section>
            <section>
                <p className="mb-4">
                    Create React Interface is a npm package that you can use to start a React component library.
                    Then once you have created the UI library, you can use roll-up which is already set up in the project to deploy your library to npm.
                </p>
                <div>
                    <p className="mb-4 font-bold">Technologies Used:</p>
                    <div className="flex w-full justify-evenly gap-8">
                        <div className="rounded-full bg-oxford-950 border border-oxford-900 p-4 flex justify-center items-center" >
                            <img src={ReactSVG} alt="react" className="w-16 h-16" />
                        </div>
                        <div className="rounded-full bg-oxford-950 border border-oxford-900 p-4 flex justify-center items-center" >
                            <img src={Storybook} alt="storybook" className="w-16 h-16" />
                        </div>
                        <div className="rounded-full bg-oxford-950 border border-oxford-900 p-4 flex justify-center items-center" >
                            <img src={Tailwindcss} alt="tailwind" className="w-16 h-16" />
                        </div>
                        <div className="rounded-full bg-oxford-950 border border-oxford-900 p-4 flex justify-center items-center" >
                            <img src={Rollup} alt="rollup" className="w-16 h-16" />
                        </div>
                    </div>
                </div>
                {/* <p>I used storybook so the user can display their</p> */}
            </section>
        </article>
    )
}

export default CRI