import GitHubIcon from '@mui/icons-material/GitHub';
import { Outlet } from 'react-router-dom';

function Layout() {
    // const [projectsHovered, setProjectsHovered] = useState(false);
  return (
    <>
      <nav className='bg-steal-950 h-[50px] flex items-stretch z-50 relative border-b border-oxford-main mb-20'>
        <div className="max-w-[1100px] mx-auto flex justify-between items-center w-full">
            <h4 className='text-white text-xl font-cals'>Andrew</h4>
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
      <footer></footer>
    </>
  )
}

export default Layout