import React from 'react'
import Code from '../components/Code'

import ReactSVG from '../assets/react.svg';
import Storybook from '../assets/storybook.svg';
import Tailwindcss from '../assets/tailwindcss.svg';

function CRI() {
    return (
        <article className="flex flex-col gap-10">
            <section className="flex flex-col justify-center gap-4 mb-4">
                <h1 className="text-4xl font-cals tracking-wider leading-none">
                    Create React Interface
                </h1>
                <h4 className="text-lg font-inter">
                    Use <Code>npx create-react-interface</Code> to get started.
                </h4>
            </section>
            <section>
                <p className="mb-4">Create React Interface is a npm package that ou can use to start a React component library.</p>
                <div>
                    <p className="mb-4 font-bold">Technologies Used:</p>
                    <div className="flex gap-8">
                        <img src={ReactSVG} alt="react" className="w-16 h-16" />
                        <img src={Storybook} alt="storybook" className="w-16 h-16" />
                        <img src={Tailwindcss} alt="tailwind" className="w-16 h-16" />
                    </div>
                </div>
                {/* <p>I used storybook so the user can display their</p> */}
            </section>
        </article>
    )
}

export default CRI