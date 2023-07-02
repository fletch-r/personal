import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Outlet } from 'react-router-dom';
import va from '@vercel/analytics';

import Tooltip from '../components/Tooltip';

function Layout() {
    return (
        <>
            <nav className='flex items-stretch z-20 border-b p-4 mb-14 md:mb-18 border-oxford-main sticky top-0 left-0 bg-steal-950'>
                <div className="max-w-[1200px] mx-auto flex justify-between items-center w-full md:p-0">
                    <a href='/'>
                        <div className='flex group transition-all'>
                            <h4 className='text-base font-cals bg-steal-main z-10'>Andrew</h4>
                            <HomeRoundedIcon className="absolute translate-x-0 transition-all ease-in-out duration-300 group-hover:translate-x-16 group-hover:transition-all" />
                        </div>
                    </a>
                    <ol className='flex gap-6 md:gap-20 items-center'>
                        <a href='/about' onClick={() => va.track('About', { location: 'navbar' })}>
                            <li className="hover:bg-steal-300 px-2 py-1 transition-all rounded hover:bg-opacity-20">
                                <h5 className='text-sm'>About</h5>
                            </li>
                        </a>
                        <a href="/src/assets/AndrewFletcher_CV_website.pdf" download="AndrewFletcherCV" onClick={() => va.track('CV', { location: 'navbar' })}>
                            <li className="hover:bg-steal-300 px-2 py-1 transition-all rounded hover:bg-opacity-20 flex justify-center items-center">
                                <Tooltip label="Click To Download">
                                    <h5 className='text-sm'>CV</h5>
                                </Tooltip>
                            </li>
                        </a>
                        <a href='https://github.com/fletch-r' target='_blank' rel="noreferrer" onClick={() => va.track('GitHub', { location: 'navbar' })}>
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
            <div className="mt-12">
                <div className="h-px content-none w-full md:w-3/5 mx-auto bg-gradient-to-r from-transparent via-neutral-600 to-transparent" />
                <footer className='max-w-[1000px] mx-auto border-oxford-main px-4 py-4 flex justify-between items-center'>
                    <p className="text-neutral-500">Andrew Fletcher <span className="hidden md:inline-block">- {new Date().getFullYear()}</span></p>
                    <div className='flex gap-4 md:gap-8'>
                        <a
                            href="https://www.twitter.com/httpfleck"
                            target='_blank'
                            rel="noreferrer"
                            className="hover:bg-steal-300 rounded-full px-2 py-2 transition-all hover:bg-opacity-20 flex justify-center items-center"
                            onClick={() => va.track('Twitter', { location: 'footer' })}
                        >
                            <TwitterIcon />
                        </a>
                        <a
                            href="https://uk.linkedin.com/in/andrew-fletcher-3009"
                            target='_blank'
                            rel="noreferrer"
                            className="hover:bg-steal-300 rounded-full px-2 py-2 transition-all hover:bg-opacity-20 flex justify-center items-center"
                            onClick={() => va.track('LinkedIn', { location: 'footer' })}
                        >
                            <LinkedInIcon />
                        </a>
                        <a
                            href="https://github.com/fletch-r"
                            target='_blank'
                            rel="noreferrer"
                            className="hover:bg-steal-300 rounded-full px-2 py-2 transition-all hover:bg-opacity-20 flex justify-center items-center"
                            onClick={() => va.track('GitHub', { location: 'footer' })}
                        >
                            <GitHubIcon />
                        </a>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Layout