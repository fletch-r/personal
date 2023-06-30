import React from 'react'
import "prismjs/themes/prism-tomorrow.css";

import ContentEditorHomepage from '../../assets/content-editor/ContentEditorHomepage.jpg';
import CEPageEditor from '../../assets/content-editor/CEPageEditor.jpg';
import CEPageEditorOpen from '../../assets/content-editor/CEPageEditorOpen.jpg';
import SchedulingPage from '../../assets/content-editor/SchedulingPage.jpg';
import ContentJSON from './ContentJSON';
import TechStack from './TechStack';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import useExpandImage from '../../hooks/useExpandImage';

function MicroscopeIcon() {
    return (
        <div className="absolute top-4 right-4 rounded-full flex items-center justify-center p-2 opacity-0 transition-opacity peer-hover:opacity-100 bg-[rgba(255,255,255,0.6)]">
            <SearchRoundedIcon className="text-neutral-800" style={{ fontSize: '2rem' }} />
        </div>
    );
}

export default function ContentEditor() {
    const [clicked, setClicked] = React.useState('');
    const [homepageRef, HomepageExpandedImage] = useExpandImage(clicked === 'ContentEditorHomepage', 1.4);
    const [pageEditorRef, PageEditorExpandedImage] = useExpandImage(clicked === 'CEPageEditor', 2.2);
    const [pageEditorOpenRef, PageEditorOpenExpandedImage] = useExpandImage(clicked === 'CEPageEditorOpen', 2.2);
    const [schedulePageRef, SchedulePageExpandedImage] = useExpandImage(clicked === 'SchedulePage', 1.5);

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

            <figure className="mx-auto relative">
                {clicked === 'ContentEditorHomepage' && <HomepageExpandedImage />}
                <img
                    ref={homepageRef}
                    src={ContentEditorHomepage}
                    alt="Content Editor Home"
                    className={`rounded shadow-md peer cursor-pointer hover:scale-105 transition-transform ${clicked === 'ContentEditorHomepage' ? 'opacity-0' : ''}`}
                    onClick={() => setClicked('ContentEditorHomepage')}
                />
                <MicroscopeIcon />
                <figcaption>
                    Home page of the Content Editor
                </figcaption>
            </figure>

            <h2>Tech Stack:</h2>
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
                We used ExpressJS as our API framework as it&apos;s a minimal framework that provides everything we need to
                quickly and easily build an API that connects to MongoDB and provides data to the frontend.
            </p>

            <h3>Vuejs</h3>
            <p>We used Vuejs as our frontend framework.</p>

            <h3>Nodejs</h3>
            <p>We used Nodejs as our backend framework. As frontend developers a framework built on JavaScript was comfortable and easy to integrate into the team.</p>

            {/* TODO: Change the name of this header */}
            <h2>Work Flow - E2E</h2>

            <h3>Dashboard</h3>
            <p>
                After logging in the user will be greeted with the Dashboard.
                This is the place to selected your platform and which fascia and country you want to edit a page for.
                Once the user has selected a fascia and country the options showing will change the that sites (fascia + country) webpages.
                From there you have 4 options.
                <ul>
                    <li>
                        <p><strong>Edit</strong></p>
                        <p>This will navigate you to the Page Editor where the user can make modifications to the webpage.</p>
                    </li>
                    <li>
                        <p><strong>View</strong></p>
                        <p>The user can view the webpage in the browser to see what the webpage would look like on the live site.</p>
                    </li>
                    <li>
                        <p><strong>Schedule</strong></p>
                        <p>
                            Once clicked a modal will appear where the user can select a date from a calender component and a time.
                            The webpage will then automatically be synced to live when it is that date and time.
                        </p>
                    </li>
                    <li>
                        <p><strong>Sync</strong></p>
                        <p>This will sync the page to the live site.</p>
                    </li>
                </ul>
            </p>

            <h3>Page Editor</h3>
            <p>The Page Editor is split into 2 sections.</p>
            <ul>
                <li>
                    Left - The Sidebar.
                </li>
                <li>
                    Right - The Page Preview.
                </li>
            </ul>
            <p>
                Here the user can pick from a library of prebuilt components.
            </p>
            <p>
                Once the user has selected a component and added it onto the webpage.
                The user will see the default component on the right, how it would appear on the website and the components editable options and their default values on the left.
            </p>
            <p>
                The sidebar works by looping over the content object and populating the sidebar with fields. The labels to those fields are the <code>key</code> and then there
                are different fields depending on the type of the <code>value</code>. For example, if the type of the value is <code>string</code> then a simple input text field
                will be rendered. Where as, if the value is an <code>Array</code> then each object of the array would be rendered and also a button. That button would then allow
                the user to add another object to the array. This is usually used for things like CTAs.
            </p>

            <div className="flex items-center gap-8 relative">
                <figure className="w-[700px] h-auto relative">
                    {clicked === 'CEPageEditor' && <PageEditorExpandedImage />}
                    <img
                        ref={pageEditorRef}
                        src={CEPageEditor}
                        alt="Content Editor Page Editor"
                        className={`rounded shadow-md z-50 hover:scale-105 transition-transform cursor-pointer peer ${clicked === 'CEPageEditor' ? 'opacity-0' : ''}`}
                        onClick={() => setClicked('CEPageEditor')}
                    />
                    <MicroscopeIcon />
                    <figcaption>
                        Page Editor
                    </figcaption>
                </figure>
                <figure className="w-[700px] h-auto relative">
                    {clicked === 'CEPageEditorOpen' && <PageEditorOpenExpandedImage />}
                    <img
                        ref={pageEditorOpenRef}
                        src={CEPageEditorOpen}
                        alt="Content Editor Page Editor Fields"
                        className={`rounded shadow-md z-50 hover:scale-105 transition-transform cursor-pointer peer ${clicked === 'CEPageEditorOpen' ? 'opacity-0' : ''}`}
                        onClick={() => setClicked('CEPageEditorOpen')}
                    />
                    <MicroscopeIcon />
                    <figcaption>
                        Component Fields
                    </figcaption>
                </figure>
            </div>

            <h3>Saving</h3>
            <p>
                Saving the page will save a document into Mongo containing the data object of each component and other details such as user email and save message.
            </p>

            <h3>After editing a page</h3>
            <p>
                From here the user can then view the currently saved page. Schedule the page to go live at a future specific date. Or directly sync that page to appear on the live website.
            </p>

            <figure className="relative">
                {clicked === 'SchedulePage' && <SchedulePageExpandedImage />}
                <img
                    ref={schedulePageRef}
                    src={SchedulingPage}
                    alt="Schedule Page"
                    className={`rounded shadow-md z-50 hover:scale-105 transition-transform cursor-pointer peer ${clicked === 'SchedulePage' ? 'opacity-0' : ''}`}
                    onClick={() => setClicked('SchedulePage')}
                />
                <MicroscopeIcon />
                <figcaption>
                    Scheduling a page.
                </figcaption>
            </figure>

            {clicked.length > 0 && <div className="w-screen h-screen bg-[rgba(0,0,0,0.4)] fixed top-0 left-0 z-40" onClick={() => setClicked('')} />}
        </article>
    )
}