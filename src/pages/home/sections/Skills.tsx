import React from 'react'
import {
    HTMLIcon,
    CSSIcon,
    DockerIcon,
    JavaScriptIcon,
    MUIIcon,
    NodeIcon,
    ReactIcon,
    TypescriptIcon,
    VueIcon,
} from '../../../icons'
import MongoDB from '../../../assets/mongodb_logo.webp';

export default function Skills() {
    return (
        <section className="w-full relative">
            <h4 className="text-2xl font-cals mb-5 slide-up">Skills:</h4>
            <div className="flex items-center justify-evenly animate-slide-up-1 flex-wrap">
                <HTMLIcon className="w-14 h-14 opacity-60 hover:opacity-100 fill-orange-400" />
                <CSSIcon className="w-14 h-14 opacity-60 hover:opacity-100 fill-blue-400" />
                <JavaScriptIcon className="w-14 h-14 opacity-60 hover:opacity-100 fill-javascript-main" />
                <TypescriptIcon className="w-14 h-14 opacity-60 hover:opacity-100 fill-typescript-main" />
                <ReactIcon className="w-14 h-14 opacity-60 hover:opacity-100 fill-sky-400" />
                <VueIcon className="w-14 h-14 opacity-60 hover:opacity-100 fill-green-400" />
                <MUIIcon className="w-14 h-14 opacity-60 hover:opacity-100 fill-blue-400" />
                <NodeIcon className="w-14 h-14 opacity-60 hover:opacity-100 fill-green-400" />
                <DockerIcon className="w-14 h-14 opacity-60 hover:opacity-100 fill-blue-400" />
                <img src={MongoDB} alt="mongodb" className="-m-4 w-12 h-auto opacity-60 hover:opacity-100" />
            </div>
        </section>
    )
}