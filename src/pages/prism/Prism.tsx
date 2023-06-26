import React from 'react'
import TechStack from './TechStack'

export default function Prism() {
    return (
        <article className='prose prose-invert mx-auto max-w-none'>
            <h1 className="font-cals tracking-wider leading-none">PRISM</h1>

            <p className="lead">
                A Product Information Manager (PIM) allowing users to on-board products, view and manage product data.
            </p>

            <p>
                I came up with the name PRISM by taking the letters from the name PRoduct Information SysteM.
            </p>

            <h2>Technologies Used</h2>
            <div className="not-prose">
                <TechStack />
            </div>
        </article>
    )
}