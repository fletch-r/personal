import React from 'react'

import TailwindLogo from '../../assets/tailwindcss.svg';
import ReactLogo from '../../assets/react.svg';
import MUILogo from '../../assets/MUI.png';
import ReduxLogo from '../../assets/redux.svg';

export default function TechStack() {
    return (
        <div className="flex w-full justify-evenly gap-8">
            <a href="https://react.dev" target="_blank" rel="noreferrer">
                <div className="rounded-full bg-oxford-950 border border-oxford-900 p-0 md:p-4 flex justify-center items-center" >
                    <img src={ReactLogo} alt="react" className="p-3 md:p-0 w-16 h-16" loading="lazy" />
                </div>
            </a>
            <a href="https://mui.com" target="_blank" rel="noreferrer">
                <div className="rounded-full bg-oxford-950 border border-oxford-900 p-0 md:p-4 flex justify-center items-center" >
                    <img src={MUILogo} alt="materialui" className="p-3 md:p-0 w-16 h-16" loading="lazy" />
                </div>
            </a>
            <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">
                <div className="rounded-full bg-oxford-950 border border-oxford-900 p-0 md:p-4 flex justify-center items-center" >
                    <img src={TailwindLogo} alt="tailwindcss" className="p-3 md:p-0 w-16 h-16" loading="lazy" />
                </div>
            </a>
            <a href="https://redux-toolkit.js.org" target="_blank" rel="noreferrer">
                <div className="rounded-full bg-oxford-950 border border-oxford-900 p-0 md:p-4 flex justify-center items-center" >
                    <img src={ReduxLogo} alt="redux" className="p-3 md:p-0 w-16 h-16" loading="lazy" />
                </div>
            </a>
        </div>
    )
}