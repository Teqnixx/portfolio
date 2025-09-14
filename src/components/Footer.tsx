import { NavLink } from "react-router-dom"
import { Copyright } from "lucide-react"

function Footer() {
  return (
    <section className='border-t-1 border-barline'>
      <div className='max-w-screen-2xl py-6 px-5 sm:px-8 lg:px-16 mx-auto text-white'>
        <div className='block md:flex justify-between'>
          <div>
            <NavLink className='text-neutral-300 sm:text-3xl text-xl font-bold font-major-mono' to="/">
              Allen Jamison
            </NavLink>
          </div>
          <div className='sm:w-full md:max-w-sm lg:max-w-md flex justify-between items-center mt-4 sm:mt-0'>
            <NavLink className='hover:underline decoration-1 w-max' to="/">
              Home
            </NavLink>
            <NavLink className='hover:underline decoration-1 w-max' to="/about">
              About Me
            </NavLink>
            <NavLink className='hover:underline decoration-1 w-max' to="/projects">
              Projects
            </NavLink>
            <NavLink className='hover:underline decoration-1 w-max' to="/contact">
              Contact
            </NavLink>
          </div>
        </div>
        <hr className='my-6 opacity-10' />
        <div className='flex justify-center items-center text-neutral-400'>
          <Copyright size="16px" className='me-2' /> 2025 Allen Jamison Mendoza
        </div>
      </div>
    </section>
  )
}

export default Footer
