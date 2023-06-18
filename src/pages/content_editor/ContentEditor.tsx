import React from 'react'
import "prismjs/themes/prism-tomorrow.css";

import placeholder_img from '../../assets/placeholder.png';
import VueLogo from '../../assets/vue-logo.png';
import MongoDBLogo from '../../assets/mongodb_logo.webp';
import ExpressLogo from '../../assets/expressjs.png';
import NodeLogo from '../../assets/nodejs.png';
import ContentJSON from './ContentJSON';

function ContentEditor() {
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
                    <p>
                        Click the Components to see what the page JSON would look like when it is generated from the page builder.
                    </p>
                    <ContentJSON />
                </li>
            </ul>

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
