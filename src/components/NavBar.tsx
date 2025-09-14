import { NavLink } from 'react-router-dom';
import Button from './Button';
import { HashLink } from 'react-router-hash-link'

function NavBar() {
  return (
    <header className="fixed z-100 top-0 w-full pt-0 bg-background border-b-1 border-barline">
      <nav className="flex max-w-screen-3xl px-5 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-2 sm:py-4">
        <div className='flex items-center'>
          <div className='cursor-pointer'>
            <NavLink className='text-neutral-300 sm:text-2xl text-xl font-major-mono font-bold' to="/">
              Allen Jamison
            </NavLink>
          </div>
        </div>
        <ul className='hidden lg:flex text-md justify-self-center align-middle items-center'>
          <li>
            <HashLink
              to="/#"
              smooth
              className="px-8 py-2 nav-item text-neutral-300"
            >
              Home
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#about"
              smooth
              className="px-8 py-2 nav-item text-neutral-300"
            >
              About Me
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#projects"
              smooth
              className="px-8 py-2 nav-item text-neutral-300"
            >
              Projects
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#contact"
              smooth
              className="px-8 py-2 nav-item text-neutral-300"
            >
              Contact
            </HashLink>
          </li>
        </ul>
        <div className='justify-self-end'>
          <Button label="Resume" variant='primary' />
        </div>
      </nav>
    </header>
  )
}

export default NavBar