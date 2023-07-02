import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import TechStack from './TechStack'
import PrismLogo from '../../assets/prism/PrismLogo.png'
import useExpandImage from '../../hooks/useExpandImage';
import ProductWizard from '../../assets/prism/ProductWizard.jpg';
import ProductWizardStep2 from '../../assets/prism/ProductWizardStep2.jpg';
import ProductsTable from '../../assets/prism/ProductsTable.jpg';
import ProductsPage from '../../assets/prism/ProductPage.jpg';

function MicroscopeIcon() {
    return (
        <div className="absolute top-4 right-4 rounded-full flex items-center justify-center p-2 opacity-0 transition-opacity peer-hover:opacity-100 bg-[rgba(255,255,255,0.6)]">
            <SearchRoundedIcon className="text-neutral-800" style={{ fontSize: '2rem' }} />
        </div>
    );
}

export default function Prism() {
    const [clickedImage, setClickedImage] = React.useState('');

    const [wizardRef, WizardExpandedImage] = useExpandImage(clickedImage === 'wizard', 2.2);
    const [wizardStep2Ref, WizardStep2ExpandedImage] = useExpandImage(clickedImage === 'step2', 2.2);
    const [productsTableRef, ProductsTableExpandedImage] = useExpandImage(clickedImage === 'productsTable', 2.2);
    const [productPageRef, ProductPageExpandedImage] = useExpandImage(clickedImage === 'productsPage', 2.2);

    return (
        <article className='prose prose-invert mx-auto max-w-none'>
            {/* <h1 className="font-cals tracking-wider leading-none">Details Coming Soon</h1> */}
            <div className="flex items-center justify-start gap-4 ">
                <img src={PrismLogo} alt='prism logo' width={40} height="auto" className='' />
                <h1 className="font-cals tracking-wider leading-none my-auto">PRISM</h1>
            </div>

            <p className="lead">
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
                I chose MaterialUI, now MUI, for our component library as it is production ready allowing us to integrate it quickly into the application.
            </p>
            <p>
                The component library MUI has an extensive amount of components that is able to take data and display it in a user friendly format.
                The use of virtualization within MUI&apos;s means the components can handle thousands of data without slowing down the users client.
            </p>
            <p>
                For these reasons MUI was the ideal component library for PRISM.
            </p>

            <h3>Tailwindcss:</h3>
            <p>
                I chose Tailwindcss as it enables us to standardize our colors, spacing, font sizes, etc.
            </p>

            <h3>Redux:</h3>
            <p>
                Redux was chosen as it is the industry standard state manager.
            </p>
            <p>
                It gives us the flexibility of easily sharing state between all components and, as the industry standard, when new developers are brought onto the project
                they can either jump right in or there will be less of a learning curve.
            </p>

            <h2>About:</h2>

            <p className="lead">
                PRISM is developed using DDD, Data Driven Development.
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

            <div className="flex items-center gap-8 relative">
                <figure className="mx-auto relative">
                    {clickedImage === 'wizard' && <WizardExpandedImage />}
                    <img
                        ref={wizardRef}
                        src={ProductWizard}
                        alt="Product Wizard"
                        className={`rounded peer cursor-pointer hover:scale-105 transition-all shadow-md hover:shadow-[0_0_20px_6px_#20355a] ${clickedImage === 'wizard' ? 'opacity-0' : ''}`}
                        onClick={() => setClickedImage('wizard')}
                    />
                    <MicroscopeIcon />
                    <figcaption>
                        Product Wizard - (click to zoom)
                    </figcaption>
                </figure>
                <figure className="mx-auto relative">
                    {clickedImage === 'step2' && <WizardStep2ExpandedImage />}
                    <img
                        ref={wizardStep2Ref}
                        src={ProductWizardStep2}
                        alt="Product Wizard Data Page"
                        className={`rounded shadow-md peer cursor-pointer hover:scale-105 transition-all hover:shadow-[0_0_20px_6px_#20355a] ${clickedImage === 'step2' ? 'opacity-0' : ''}`}
                        onClick={() => setClickedImage('step2')}
                    />
                    <MicroscopeIcon />
                    <figcaption>
                        Product Wizard Data Page - (click to zoom)
                    </figcaption>
                </figure>
            </div>

            <p>
                The Product Wizard was a solutions to the on-boarding problem JDSports had. Before products would be separated across different PIM&apos;s and platforms and then shared.
            </p>
            <p>
                We fixed this by being able to import products from other platforms and then continue/finish the product on-boarding within the Product Wizard so the product would have
                all the information we need to push this product on-site. Then once the product was on-boarded we could then distribute that products data to other applications which are not
                in the JDGroup ecosystem.
            </p>

            <h3>Existing Products:</h3>
            <p>Here you can search for specific kinds of products and edit a products data.</p>

            <div className="flex items-center gap-8 relative">
                <figure className="mx-auto relative">
                    {clickedImage === 'productsTable' && <ProductsTableExpandedImage />}
                    <img
                        ref={productsTableRef}
                        src={ProductsTable}
                        alt="Products Table"
                        className={`rounded peer cursor-pointer hover:scale-105 transition-all shadow-md hover:shadow-[0_0_20px_6px_#20355a] ${clickedImage === 'productsTable' ? 'opacity-0' : ''}`}
                        onClick={() => setClickedImage('productsTable')}
                    />
                    <MicroscopeIcon />
                    <figcaption>
                        Products Table - (click to zoom)
                    </figcaption>
                </figure>
                <figure className="mx-auto relative">
                    {clickedImage === 'productsPage' && <ProductPageExpandedImage />}
                    <img
                        ref={productPageRef}
                        src={ProductsPage}
                        alt="Product Page"
                        className={`rounded shadow-md peer cursor-pointer hover:scale-105 transition-all hover:shadow-[0_0_20px_6px_#20355a] ${clickedImage === 'productsPage' ? 'opacity-0' : ''}`}
                        onClick={() => setClickedImage('productsPage')}
                    />
                    <MicroscopeIcon />
                    <figcaption>
                        Product Page - (click to zoom)
                    </figcaption>
                </figure>
            </div>

            <p>
                After on-boarding there might be some attributes or details left unfinished. The product page is where the user can search for that or any product in general and complete the product.
            </p>

            <p>
                PRISM has a range of pages such as generating reports for stakeholders or anyone who needs detailed metrics.
            </p>

            {clickedImage.length > 0 && <div className="w-screen h-screen bg-[rgba(0,0,0,0.4)] fixed top-0 left-0 z-40" onClick={() => setClickedImage('')} />}
        </article>
    )
}