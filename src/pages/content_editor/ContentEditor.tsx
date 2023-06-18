import React from 'react'
import "prismjs/themes/prism-tomorrow.css";

import placeholder_img from '../../assets/placeholder.png';
import ContentJSON from './ContentJSON';
import TechStack from './TechStack';

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

            <figure className="w-[700px] h-[475px] mx-auto">
                <img src={placeholder_img} alt="Content Editor Home" className="rounded shadow-md" />
                <figcaption>
                    Home page of the Content Editor
                </figcaption>
            </figure>

            <h2>Technologies Used</h2>
            <div className="not-prose">
                <TechStack />
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
                    <p>
                        The SSR and the CMS will look at this JSON and know what component needs adding to the Vue file and from
                        the content what the desktop and mobile images, button text and links will say.
                    </p>
                </li>
            </ul>

            <h3>Expressjs</h3>
            <p>
                We used ExpressJS as our API framework as it is a minimal framework that was just everything we needed to connect the frontend to MongoDB.
                The main reason we chose this is because it&apos;s quick and easy to set up with no bloat.
            </p>

            <h3>Vuejs</h3>
            <p>We used Vuejs as our frontend framework.</p>

            <h3>Nodejs</h3>
            <p>We used Nodejs as our backend framework.</p>

            <h2>How a user edits content</h2>
            <p>
                In the CMS, to edit the component the editable values are in the sidebar. It will loop over the components content and if it is an Array,
                it will render a button on that field, in the sidebar, which allows the user to add more of that content. For example, there are usually one
                or more buttons/CTAs, so in the sidebar we use the <code>key</code> from the JSON to render the label of the field in the sidebar and the
                <code>value</code> of the CTAs would be an Array, so the CTAs section will have a button that says &quot;+ Add&quot;, when add is clicked the
                default value for a CTA will be pushed into the CTAs array. Adding another button on to that component.
            </p>
        </article>
    )
}

export default ContentEditor
