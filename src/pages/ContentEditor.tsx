import React from 'react'
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

import placeholder_img from '../assets/placeholder.png';
import VueLogo from '../assets/vue-logo.png';
import MongoDBLogo from '../assets/mongodb_logo.webp';
import ExpressLogo from '../assets/expressjs.png';
import NodeLogo from '../assets/nodejs.png';
import ComponentCard from '../components/ComponentCard';

const MAINBANNER_CONTENT = {
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
};

const SPOT_CONTENT = {
    "component": "SpotList",
    "content": {
        "spots": [
            {
                "images": {
                    "desktop": {
                        "src": "",
                        "aspect-ratio": "1:1"
                    },
                    "mobile": {
                        "src": "",
                        "aspect-ratio": "1:1"
                    }
                },
                "ctas": [
                    {
                        "text": "Mens",
                        "url": "/mens"
                    }
                ]
            },
            {
                "images": {
                    "desktop": {
                        "src": "",
                        "aspect-ratio": "1:1"
                    },
                    "mobile": {
                        "src": "",
                        "aspect-ratio": "1:1"
                    }
                },
                "ctas": [
                    {
                        "text": "Women's",
                        "url": "/women's"
                    }
                ]
            },
            {
                "images": {
                    "desktop": {
                        "src": "",
                        "aspect-ratio": "1:1"
                    },
                    "mobile": {
                        "src": "",
                        "aspect-ratio": "1:1"
                    }
                },
                "ctas": [
                    {
                        "text": "Children's",
                        "url": "/Children's"
                    }
                ]
            },
        ]
    }
};

function ContentEditor() {
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

    return (
        <article className='prose prose-invert mx-auto max-w-none'>
            <h1 className="font-cals tracking-wider leading-none">Content Editor</h1>

            <p className="lead">
                A CMS where users can build and change the content of pages.
            </p>

            <p>
                The Content Editor was the first project I was assigned to when joining JDSports.
            </p>
            <p>
                It is a internal CMS myself and another developer built from the ground up.
                Then once the application was released to the first users more developers were brought onto the project.
            </p>

            <figure className="w-2/3 mx-auto">
                <img src={placeholder_img} alt="Content Editor Home" className="rounded shadow-md" />
                <figcaption>
                    Home page of the Content Editor
                </figcaption>
            </figure>

            <h2>Technologies Used</h2>
            <div className="not-prose">
                <div className="flex w-full justify-evenly gap-8">
                    <div className="rounded-full bg-oxford-950 border border-oxford-900 p-4 flex justify-center items-center" >
                        <img src={MongoDBLogo} alt="MongoDB" className="w-16 h-16" loading="lazy" />
                    </div>
                    <div className="rounded-full bg-oxford-950 border border-oxford-900 p-4 flex justify-center items-center" >
                        <img src={ExpressLogo} alt="express" className="w-16 h-16" loading="lazy" />
                    </div>
                    <div className="rounded-full bg-oxford-950 border border-oxford-900 p-4 flex justify-center items-center" >
                        <img src={VueLogo} alt="vuejs" className="w-16 mt-2" loading="lazy" />
                    </div>
                    <div className="rounded-full bg-oxford-950 border border-oxford-900 p-4 flex justify-center items-center" >
                        <img src={NodeLogo} alt="nodejs" className="w-16 h-16" loading="lazy" />
                    </div>
                </div>
            </div>

            <h3>MongoDB</h3>
            <p>We use MongoDB as our database.</p>
            <h4>Architecture</h4>
            <ul>
                <li>
                    <p><strong>Collections:</strong></p>
                    <p>
                        We structure our data so that each collection represents a webpage.
                        For example, the homepage data is within the home collection.
                    </p>
                </li>
                <li>
                    <p><strong>Documents:</strong></p>
                    <p>Each document represents a version of that webpage.</p>
                    <p>
                        This allows for page versioning, giving us the ability to track a few metrics
                        such as version author, date and time the version was made or went onto live site.
                    </p>
                    <p>
                        The main benefit of having a document for a page version is so we can quickly
                        revert webpages within a click of a button if a page was put live too early or contained a mistake.
                        The document after the currently live one which also has the status of live will have its UpdatedDate
                        set to the current time as the JDSports website displays the most recently updated document with status of live.
                    </p>
                    <p>
                        The documents are read by our Server Side Renderer. The SSR takes the document and mainly looks at the content when rendering the page.
                        The content is an array that contains the components used to build the webpage.
                        From the component name it will know what component to
                    </p>
                    <h4>Example</h4>
                    <p>Click the Components to see what the page JSON would look like when it is generated from the page builder.</p>
                    <section className="not-prose">
                        <div className="w-full flex items-center justify-evenly">
                            <ComponentCard
                                label='MainBanner'
                                selected={selectedComponents.includes('MainBanner')}
                                onClick={() => setSelectedComponents((prev) => {
                                    if (prev.includes('MainBanner')) {
                                        return prev.filter((str) => str !== 'MainBanner');
                                    } else {
                                        return [...prev, 'MainBanner'];
                                    }
                                })}
                            >
                                <div className="w-3/4 h-2/3 bg-neutral-500 rounded" />
                            </ComponentCard>
                            <ComponentCard
                                label='SpotList'
                                selected={selectedComponents.includes('SpotList')}
                                onClick={() => {
                                    // TODO: Get this working where it adds and removes the object to components
                                    // let newExampleJson = structuredClone(exampleJson);
                                    // setSelectedComponents((prev) => {
                                    //     if (prev.includes('SpotList')) {
                                    //         console.log(newExampleJson.components);
                                    //         newExampleJson = newExampleJson.components.filter((obj: { component: string; }) => obj.component === 'SpotList');
                                    //         return prev.filter((str) => str !== 'SpotList');
                                    //     } else {
                                    //         newExampleJson.components.push(SPOT_CONTENT);
                                    //         return [...prev, 'SpotList'];
                                    //     }
                                    // });
                                    // setExampleJson(newExampleJson);
                                    setSelectedComponents((prev) => {
                                        if (prev.includes('SpotList')) {
                                            return prev.filter((str) => str !== 'SpotList');
                                        } else {
                                            return [...prev, 'SpotList'];
                                        }
                                    });
                                }}
                            >
                                <div className="flex justify-center items-center gap-2 h-full w-full">
                                    <div className="w-1/3 h-1/2 bg-neutral-500 rounded" />
                                    <div className="w-1/3 h-1/2 bg-neutral-500 rounded" />
                                    <div className="w-1/3 h-1/2 bg-neutral-500 rounded" />
                                </div>
                            </ComponentCard>
                            <ComponentCard
                                label='AbstractSection'
                                selected={selectedComponents.includes('AbstractSection')}
                                onClick={() => setSelectedComponents((prev) => {
                                    if (prev.includes('AbstractSection')) {
                                        return prev.filter((str) => str !== 'AbstractSection');
                                    } else {
                                        return [...prev, 'AbstractSection'];
                                    }
                                })}
                            >
                                <div className="w-max h-max flex flex-col gap-2">
                                    <div className="flex gap-2">
                                        <div className="flex gap-2 flex-col">
                                            <div className="w-8 h-8 bg-neutral-500 rounded" />
                                            <div className="w-8 h-8 bg-neutral-500 rounded" />
                                        </div>
                                        <div>
                                            <div className="w-8 h-full bg-neutral-500 rounded" />
                                        </div>
                                    </div>
                                    <div className="w-full h-8 bg-neutral-500 rounded" />
                                </div>
                            </ComponentCard>
                        </div>
                    </section>
                    <pre>
                        <code className='language-js'>
                            {`${JSON.stringify(exampleJson, null, 4)}`}
                        </code>
                    </pre>
                </li>
            </ul>
            {/* <b>Collections:</b>
            <p>
                We structured our data so that each collection represents a webpage.
                For example, the homepage data is within the home collection.
            </p>
            <b>Documents:</b>
            <p>Each document represented a version of that webpage.</p>
            <p>
                This allowed for page versioning, giving us the ability to track a few metrics such as version author, date and time the version was made or went onto live site.
            </p>
            <p>
                The main benefit of having the data structured like this is so we can quickly revert
                webpages in a click of a button if a page was put live too early or it contained a mistake.
            </p> */}

            <h3>Expressjs</h3>
            <p>We used ExpressJS as our API.</p>

            <h3>Vuejs</h3>
            <p>We used Vuejs as our frontend framework.</p>

            <h3>Nodejs</h3>
            <p>We used Nodejs as our backend framework.</p>
        </article>
    )
}

export default ContentEditor
