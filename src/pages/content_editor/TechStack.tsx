import React from 'react'

import VueLogo from '../../assets/vue-logo.png';
import MongoDBLogo from '../../assets/mongodb_logo.webp';
import ExpressLogo from '../../assets/expressjs.png';
import NodeLogo from '../../assets/nodejs.png';

export default function TechStack() {
    return (
        <div className="flex w-full justify-evenly gap-8">
            <div className="rounded-full bg-oxford-950 border border-oxford-900 p-0 md:p-4 flex justify-center items-center" >
                <img src={MongoDBLogo} alt="MongoDB" className="p-2 md:p-0 w-16 h-16" loading="lazy" />
            </div>
            <div className="rounded-full bg-oxford-950 border border-oxford-900 p-0 md:p-4 flex justify-center items-center" >
                <img src={ExpressLogo} alt="express" className="p-2 md:p-0 w-16 h-16" loading="lazy" />
            </div>
            <div className="rounded-full bg-oxford-950 border border-oxford-900 p-0 md:p-4 flex justify-center items-center" >
                <img src={VueLogo} alt="vuejs" className="p-2 md:p-0 w-16 mt-2" loading="lazy" />
            </div>
            <div className="rounded-full bg-oxford-950 border border-oxford-900 p-0 md:p-4 flex justify-center items-center" >
                <img src={NodeLogo} alt="nodejs" className="p-2 md:p-0 w-16 h-16" loading="lazy" />
            </div>
        </div>
    )
}