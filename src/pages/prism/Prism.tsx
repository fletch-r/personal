import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import TechStack from './TechStack'
import PrismLogo from '../../assets/prism/PrismLogo.png'
import useExpandImage from '../../hooks/useExpandImage';
import ProductWizard from '../../assets/prism/ProductWizard.jpg';
import ProductWizardStep2 from '../../assets/prism/ProductWizardStep2.jpg';

function MicroscopeIcon() {
    return (
        <div className="absolute top-4 right-4 rounded-full flex items-center justify-center p-2 opacity-0 transition-opacity peer-hover:opacity-100 bg-[rgba(255,255,255,0.6)]">
            <SearchRoundedIcon className="text-neutral-800" style={{ fontSize: '2rem' }} />
        </div>
    );
}

export default function Prism() {
    const [clickedImage, setClickedImage] = React.useState('');

    const [wizardRef, WizardExpandedImage] = useExpandImage(clickedImage === 'wizard');
    const [wizardStep2Ref, WizardStep2ExpandedImage] = useExpandImage(clickedImage === 'step2');

    return (
        <article className='prose prose-invert mx-auto max-w-none'>
            {/* <h1 className="font-cals tracking-wider leading-none">Details Coming Soon</h1> */}
            <div className="flex items-center justify-start gap-4 ">
                <img src={PrismLogo} alt='prism logo' width={40} height="auto" className='' />
                <h1 className="font-cals tracking-wider leading-none my-auto">PRISM</h1>
            </div>

            <p className="lead">
                {/* A Product Information Manager (PIM) allowing users to on-board products, view, generate reports and manage product data. */}
                A Product Information Manager (PIM) that helps JD Group to manage their product data in a single location.
            </p>

            <p>
                I came up with the name PRISM by taking the letters from the name PRoduct Information SysteM.
            </p>

            <h2>Tech Stack:</h2>
            <div className="not-prose">
                <TechStack />
            </div>

            <h3>MUI:</h3>
            <p>
                I chose MaterialUI, now MUI, for our Component Library as it is a production ready allowing us to integrate it quickly into the application.
            </p>
            <p>
                The component library MUI has an extensive amount of components that is able to take data and display it in a user friendly format.
                MUI has virtualization built into some components, reducing load times for the user.
            </p>

            <h3>Tailwindcss:</h3>
            <p>
                I chose Tailwindcss as it enables us to standardize our colors, spacing, font sizes, etc.
            </p>

            <h3>Redux:</h3>
            <p>
                Redux was chosen as it is the industry standard state manager giving us the flexibility so when new developers are brought onto the project
                they can either jump right in or there will be less of a learning curve.
            </p>

            <h2>About:</h2>

            <p>
                Developed using DDD, Data Driven Development.
            </p>

            <p>
                PRISM allows the business to organize and enrich the product information.
            </p>

            <ul>
                <li>
                    <p><strong>Importing</strong></p>
                    <p>
                        User can import data from a various sources, including suppliers, manufacturers and internal systems.
                    </p>
                </li>
                <li>
                    <p><strong>Transform</strong></p>
                    <p>
                        Transform data into a standardized format to be shared across all channels.
                    </p>
                </li>
            </ul>

            <h3>Product Wizard:</h3>
            <p>The product wizard is a page where users can on-board products.</p>
            <figure className="mx-auto relative">
                {clickedImage === 'wizard' && <WizardExpandedImage />}
                <img
                    ref={wizardRef}
                    src={ProductWizard}
                    alt="Product Wizard"
                    className={`rounded shadow-md peer cursor-pointer transition-[box-shadow] hover:shadow-2xl hover:shadow-blue-900 ${clickedImage === 'wizard' ? 'opacity-0' : ''}`}
                    onClick={() => setClickedImage('wizard')}
                />
                <MicroscopeIcon />
                <figcaption>
                    Product Wizard
                </figcaption>
            </figure>
            <figure className="mx-auto relative">
                {clickedImage === 'step2' && <WizardStep2ExpandedImage />}
                <img
                    ref={wizardStep2Ref}
                    src={ProductWizardStep2}
                    alt="Product Wizard Data Page"
                    className={`rounded shadow-md peer cursor-pointer transition-[box-shadow] hover:shadow-2xl hover:shadow-blue-900 ${clickedImage === 'step2' ? 'opacity-0' : ''}`}
                    onClick={() => setClickedImage('step2')}
                />
                <MicroscopeIcon />
                <figcaption>
                    Product Wizard Data Page
                </figcaption>
            </figure>

            {clickedImage.length > 0 && <div className="w-screen h-screen bg-[rgba(0,0,0,0.4)] fixed top-0 left-0 z-40" onClick={() => setClickedImage('')} />}
        </article>
    )
}