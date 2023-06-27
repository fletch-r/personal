import React from 'react';
import va from '@vercel/analytics';

function WorkProjects() {
    return (
        <section className="w-full mb-14 md:mb-24">
            <h4 className="text-2xl font-cals mb-5 slide-up">Work projects:</h4>
            <div className="w-full flex gap-6 mb-6 flex-col md:flex-row slide-up-30">
                <a
                    href="/content-editor"
                    className="flex flex-1 justify-between gap-2 flex-col bg-oxford-main/10 hover:bg-green-600/10 p-4 rounded-lg invisible animate-slide-up-1"
                    onClick={() => va.track('ContentEditor', { location: 'home' })}
                >
                    <div className='flex flex-col gap-2'>
                        <h4 className="text-xl font-bold">Content Editor</h4>
                        <p className="text-sm">A CMS built for JDSports where the content team can update landing pages content without the intervention of a developer.</p>
                    </div>
                    <div className="flex gap-2 justify-start items-center h-6">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <p className='text-sm'>Vue</p>
                    </div>
                </a>
                <a
                    href="/prism"
                    className="flex flex-1 justify-between gap-2 flex-col bg-oxford-main/10 hover:bg-blue-600/10 p-4 rounded-lg invisible animate-slide-up-1"
                    onClick={() => va.track('PRISM', { location: 'home' })}
                >
                    <div className='flex flex-col gap-2'>
                        <h4 className="text-xl font-bold">PRISM</h4>
                        <p className="text-sm">A PIM built and designed by me for JDSports that allows various teams to organize and manage thousands of product information.</p>
                    </div>
                    <div className="flex gap-2 justify-start items-center h-6">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <p className='text-sm'>React</p>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default WorkProjects