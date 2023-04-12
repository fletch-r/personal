import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Outlet } from 'react-router-dom';

function Layout() {
    // const [projectsHovered, setProjectsHovered] = useState(false);
  return (
    <>
      <nav className='bg-steal-950 h-[50px] flex items-stretch z-50 relative border-b border-oxford-main mb-20'>
        <div className="max-w-[1100px] mx-auto flex justify-between items-center w-full">
            <a href='/'>
                <h4 className='text-white text-xl font-cals'>Andrew</h4>
            </a>
            <ol className='flex gap-20 h-2/3 pt-1'>
                <a href='/about'>
                    <li>
                        <h5 className='text-white font-inter'>About</h5>
                    </li>
                </a>
                <a href='/projects'>
                    <li>
                        <h5 className='text-white font-inter'>Projects</h5>
                    </li>
                </a>
                <a href='/cv'>
                    <li>
                        <h5 className='text-white font-inter'>CV</h5>
                    </li>
                </a>
                <a href='https://github.com/0xATHERIS' target='_blank' className='text-white'>
                    <li>
                        <GitHubIcon />
                    </li>
                </a>
            </ol>
        </div>
      </nav>
      {/* <div className={`z-20 h-[200px] bg-black shadow absolute transition-all hover:top-[100px] left-0 w-full ${projectsHovered ? 'top-[100px]' : '-top-[100%]'}`}>
        <p className='text-white'>This is where the projects are going to be</p>
      </div> */}
      <main>
        <Outlet />
      </main>
      <footer className='max-w-[1100px] mx-auto border-t border-oxford-main p-4 mt-40 flex justify-between'>
        <p className="text-steal-400">Andrew Fletcher © 2023</p>
        <div className='flex gap-8'>
            <a href="https://www.twitter.com/httpfleck">
                <TwitterIcon />
            </a>
            <a href="https://uk.linkedin.com/in/andrew-fletcher-3009">
                <LinkedInIcon />
            </a>
            <a href="https://github.com/0xATHERIS">
                <GitHubIcon />
            </a>
        </div>
      </footer>
    </>
  )
}

export default Layout