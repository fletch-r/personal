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

export default function Skills() {
    return (
        <section className="w-full relative">
            <h4 className="text-2xl font-cals mb-5 slide-up">Skills:</h4>
            <div className="flex items-center justify-evenly animate-slide-up-1">
                <HTMLIcon className="w-14 h-14 fill-gray-200 hover:fill-orange-400 hover:drop-shadow hover:shadow-orange-400" />
                <CSSIcon className="w-14 h-14 fill-gray-200 hover:fill-blue-400" />
                <JavaScriptIcon className="w-14 h-14 fill-gray-200 hover:fill-javascript-main" />
                <TypescriptIcon className="w-14 h-14 fill-gray-200 hover:fill-typescript-main" />
                <ReactIcon className="w-14 h-14 fill-gray-200 hover:fill-sky-400" />
                <VueIcon className="w-14 h-14 fill-gray-200 hover:fill-green-400" />
                <MUIIcon className="w-14 h-14 fill-gray-200 hover:fill-blue-400" />
                <NodeIcon className="w-14 h-14 fill-gray-200 hover:fill-green-400" />
                <DockerIcon className="w-14 h-14 fill-gray-200 hover:fill-blue-400" />
            </div>
        </section>
    )
}