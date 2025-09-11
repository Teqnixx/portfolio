import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <header className="fixed z-100 top-0 w-full pt-0 bg-background outline-1 outline-barline">
      <nav className="flex max-w-screen-3xl px-5 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-6">
        <div className='flex items-center'>
          <div className='cursor-pointer'>
            <NavLink className='text-neutral-300 text-2xl font-medium' to="/">
              Allen Jamison
            </NavLink>
          </div>
        </div>
        <ul className='hidden lg:flex text-lg justify-self-center align-middle items-center'>
          <li>
            <NavLink className={({ isActive }) =>
              isActive ? 'px-8 py-2 nav-item text-white active' : 'px-8 py-2 nav-item text-neutral-300'}
              to="/">
                Home
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
              isActive ? 'px-8 py-2 nav-item text-white active' : 'px-8 py-2 nav-item text-neutral-300'}
              to="/about">
                About Me
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
              isActive ? 'px-8 py-2 nav-item text-white active' : 'px-8 py-2 nav-item text-neutral-300'}
              to="/projects">
                Projects
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
              isActive ? 'px-8 py-2 nav-item text-white active' : 'px-8 py-2 nav-item text-neutral-300'}
              to="/contact">
                Contact
            </NavLink>
          </li>
        </ul>
        <div className='justify-self-end'>
          <button className='cursor-pointer hover:bg-primary-hover bg-primary text-center px-10 py-3 rounded-full text-white'>
            Resume
          </button>
        </div>
      </nav>
    </header>
  )
}

export default NavBar