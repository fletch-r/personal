import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <nav className='flex items-stretch z-50 relative border-b p-4 mb-14 md:mb-18 border-oxford-main'>
                <div className="max-w-[1200px] mx-auto flex justify-between items-center w-full md:p-0">
                    <a href='/'>
                        <div className='flex group transition-all'>
                            <h4 className='text-base font-cals bg-steal-main z-10'>Andrew</h4>
                            <HomeRoundedIcon className="absolute translate-x-0 transition-all ease-in-out duration-300 group-hover:translate-x-16 group-hover:transition-all" />
                        </div>
                    </a>
                    <ol className='flex gap-6 md:gap-20 items-center'>
                        <a href='/about'>
                            <li className="hover:bg-steal-300 px-2 py-1 transition-all rounded hover:bg-opacity-20">
                                <h5 className='text-sm'>About</h5>
                            </li>
                        </a>
                        <a href='/projects'>
                            <li className="hover:bg-steal-300 px-2 py-1 transition-all rounded hover:bg-opacity-20 flex justify-center items-center">
                                <h5 className='text-sm'>Projects</h5>
                            </li>
                        </a>
                        <a href='/cv'>
                            <li className="hover:bg-steal-300 px-2 py-1 transition-all rounded hover:bg-opacity-20 flex justify-center items-center">
                                <h5 className='text-sm'>CV</h5>
                            </li>
                        </a>
                        <a href='https://github.com/0xATHERIS' target='_blank' rel="noreferrer">
                            <li className="hover:bg-steal-300 rounded-full px-1 py-1 transition-all hover:bg-opacity-20 flex justify-center items-center">
                                <GitHubIcon className="w-1/2" />
                            </li>
                        </a>
                    </ol>
                </div>
            </nav>
            <main className='h-full min-h-screen max-w-[1000px] mx-auto px-4 md:p-0'>
                <Outlet />
            </main>
            <footer className='max-w-[1000px] mx-auto border-t border-oxford-main px-4 py-4 flex justify-between items-center mt-12'>
                <p className="text-neutral-500">Andrew Fletcher © {new Date().getFullYear()}</p>
                <div className='flex gap-8'>
                    <a href="https://www.twitter.com/httpfleck" target='_blank' rel="noreferrer" className="hover:bg-steal-300 rounded-full px-2 py-2 transition-all hover:bg-opacity-20 flex justify-center items-center">
                        <TwitterIcon />
                    </a>
                    <a href="https://uk.linkedin.com/in/andrew-fletcher-3009" target='_blank' rel="noreferrer" className="hover:bg-steal-300 rounded-full px-2 py-2 transition-all hover:bg-opacity-20 flex justify-center items-center">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/0xATHERIS" target='_blank' rel="noreferrer" className="hover:bg-steal-300 rounded-full px-2 py-2 transition-all hover:bg-opacity-20 flex justify-center items-center">
                        <GitHubIcon />
                    </a>
                </div>
            </footer>
        </>
    )
}

export default Layout