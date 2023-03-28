import { ReactNode } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

function Layout({ children }: { children?: ReactNode }) {
  return (
    <>
      <nav className='bg-black h-[100px] flex items-stretch'>
        <div className='max-w-[1170px] mx-auto flex justify-between items-end w-full'>
            <div className='flex justify-center items-center h-full'>
                <h4 className='text-white text-xl'>Andrew Fletcher</h4>
            </div>
            <ul className='flex justify-around items-stretch gap-[60px] h-2/3 pt-1'>
                <a href='/projects' className='hover:bg-[#FFDD00] text-white hover:text-black px-4 w-[140px] flex justify-center'>
                    <li>
                        <h5>Projects</h5>
                    </li>
                </a>
                <a href='/cv' className='hover:bg-[#FFDD00] text-white hover:text-black px-4 w-[140px] flex justify-center'>
                    <li>
                        <h5>CV</h5>
                    </li>
                </a>
                <a href='/contact' className='hover:bg-[#FFDD00] text-white hover:text-black px-4 w-[140px] flex justify-center'>
                    <li>
                        <h5>Contact Me</h5>
                    </li>
                </a>
                <a href='https://github.com/0xATHERIS' target='_blank' className='text-white px-4 w-[80px] flex justify-center'>
                    <li>
                        <GitHubIcon />
                    </li>
                </a>
            </ul>
        </div>
      </nav>
      <main>
        {children}
      </main>
      <footer></footer>
    </>
  )
}

export default Layout