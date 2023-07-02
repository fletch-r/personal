import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

import Code from '../components/Code'
import ReactSVG from '../assets/react.svg';
import Storybook from '../assets/storybook.svg';
import Tailwindcss from '../assets/tailwindcss.svg';
import Rollup from '../assets/rollup.svg';
import Tooltip from '../components/Tooltip';
import NPMIcon from '../icons/NPMIcon';

export default function CRI() {
    return (
        <article className="prose-invert mx-auto max-w-none prose">
            <div className="flex items-center justify-start gap-8 not-prose mb-12">
                <h1 className="font-cals tracking-wider leading-none text-4xl text-white">
                    Create React Interface
                </h1>
                <Tooltip label="View Repository">
                    <a
                        href="https://github.com/fletch-r/create-react-interface"
                        target='_blank'
                        rel="noreferrer"
                        className="hover:bg-steal-300 text-white rounded-full px-1 py-1 transition-all hover:bg-opacity-20 flex justify-center items-center"
                    >
                        <GitHubIcon />
                    </a>
                </Tooltip>
                <Tooltip label="View on NPM">
                    <a
                        href="https://www.npmjs.com/package/create-react-interface"
                        target='_blank'
                        rel="noreferrer"
                        className="hover:bg-red-300 rounded-full transition-all hover:bg-opacity-20 flex justify-center items-center"
                    >
                        <NPMIcon className="fill-white w-8 h-8" />
                    </a>
                </Tooltip>
            </div>

            <p className="lead">
                Use <span className='not-prose'><Code>npx create-react-interface</Code></span> to get started.
                {/* Use <code>npx create-react-interface</code> to get started. */}
            </p>

            <p>
                Create React Interface is a npm package that you can use to start a React component library.
            </p>
            <p>
                Then once you have created your UI library, you can use roll-up to minify your components and then deploy your library to npm.
            </p>

            <h2>Tech Stack:</h2>
            <section className="not-prose">
                <div>
                    <div className="flex w-full justify-evenly gap-8">
                        <div className="rounded-full bg-oxford-950 border border-oxford-900 p-0 md:p-4 flex justify-center items-center" >
                            <img src={ReactSVG} alt="react" className="p-3 md:p-0 w-16 h-16" />
                        </div>
                        <div className="rounded-full bg-oxford-950 border border-oxford-900 p-0 md:p-4 flex justify-center items-center" >
                            <img src={Storybook} alt="storybook" className="p-3 md:p-0 w-16 h-16" />
                        </div>
                        <div className="rounded-full bg-oxford-950 border border-oxford-900 p-0 md:p-4 flex justify-center items-center" >
                            <img src={Tailwindcss} alt="tailwind" className="p-3 md:p-0 w-16 h-16" />
                        </div>
                        <div className="rounded-full bg-oxford-950 border border-oxford-900 p-0 md:p-4 flex justify-center items-center" >
                            <img src={Rollup} alt="rollup" className="p-3 md:p-0 w-16 h-16" />
                        </div>
                    </div>
                </div>
            </section>

            <h2>About:</h2>

            <h3>Storybook:</h3>

            <p>
                Storybook is a powerful tool when creating components.
            </p>
            <ul>
                <li>
                    <p><strong>Component Stories</strong></p>
                    <p>
                        Each component has its own documentation story.
                    </p>
                    <p>
                        This allows the user to see the components props and read a description of that prop like most UI libraries.
                        But they can get more from the prop description changing the value of that prop and visually see the affect it has on the component.
                    </p>
                </li>
                <li>
                    <p><strong>UI Tests</strong></p>
                    <p>
                        Storybook offers ways to spot-test components not only for interactions and data representation, but with the components accessibility, like color contrast.
                    </p>
                    <p>
                        You could also take testing to the next step by using Chromatic. A toolchain allowing CI (Continuous Integration) and automated test, built for Storybook, developed by the team from Storybook.
                    </p>
                </li>
                <li>
                    <p><strong>Team</strong></p>
                    <p>
                        Storybook becomes your teams single source of truth. The team can open storybook and view the component they think they need, without having to import the component into the project first.
                    </p>
                </li>
            </ul>

        </article>
    )
}