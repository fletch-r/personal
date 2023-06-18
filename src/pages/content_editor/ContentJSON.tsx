import React from 'react'
import Prism from "prismjs";

import ComponentCard from '../../components/ComponentCard';
import { MAIN_BANNER_CONTENT, ABSTRACT_CONTENT, SPOT_CONTENT } from './componentContent.js';

function ContentJSON() {
    const [selectedComponents, setSelectedComponents] = React.useState<string[]>(['MainBanner']);
    const initial_json = {
        "components": [
            {
                "component": "MainBanner",
                "content": {
                    "images": {
                        "desktop": {
                            "src": "",
                            "aspect-ratio": "16:9"
                        },
                        "mobile": {
                            "src": "",
                            "aspect-ratio": "1:1"
                        }
                    },
                    "ctas": [
                        {
                            "text": "Click Me",
                            "url": "/t-shirt"
                        }
                    ]
                }
            }
        ]
    };
    const [exampleJson, setExampleJson] = React.useState<any>(initial_json);

    React.useEffect(() => {
        Prism.highlightAll();
    }, [selectedComponents]);

    const SHINE_ANIMATION = `
        overflow-hidden
        rotate-180
        after:absolute after:top-0 after:left-0 after:h-0 after:w-full after:bg-[rgba(255,255,255,0.1)]
        hover:after:h-[120%] hover:after:bg-[rgba(255,255,255,0)] hover:after:transition-all hover:after:duration-500
    `;

    return (
        <>
            <section className="not-prose my-8">
                <div className="w-full flex items-center justify-evenly">
                    <ComponentCard
                        label='MainBanner'
                        selected={selectedComponents.includes('MainBanner')}
                        onClick={() => {
                            setSelectedComponents((prev) => {
                                if (prev.includes('MainBanner')) {
                                    return prev.filter((str) => str !== 'MainBanner');
                                } else {
                                    return [...prev, 'MainBanner'];
                                }
                            });
                            setExampleJson((prev: { components: never[] }) => {
                                if (selectedComponents.includes('MainBanner')) {
                                    const removed = prev.components.filter((obj: { component: string; }) => obj.component !== 'MainBanner');
                                    return { components: removed };
                                } else {
                                    const components = [...prev.components, MAIN_BANNER_CONTENT];
                                    return { components };
                                }
                            });
                        }}
                    >
                        <div className={`
                            w-3/4 h-2/3
                            bg-neutral-500
                            rounded
                            ${SHINE_ANIMATION}
                        `} />
                    </ComponentCard>
                    <ComponentCard
                        label='SpotList'
                        selected={selectedComponents.includes('SpotList')}
                        onClick={() => {
                            setSelectedComponents((prev) => {
                                if (prev.includes('SpotList')) {
                                    return prev.filter((str) => str !== 'SpotList');
                                } else {
                                    return [...prev, 'SpotList'];
                                }
                            });
                            setExampleJson((prev: { components: never[] }) => {
                                if (selectedComponents.includes('SpotList')) {
                                    const removed = prev.components.filter((obj: { component: string; }) => obj.component !== 'SpotList');
                                    return { components: removed };
                                } else {
                                    const components = [...prev.components, SPOT_CONTENT];
                                    return { components };
                                }
                            });
                        }}
                    >
                        <div className="flex justify-center items-center gap-2 h-full w-full">
                            <div className={`
                                w-1/3 h-1/2
                                bg-neutral-500
                                rounded
                                ${SHINE_ANIMATION}
                            `} />
                            <div className={`
                                w-1/3 h-1/2
                                bg-neutral-500
                                rounded
                                ${SHINE_ANIMATION}
                            `} />
                            <div className={`
                                w-1/3 h-1/2
                                bg-neutral-500
                                rounded
                                ${SHINE_ANIMATION}
                            `} />
                        </div>
                    </ComponentCard>
                    <ComponentCard
                        label='AbstractSection'
                        selected={selectedComponents.includes('AbstractSection')}
                        onClick={() => {
                            setSelectedComponents((prev) => {
                                if (prev.includes('AbstractSection')) {
                                    return prev.filter((str) => str !== 'AbstractSection');
                                } else {
                                    return [...prev, 'AbstractSection'];
                                }
                            });
                            setExampleJson((prev: { components: never[] }) => {
                                if (selectedComponents.includes('AbstractSection')) {
                                    const removed = prev.components.filter((obj: { component: string; }) => obj.component !== 'AbstractSection');
                                    return { components: removed };
                                } else {
                                    const components = [...prev.components, ABSTRACT_CONTENT];
                                    return { components };
                                }
                            });
                        }}
                    >
                        <div className="w-max h-max flex flex-col gap-2">
                            <div className="flex gap-2">
                                <div className="flex gap-2 flex-col">
                                    <div className={`
                                        w-8 h-8
                                        bg-neutral-500
                                        rounded
                                        ${SHINE_ANIMATION}
                                    `} />
                                    <div className={`
                                        w-8 h-8
                                        bg-neutral-500
                                        rounded
                                        ${SHINE_ANIMATION}
                                    `} />
                                </div>
                                <div>
                                    <div className={`
                                        w-8 h-full
                                        bg-neutral-500
                                        rounded
                                        ${SHINE_ANIMATION}
                                    `} />
                                </div>
                            </div>
                            <div className={`
                                w-full h-8
                                bg-neutral-500
                                rounded
                                ${SHINE_ANIMATION}
                            `} />
                        </div>
                    </ComponentCard>
                </div>
            </section>
            <pre>
                <code className='language-js'>
                    {`${JSON.stringify(exampleJson, null, 4)}`}
                </code>
            </pre>
        </>
    )
}

export default ContentJSON